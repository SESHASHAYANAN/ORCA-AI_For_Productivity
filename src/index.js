import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import WorkTracker from "./Worktracker";
import Tracker from "./Tracker";
import Community from "./Community";
import TeamChat from "./Chatroom";
import ProjectTracker from "./TeamTracker";
import TeamAlignmentSystem from "./AISCH";
import Tracker1 from "./Tracker1";
import Tracker2 from "./Tracker2";
import Tracker3 from "./Tracker3";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
