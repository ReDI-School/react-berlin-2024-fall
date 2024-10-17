const Button = (props) => {
  const { buttonType, children } = props;

  return <button type={buttonType}>{children}</button>;
};

export default Button;
