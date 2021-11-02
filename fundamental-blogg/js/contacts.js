// JavaScript Document
//alert ('Hello')
const elForm = document.getElementById('contact-form')
const elFormResult = document.getElementById('form-result')

//elFormResult.innerText = 'hello from JavaScript'
const formValues = {} //JavaScript object
let formErrors = [] //empty JS Array, list

//listen for the submit event
elForm.addEventListener('submit', function(event){
	event.preventDefault()
	
	formErrors = [] //reset errors
	
	const formData = new FormData (elForm)
	
	for ( const [ name, value ] of formData ){
		
		// ! not operator
		if (!value){
			console.log(name + ' is empty ')
			// Adding a new item to Array
			formErrors.push(name + ' is empty ')
		} else {
			console.log(name + ' is ' + value)
			formValues[name] = value
		}
		//console.log(name)
		//console.log(value)
		
	}
	if (formErrors.length){ //Check if
		
	} else {
		const resultHTML = `
			<h4>Success!</h4>
			<p>Your message has been sendt </p>`
	}
})