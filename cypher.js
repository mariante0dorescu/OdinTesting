const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z']

function encode(str,shift) {
	let encoded = "";
  
  for(const letter of str.split('')) {
    if()

  	else if((letters.indexOf(letter) + shift) >= letters.length) {
    	encoded += (letters[(letters.indexOf(letter) + shift) - letters.length]) ;

    } else {
    	encoded += letters[letters.indexOf(letter) + shift]
    }
  }
  
  return encoded;
}
//console.log(letters.length)

// helper
function checkPunctation(letter) {
  let punctation = ['!','@', '#']
}

console.log(encode('abz', 1))