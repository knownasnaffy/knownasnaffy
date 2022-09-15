function ProgressBar() {
	let prevScrollPos = window.pageYOffset
	const processScroll = () => {
		let docElem = document.documentElement,
			docBody = document.body,
			scrollTop = docElem["scrollTop"] || docBody["scrollTop"],
			scrollBottom =
				(docElem["scrollHeight"] || docBody["scrollHeight"]) -
				window.innerHeight,
			scrollPercent = (scrollTop / scrollBottom) * 100 + "%"

		document
			.getElementById("progress-bar")
			?.style?.setProperty("--scrollAmount", scrollPercent)

		let currentScrollPos = window.pageYOffset
		if (prevScrollPos > currentScrollPos) {
			document.getElementById("navbar")?.style.setProperty("--top", "0px")
		} else {
			document.getElementById("navbar")?.style.setProperty("--top", "-70px")
		}
		prevScrollPos = currentScrollPos
	}
	document.addEventListener("scroll", processScroll)
	return (
		<>
			<div
				id='progress-bar'
				className='h-1 bg-primary fixed left-0 top-0 rounded-full z-50'
			/>
		</>
	)
}

export default ProgressBar
