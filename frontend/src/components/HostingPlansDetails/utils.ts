export function camelCaseToCapitalizedWords(camelCaseString: string): string {
    // Split the camel case string into words
    const words = camelCaseString.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
  
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
    // Join the capitalized words into a single string
    return capitalizedWords.join(' ');
  }
  