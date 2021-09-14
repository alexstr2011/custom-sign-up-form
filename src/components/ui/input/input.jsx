import React from "react";
import styles from './input.module.css';

const Input = ({value, callback, title, placeholder, error=''}) => {
    return (
        <div>
            <label className={styles.label}>
                <span className={styles.title}>{title}</span>
                <input
                    value={value}
                    onChange={e => callback(e.currentTarget.value)}
                    className={styles.input}
                    placeholder={placeholder}
                />
                <span className={styles.error}>{error}</span>
            </label>
        </div>
    );
}

export default Input;