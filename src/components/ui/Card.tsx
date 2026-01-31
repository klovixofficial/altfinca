"use client";

import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "bordered" | "glass";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

export default function Card({
  className,
  variant = "default",
  padding = "md",
  hover = false,
  children,
  ...props
}: CardProps) {
  const variants = {
    default: "bg-white shadow-sm",
    elevated: "bg-white shadow-lg",
    bordered: "bg-white border border-gray-200 shadow-sm",
    glass: "bg-white/80 backdrop-blur-sm shadow-sm",
  };

  const paddings = {
    none: "",
    sm: "p-5",
    md: "p-7",
    lg: "p-9",
  };

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden transition-all duration-300",
        variants[variant],
        paddings[padding],
        hover && "hover:shadow-gold hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Sub-components
Card.Header = function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
};

Card.Title = function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-semibold text-[var(--text)]", className)}
      {...props}
    >
      {children}
    </h3>
  );
};

Card.Description = function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-[var(--text-light)] mt-1 line-clamp-3", className)} {...props}>
      {children}
    </p>
  );
};

Card.Content = function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
};

Card.Footer = function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-4 pt-4 border-t border-gray-100", className)} {...props}>
      {children}
    </div>
  );
};
