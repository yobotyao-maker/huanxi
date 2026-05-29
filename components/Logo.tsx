import Image from "next/image";

type LogoProps = {
  compact?: boolean;
  label?: string;
};

export function Logo({ compact = false, label = "宝云云计算" }: LogoProps) {
  return (
    <span className="brand-logo" aria-label={label}>
      <Image src="/brand/baoyun-logo.svg" alt="" width={40} height={40} priority />
      {!compact ? <strong>{label}</strong> : null}
    </span>
  );
}
