import "../styles/UI/Button.css";

type ButtonProps = {
  children?: React.ReactNode;
  width: number;
  height: number;
  fontSize: number;
  borderRadius: number;
};

const Button = ({
  children,
  width,
  height,
  fontSize,
  borderRadius,
}: ButtonProps) => {
  return (
    <button
      className="button-ui"
      style={{
        height: `${height}px`,
        width: `${width}px`,
        borderRadius: `${borderRadius}px`,
        fontSize: `${fontSize}px`,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
