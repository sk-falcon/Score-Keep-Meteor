import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players'

Meteor.startup(function(){
  class  Person {
    constructor(name= 'Default', age = 0) {
      this.name = name;
      this.age = age;

    }

    getGreeting(){
      return `I am ${this.name}`;
    }

    getPersonDescription(){
      return `${this.name} is ${this.age} years(s) old`;
    }
  }

  class Programmer extends Person{
    constructor(name, age, language='Assembly'){
      super(name, age);
      this.language = language;
    }

    getGreeting(){
      if (this.language) {
        return `I am ${this.name}. I am a ${this.language}.`;

      } else {
        return super.getGreeting();
      }
    }
  }

  // let person = new Person('Check', 25);
  // console.log(person.getPersonDescription())

  let person = new Programmer('Test 1', 25);
  console.log(person.getGreeting());

  let person2 = new Programmer('Test 2', 25, 'C');
  console.log(person2.getGreeting());

});
