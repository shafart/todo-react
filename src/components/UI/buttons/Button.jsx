import React from 'react';
import '../buttons/Button.module.css'

const Button = ({children, className, ...props}) => {
  return (
    <button {...props} className={className}>
            {children}
    </button>
  )
}

export default Button
