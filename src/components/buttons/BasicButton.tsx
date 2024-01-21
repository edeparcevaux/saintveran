import { FunctionComponent, MouseEvent } from "react";
import { Button } from "antd";

interface BasicButtonProps {
  type?: "button" | "submit" | "reset";
  icon?: JSX.Element;
  variant?: string;
  text?: string | JSX.Element;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => any;
  className?: string;
  isLoading?: boolean;
  size?: "sm" | "md" | "lg";
  iconRight?: boolean;
  additionalText?: string;
}

const BasicButton: FunctionComponent<BasicButtonProps> = ({
  type = "button",
  icon,
  variant = "primary",
  text = "",
  disabled = false,
  onClick = undefined,
  isLoading = false,
  size = "md",
  className = "",
  iconRight = false,
  additionalText,
}) => {
  return (
    <Button
      htmlType={type}
      onClick={onClick}
      disabled={disabled}
      loading={isLoading}
      className={`btn-${variant} ${
        text === "" ? "btn-icon" : ""
      } size-${size} ${
        additionalText ? "flex-column" : ""
      } ${className} it-button`}
    >
      <div
        className={`d-flex align-items-center justify-content-center position-relative gap-2 ${
          iconRight ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {icon && <div className="icon">{icon}</div>}
        {text !== "" && <div className="text text-ellipsis">{text}</div>}
      </div>
      {additionalText && (
        <div className="additional-text">{additionalText}</div>
      )}
    </Button>
  );
};

export default BasicButton;
