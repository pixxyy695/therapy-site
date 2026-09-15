import { ReactNode } from "react";
import clsx from "clsx";

export default function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return (
    <Tag className={clsx("mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-10", className)}>
      {children}
    </Tag>
  );
}
