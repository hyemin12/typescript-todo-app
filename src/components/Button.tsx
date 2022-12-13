const Button = ({
  action,
  icon,
  btnColor,
}: {
  action: () => void;
  icon: string;
  btnColor: string;
}) => {
  return (
    <span className="btn" style={{ color: btnColor }} onClick={action}>
      <i className={icon}></i>
    </span>
  );
};

export default Button;
