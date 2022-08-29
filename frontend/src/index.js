import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import './i18n.js'
import * as CONSTANTS from "./constants/constants";
import { CometChat } from "@cometchat-pro/chat";
const container = document.getElementById("root");
const root = createRoot(container);

const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(CONSTANTS.REGION)
  .build();
CometChat.init(CONSTANTS.APP_ID, appSetting).then(
  () => {
    console.log("App initialized");

    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    );
  },
  (error) => {
    console.log(error);
  }
);
