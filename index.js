// reto 1, uso del método de prueba, se puede buscar una palabra

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line


// reto 2, unir cuerdas literales
/*
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
// Returns true

Cualquier otra forma de "Kevin"no coincidirá. Por ejemplo, la expresión regular /Kevin/no coincidirá "kevin"o "KEVIN".

let wrongRegex = /kevin/;
wrongRegex.test(testStr);
// Returns false
*/


let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);


// reto 3, unir una cadena literal con diferentes posibilidades, Puede buscar varios patrones de uso de la alternationo ORdel operador: |.
// Este operador hace coincidir los patrones antes o después de él. Por ejemplo, si desea hacer coincidir "yes"o "no", la expresión regular que desea es /yes|no/.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);


// reto 4, ignorar el caso mientras coinciden con i, esto se llama bandera, ejemplo:

// /ignorecase/i. Esta expresión regular puede igualar las cuerdas "ignorecase", "igNoreCase"y "IgnoreCase", etc.

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);


// reto 5, Extraer Partidas, También puede extraer las coincidencias reales que encontró con el .match()método.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line


// reto 6, Extraer Partidas, Para buscar o extraer un patrón más de una vez, puede usar la g bandera.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line


// reto 7, empareja cualquier cosa con un punto comodín, cuando no sabes si tiene ortografia diferente: "run", "sun", "fun", "pun", "nun", and "bun", trae las coincidencias

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);


// reto 8, unir un solo personaje con múltiples posibilidades. Utilice una clase de caracteres con vocales ( a, e, i, o, u) en su expresión regular vowelRegexpara encontrar todas las vocales en la cadena quoteSample.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[a,e,i,o]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line


// reto 9, empareja las letras del alfabeto

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line


// reto 10, empareja números y letras del alfabeto

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line


// reto 11, hacer coincidir caracteres individuales no especificados, con el simbolo ^ no aparecen lo que se describa, se tiene en cuenta espacios, ., !, [, @, /.

let quoteSample = "3 blind mice.";
let myRegex = /[^0-9 .]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line


// reto 12, caracteres de coincidencia que ocurren una o más veces

let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; // Change this line
let result = difficultSpelling.match(myRegex);


// reto 13, caracteres de coincidencia que ocurren cero o más veces

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);


// reto 14, Encuentra personajes con lazabilidad 

let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1>?/; // Change this line
let result = text.match(myRegex);


// reto 15, encontrar uno o más criminales en una cacería

// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);


// reto 16, emparejar patrones de cadena de inicio

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);


// reto 17, emparejar patrones de cadena de finalización

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);


// reto 18, une todas las letras y números

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;


// reto 19, haz coincidir todo menos letras y números

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;


// reto 20, empareja todos los números

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let result = numString.match(numRegex).length;


// reto 21, empareja todos los no números

let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let result = numString.match(noNumRegex).length;


// reto 22, restringir posibles nombres de usuario

let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i;
let result = userCheck.test(username);


// reto 23, mparejar espacios en blanco

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);


// reto 24, empareja caracteres que no sean espacios en blanco

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);


// reto 25, especifique el número superior e inferior de coincidencias

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);


// reto 26, especifique solo el número inferior de coincidencias

let haStr = "Hazzzzah";
let haRegex = /z{4,}/; // Change this line
let result = haRegex.test(haStr);


// reto 27, Especifique el número exacto de coincidencias

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);


// reto 28, comprobar para todos o ninguno

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);


// reto 29, lookahead positivo y negativo, son patrones que le indican a JavaScript que mire hacia adelante en su cadena para verificar si hay patrones más adelante

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);


// reto 30, reutilizar patrones usando grupos de captura

let repeatNum = "42 42 42";
let reRegex =  /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);


// reto 31, utilice grupos de captura para buscar y reemplazar

let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);


// reto 32, eliminar espacios en blanco de inicio y fin

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line


// FIN !!
