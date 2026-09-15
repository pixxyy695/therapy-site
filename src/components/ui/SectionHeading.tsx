import clsx from "clsx";

export default function SectionHeading({
  kicker,
  heading,
  align = "left",
  className,
  headingClassName,
  as: Tag = "h2",
}: {
  kicker?: string;
  heading: string;
  align?: "left" | "center";
  className?: string;
  headingClassName?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={clsx(align === "center" ? "text-center" : "text-left", className)}>
      {kicker && (
        <p
          className={clsx(
            "mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent-dark",
            align === "center" && "flex justify-center"
          )}
        >
          {kicker}
        </p>
      )}
      <Tag
        className={clsx(
          "font-display text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.12] text-primary-dark text-balance",
          headingClassName
        )}
      >
        {heading}
      </Tag>
    </div>
  );
}
