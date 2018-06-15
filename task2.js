var a=process.argv[2];
var b=process.argv[3];
var l=a.indexOf(b[0]);
var r=a.length-l;
console.log((r>l?l:r));
