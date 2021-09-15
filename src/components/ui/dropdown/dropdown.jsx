import React from "react";
import PropTypes from 'prop-types';
import {ReactComponent as ArrowDown} from '../../../images/arrow-down.svg';
import styles from './dropdown.module.css';

const Dropdown = ({title, options, callback, chosenOption}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        const outsideClickHandler = () => {
          setIsOpen(false);
        };

        window.addEventListener('click', outsideClickHandler);

        return () => {
            window.removeEventListener('click', outsideClickHandler);
        };
    }, [setIsOpen]);

    const fieldClickHandler = (e) => {
        setIsOpen(!isOpen);
        e.stopPropagation();
    }

    const optionClickHandler = (e) => {
        callback(e.currentTarget.dataset.option);
        setIsOpen(false);
    }

    const fieldButtonClasses = [styles.fieldButton];
    if (isOpen) {
        fieldButtonClasses.push(styles.fieldButtonActive);
    } else if (chosenOption) {
        fieldButtonClasses.push(styles.fieldButtonChosen)
    }

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.field} onClick={fieldClickHandler} >
                <button className={fieldButtonClasses.join(' ')} type='button'>
                    {chosenOption || title}
                </button>
                <ArrowDown className={styles.icon}/>
            </div>
            {
                isOpen && options.length &&
                (
                    <div className={styles.options}>
                        {
                            options.map(option =>
                                <button
                                    className={styles.optionButton}
                                    onClick={optionClickHandler}
                                    data-option={option}
                                    type='button'
                                    key={option}
                                >
                                    {option}
                                </button>)
                        }
                    </div>
                )
            }
        </div>
    );
}

Dropdown.propTypes = {
    title: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    callback: PropTypes.func,
    chosenOption: PropTypes.string
}

export default Dropdown;
