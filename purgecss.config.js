module.exports = {
	content: ["./pages/**/*.js", "./components/**/*.js"],
	css: ["./assets/uicons.css"],
	defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
};
