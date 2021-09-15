import React from "react";
import PropTypes from 'prop-types';
import {ReactComponent as CheckMark} from '../../../images/check-mark.svg';
import styles from './checkbox.module.css';

const Checkbox = ({checked, callback}) => {
    const clickHandler = () => {
        callback(!checked);
    }

    const classesButton = [styles.button];
    const classesIcon = [styles.icon];
    if (checked) {
        classesButton.push(styles.buttonChecked);
        classesIcon.push(styles.iconVisible);
    }

    return (
        <button onClick={clickHandler} className={classesButton.join(' ')} type='button'>
            <CheckMark className={classesIcon.join(' ')}/>
        </button>
    );
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    callback: PropTypes.func.isRequired
}

export default Checkbox;