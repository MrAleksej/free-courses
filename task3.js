var nod=gcd(process.argv[2],b=process.argv[3]);
function gcd(a,b){
    if(b===0){return Math.abs(a);}
    return gcd(b, a%b);
}
console.log(nod);
