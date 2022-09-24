import { render } from "solid-js/web";
import App from "../App";

export default function (document: Document, id: string) {
  render(App, document.getElementById(id));
}
