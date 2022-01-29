//intorduction course
// const name = 'shashidhar'
// console.log(name)

// setInterval(()=>{
//     console.log('hello world')
// },2000)

// const {name, lname} = require('./module1')//destructuring
// const names = require('./module1')// without destructuring
// const {sayHi,sayBye} = require('./module2')// destructuring
// const {item, personDetails} = require('./module3')
// require('./module4')
// console.log(item);
// console.log(personDetails)
// console.log(lname)
// console.log(name)

// sayHi(name)
// sayHi(lastname)
// sayHi(names.name)
// sayHi(names.lastname)
// sayBye(name)

 const _ = require('lodash');
 const items = [1,[2,[3,[4,[5]]]]]
 const newItems = _.flattenDeep(items);
 console.log(newItems);