// Theme Initialization
(function () {
	// Get the default theme from the HTML data-theme attribute.
	const defaultTheme = document.documentElement.getAttribute("data-theme");

	// Set the data-default-theme attribute only if defaultTheme is not null.
	if (defaultTheme) {
		document.documentElement.setAttribute("data-default-theme", defaultTheme);
	}

	// Attempt to retrieve the current theme from the browser's local storage.
	const storedTheme = localStorage.getItem("theme");

	if (storedTheme && storedTheme !== "system") {
		document.documentElement.setAttribute("data-theme", storedTheme);
	} else if (defaultTheme && storedTheme !== "system") {
		document.documentElement.setAttribute("data-theme", defaultTheme);
	} else {
		// If no theme is found in local storage and no default theme is set, hand over control to the CSS.
		document.documentElement.removeAttribute("data-theme");
	}

	// Expose defaultTheme to the outer scope.
	window.defaultTheme = defaultTheme;
})();

// Deferred Icon Update and Theme Switching
document.addEventListener("DOMContentLoaded", function () {
	function setTheme(theme, saveToLocalStorage = false) {
		if (theme === "system") {
			document.documentElement.removeAttribute("data-theme");
		} else {
			document.documentElement.setAttribute("data-theme", theme);
		}

		if (saveToLocalStorage) {
			localStorage.setItem("theme", theme);
		} else {
			localStorage.removeItem("theme");
		}

		// Update icon class based on the selected theme.
		updateIconClass(theme);

		// Update the active button based on the selected theme.
		updateActiveButton(theme);
	}

	function resetTheme() {
		// Reset the theme to the default or system preference if no default is set.
		setTheme(window.defaultTheme || "system");
	}

	function switchTheme(theme) {
		if (theme === "system") {
			resetTheme();
		} else {
			setTheme(theme, true);
		}
	}

	function updateIconClass(theme) {
		const iconElement = document.querySelector("#theme-switcher summary .icon");

		// Remove any existing theme classes
		iconElement.classList.remove("light", "dark");

		// Add the appropriate class based on the selected theme
		if (theme === "light") {
			iconElement.classList.add("light");
		} else if (theme === "dark") {
			iconElement.classList.add("dark");
		}
	}

	function updateActiveButton(theme) {
		// Remove .active class from all buttons
		document.querySelectorAll('#theme-switcher button').forEach(button => {
			button.classList.remove('active');
		});

		// Add .active class to the button corresponding to the current theme
		const activeButton = document.querySelector(`#theme-${theme}`);
		if (activeButton) {
			activeButton.classList.add('active');
		}
	}

	// Update icon class on page load based on current theme
	const currentTheme = localStorage.getItem("theme") || window.defaultTheme || "system";
	updateIconClass(currentTheme);
	updateActiveButton(currentTheme);

	// Make the switchTheme function accessible globally
	window.switchTheme = switchTheme;
});
