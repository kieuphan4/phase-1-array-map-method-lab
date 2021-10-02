const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(string => 
    string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  )
}

// function titleCased(string) {
//   const words = string.split(' ');
//   const correctCased = words.map(function (tutorials) {
//     return tutorials.charAt(0).toUpperCase() + tutorials.slice(1);
//   });
//   return correctCased.join(' ');
// }