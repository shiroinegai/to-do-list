import "./styles/main.scss";
import View from "./components/DOM/View";
import MainNav from "./components/DOM/MainNav";
import Menu from "./components/DOM/Menu";

console.log("To Do List is running.");

const root = document.getElementById("root");

root.append(View, Menu, MainNav);
