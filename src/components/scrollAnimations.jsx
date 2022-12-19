export const scrollToElement = (href) => {
	const element = document.getElementById(href.replace("#", ""));
	element?.scrollIntoView({ behavior: "smooth" });
};
