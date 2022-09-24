import { render } from "solid-js/web";
import Button from "../Button";

export default function (document: Document, id: string) {
  render(Button, document.getElementById(id));
}
