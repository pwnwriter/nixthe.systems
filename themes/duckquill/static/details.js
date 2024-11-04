document.addEventListener("DOMContentLoaded", function () {
	const nav = document.getElementById("site-nav");
	const details = nav.querySelectorAll("details");

	details.forEach((detail) => {
		detail.addEventListener("toggle", () => {
			if (detail.open) setTargetDetail(detail);
		});
	});

	function setTargetDetail(targetDetail) {
		details.forEach((detail) => {
			if (detail !== targetDetail) {
				detail.open = false;
			}
		});
	}
})
