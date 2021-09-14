import React from "react";
import {ReactComponent as CheckMark} from '../../images/check-mark.svg';
import Dropdown from "../ui/dropdown/dropdown";
import styles from './app.module.css';

function App() {
    const languages = ['Русский', 'Английский', 'Китайский', 'Испанский'];
    const [language, setLanguage] = React.useState(null);

    return (
        <div className={styles.wrapper}>
            <Dropdown
                title={language ? language : 'Язык'}
                options={languages}
                callback={setLanguage}
                chosenOption={language}
            />
        </div>
    );
}

export default App;
