export const emailValidator = (text) => {
    const expression = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return expression.test(text);
}

export const nameValidator = (text) => {
    const expression = /([^A-Za-zА-Яа-я\s-])/g;
    return !expression.test(text);
}

export const phoneValidator = (text) => {
    const expression = /([^+\d()-])/g;
    if (expression.test(text)) {
        return false;
    }

    const digits = /\d/g;
    const found = text.match(digits);
    return found && found.length === 11;
}

