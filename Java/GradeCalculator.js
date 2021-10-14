// JavaScript Document

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


const studentOne = {
  name: "Nils Petter",
  testGrade: 88,
  assignmentGrade: 91,
  examGrade: 80
}

const studentTwo = {
  name: "Vidar",
  testGrade: 75,
  assignmentGrade: 70,
  examGrade: 85
}

const studentTree = {
  name: "Dewald",
  testGrade: 81,
  assignmentGrade: 92,
  examGrade: 75
}

const studentFour = {
  name: "Sean",
  testGrade: 67,
  assignmentGrade: 55,
  examGrade: 70,
//	vektetTestGrade: this.testGrade * 20%,
//	vektetAssignmentGrade: this.assignmentGrade * 30%,
//	vektetExamGrade: this.examGrade * 50%,
//	StudentGrade: this.vektetTestGrade + this.vektetAssignmentGrade + this.vektetExamGrade,
	studentGrade: function(testGrade, assignmentgrade, examgrade) {
		return this.testGrade*20%+this.assignmentGrade*30%+this.examGrade*50%
	}
		console.log (this.student1Grade)
}

/*
Vekting av karakterer:
testgrade: 20%
assignmentGrade: 30%
examGrade: 50%
*/
				
/*
let x=calcStudentGrade (67, 55, 70)

function calcStudentGrade (testGrade, assignmentGrade, examGrade){
	return studentOne.testGrade * 20% = vektetTestGrade;
	 studentOne.assignmentGrade * 30% = vektetAssignmentGrade;
	 studentOne.examGrade * 50% = vektetExamGrade;
	 vektetTestGrade + vektetAssignmentGrade + vektetExamGrade = studentOneGrade
}
*/
				
 /*
	if (studentGrade > 89) {
	console.log ('Studenten får karakteren A')
}
	else if (studentGrade > 79) {
	console.log ('Studenten får karakteren B')
}
	else if (studentGrade > 69) {
	console.log ('Studenten får karakteren C')
}
	else if (studentGrade > 59) {
	console.log ('Studenten får karakteren D')
}
	else if (studentGrade > 49) {
	console.log ('Studenten får karakteren E')
}
	else {
	console.log ('Studenten får karakteren F')
}

*/


let student1Grade = "";
for (let x in studentOne){
	txt += studentOne[x] + " ";
}

document.getElementById("studentGrade").innerHTML = txt;

