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
                <span className={styles.hasAccountInscription}>Уже есть аккаунт?</span>
                <a href='/#' className={styles.link}>Войти</a>
            </p>
            <Input
                value={name}
                callback={setName}
                title='Имя'
                placeholder='Введите Ваше имя'
                mt='57px'
            />
            <Input
                value={email}
                callback={setEmail}
                title='Еmail'
                placeholder='Введите ваш email'
                mt='34px'
            />
            <Input
                value={phone}
                callback={setPhone}
                title='Номер телефона'
                placeholder='Введите номер телефона'
                mt='34px'
                mb='34px'
            />
            <Dropdown
                title='Язык'
                options={languages}
                callback={setLanguage}
                chosenOption={language}
            />
            <label className={styles.acceptTermsLabel}>
                <Checkbox
                    checked={acceptUseTerms}
                    callback={setAcceptUseTerms}
                />
                <span className={styles.acceptTermsInscription}>
                    Принимаю <a href='/#' className={styles.link}>условия</a> использования
                </span>
            </label>
            <Button title='Зарегистрироваться' type='Submit' />
        </form>
    );
}

export default RegistrationForm;