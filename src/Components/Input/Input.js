import React from 'react';

const Input = ({
        value,
        type,
        className,
        style,
        onChange,
        placeholder,
        required
}) => {
    return (
        <>
            <input required={required} placeholder={placeholder} type={type} className={className} style={style} onChange={onChange} value={value} />
        </>
      );
}
 
export default Input;