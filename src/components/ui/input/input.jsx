import React from "react";
import PropTypes from 'prop-types';
import styles from './input.module.css';

const Input = ({value, callback, title, placeholder, error, mt, mb, type='text'}) => {
    const style = {};
    if (mt) {
        style.marginTop = mt;
    }
    if (mb) {
        style.marginBottom = mb;
    }

    return (
        <div style={{...style}}>
            <label className={styles.label}>
                <h3 className={styles.title}>{title}</h3>
                <input
                    value={value}
                    onChange={e => callback(e.currentTarget.value)}
                    className={styles.input}
                    placeholder={placeholder}
                    type={type}
                />
                <p className={styles.error}>{error}</p>
            </label>
        </div>
    );
}

Input.propTypes = {
    value: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    mt: PropTypes.string,
    mb: PropTypes.string,
    type: PropTypes.string
}

export default Input;