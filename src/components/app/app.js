import React from "react";
import styles from './app.module.css';
import Dropdown from "../ui/dropdown/dropdown";
import Checkbox from "../ui/checkbox/checkbox";
import Input from "../ui/input/input";
import Button from "../ui/button/button";

function App() {
    const languages = ['Русский', 'Английский', 'Китайский', 'Испанский'];
    const [language, setLanguage] = React.useState(null);
    const [acceptUseTerms, setAcceptUseTerms] = React.useState(false);
    const [name, setName] = React.useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Submit form');
    };

    return (
        <form onSubmit={submitHandler} className={styles.wrapper}>
            <Dropdown
                title={language ? language : 'Язык'}
                options={languages}
                callback={setLanguage}
                chosenOption={language}
            />
            <label>12345
            <Checkbox
                checked={acceptUseTerms}
                callback={setAcceptUseTerms}
            />12345</label>
            <Input
                value={name}
                callback={setName}
                title='Имя'
                placeholder='Введите Ваше имя'
            />
            <Button title='Зарегистрироваться'/>
        </form>
    );
}

export default App;
