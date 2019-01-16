// Hello return olleh


function reverse(str){
  if(str.length === 0) return str;
  return str.charAt(str.length-1) + reverse(str.slice(0, str.length - 1));
}

// OR
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

