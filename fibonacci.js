function getFibonacci(extraLength) {
	if(extraLength > 1474) {
		throw new Error('Unable to generate a Fibonacci sequence that has more than 1476 items')
	}
	const seq = [1,1];
	for(let i = 0; i < extraLength; i += 1) {
		seq[seq.length] = seq[seq.length - 1] + seq[seq.length - 2];
	}
	return seq;
}

module.exports = getFibonacci;