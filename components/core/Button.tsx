import React from "react";

type Variant = "Primary" | "Secondary" | "Ghost";

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorLikeProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  asChild: true;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLElement>;

const Button = ({
  variant = "Primary",
  children,
  className = "",
  asChild = false,
  disabled = false,
  ...rest
}: ButtonProps | AnchorLikeProps) => {
  const classes: Record<Variant, string> = {
    Primary: "bg-accent text-background hover:opacity-90",
    Ghost:
      "bg-transparent hover:bg-accent hover:text-background border-2 border-accent text-accent",
    Secondary: "bg-secondary hover:opacity-90",
  };

  const base = `px-6 py-2.5 font-semibold rounded-lg transition cursor-pointer duration-200 ${disabled && "opacity-50 hover:cursor-not-allowed hover:opacity-50!"}`;

  const combined = `${base} ${classes[variant]} ${className}`.trim();

  if (asChild) {
    // Make sure there's only one child
    const child = React.Children.only(children);

    if (!React.isValidElement(child)) return null;

    return React.cloneElement(child as React.ReactElement<any>, {
      className: `${combined} ${(child as any).props?.className ?? ""}`.trim(),
      disabled: disabled,
      ...rest,
    });
  }

  // Normal button
  return (
    <button
      className={combined}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
