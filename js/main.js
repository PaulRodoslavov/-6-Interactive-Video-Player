 //Adds video button features

 $('video').mediaelementplayer({
        features: ['playpause','current', 'progress', 'duration','volume', 'fullscreen'],
      });


 // DOM variables
 let myVideo = document.getElementById('myVideo');
 let text = document.querySelectorAll('.text');



myVideo.addEventListener("timeupdate", () => {



	for (let i = 0; i < text.length; i++){
		if(myVideo.currentTime > text[i].getAttribute('data-start') && myVideo.currentTime <= text[i].getAttribute('data-end')){
			text[i].style.color = "red";
		}	
		else if(text[i].onclick){
			alert('opa');
		}
		else {
			text[i].style.color = "black";
		}
	}
});





for (let i = 0; i < text.length; i++){
	text[i].addEventListener('click',(e) => {
		 myVideo.currentTime = e.target.getAttribute('data-start');		 
	})
	// text[i].addEventListener('mouseover',(e) => {
	// 	 	text[i].style.backgrounColor = 'green;
	// 	};
}


// let warpperText = document.getElementById('warpperText');
// 			warpperText.addEventListener('mouseover', (e) =>{
// 				if (e.target.tagName.toUpperCase() == "SPAN"){
// 					// console.log(e.target);
// 					e.target.style.color = 'green';
// 				}		
// 			});
	
		



// let warpperText = document.getElementById('warpperText');
// 	warpperText.addEventListener('mouseover', (e) =>{
// 		if (e.target.tagName.toUpperCase() == "SPAN"){
// 			// console.log(e.target);
// 			e.target.style.color = 'green';
// 		}		
// 	});



// let playback = document.getElementById('playback');

// 	playback.addEventListener('mouseover',(e) => {
// 			 	// playback.style.color = 'green';
// 			 	// console.log(myVideo.currentTime);
// 			});





// let pos = document.getElementById("demo");
// myVideo.addEventListener( "timeupdate" , () => {pos.innerHTML = myVideo.currentTime});

// $myVideo.on("timeupdate", () => {pos.innerHTML = myVideo.currentTime});



 // $('video').on('click', function(){
		// console.log(myVideo.currentTime);
	// });


// console.log($video[0].currentTime);

//  var dt = new Date();
// var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

	// $('wrapperText').on('click', function(){
	// 	console.log($video[0].currentTime);
	// });



// 	myVideo.addEventListener("timeupdate", () => {	
// 	console.log(myVideo.currentTime);
// 	for (let i = 0; i < text.length; i++){
// 		if(myVideo.currentTime > text[i].getAttribute('data-start') && myVideo.currentTime <= text[i].getAttribute('data-end')){
// 			text[i].style.color = "red";
// 		}	
// 		else {
// 			text[i].style.color = "black";
// 		}
// 	}
// });