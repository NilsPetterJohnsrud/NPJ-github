// JavaScript Document
//alert ('Hello')
const elForm = document.getElementById('contact-form')
const elFormResult = document.getElementById('form-result')

//elFormResult.innerText = 'hello from JavaScript'


//listen for the submit event
elForm.addEventListener('submit', function(event){
	event.preventDefault()
})