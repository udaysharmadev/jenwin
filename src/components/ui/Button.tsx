import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface CommonProps {
  variant?: ButtonVariant;
  icon?: boolean;
  className?: string;
}

interface AsButtonProps extends CommonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: never;
  children: ReactNode;
}

interface AsLinkProps extends CommonProps {
  href: string;
  external?: boolean;
  children: ReactNode;
}

type Props = AsButtonProps | AsLinkProps;

const styles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#D81B60] text-white hover:bg-[#b01550] hover:shadow-[0_0_24px_rgba(216,27,96,0.4)] active:scale-[0.98]",
  secondary:
    "border border-[#333333] text-white hover:border-[#D81B60] hover:text-[#D81B60] active:scale-[0.98]",
  ghost:
    "text-[#888888] hover:text-white active:scale-[0.98]",
};

const base =
  "inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide rounded-sm transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D81B60] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]";

export default function Button(props: Props) {
  const { variant = "primary", icon = false, className = "", children } = props;
  const cls = `${base} ${styles[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, external } = props as AsLinkProps;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
          {icon && <ArrowRight size={14} />}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
        {icon && <ArrowRight size={14} />}
      </Link>
    );
  }

  const { href: _h, external: _e, variant: _v, icon: _i, className: _c, children: _ch, ...buttonRest } = props as any;
  return (
    <button className={cls} {...buttonRest}>
      {children}
      {icon && <ArrowRight size={14} />}
    </button>
  );
}
