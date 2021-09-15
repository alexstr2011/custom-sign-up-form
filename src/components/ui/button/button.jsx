import React from "react";
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({title, callback, type='button', disabled=false}) => {
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

Button.propTypes = {
    title: PropTypes.string,
    callback: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool
}

export default Button;