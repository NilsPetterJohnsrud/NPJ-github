// JavaScript Document



const 'student1' = {
  name: "Nils Petter",
  testGrade: 88,
  assignmentGrade: 91,
  examGrade: 80
}

const 'student2' = {
  name: "Vidar",
  testGrade: 75,
  assignmentGrade: 70,
  examGrade: 85
}

const 'student3' = {
  name: "Dewald",
  testGrade: 81,
  assignmentGrade: 92,
  examGrade: 75
}

const 'student4' = {
  name: "Sean",
  testGrade: 67,
  assignmentGrade: 55,
  examGrade: 70
}


const students = [
	'student1',
	'student2',
	'student3',
	'student4'
]

for ( let i = 0; i < students.length; i++ ) {
	//text += students [i] + <br>;
	console.log( students[i] );
}

for (const student of students) {console.log(student)}


/*

if (studentgrade > 89) {
	console.log ('Studenten får karakteren A')
}
else if (studentgrade > 79) {
	console.log ('Studenten får karakteren B')
}
else if (studentgrade > 69) {
	console.log ('Studenten får karakteren C')
}
else if (studentgrade > 59) {
	console.log ('Studenten får karakteren D')
}
else if (studentgrade > 49) {
	console.log ('Studenten får karakteren E')
}
else {
	console.log ('Studenten får karakteren F')
}

*/
