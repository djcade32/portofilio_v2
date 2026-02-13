import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> {
  label?: string;
}

const Textarea = ({ label, className, rows, placeholder, ...rest }: Props) => {
  return (
    <div>
      {label && <label className="block text-sm font-semibold mb-2">{label}</label>}
      <textarea
        rows={rows}
        className={`contact-input w-full bg-background border border-secondary rounded-lg px-4 py-3 focus:outline-none transition resize-none ${className}`}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default Textarea;
