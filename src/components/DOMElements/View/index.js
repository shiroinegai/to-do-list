import { fetchProjectById } from "../../Project/api";
import createProjectNode from "./createProjectNode";

const View = document.createElement("main");
View.classList.add("c-View");

View.append(createProjectNode(fetchProjectById("inbox")));

export default View;
