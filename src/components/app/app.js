import React from "react";
import Dropdown from "../ui/dropdown/dropdown";
import styles from './app.module.css';
import Checkbox from "../ui/checkbox/checkbox";

function App() {
    const languages = ['Русский', 'Английский', 'Китайский', 'Испанский'];
    const [language, setLanguage] = React.useState(null);
    const [acceptUseTerms, setAcceptUseTerms] = React.useState(false);

    return (
        <div className={styles.wrapper}>
            <Dropdown
                title={language ? language : 'Язык'}
                options={languages}
                callback={setLanguage}
                chosenOption={language}
            />
            <Checkbox
                checked={acceptUseTerms}
                callback={setAcceptUseTerms}
            />
        </div>
    );
}

export default App;
