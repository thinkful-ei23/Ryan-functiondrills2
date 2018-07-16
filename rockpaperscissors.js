function rps(x){
const randomNo = Math.floor(Math.random() * 3) + 1;
	if(x===randomNo){console.log('tie');}
	if(x < 0|| x > 3){console.log('invalid');return;}
	if (x===1 && randomNo ===2){console.log('lose');}
	else if (x===1 && randomNo === 3){console.log('win');}
	else if (x===2 && randomNo === 1){console.log('win');}
	else if (x===2 && randomNo === 3){console.log('lose');}
	else if (x===3 && randomNo === 1){console.log('lose');}
	else if (x===3 && randomNo === 2){console.log('win');}
}
rps(5);
rps(-2);

