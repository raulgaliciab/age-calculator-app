import { getDataForm } from "./formHandler";
import main from "./main.html";
import "./styles/styles.css";
import "./styles/desktop.css";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `${main}`;

document.getElementById('form')?.addEventListener('submit', getDataForm);