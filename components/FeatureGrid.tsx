import type { Feature } from "@/lib/site";

type FeatureGridProps = {
  items: Feature[];
  variant?: "compact" | "large";
};

export function FeatureGrid({ items, variant = "large" }: FeatureGridProps) {
  return (
    <div className={`feature-grid ${variant}`}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <article className="feature-card" key={item.title}>
            <div className="icon-shell">
              <Icon size={24} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}
