type MetricStripProps = {
  items: Array<{ value: string; label: string }>;
};

export function MetricStrip({ items }: MetricStripProps) {
  return (
    <div className="metric-strip" aria-label="Service metrics">
      {items.map((item) => (
        <div className="metric-item" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
