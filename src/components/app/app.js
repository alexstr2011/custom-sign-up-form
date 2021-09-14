import React from "react";
import styles from './app.module.css';
import Dropdown from "../ui/dropdown/dropdown";
import Checkbox from "../ui/checkbox/checkbox";
import Input from "../ui/input/input";

function App() {
    const languages = ['Русский', 'Английский', 'Китайский', 'Испанский'];
    const [language, setLanguage] = React.useState(null);
    const [acceptUseTerms, setAcceptUseTerms] = React.useState(false);
    const [name, setName] = React.useState('');

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
            <Input
                value={name}
                callback={setName}
                title='Имя'
                placeholder='Введите Ваше имя'
            />
            12345
        </div>
    );
}

export default App;
