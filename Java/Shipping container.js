// JavaScript Document

const myObjects ={
	name: 'Nils Petter Johnsrud',
	epost: 'nilsj@viken.no',
	age: 54,
	address: {
		gate: 'Øreveien',
		by: 'Moss',
		land: 'Norge'
	}
	
}

//weight, height, width, length and a type which refers to the content
function Container (number, weight, height, width, length, content) {
	this.number = number;
	this.weight = weight;
	this.height = height;
	this.width = width;
	this.length = length;
	this.content = content;
}

const S1 = new Container (S1, 8000, 5, 3, 3, 'apple')

	console.log (S1)

const S2 = new Container (S2, 6000, 5, 3, 3, 'apple')
