export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  isLoading = false,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 active:scale-[0.98] cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:transform-none';
  
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-primary/95 focus-visible:ring-brand-primary shadow-sm shadow-brand-primary/20',
    secondary: 'bg-brand-secondary text-white hover:bg-brand-secondary/95 focus-visible:ring-brand-secondary shadow-sm shadow-brand-secondary/20',
    success: 'bg-brand-success text-white hover:bg-brand-success/95 focus-visible:ring-brand-success shadow-sm shadow-brand-success/20',
    outline: 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus-visible:ring-brand-primary'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm gap-1.5 h-8',
    md: 'px-4 py-2 text-base gap-2 h-10',
    lg: 'px-5 py-2.5 text-lg gap-2.5 h-12'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      <span className={`inline-flex items-center ${isLoading ? 'opacity-90' : ''}`}>
        {children}
      </span>
    </button>
  );
}