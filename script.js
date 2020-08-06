/*var User = function(name){
	this.name = name || 'New User';
}
User.prototype = {
	age: 30,
	getName: function(){
		console.log('This name: ', this.name);
	},
	get: function(field){
		console.log('GET: ', this[field]);
	}
}
var user = new User('Anton');
user.getName();
user.get('age');
user.get('name');*/


/*var Animal = function(name){
	this.name = name;
}
Animal.prototype = {
	legsCount: 4,
	headsCount: 1,
	isTailExists: true
}
var an1 = new Animal('Cat');
console.log(an1);
var Cat = function(){
	this.isCat = true;
}
Cat.prototype = new Animal('Cat');
var cat = new Cat();
console.log(cat.legsCount);*/

/*//новый формат
const name = 'Anton';
const html = `
	<div>
	 <p> ${name} </p>
	</div>
`;
console.log(html);*/

/*//деструктуризация
const obj = {
	a: 1,
	b: 'str',
	func({a, b}){
		console.log(a, b);
	}
}
var {a, b} = obj;
// console.log(a, b);
obj.func({a, b});*/


/*var User = function(){
	this.name = 'Anton';
	this.get = (field) => {
		setTimeout(() => {
			console.log(this[field])
		}, 100);
	}
}
let user = new User();
user.get('name');

const pow2 = (x) => {
	return x * x;
}
const pow3 = x => x * x;
console.log(pow2(2), pow3(2));*/


/*class User{
	constructor(name){
		this.name = name;
	}
	get(field){
		return this[field];
	}
}
let user = new User('Anton');
console.log(user.get('name'));
console.log(user);

class Student extends User{
	constructor(name){
		super(name);
		this.name = this.name + this.name;
	}
}
let student = new Student('Oleg');
console.log(student.get('name'));
console.log(student);*/

var apiCall = new Promise(function(resolve, reject){
	$.ajax({
		url: 'http://ip.jsontest.com',
		type: 'get',
		crossDomain: true,
		success: function(data){
			resolve(data.ip);
		},
		error: function(){
			reject();
		}
	})
})

/*apiCall
	//выполняется resolve
	.then(function(ip){
		console.log('ip: ', ip);
	})
	//ошибка
	.catch(function(){
		console.log('api call failed.')
	});*/

const delay = (ms = 1000) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(), ms);
	});
}

delay(2000).then(() => {
	console.log('go!');
});

