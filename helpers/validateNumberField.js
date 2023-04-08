const validateNumberField = (number, maxDigits) => {
	// Check if the supplied argument is a number
    if (typeof number !== "string") {
		return false;
    }

    // Convert string to number
    const convertedNumber = Number(number);

    // Check if the number is a valid number
    if (isNaN(convertedNumber)) {
        return false;
    }

    // Convert number to string and get the number of digits
    const numDigits = convertedNumber.toString().length;

	// Compare the number of digits to the maximum allowed digits
	return numDigits <= maxDigits;
};

export default validateNumberField;
