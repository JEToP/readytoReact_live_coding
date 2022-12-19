/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		fontFamily: {
			poppins: ["Poppins", "ui-sans-serif"],
			fira: ["Fira Code", "ui-sans-serif"],
		},
		extend: {
			colors: {
				gray: "#abb2bf",
				green: "#00a09a",
				black: "#222221",
			},
			backgroundImage: {
				"first-project": "url('/src/assets/img/project.png')",
			},
			boxShadow: {
				card: "0 10px 30px -10px rgba(34, 34, 33, 0.2)",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
