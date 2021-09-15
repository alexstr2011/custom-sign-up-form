import React from "react";
import styles from './input.module.css';

const Input = ({value, callback, title, placeholder, error='12345'}) => {
    return (
        <div>
            <label className={styles.label}>
                <h3 className={styles.title}>{title}</h3>
                <input
                    value={value}
                    onChange={e => callback(e.currentTarget.value)}
                    className={styles.input}
                    placeholder={placeholder}
                />
                <p className={styles.error}>{error}</p>
            </label>
        </div>
    );
}

export default Input;