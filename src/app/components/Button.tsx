import '../styles/button.scss';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  disabled: boolean;
  name: string;
  content: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ type, name, content, onClick }: ButtonProps): JSX.Element => {
  return (
    <button type={type} name={name} className={`${name} btn`} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
