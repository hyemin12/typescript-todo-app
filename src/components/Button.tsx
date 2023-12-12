interface ButtonProps {
  action?: () => void;
  icon?: string;
  text?: string;
  $type: string;
  $disabled?: boolean;
}

function Button({ action, icon, $type, text, $disabled = false }: ButtonProps) {
  return (
    <button
      className={`btn ${$type} ${icon ? "icon_btn" : " "} ${$disabled ? "disabled" : " "}`}
      onClick={action}
      disabled={$disabled}
    >
      {icon ? <i className={icon}></i> : <>{text}</>}
    </button>
  );
}

export default Button;
