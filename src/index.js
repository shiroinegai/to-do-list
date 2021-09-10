import "./styles/main.scss";
import View from "./components/DOMElements/View";
import MainNav from "./components/DOMElements/MainNav";
import Menu from "./components/DOMElements/Menu";

console.log("To Do List is running.");

const root = document.getElementById("root");

root.append(View, Menu, MainNav);
