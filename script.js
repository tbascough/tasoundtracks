const waveform = document.getElementById('waveform');
if (waveform) {
	for (let i = 0; i < 180; i++) {
		const bar = document.createElement('div');
		bar.classList.add('bar');
		bar.style.animationDelay = `${i * 0.02}s`;
		waveform.appendChild(bar);
	}
}

function displayHeader(pagename){
	const header = document.getElementById('header');
	if (!header) return;

	header.innerHTML = `
		<div class="logobox"> 
			<img src="imgs/logo.png" class="logo">
			<p>TA Soundtracks</p>
		</div>
		<div>
			<div class="socialbox">
				<a class="aimg" href="https://www.facebook.com/tommy.ascough" target="_blank" rel="noopener noreferrer"><img src="imgs/icon_fb.webp" class="icon"></a>
				<a class="aimg" href="https://www.youtube.com/channel/UCwp5daz8CNNN0pIeCs3Q0JQ" target="_blank" rel="noopener noreferrer"><img src="imgs/icon_yt.png" class="icon"></a>
				<a class="aimg" href="https://open.spotify.com/artist/5f2waN8ZNrblaZEvfzHPeg?si=vp0mYb5lQfuaERpP5kegFQ" target="_blank" rel="noopener noreferrer"><img src="imgs/icon_spotify.png" class="icon"></a>
			</div>
		</div>
	`
}




window.addEventListener('load', function(){
	window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

	let title = document.title.replace(/ /g,'')
	const myTitle = title.split("|")

	displayHeader(myTitle[1])
	// displayNav2()
})
