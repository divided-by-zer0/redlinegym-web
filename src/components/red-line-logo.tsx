interface RedLineLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function RedLineLogo({ className = '', size = 'md' }: RedLineLogoProps) {
  const sizeClasses = {
    sm: 'h-10',
    md: 'h-36',
    lg: 'h-48',
    xl: 'h-72',
  };

  return (
    <div className={`flex items-center justify-left ${className}`}>
      <img 
        src={"/redlinegym-web/126c4900c150f13a0f8d30b95ec4f03cd845aaa2.png"} 
        alt="Red Line Gym Logo" 
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </div>
  );
}