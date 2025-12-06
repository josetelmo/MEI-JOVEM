import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-bold py-3 px-6 rounded transition-transform active:scale-95 duration-200 shadow-md";
  
  const variants = {
    primary: "bg-[#005c3c] text-white hover:bg-[#00472e]", // Matches the dark green button in card
    secondary: "bg-white text-[#003B26] border border-[#003B26] hover:bg-gray-100",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};