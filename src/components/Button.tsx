import "../styles/UI/Button.css";

type ButtonProps = {
  children?: React.ReactNode;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
};

const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <button className="button-ui" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
