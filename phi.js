const getFibonacci = require('./fibonacci');

function generatePhi(calAmount) {
	const fibonacci = getFibonacci(calAmount);
	return (fibonacci[fibonacci.length - 1] / fibonacci[fibonacci.length - 2])
}