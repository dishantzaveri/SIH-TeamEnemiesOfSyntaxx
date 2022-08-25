import { useEffect, useState } from "react";
import { useLoginMutation } from "../../features/auth/authAPISlice";
import { setCredentails } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import "../../static/css/login.css";
import { useNavigate } from "react-router-dom";
import { CometChat } from "@cometchat-pro/chat";
import * as CONSTANTS from "../../constants/constants";
import Header from "../Header/Header";
// Importing componenets
// import FacebookLogin from "./facebook";

const Login = ({ setLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [login] = useLoginMutation();

  const submit = async () => {
    try {
      const data = await login({
        email: inputs.email,
        password: inputs.password,
      }).unwrap();
      console.log(data)
      const user = { ...data };
      dispatch(setCredentails(user));
      localStorage.setItem("user", JSON.stringify(user));
      const uuid = data.name.split(" ")[0] + data.email.split("@")[0];
      CometChat.login(uuid, CONSTANTS.AUTH_KEY).then(
        (user) => {
          console.log("Login Successful:", { user });
        },
        (error) => {
          console.log("Login failed with exception:", { error });
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/feed");
    }
  }, [token]);

  return (
    <div class="bg-purple-gray-100 min-h-screen flex flex-col">
      <Header />
      <div class="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Login</h1>
          {/* <h3 class="mb-8 text-1x1 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3> */}
          {/* <div class="text-center">
            <FacebookLogin setLogin={setLogin} />
          </div> */}
          <hr class="hr-text" data-content="OR" />
          {/* <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
            required
          /> */}
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
          {/* <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
            required
          /> */}

          {/* <div class="text-center text-sm text-grey-dark mt-4">
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
          </div> */}

          <button
            id="submit"
            type="submit"
            onClick={submit}
            class=" w-full bg-purple-gray-500 hover:bg-purple-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
