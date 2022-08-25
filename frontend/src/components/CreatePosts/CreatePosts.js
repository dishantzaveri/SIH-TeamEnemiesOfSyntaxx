import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Chip, Paper, LinearProgress } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import CreateIcon from "@material-ui/icons/Create";
import { LinkedInBlue, LinkedInLightBlue } from "../../assets/Colors";
import Styles from "./Style";
import swal from "@sweetalert/with-react";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import { imageUploadHandler } from "./Post.utils";
import { usePostPostMutation } from "../../features/feed/postAPISlice";
import axios from "axios";

const CreatePosts = () => {
  const classes = Styles();
  const theme = useTheme();
  const [postPost, { isLoading }] = usePostPostMutation();
  const { token } = useSelector((state) => state.auth);
  const [uploadData, setUploadData] = useState({
    description: "",
    file: null,
  });

  const [progress, setProgress] = useState("");
  const [openURL, setOpenURL] = useState({
    photo: false,
    youtube: false,
  });
  const [URL, setURL] = useState({
    photo: "",
    youtube: "",
  });

  const handleSubmitButton = async () => {
    // verify atleast one of the input fields are not empyt
    if (uploadData.description || uploadData.file || URL.photo || URL.youtube) {
      if (URL.photo !== "" || URL.youtube !== "") {
        if (URL.photo.startsWith("data") || URL.youtube.startsWith("data")) {
          swal(
            "Invalid Image URL",
            "DATA-URL format is not allowed",
            "warning"
          );
          setURL({
            photo: "",
            youtube: "",
          });
        } else if (
          !(URL.photo.startsWith("http") || URL.youtube.startsWith("http"))
        ) {
          swal("Invalid Image URL", "Please enter valid image url", "warning");
          setURL({
            photo: "",
            youtube: "",
          });
        } else {
          try {
            let formData = new FormData();
            console.log(uploadData);
            formData.append("title", "Hello");
            formData.append("body", uploadData?.description);
            formData.append("youtube_link", URL.youtube);
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Token ${token}`);
            myHeaders.append(
              "Cookie",
              "csrftoken=o4q1Ihf3JTBVbPIRuFvCtHZVT3RHp0X8; sessionid=0rx0ut9910ocx5ggaz1l6en6khbzxg1n"
            );

            var requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: formData,
              redirect: "follow",
            };

            fetch(
              "https://vismayvora.pythonanywhere.com/api/posts/",
              requestOptions
            )
              .then((response) => response.text())
              .then((result) => console.log(result))
              .catch((error) => console.log("error", error));

            setUploadData({
              description: "",
              file: null,
            });
          } catch (error) {
            console.log(error);
          }
        }
      } else {
        try {
          let formData = new FormData();
          console.log(uploadData);
          formData.append("title", "Hello");
          formData.append("body", uploadData?.description);
          formData.append(
            "images_post",
            uploadData?.file,
            uploadData?.file?.name
          );
          var myHeaders = new Headers();
          myHeaders.append("Authorization", `Token ${token}`);
          myHeaders.append(
            "Cookie",
            "csrftoken=o4q1Ihf3JTBVbPIRuFvCtHZVT3RHp0X8; sessionid=0rx0ut9910ocx5ggaz1l6en6khbzxg1n"
          );

          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formData,
            redirect: "follow",
          };

          fetch(
            "https://vismayvora.pythonanywhere.com/api/posts/",
            requestOptions
          )
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));

          setUploadData({
            description: "",
            file: null,
          });
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      swal("Empty Post", "Please enter something", "warning");
    }
  };

  const resetState = () => {
    setUploadData({
      description: "",
      file: null,
    });
    setProgress("");
    setOpenURL({
      photo: false,
      youtube: false,
    });
    setURL({
      photo: "",
      youtube: "",
    });
  };

  const toggleURL_Tab = (x) => {
    switch (x) {
      case "photo":
        setOpenURL({
          youtube: false,
          photo: !openURL.photo,
        });
        break;
      case "youtube":
        setOpenURL({
          photo: false,
          youtube: !openURL.youtube,
        });
        break;
      default:
        break;
    }
  };

  const closeURL_Tab = () => {
    setOpenURL({
      photo: false,
      youtube: false,
    });
  };

  return (
    <Paper className={classes.upload}>
      <div className={classes.upload__header}>
        <div className={classes.header__form}>
          <CreateIcon />
          <input
            placeholder="Start a post"
            value={uploadData.description}
            onChange={(e) =>
              setUploadData({ ...uploadData, description: e.target.value })
            }
          />
          <input
            id="upload-image"
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              setUploadData({ ...uploadData, file: e.target.files[0] });
              setOpenURL({
                photo: false,
                youtube: false,
              });
            }}
          />
          <input
            id="upload-video"
            type="file"
            accept="video/*"
            hidden
            onChange={(e) => {
              setUploadData({ ...uploadData, file: e.target.files[0] });
              setOpenURL({
                photo: false,
                youtube: false,
              });
            }}
          />
          <button onClick={() => handleSubmitButton()}>Post</button>
        </div>
      </div>
      {!openURL.photo && !openURL.youtube && !progress && uploadData.file && (
        <div className={classes.selectedFile}>
          <Chip
            color="primary"
            size="small"
            onDelete={resetState}
            icon={<PhotoSizeSelectActualIcon />}
            label={uploadData.file.name}
          />
        </div>
      )}
      {!openURL.photo && !openURL.youtube && progress ? (
        <div className={classes.uploading}>
          <LinearProgress
            variant="determinate"
            value={progress}
            className={classes.progress}
          />
          <p>{progress} %</p>
        </div>
      ) : (
        ""
      )}
      {openURL.photo && (
        <div className={classes.pasteURL_Input}>
          <InsertLinkIcon />
          <input
            placeholder="Paste an image URL"
            value={URL.photo}
            onChange={(e) =>
              setURL((prevState) => ({ ...prevState, photo: e.target.value }))
            }
          />
          {URL.photo !== "" && (
            <HighlightOffIcon
              style={{ color: "orange", fontSize: 16 }}
              onClick={() =>
                setURL((prevState) => ({ ...prevState, photo: "" }))
              }
            />
          )}
        </div>
      )}
      {openURL.youtube && (
        <div className={classes.pasteURL_Input}>
          <InsertLinkIcon />
          <input
            placeholder="Paste an Youtube URL"
            value={URL.youtube}
            onChange={(e) =>
              setURL((prevState) => ({ ...prevState, youtube: e.target.value }))
            }
          />
          {URL.youtube !== "" && (
            <HighlightOffIcon
              style={{ color: "orange", fontSize: 16 }}
              onClick={() =>
                setURL((prevState) => ({ ...prevState, youtube: "" }))
              }
            />
          )}
        </div>
      )}

      <div className={classes.upload__media}>
        <label
          htmlFor={URL.photo === "" ? "upload-image" : ""}
          onClick={closeURL_Tab}
          className={classes.media__options}
        >
          <PhotoSizeSelectActualIcon
            style={{
              color:
                theme.palette.type === "dark"
                  ? LinkedInLightBlue
                  : LinkedInBlue,
            }}
          />
          <h4>Photo</h4>
        </label>
        <label
          htmlFor="upload-video"
          onClick={closeURL_Tab}
          className={classes.media__options}
        >
          <OndemandVideoIcon style={{ color: "orange" }} />
          <h4>Video</h4>
        </label>
        <div
          className={classes.media__options}
          onClick={() => toggleURL_Tab("photo")}
        >
          <InsertLinkIcon style={{ color: "#e88ee4", fontSize: 30 }} />
          <h4>URL</h4>
        </div>
        <div
          className={classes.media__options}
          onClick={() => toggleURL_Tab("youtube")}
        >
          <YouTubeIcon style={{ color: "#e88ee4", fontSize: 30 }} />
          <h4>Youtube</h4>
        </div>
      </div>
    </Paper>
  );
};

export default CreatePosts;
