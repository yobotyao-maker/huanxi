"use client";

import { useMemo, useState } from "react";
import { Cloud, Database, LockKeyhole, Server } from "lucide-react";

const views = [
  {
    title: "弹性计算",
    subtitle: "从轻量云主机到高可用集群",
    icon: Server,
    metrics: ["CPU 负载", "实例健康", "自动扩容"],
    color: "blue"
  },
  {
    title: "数据服务",
    subtitle: "数据库、对象存储、备份策略一体管理",
    icon: Database,
    metrics: ["备份成功率", "读写延迟", "存储水位"],
    color: "green"
  },
  {
    title: "云安全",
    subtitle: "身份、审计、防护策略默认接入",
    icon: LockKeyhole,
    metrics: ["风险事件", "访问审计", "安全基线"],
    color: "gold"
  },
  {
    title: "托管运维",
    subtitle: "告警、工单、容量预测持续运行",
    icon: Cloud,
    metrics: ["响应时长", "工单状态", "容量趋势"],
    color: "cyan"
  }
];

export function ProductSwitcher() {
  const [active, setActive] = useState(0);
  const selected = views[active];
  const Icon = selected.icon;

  const bars = useMemo(
    () =>
      selected.metrics.map((metric, index) => ({
        metric,
        width: `${62 + ((active + index) % 3) * 12}%`
      })),
    [active, selected.metrics]
  );

  return (
    <div className="product-switcher">
      <div className="switcher-tabs" role="tablist" aria-label="平台能力">
        {views.map((view, index) => {
          const TabIcon = view.icon;
          return (
            <button
              aria-selected={active === index}
              className={active === index ? "active" : ""}
              key={view.title}
              onClick={() => setActive(index)}
              role="tab"
              type="button"
            >
              <TabIcon size={18} />
              {view.title}
            </button>
          );
        })}
      </div>

      <div className={`dashboard-preview ${selected.color}`}>
        <div className="preview-head">
          <div>
            <span>BAOYUN CLOUD</span>
            <h3>{selected.title}</h3>
            <p>{selected.subtitle}</p>
          </div>
          <div className="preview-icon">
            <Icon size={28} />
          </div>
        </div>
        <div className="preview-grid">
          <div className="preview-card wide">
            <span>资源态势</span>
            <div className="line-chart" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="preview-card">
            <span>可用性</span>
            <strong>99.95%</strong>
          </div>
          <div className="preview-card">
            <span>响应</span>
            <strong>7x24</strong>
          </div>
        </div>
        <div className="preview-bars">
          {bars.map((item) => (
            <div className="preview-bar" key={item.metric}>
              <span>{item.metric}</span>
              <b>
                <i style={{ width: item.width }} />
              </b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
