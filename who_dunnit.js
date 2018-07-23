1. console.log(verdict); prints 'The murderer is Miss Scarlet.'

2. You would get a TypeError as you cannot reassign a value to a const.

3. console.log('First Verdict: ', firstVerdict); prints 'First Verdict: The murderer is Mrs.Peacock.'
console.log('Second Verdict: ', secondVerdict); prints 'Second Verdict: The murderer is Professor Plum'

4. console.log(suspects); prints 'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.';
  console.log(`Suspect three is ${suspectThree}.`); prints `Suspect three is Mrs. Peacock.`

5. console.log(verdict); prints 'The weapon is the Revolver.'

6. console.log(verdict); prints 'The murderer is Mrs White.'
 // This is because the plotTwist() function is within the changeMurderer()
// function and so when you call changeMurderer() you call plotTwits(),
// changing the murderer to Mrs. White.

7. console.log(verdict); prints 'The murderer is Mr. Green'

// This is because the unexpectedOutcome() function is nested within the plotTwist() function,
// so the let variable assignment of Colonel Mustard cannot override the implicit global variable of Mr. Green,
// changeMurderer and so it fails and stays as Mr. Green.

8. console.log(verdict); prints 'The weapon is Candle Stick.'

9. console.log(verdict); prints 'The murderer is Professor Plum.'
// As let murderer the second time is only true within the function, the let variable remains
//'Professor Plum'. As 'Variables declared with `let` are block scoped.
// This means they don't exist outside the block (`{}`) that they are declared in' i.e. in the conditional used here.
