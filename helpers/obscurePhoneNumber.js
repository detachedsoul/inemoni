const obscurePhoneNumber = (phoneNumber, startPosition, digitsToObscure) => {
    // Convert the phone number to a string
    phoneNumber = String(phoneNumber);

    // Ensure the start position is within bounds
    startPosition = Math.max(0, startPosition);
    startPosition = Math.min(startPosition, phoneNumber.length - 1);

    // Get the substring before the specified position
    const prefix = phoneNumber.slice(0, startPosition);

    // Create a string of asterisks (*) to obscure the digits
    const obscuredDigits = '*'.repeat(digitsToObscure);

    // Get the substring after the obscured digits
    const suffix = phoneNumber.slice(startPosition + digitsToObscure);

    // Concatenate the prefix, obscured digits, and suffix
    const obscuredPhoneNumber = prefix + obscuredDigits + suffix;

    return obscuredPhoneNumber;
};

export default obscurePhoneNumber;
