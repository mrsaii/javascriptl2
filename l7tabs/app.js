// GET UI
var gettablinks = document.getElementsByClassName('tablinks');
var gettabpances = document.getElementsByClassName('tab-pane');
var getbtncloses = document.querySelectorAll('.btn-close');

var tabpanes = Array.from(gettabpances);

function gettab(evn,link){
	// console.log(evn.target);


	tabpanes.forEach(function(tabpane){
		tabpane.style.display = "none";
	});

	for(var x=0;x < gettablinks.length;x++){
		gettablinks[x].className = gettablinks[x].className.replace(' active','');

		getbtncloses[x].addEventListener('click',function(){
			this.parentElement.style.display="none";
		});
	}


	document.getElementById(link).style.display='block';


	// evn.target.className = "tablinks active";
	// evn.target.className += " active"
	// evn.target.className = evn.target.className.replace('tablinks','tablinks active');
	// evn.target.classList.add('active');

	// console.log(evn);
	// console.log(evn.target);
	// console.log(evn.currentTarget)

	evn.currentTarget.className += ' active';

}

document.getElementById('autoclick').click();
