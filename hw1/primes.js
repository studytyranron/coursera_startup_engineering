#!/usr/bin/env node
var fs = require('fs'),
    primes = [2],
    isPrime = function(v) {
	for(var i in primes) {
	    if(v%primes[i] == 0)
		return false;
	}
	return true;
    };
for(var i=3;primes.length<100;i+=2) {
    if(isPrime(i))
        primes.push(i);
}
fs.writeFileSync('primes.txt', primes.join(','));
