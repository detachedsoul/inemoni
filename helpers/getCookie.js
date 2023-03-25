const getCookie = (cookieName) => {
    const cookies = document.cookie.split("; ");

    console.log(cookies);

    for (const cookie of cookies) {
        const [name, value] = cookie.split("=");
        if (name === cookieName) {
            const sanitizedValue = decodeURIComponent(value);
            const isValid = true;

            return {
                name,
                sanitizedValue,
                isValid,
            };
        }
    }

    return false;
};

export default getCookie;
