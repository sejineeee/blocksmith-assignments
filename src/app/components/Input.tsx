"use client";

import "../styles/input.scss";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  magnifier: boolean;
}

const Input = ({
  type,
  name,
  placeholder,
  disabled,
  onChange,
  magnifier,
}: InputProps): JSX.Element => {
  return (
    <div className="search-bar">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
      {
        magnifier && <button className="magnifier" type="button"></button>
      }
    </div>
  );
};

export default Input;
