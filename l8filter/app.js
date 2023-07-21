// Get Ui
var getinput = document.getElementById('search');

var getsortazm1btn = document.getElementById('sortazm1'),
	getsortzam1btn = document.getElementById('sortzam1'),
	getsortazm2btn = document.getElementById('sortazm2'),
	getsortzam2btn = document.getElementById('sortzam2');

var getul = document.getElementById('members');
var getlis = getul.getElementsByTagName('li');


getinput.addEventListener('keyup',filter);
getsortazm1btn.addEventListener('click',sortingazm1);
getsortzam1btn.addEventListener('click',sortingzam1);


getsortazm2btn.addEventListener('click',sortingazm2);
getsortzam2btn.addEventListener('click',sortingzam2);


function filter(){

	var getlink;

	var filter = this.value.toLowerCase();
	// console.log(filter);

	for(var x=0; x < getlis.length; x++){

		getlink	= getlis[x].getElementsByTagName('a')[0];
		// console.log(getlink);

		var getatext = getlink.textContent || getlink.innerText;
		// console.log(getatext);
		// console.log(getatext.toLowerCase());

		if(getatext.toLowerCase().indexOf(filter) > -1){
			getlis[x].style.display = '';
		}else{
			getlis[x].style.display = 'none';
		}
	}
}


function sortingazm1(){

	// console.log(getlis);

	var lis = [];

	for(var i = 0; i < getlis.length; i++){
		// console.log(getlis[i]);
		// console.log(getlis[i].textContent);

		lis.push(getlis[i].textContent);
	}

	// console.log(lis);
	// console.log(lis.sort());
	// console.log(lis.sort().reverse());


	var azlis = lis.sort();

	getul.innerHTML = '';

	azlis.forEach(function(azli){


		// console.log(azli);

		const newli = document.createElement('li');
		const newlink = document.createElement('a');

		newlink.href = 'javascript:void(0);';


		newlink.appendChild(document.createTextNode(azli));
		// console.log(newlink);

		newli.appendChild(newlink);
		// console.log(newli);

		getul.appendChild(newli);

	});

}


function sortingzam1(){


	var lis = [];

	for(var i = 0; i < getlis.length ; i++){
		// console.log(getlis[i]);
		// console.log(getlis[i].textContent);

		lis.push(getlis[i].textContent);
	}


	// console.log(lis);

	var zalis = lis.sort().reverse();

	// console.log(zalis);

	getul.innerHTML = '';

	zalis.forEach(function(zali){
		// console.log(zali);

		const newli = document.createElement('li');
		const newlink = document.createElement('a');

		newlink.href = 'javascript:void(0);';
		newlink.appendChild(document.createTextNode(zali));

		newli.appendChild(newlink);
		getul.appendChild(newli);
	});



}


// Method 2

// console.log(getlis[0].textContent.toLowerCase());
// console.log(getlis[1].textContent.toLowerCase());


if(getlis[0].textContent.toLowerCase() > getlis[1].textContent.toLowerCase()){
	// console.log('true');
}else if(getlis[0].textContent.toLowerCase() === getlis[1].textContent.toLowerCase()){
	// console.log('equal');
}else{
	// console.log('false');
}




function sortingazm2(){
	// console.log('hi');

	var shouldswitch = true;
	var switching = true;

	// console.log(getlis.length);

	while(switching){

		switching = false;

		var i;

		for(i = 0; i < getlis.length-1; i++){
			shouldswitch = false;

			if(getlis[i].textContent.toLowerCase() > getlis[i+1].textContent.toLowerCase()){
				shouldswitch = true;
				break;
			}
		}

		if(shouldswitch){
			// insertBefore(new,existing);
			getlis[i].parentNode.insertBefore(getlis[i+1],getlis[i]);
			switching = true;
		}
	}
}



function sortingzam2(){

	var shouldswitch = true;
	var switching =  true;

	do{

		switching = false;

		var i;

		for(i = 0; i < getlis.length-1; i++){

			shouldswitch = false;

			if(getlis[i].textContent.toLowerCase() < getlis[i+1].textContent.toLowerCase()){
				shouldswitch = true;
				break;
			}
		}

		if(shouldswitch){
			getlis[i].parentNode.insertBefore(getlis[i+1],getlis[i]);
			switching = true;
		}

	}while(switching);
}


