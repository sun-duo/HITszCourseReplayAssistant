console.log('Course Replay Start !!!');
console.log(location.href)

if (document.querySelector('#jyd-courseVoice')) {
	document.querySelector('#jyd-courseVoice').click()

	document.querySelector('#jyd-video1').onclick = () => {
		setTimeout(() => document.querySelector('#jyd-courseVoice').click(), 1)
	}

	const controlVideo = (event) => {

		if (event.keyCode === 32) {
			event.preventDefault()
			console.log("space");
			document.getElementById('jyd-pauseState').click()
		}

		if (event.keyCode === 70) {
			event.preventDefault()
			console.log("f");
			if (document.querySelector('#jyd-exitFullScreen').style.display === 'inline-block') {
				document.getElementById('jyd-exitFullScreen').click()
			} else {
				document.getElementById('jyd-fullScreen').click()
			}
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
			document.getElementById('jyd-video1').currentTime += 3
			document.getElementById('jyd-video2').currentTime += 3
		}

	}

	document.addEventListener("keydown", controlVideo)
}

if (document.querySelector('.curr-contentr-title.curr-contentr-list.clearfloat>a')) {
	document.querySelectorAll('.curr-contentr-title.curr-contentr-list.clearfloat>a').forEach(elem => {
		elem.onclick = (e) => {
			let nodeValue = e.target.parentElement.attributes.onclick.nodeValue
			let attrs = nodeValue.substring(18, nodeValue.length - 1).split(',')
			let rpId = attrs[0].substring(1, attrs[0].length - 1);
			let courseId = attrs[1].substring(1, attrs[1].length - 1);
			let courseNum = attrs[2].substring(1, attrs[2].length - 1);
			let fzId = attrs[3].substring(1, attrs[3].length - 1);
			let url = "http://219.223.238.14:88/ve/back/rp/common/rpIndex.shtml?method=studyCourseDeatil\n" +
				"&courseId=" + courseId + "\n" +
				"&dataSource=1\n" +
				"&courseNum=" + courseNum + "\n" +
				"&fzId=" + fzId + "\n" +
				"&rpId=" + rpId + "\n" +
				"&publicRpType=2,3";
			location.href = url
		}
	})
}



