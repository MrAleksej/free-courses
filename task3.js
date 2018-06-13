var a=process.argv[2];
var b=process.argv[3];
while (a&&b) {(a>b)?a=a%b:b=b%a;}
console.log(a+b);
