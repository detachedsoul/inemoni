// Remove all characters that are not number and period (.) from the amount to anable formatting
const stripNonNumeric = (string) => {
    // Remove all characters that are not numbers or periods
    let strippedString = string.replace(/[^\d.]/g, '');

    // Make sure there's only one period remaining
    const periodCount = (strippedString.match(/\./g) || []).length;
    if (periodCount > 1) {
        strippedString = strippedString.replace(/\./g, '');
    }

    return strippedString;
};

export default stripNonNumeric;
