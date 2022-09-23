import { createSignal } from "solid-js";
import { render } from "solid-js/web";

export const Button = () => {
  const [count, setCount] = createSignal(0);

  return (
    <button
      type="button"
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      [solid] Click count: {count()}
    </button>
  );
};

export default function RenderButton(id: string) {
  render(Button, document.getElementById(id));
}
