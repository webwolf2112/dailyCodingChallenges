const isUnique = (string) => {

    const uniqueObject = {};
  
    for( letter of string) {
      if( uniqueObject[letter]) {
        return false;
      }
      uniqueObject[letter] = letter;
  
    }
  
    return true;
  };
  
  const isUniqueNoAdditionalDataStructure = ( string ) => {
  
    for( let i = 0; i < string.length; i++ ) {
      for( let s = i+1; s < string.length; s++) {
        if( string[i] === string[s]) {
          return false;
        }
      }
    }
    return true;
  };
  
  
  console.log(isUnique("hello world"), 'false');
  console.log(isUnique("hi world"), 'true');
  
  console.log(isUniqueNoAdditionalDataStructure("hello world"), 'false');
  console.log(isUniqueNoAdditionalDataStructure("hi world"), 'true');