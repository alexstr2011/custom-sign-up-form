import React from "react";
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

    const titleClickHandler = (e) => {
        setIsOpen(!isOpen);
        e.stopPropagation();
    }

    const optionClickHandler = (e) => {
        callback(e.currentTarget.dataset.option);
        setIsOpen(false);
    }

    const titleButtonClasses = [styles.titleButton];
    if (isOpen || chosenOption) {
        titleButtonClasses.push(styles.titleButtonActive);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title} onClick={titleClickHandler}>
                <button className={titleButtonClasses.join(' ')}>
                    {title}
                </button>
                <ArrowDown className={styles.icon}/>
            </div>
            {
                isOpen && options.length &&
                (<div className={styles.options}>
                    {
                        options.map(option =>
                            <button
                                className={styles.optionButton}
                                onClick={optionClickHandler}
                                data-option={option}
                                key={option}
                            >
                                {option}
                            </button>)
                    }
                </div>)
            }
        </div>
    );
}

export default Dropdown;
