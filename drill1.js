function yob(x){return 2016-x;}


function whoAmI(name, age){
	var  yearOfBirth = yob(age);
	console.log('hi my name is ' + name + ' and i\'m ' + age + ' years old');
	console.log('I was born in ' + yearOfBirth + '.');
}
whoAmI('Ryan',29);
