"use strict";
/*
  An intersection type is a way of combining multiple types into one. Meaning that you can merge
  a given type A with a type B or more and get back a single type with all properties.

  As you can see, IntersectionType combines two types - LeftType and RightType and use the & sign
  to construct the intersection type.
*/
function showType(args) {
  console.log(args);
}
showType({ id: 1, left: "test", right: "test" });
