function getnumberOrDefault(value?: number) {
  return value || 22;
}

console.log(getnumberOrDefault(10)) // Output 10
console.log(getnumberOrDefault(0)) // Output 22

// In the mentioned example, we would like to return a default value,
// if the provided value is undefined. However, this code has a severe 
// pitfall — javascript treats 0 as a falsy value.


// Returning 22 is probably, not something we expect this function to do.
// Thanks to the nullish coalescing we don't need to refactor the code and
// add check for 0, instead we can use a shorthand syntax with ??.

function getnumberOrDefault2(value?: number) {
  return value ?? 22;
}

console.log(getnumberOrDefault2(10)) // Output 10
console.log(getnumberOrDefault2(0)) // Output 0