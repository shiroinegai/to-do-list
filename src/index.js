import "./styles/main.scss";

import TopNav from "./components/interface/TopNav";
import Menu from "./components/interface/Menu";
import Main from "./components/interface/Main";

const root = document.getElementById("root");
root.append(TopNav, Menu, Main);

console.log("To Do List is running.");
