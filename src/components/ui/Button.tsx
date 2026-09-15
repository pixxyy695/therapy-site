import { AnchorHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: Variant;
  href: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-cream hover:bg-primary-dark border border-primary hover:border-primary-dark",
  secondary:
    "bg-transparent text-primary border border-primary/40 hover:border-primary hover:bg-primary/5",
  ghost:
    "bg-transparent text-ink underline underline-offset-4 decoration-accent/60 hover:decoration-accent",
};

export default function Button({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={clsx(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm px-7 py-3.5 text-[0.9rem] font-medium tracking-wide transition-all duration-300 ease-out",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
