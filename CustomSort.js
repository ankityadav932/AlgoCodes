var yourArray = ["E", "D", "CC", "C", "B", "BB", "BBA", "BBD", "BBE", "BBB", "BBBC", "A", "AA"];  // Unsorted Array	

let customerSort = (arr) => 
{
	// This loop is for iterating array
	for (var i = 0; i < arr.length; i++) 
	{	
		// This loop is for comparing each item of the array with all items in array
		for (var j = 0; j < arr.length; j++)
		{
			// This condition is for sorting array in alphabetical order
			if (arr[i] < arr[j]) 
			{
				var x = arr[i];
				arr[i] = arr[j];
				arr[j] = x; 
			}

			// This condition is for sorting array by last character
			if (arr[i].charAt(0) == arr[j].charAt(0) && arr[i].charAt(arr[i].length - 1) < arr[j].charAt(arr[j].length - 1)) 
			{
				var x = arr[i];
				arr[i] = arr[j];
				arr[j] = x; 
			}

			// This condition is for sorting array by Stirng Length
			if (arr[i].charAt(0) == arr[j].charAt(0) && arr[i].length > arr[j].length) 
			{
				var x = arr[i];
				arr[i] = arr[j];
				arr[j] = x; 
			}
		}
	}

	// return Sorted Array
	return arr;
}

console.log(customerSort(yourArray));
// Produces => ["AA","A","BBBC","BBA","BBB","BBD","BBE","BB","B","CC","C","D","E"]
