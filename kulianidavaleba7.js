const student = {
    firstName: "luka",
    lastName: "nikolaishvili",
    age: 21,
    scores: [4, 7, 5, 3, 2],
    fullName: () => {
        return student.firstName + " " + student.lastName;
    }
};
console.log(student.firstName,student.age);