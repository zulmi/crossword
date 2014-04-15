(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var entryData = [
			 	{
					clue: "14",
					answer: "fourteen",
					rot13: true,
					position: 3,
					orientation: "across",
					startx: 4,
					starty: 2
				},
			 	{
					clue: '11',
					answer: "eleven",
					rot13: true,
					position: 6,
					orientation: "across",
					startx: 14,
					starty: 2
				},
				{
					clue: "3",
					answer: "three",
					rot13: true,
					position: 7,
					orientation: "across",
					startx: 2,
					starty: 4
				},
				{
					clue: "1000",
					answer: "onethousand",
					rot13: true,
					position: 8,
					orientation: "across",
					startx: 9,
					starty: 5
				},
				{
					clue: "6",
					answer: "six",
					rot13: true,
					position: 9,
					orientation: "across",	
					startx: 7,
					starty: 7
				},
				{
					clue: "7",
					answer: "seven",
					rot13: true,
					position: 10,
					orientation: "across",
					startx: 15,
					starty: 7
				},
				{
					clue: "30",
					answer: "thirty",
					rot13: true,
					position: 13,
					orientation: "across",
					startx: 10,
					starty: 9
				},
				{
					clue: "70",
					answer: "seventy",
					rot13: true,
					position: 14,
					orientation: "across",
					startx: 2,
					starty: 10
				},
				{
					clue: "2",
					answer: "two",
					rot13: true,
					position: 17,
					orientation: "across",
					startx: 12,
					starty: 11
				},
				{
					clue: '80',
					answer: "eighty",
					rot13: true,
					position: 19,
					orientation: "across",
					startx: 7,
					starty: 12
				},
				{
					clue: '10',
					answer: "ten",
					rot13: true,
					position: 20,
					orientation: "across",
					startx: 5,
					starty: 13
				},
				{
					clue: '12',
					answer: "twelve",
					rot13: true,
					position: 21,
					orientation: "across",
					startx: 14,
					starty: 14
				},
				{
					clue: '60',
					answer: "sixty",
					rot13: true,
					position: 22,
					orientation: "across",
					startx: 7,
					starty: 15
				},
				{
					clue: '18',
					answer: "eighteen",
					rot13: true,
					position: 27,
					orientation: "across",
					startx: 10,
					starty: 17
				},
				{
					clue: '1000000',
					answer: "onemillion",
					rot13: true,
					position: 28,
					orientation: "across",
					startx: 1,
					starty: 18
				},
				{
					clue: '8',
					answer: "eight",
					rot13: true,
					position: 29,
					orientation: "across",
					startx: 8,
					starty: 20
				},


				{
					clue: '40',
					answer: "forty",
					rot13: true,
					position: 1,
					orientation: "down",
					startx: 2,
					starty: 1
				},
				{
					clue: "100",
					answer: "onehundred",
					rot13: true,
					position: 4,
					orientation: "down",
					startx: 5,
					starty: 2
				},
				{
					clue: "90",
					answer: "ninety",
					rot13: true,
					position: 5,
					orientation: "down",
					startx: 11,
					starty: 2
				},
				{
					clue: "17",
					answer: "seventeen",
					rot13: true,
					position: 2,
					orientation: "down",
					startx: 18,
					starty: 1
				},
				{
					clue: "16",
					answer: "sixteen",
					rot13: true,
					position: 9,
					orientation: "down",
					startx: 7,
					starty: 7
				},
				{
					clue: "20",
					answer: "twenty",
					rot13: true,
					position: 11,
					orientation: "down",
					startx: 3,
					starty: 8
				},
				{
					clue: "50",
					answer: "fifty",
					rot13: true,
					position: 12,
					orientation: "down",
					startx: 12,
					starty: 8
				},
				{
					clue: "15",
					answer: "fifteen",
					rot13: true,
					position: 15,
					orientation: "down",
					startx: 19,
					starty: 10
				},
				{
					clue: "13",
					answer: "thirteen",
					rot13: true,
					position: 16,
					orientation: "down",
					startx: 10,
					starty: 11
				},
				{
					clue: "19",
					answer: "nineteen",
					rot13: true,
					position: 18,
					orientation: "down",
					startx: 16,
					starty: 11
				},
				{
					clue: "1",
					answer: "one",
					rot13: true,
					position: 23,
					orientation: "down",
					startx: 3,
					starty: 16
				},
				{
					clue: "4",
					answer: "four",
					rot13: true,
					position: 24,
					orientation: "down",
					startx: 1,
					starty: 17
				},
				{
					clue: "5",
					answer: "five",
					rot13: true,
					position: 25,
					orientation: "down",
					startx: 5,
					starty: 17
				},
				{
					clue: "9",
					answer: "nine",
					rot13: true,
					position: 26,
					orientation: "down",
					startx: 8,
					starty: 17
				},
			] 
		$('#puzzle-wrapper').crossword({ entryData: entryData, showAnswers: false});
	})
	
})(jQuery)