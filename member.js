function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        skills: ["JS", "React", "Node"],
        salary: 1000,
        getSalary: function () {
            return this.salary;
        },
        setSalary: function (value) {
            this.salary = value;
        },
        getSkills: function () {
            return this.skills;
        },
        setSkills: function (value) {
            this.skills = value;
        }
    };
    return member;
}