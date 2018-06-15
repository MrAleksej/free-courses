var a=process.argv[2];
var b=process.argv[3];
var a1=a.replace(/'/g,"").split("");
var b1=b.replace(/'/g,"").split("");
var l=a1.indexOf(b1[0]);
var r=a1.length-l;
console.log((r>l?l:r)+"");
