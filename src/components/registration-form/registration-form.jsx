import React from "react";
import styles from "./registration-form.module.css";
import Dropdown from "../ui/dropdown/dropdown";
import Checkbox from "../ui/checkbox/checkbox";
import Input from "../ui/input/input";
import Button from "../ui/button/button";

const RegistrationForm = () => {
    const languages = ['Русский', 'Английский', 'Китайский', 'Испанский'];
    const [language, setLanguage] = React.useState(null);
    const [acceptUseTerms, setAcceptUseTerms] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Submit form');
    };

    return (
        <form onSubmit={submitHandler} className={styles.wrapper}>
            <h1 className={styles.title}>Регистрация</h1>
            <p>
                <span className={styles.inscriptionHasAccount}>Уже есть аккаунт?</span>
                <a href='/#' className={styles.linkEnter}>Войти</a>
            </p>
            <Input
                value={name}
                callback={setName}
                title='Имя'
                placeholder='Введите Ваше имя'
            />
            <Input
                value={email}
                callback={setEmail}
                title='Еmail'
                placeholder='Введите ваш email'
            />
            <Input
                value={phone}
                callback={setPhone}
                title='Номер телефона'
                placeholder='Введите номер телефона'
            />
            <Dropdown
                title='Язык'
                options={languages}
                callback={setLanguage}
                chosenOption={language}
            />
            <label>12345
                <Checkbox
                    checked={acceptUseTerms}
                    callback={setAcceptUseTerms}
                />12345</label>
            <Button title='Зарегистрироваться' type='Submit'/>
        </form>
    );
}

export default RegistrationForm;