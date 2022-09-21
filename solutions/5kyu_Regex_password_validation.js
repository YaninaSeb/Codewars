// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)

const REGEXP = /[a-z]+[A-Z]+[0-9]+/;


console.log(REGEXP.test('fjd3IR9'))

        // doTest('fjd3IR9', true);
		// doTest('ghdfj32', false);
		// doTest('DSJKHD23', false);
		// doTest('dsF43', false);
		// doTest('4fdg5Fj3', true);
		// doTest('DHSJdhjsU', false);
		// doTest('fjd3IR9.;', false);
		// doTest('fjd3  IR9', false);
		// doTest('djI38D55', true);
		// doTest('djI3_8D55', false);
		// doTest('djI38D55@@', false);