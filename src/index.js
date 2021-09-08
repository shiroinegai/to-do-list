import "./styles/main.scss";
import MainView from "./components/DOM/MainView";
import MainNav from "./components/DOM/MainNav";
import Menu from "./components/DOM/Menu";

console.log("To Do List is running.");

const root = document.getElementById("root");

root.append(MainView, Menu, MainNav);
