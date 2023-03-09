console.log('Course Replay Start !!!');
console.log(location.href)

const controlVideo = (event) => {

	if (event.keyCode === 32) {
		event.preventDefault()
		console.log("space");
		document.getElementById('jyd-pauseState').click()
	}

	if (event.keyCode === 70) {
		event.preventDefault()
		console.log("f");
		document.getElementById('jyd-fullScreen').click()
	}

	if (event.keyCode === 72) {
		event.preventDefault()
		console.log("h");
		document.getElementById('jyd-speed100').click()
	}

	if (event.keyCode === 74) {
		event.preventDefault()
		console.log("j");
		document.getElementById('jyd-speed125').click()
	}

	if (event.keyCode === 75) {
		event.preventDefault()
		console.log("k");
		document.getElementById('jyd-speed150').click()
	}

	if (event.keyCode === 76) {
		event.preventDefault()
		console.log("l");
		document.getElementById('jyd-speed200').click()
	}

	if (event.keyCode === 37) {
		event.preventDefault()
		console.log("left arrow");
		let v1 = document.getElementById('jyd-video1')
		let v2 = document.getElementById('jyd-video2')
		v1.pause()
		v2.pause()
		v1.currentTime -= 3
		v2.currentTime -= 3
		v1.play()
		v2.play()
	}

	if (event.keyCode === 39) {
		event.preventDefault()
		console.log("right arrow");
		document.getElementById('jyd-video1').currentTime++
		document.getElementById('jyd-video2').currentTime++
	}

}

document.addEventListener("keydown", controlVideo)