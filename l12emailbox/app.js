// Get UI
const getemail = document.getElementById('emails');
const gettextarea = document.querySelector('textarea');
const getbtn = document.querySelector('.btn');
const getemcontainer = document.querySelector('.email-container');

getemail.focus();

getemail.addEventListener('keyup',function(e){
	// console.log(e.target);
	// console.log(e.target.value);

	createemaillist(this.value);

});


function createemaillist(inputetext){
	// console.log(inputetext);

	// split by(',')
	// const eitems = inputetext.split(',');
	// console.log(eitems);


	// remove empty,empty(space)
	// const eitems = inputetext.split(',').filter(rmempty=>rmempty.trim() !== '');
	// console.log(eitems);


	// remove space in text
	const emitems = inputetext.split(',').filter(rmempty=>rmempty.trim() !== '').map(rmempty=>rmempty.trim());
	// console.log(emitems);

	getemcontainer.innerHTML = '';

	emitems.forEach(function(emitem){
		// console.log(emitem);
		const setnewspan = document.createElement('span');
		setnewspan.textContent = emitem;
		setnewspan.classList.add('email-item');

		// console.log(setnewspan);

		getemcontainer.appendChild(setnewspan);
	});

}


getbtn.addEventListener('click',function(e){
	sendemail();
	e.preventDefault();
});	


function sendemail(){
	// console.log('i am working');
	const gettxtvalue = gettextarea.value;
	const getaddresses = document.querySelectorAll('.email-item');
	// console.log(gettxtvalue);
	// console.log(getaddresses);


	var persons = [];

	if(getaddresses.length > 0 && gettxtvalue){

		getaddresses.forEach(function(getaddress){
			// console.log(getaddress);

			persons.push({
				email:getaddress.textContent,
				message:gettxtvalue
			});
		});

		console.log(persons);

	}else{
		window.alert('Enter Message');
		gettextarea.focus();
	}


}

