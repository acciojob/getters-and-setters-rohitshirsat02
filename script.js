//complete this code
class Person {
	Constructor(name ,age){
		this._name = name;
		this._age = age;
	}
	get name(){
		return this._name;
	}
	get age(){
		return this.age;
	}
	set name(newName){
		this._name = newName;
	}
	set age(newAge){
		this._age = newAge;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teacher(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
