const copyText = async (text, setIsCopied) => {
    try {
        setIsCopied(() => false);

        await navigator.clipboard.writeText(text);

        setIsCopied(() => true);
    } catch(error) {
        setIsCopied(() => false);
    }
};

export default copyText;
