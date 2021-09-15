import React from "react";
import styles from './button.module.css';

const Button = ({title, callback, type}) => {
    return (
        <button onClick={callback} type={type} className={styles.button}>{title}</button>
    );
}

export default Button;