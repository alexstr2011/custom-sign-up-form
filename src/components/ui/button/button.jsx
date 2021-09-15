import React from "react";
import styles from './button.module.css';

const Button = ({title, callback, type, disabled=false}) => {
    return (
        <button
            onClick={callback}
            type={type}
            className={styles.button}
            disabled={disabled}
        >
            {title}
        </button>
    );
}

export default Button;