// console.log(process.argv);

let aTmp = process.argv;
let tot = 0;
if (aTmp && aTmp.length > 2 ) {
	for (let i = 2; i < aTmp.length; i++) {
		tot = Number(tot) + Number(aTmp[i]);
	}
}
console.log(tot);
