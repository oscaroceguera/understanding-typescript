// There are some cases when we want to enforce object keys being certain values only.
// And here is how we can achieve it using enum and Record.

enum Size {
  M,
  L,
  XL
}

// Record is a generic type util, which allows defining types for key-value maps.
function getPlainTextSizes(): Record<Size, string>{
  return {
    [Size.M]: "medium",
    [Size.L]: "large",
    [Size.XL]: "extra large",
    10: "small", // error
    "size": "xs" // error
  }

}