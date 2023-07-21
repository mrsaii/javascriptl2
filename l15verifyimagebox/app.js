const database = [
		{
			question:'Choose Traffic Light ?',
			a:"./traffic.jpg",
			b:"./mountain.jpg",
			c:"./ambulance.jpg",
			d:"./airport.jpg",
			correctanswer:"a"
		},
		{
			question:'Choose Mountain ?',
			a:"./ambulance.jpg",
			b:"./mountain.jpg",
			c:"./traffic.jpg",
			d:"./airport.jpg",
			correctanswer:"b"
		},
		{
			question:'Choose Ambulance Truck ?',
			a:"./ambulance.jpg",
			b:"./airport.jpg",
			c:"./traffic.jpg",
			d:"./mountain.jpg",
			correctanswer:"a"
		},
		{
			question:'Choose Airport ?',
			a:"./traffic.jpg",
			b:"./mountain.jpg",
			c:"./ambulance.jpg",
			d:"./airport.jpg",
			correctanswer:"d"
		}
	];


// console.log(database);
// console.log(database[0].b);

const getcontainer = document.querySelector('.container');
const getquestion = document.querySelector('.question');
const getanswers = document.querySelectorAll('.answer');

const geta_img = document.getElementById('a_img'),
	getb_img = document.getElementById('b_img'),
	getc_img = document.getElementById('c_img'),
	getd_img = document.getElementById('d_img');

// console.log(getc_img);


const getbtn = document.querySelector('.btn');


let currentidx = 0;
let score = 0;

startquestion();

function startquestion(){

	removeselected();

	const currentqes = database[currentidx];

	getquestion.textContent = currentqes.question;
	geta_img.src = currentqes.a;
	getb_img.src = currentqes.b;
	getc_img.src = currentqes.c;
	getd_img.src = currentqes.d;

}


function getsingleanswer(){
	let answer;

	// answer = 'b';
	// console.log(getanswers);


	getanswers.forEach(function(getanswer){
		// console.log(getanswer);
		// console.log(getanswer.id);

		if(getanswer.checked){
			// console.log(getanswer.id);
			answer = getanswer.id;
		}
	});


	return answer;
}


getbtn.addEventListener('click',function(){
	// console.log('i am working');

	const getsglanswer = getsingleanswer();

	// console.log(getsglanswer);

	if(getsglanswer){

		if(getsglanswer === database[currentidx].correctanswer){
			score++;
		}

		currentidx++;

		// console.log(currentidx);

		if(currentidx < database.length){
			startquestion();
		}else{
			// console.log(score);

			getcontainer.innerHTML = `
				<h3>Total Score : ${score*25}</h3>
				<h4>You answered correctly at ${score} / ${database.length} question.</h4>
				<!-- <button type="button" class="btn" ondblclick="window.location.reload()">Double Click To Reload</button> -->
				<button type="button" class="btn" onclick="doubleclick()">Double Click To Reload</button>
			`;
		}

	}else{
		window.alert('Choose One Answer');
	}


});


function removeselected(){

	getanswers.forEach(function(getanswer){
		return getanswer.checked = false;
	});

}


let clicktimes = 0;

function doubleclick(){
	// console.log('hay');

	// console.log(clicktimes);

	if(clicktimes === 0){
		// clicktimes = new Date().getTime();
		clicktimes = Date.now();
		// console.log(clicktimes);
	}else{

		if((Date.now() - clicktimes) < 1000){
			// console.log('hello');

			window.location.reload();

			clicktimes = 0;
		}else{
			// clicktimes = new Date().getTime();
			clicktimes = Date.now();
		}
	}



}


// 6PV

