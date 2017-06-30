//fizzBuzzer should

describe('fizzbuzz', function() {
    it('should be a type of number');
    it('if number is % 15 it should return 0');
    it('if number is % 5 it should return 0');
    it('if number is % 3 it should return 0');
    it('if number returned is greater than 0, it should return number');
})


module.exports = function(num) {
	if (typeof num !== 'number') {
		throw Error('`num` must be a number');
	}
	if (num % 15 === 0) {
		return 'fizz-buzz';
	}
	if (num % 5 === 0) {
		return 'buzz';
	}
	if (num % 3 === 0) {
		return 'fizz';
	}
	else {
		return num;
	}
}