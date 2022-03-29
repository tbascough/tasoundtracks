
function displayHeader(pagename){
	var header = document.getElementById('header')

	header.innerHTML = `
		<div class="logobox"> 
			<img src="imgs/logo.png" class="logo">
			<p>TA Soundtracks</p>
		</div>

		<div class="socialbox">
			<a class="aimg" href="https://www.youtube.com/channel/UCwp5daz8CNNN0pIeCs3Q0JQ" target="_blank" rel="noopener noreferrer"><img src="imgs/icon_yt.png" class="icon"><a href="https://www.youtube.com/channel/UCwp5daz8CNNN0pIeCs3Q0JQ" target="_blank" rel="noopener noreferrer"></a>
			<a class="aimg" href="https://www.facebook.com/tommy.ascough" target="_blank" rel="noopener noreferrer"><img src="imgs/icon_fb.webp" class="icon"></a>
			<a class="aimg" href="https://open.spotify.com/artist/5f2waN8ZNrblaZEvfzHPeg?si=vp0mYb5lQfuaERpP5kegFQ" target=_blank" rel="noopener noreferrer"><img src="imgs/icon_spotify.png" class="icon"></a>
		</div>
	`
}



// function displayNav(){
// 	var navBar = document.getElementById('navBar')
// 	navBar.innerHTML =`
// 			<nav>
// 				<a class="navbutton" href="./index.html">News</a>
// 				<a class="navbutton" href="./mus.html">Music</a>
// 				<a class="navbutton" href="./sd.html">Sound Design</a>
// 				<a class="navbutton" href="./about.html">About</a>
// 			</nav>
// 	`
// }

// function displayNav2(){
// 	var navBar = document.getElementById('navBar')
// 	var cbfilms = document.getElementById('cbfilms')
// 	navBar.innerHTML =`
// 			<nav>
// 				<a class="navbutton" href="./index.html">Games</a>
// 				<a class="navbutton" href="./mus.html">Music</a>
// 				<a class="navbutton" href="${cbfilms}">Film</a>
// 				<a class="navbutton" href="./sd.html">About</a>
// 			</nav>
// 	`
// }




window.onload = function(){
	window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

	let title = document.title.replace(/ /g,'')
	const myTitle = title.split("|")
	console.log(myTitle)

	displayHeader(myTitle[1])
	// displayNav2()
}

