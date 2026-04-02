import React from "react";

interface ErrorMessageProps {
  message: string;
  className?: string;
  showIcon?: boolean;
  id?: string;
}

export default function ErrorMessage({ message, className = "", showIcon = true, id }: ErrorMessageProps) {
  return (
    <div className={`error-message ${className}`} role="alert" id={id}>
      {showIcon && (
        <span className="error-icon" aria-hidden="true">⚠</span>
      )}
      {message}
    </div>
  );
}
