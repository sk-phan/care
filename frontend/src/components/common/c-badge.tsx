"use client";

type BadgeVariant = 'fill' | 'outline' | 'text';
type BadgeColor = 'primary' | 'secondary' | 'danger';

interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  variant?: BadgeVariant;
  color?: BadgeColor;
  children: React.ReactNode;
}

const colorClasses: { [key in BadgeColor]: string } = {
  primary: 'bg-white text-black',
  secondary: 'bg-red-300 text-black border-gray-500',
  danger: 'bg-red-500 text-white border-red-500',
};

const variantClasses: { [key in BadgeVariant]: (color: string) => string } = {
  fill: (color) => `${color} py-1 rounded-full inline px-3`,
  outline: (color) => `border ${color} text-${color.split(' ')[0]} bg-transparent hover:bg-${color.split(' ')[0].split('-')[1]}-100 inline px-4 py-2 rounded-full`,
  text: (color) => `text-${color.split(' ')[0]} bg-transparent hover:bg-${color.split(' ')[0].split('-')[1]}-100 inline rounded-full`,
};

const CBadge: React.FC<BadgeProps> = ({ variant = 'fill', color = 'primary', children, className, ...props }) => {
  const colorClass = colorClasses[color];
  const variantClass = variantClasses[variant](colorClass);
  return (
    <div
      className={`${variantClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default CBadge;