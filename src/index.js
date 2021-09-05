import "./styles/main.scss";

import MainNav from "./components/interface/MainNav";
import Menu from "./components/interface/Menu";
import MainView from "./components/interface/MainView";

const root = document.getElementById("root");
root.append(MainView, Menu, MainNav);

console.log("To Do List is running.");
