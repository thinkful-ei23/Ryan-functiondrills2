function yob(x){
	if(x<0){throw new Error('Non-real age');}
	if(typeof x != typeof 1){throw new Error('non-numeric value');}

	return 2016-x;}


function whoAmI(name, age){
	try{var  yearOfBirth = yob(age);
	console.log('hi my name is ' + name + ' and i\'m ' + age + ' years old');
	console.log('I was born in ' + yearOfBirth + '.');} 
	catch(e){console.error(e.message);}

}
whoAmI('Ryan',29);
whoAmI('Ryan',-4);
whoAmI('Ryan','a');
