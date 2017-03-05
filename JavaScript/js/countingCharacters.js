/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function countingCharacters(stringToCount){
	// The length property has been mentioned in
	// the Logging Letter Exercise in Lesson 4
	console.log(stringToCount + " has " + stringToCount.length + " characters.");
}

function countingCharacters2(stringToCount, characterToFind) {
	var characterCount = 0;
	for(var characterPosition = 0; characterPosition < stringToCount.length; characterPosition++) {
		if(stringToCount[characterPosition] == characterToFind) {
			characterCount++;
		}
	}
	console.log("String to search in: " + stringToCount);
	console.log("Character to find: " + characterToFind);
	console.log("Number of times the character appears: " + characterCount);
}

// my way
//function countingCharacters3(str, search) {
//	var count = 0;
//	for(var characterPosition = 0; characterPosition < str.length; characterPosition++){
//		if(str[characterPosition] +str[characterPosition + 1] == search){
//		count++;
//		}
//	}
//	console.log("String to search in: " + str);
//	console.log("Characters to find: " + search);
//	console.log("Number fo times the characters appear: " + count);
//}

// their way
function countingCharacters3(str, search) {
	var count = 0;
	var numChars = search.length;
	var lastIndex = str.length - numChars;
	for(var index = 0; index <= lastIndex; index++){
		var current = str.substring(index, index + numChars);
		if(current == search){
		count++;
		}
	}
	return count;
}