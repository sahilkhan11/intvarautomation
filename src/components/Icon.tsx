import React from "react";

type IconProps = {
  name: string;
  className?: string;
};

export default function Icon({ name, className = "" }: IconProps) {
  const getPath = () => {
    switch (name) {
      case "MessageSquare":
        return <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />;
      case "MessageCircle":
        return <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />;
      case "Globe":
        return (
          <>
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </>
        );
      case "Smartphone":
        return (
          <>
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </>
        );
      case "Activity":
        return <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />;
      case "LineChart":
        return (
          <>
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
          </>
        );
      default:
        return <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />;
    }
  };

  return (
    <svg 
      width="24" height="24" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" strokeWidth="1.5" 
      strokeLinecap="round" strokeLinejoin="round" 
      className={className}
    >
      {getPath()}
    </svg>
  );
}
