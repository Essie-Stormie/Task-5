class Student {
    constructor(name, id) {
        this._name = name;
        this._id = id;
        this._grades = [];
    }

    addGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this._grades.push(grade);
        } else {
            throw new Error("Grade must be between 0 and 100");
        }
    }

    calculateAverageGrade() {
        if (this._grades.length === 0) return 0;
        const sum = this._grades.reduce((a, b) => a + b, 0);
        return (sum / this._grades.length).toFixed(2);
    }

    getStudentDetails() {
        return {
            name: this._name,
            id: this._id,
            grades: this._grades,
            averageGrade: this.calculateAverageGrade()
        };
    }
}

class StudentManagementSystem {
    constructor() {
        this._students = [];
    }

    addStudent(student) {
        this._students.push(student);
    }

    findStudentById(id) {
        return this._students.find(student => student._id === id);
    }

    getAllStudents() {
        return this._students.map(student => student.getStudentDetails());
    }
}
function displayName(){
    console.log("Chickenface");
    
}
function runStudentManagementDemo() {
    const sms = new StudentManagementSystem();

    const Essie = new Student("Essie Dame", "Duckie1");
    Essie.addGrade(85);
    Essie.addGrade(90);
    Essie.addGrade(88);
    sms.addStudent(Essie);

    const Diego = new Student("Diego Ramirez", "Duckie2");
    Diego.addGrade(92);
    Diego.addGrade(95);
    Diego.addGrade(93);
    sms.addStudent(Diego);

    console.log("All Students:");
    sms.getAllStudents().forEach(student => {
        console.log(JSON.stringify(student, null, 2));
    });

    const foundStudent = sms.findStudentById("Duckie1");
    console.log("\nFound Student Details:");
    console.log(JSON.stringify(foundStudent.getStudentDetails(), null, 2));

    displayName()
}

runStudentManagementDemo();