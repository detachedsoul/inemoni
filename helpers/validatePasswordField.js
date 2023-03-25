const validatePasswordField = (password) => {
    const newValue = password;
	const isValid = /^\d{0,6}$/.test(newValue);

    return isValid ? true : false;
};

export default validatePasswordField;
