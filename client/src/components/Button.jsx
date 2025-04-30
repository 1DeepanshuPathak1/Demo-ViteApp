function Button({ variant = 'primary', size = 'medium', onClick, children }) {
    const handleClick = () => {
      if (onClick) {
        onClick()
      }
    }
    return (
      <button 
        className={`button button-${variant} button-${size}`} 
        onClick={handleClick}
      >
        {children}
      </button>
    )
  }
  
  export default Button