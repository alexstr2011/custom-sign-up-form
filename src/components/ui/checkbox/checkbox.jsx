import React from "react";
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

export default Checkbox;