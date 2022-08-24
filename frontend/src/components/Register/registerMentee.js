import { useEffect, useState } from "react";
import { useRegisterMenteeMutation } from "../../features/auth/authAPISlice";
import { setCredentails } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import "../../static/css/login.css";
import { useNavigate } from "react-router-dom";
import { CometChat } from "@cometchat-pro/chat";
import * as CONSTANTS from "../../constants/constants";
import { usePostMutation } from "../../features/profile/profileAPISlice";
// Importing componenets
// import FacebookLogin from "./facebook";

const RegisterMentee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [pass, setPass] = useState("");
  const [registerMentee] = useRegisterMenteeMutation();
  const [post] = usePostMutation();

  const postProfile = async (user) => {
    const userProfile = {}
    try {
      const profile = await post({profile: userProfile, type: 'entrepreneur'}).unwrap();
      console.log(profile)
    } catch (error) {
      console.log(error);
    }
  }

  const register = async () => {
    if (pass !== inputs.password) {
      alert("Passwords do not match");
    } else {
      try {
        const data = await registerMentee({
          name: inputs.name,
          email: inputs.email,
          password: inputs.password,
        }).unwrap();
        const user = { ...data };
        if(data) {
          postProfile(user);
        }
        dispatch(setCredentails(user));
        localStorage.setItem("user", JSON.stringify(user));
        const uuid = inputs.name.split(" ")[0] + inputs.email.split("@")[0];
        console.log(uuid);
        var cometUser = new CometChat.User(uuid);
        cometUser.setName(inputs.name);
        CometChat.createUser(cometUser, CONSTANTS.AUTH_KEY).then(
          (user) => {
            console.log("user created", user);
            CometChat.login(uuid, CONSTANTS.AUTH_KEY).then(
              (user) => {
                console.log("Login Successful:", { user });
              },
              (error) => {
                console.log("Login failed with exception:", { error });
              }
            );
          },
          (error) => {
            console.log("error", error);
          }
        );
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <div class="bg-purple-gray-100 min-h-screen flex flex-col">
      <div class="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Sign up</h1>
          <h2 class="mb-8 text-2xl text-center">As a Mentee</h2>
          {/* <h3 class="mb-8 text-1x1 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3> */}
          <div class="text-center">
            {/* <FacebookLogin setLogin={setLogin} /> */}
          </div>
          <hr class="hr-text" data-content="OR" />
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
            value={inputs.name}
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            required
          />
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            id="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            required
          />
          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            id="pass"
            placeholder="Password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            required
          />
          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />

          <div class="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the{" "}
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="google.com"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="google.com"
            >
              Privacy Policy
            </a>{" "}
          </div>

          <button
            id="submit"
            type="submit"
            onClick={register}
            class=" w-full bg-purple-gray-500 hover:bg-purple-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Create Account
          </button>

          {/* <div className='row col-12 d-flex justify-content-end'>
            <button type='submit' class='btn btn-1'>
                        Cancel
            </button>
            <button type='submit' class='btn btn-2'>
                        Register
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RegisterMentee;
