function decode(x){
	let first = x.substr(0,1);
	switch(first){

	case 'a':
		return x.substr(1,1);
			break;
	case 'b':
		return x.substr(2,1);
			break;
	case 'c':
		return x.substr(3,1);
			break;
	case 'd':
		return x.substr(4,1);
			break;
	default:
		return ' ';
   }

}
console.log(decode('craft'));
