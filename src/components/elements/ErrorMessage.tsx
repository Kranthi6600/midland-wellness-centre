import React from "react";

interface ErrorMessageProps {
  message: string;
  className?: string;
  showIcon?: boolean;
  id?: string;
}

export default function ErrorMessage({ message, className = "", showIcon = true, id }: ErrorMessageProps) {
  return (
    <div className={`error ${className}`} role="alert" id={id}>
      {showIcon && (
        <svg 
          className="inline-block w-4 h-4 mr-2" 
          fill="currentColor" 
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path 
            fillRule="evenodd" 
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
            clipRule="evenodd" 
          />
        </svg>
      )}
      {message}
    </div>
  );
}
