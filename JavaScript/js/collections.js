/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




function findMax(arr) {
	var max = arr[0];
	for(var i=1; i<arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

function sumOfRange(arr) {
	var total = 0;
	for(var i=0; i<arr.length; i++) {
		total += arr[i];
	}
	return total;
}