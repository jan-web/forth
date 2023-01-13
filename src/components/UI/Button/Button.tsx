

import styles from "./Button.module.css";

type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  className: string;
  disabled: boolean;
  onClick?: ()=> void;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type || "button"}
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
