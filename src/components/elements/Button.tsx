import React from "react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  onClick,
  disabled = false,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const baseClasses = "btn font-weight-500 transition-all duration-300";
  const variantClasses = {
    primary: "btn-primary theme-btn btn-one",
    secondary: "btn-secondary",
    outline: "btn-outline",
  };
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3",
    lg: "px-6 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  if (href) {
    return (
      <Link 
        href={href} 
        className={classes}
        aria-label={ariaLabel}
        role="button"
      >
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
    </button>
  );
}
