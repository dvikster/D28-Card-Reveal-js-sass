var kkk = {
	"name" : "Alex",
	"age" : 17,
	"address" : "write your address",
	"alert" : function(){
		alert(this.name);
	}
}
var lll = {
	"name" : "ddddddd",
	"iin" : 223344,
	"address" : 'uni 1223'
}
var mmm = {
	"address" : 22222,
	"passport" : "em223344"
}
lll.__proto__ = kkk;
mmm.__proto__ = lll;

// delete mmm.age;
// console.log(mmm);
// for (var key in mmm) {
// 	if (mmm.hasOwnProperty(key)) {
// 		console.log(key);
// 	}
// }

mmm.alert();
var nnn = {
	"__proto__": mmm
}
console.log(nnn);