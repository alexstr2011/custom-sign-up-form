import React from "react";
import styles from './button.module.css';

const Button = ({title, callback}) => {
    return (
        <button onClick={callback} className={styles.button}>{title}</button>
    );
}

export default Button;