import "./styles/main.scss";

import MainNav from "./components/interface/MainNav";
import Menu from "./components/interface/Menu";
import Main from "./components/interface/Main";

const root = document.getElementById("root");
root.append(Main, Menu, MainNav);

console.log("To Do List is running.");
