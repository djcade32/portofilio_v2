import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
}

const Input = ({ label, placeholder, type, className, ...rest }: Props) => {
  return (
    <div>
      {label && (
        <label htmlFor={label} className="block text-sm font-semibold mb-2">
          {label}
        </label>
      )}
      <input
        id={label}
        type={type}
        className={`contact-input w-full bg-background border border-secondary rounded-lg px-4 py-3 focus:outline-none transition ${className ?? ""}`}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default Input;
