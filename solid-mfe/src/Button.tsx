import { createSignal, JSX } from "solid-js";
import { styled } from "solid-styled-components";

export const Button = () => {
  const [count, setCount] = createSignal(0);

  return (
    <StyledButton
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      [solid] Click count: {count()}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled("button")({
  padding: "0.5rem",
  borderRadius: "0.375rem",
  backgroundColor: "#66df81",
  color: "#406108",
});
