type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
  align = "center"
}: SectionTitleProps) {
  return (
    <div className={`section-title ${align === "left" ? "left" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>
        {title}
        {highlight ? <span>{highlight}</span> : null}
      </h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
