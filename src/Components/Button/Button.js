import React from 'react';
import "./Button.css"
const Button = ({
    children,
    className,
    type,
    onChange,
    style,
}) => {
    return ( 
        <>
        <button type={type} className={className} onChange={onChange} style={style}>{children}</button>
        </>
     );
}
 
export default Button;