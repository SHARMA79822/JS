// let myName = "Gaurav     ";

// console.log(myName.length);


let myHero = ["Thor", "Spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Gaurav = function(){
    console.log('Gaurav is present in all Objects');
}

heroPower.Gaurav()








// Inheritance

const User = {
    name: "chai",
    email: "cjai@google"
}

const Teacher = {
    makeVideo:true
}

const TeacingSupport = {
    isAvilable: false
}

const TASupport = {
    makeAssignment: 'JS assigment',
    fullTime: true,
    __proto__: TeacingSupport
}

Teacher.__proto__ = User

Object.setPrototypeOf(TeacingSupport, Teacher)

let anotherUsername = "chaiAurCode     "
String.prototype.trueLenght = function() {
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True lenght is: ${this.trim().length}`);
}

anotherUsername.trueLenght()
