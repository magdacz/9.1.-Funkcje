function getTriangleArea(a, h) { 
  if ((a > 0) && (h > 0)) {
     return a * h / 2;
  } else {
     return "Nieprawidłowe dane";
  }
  };

 var triangleArea = getTriangleArea(5, 5);
  console.log(triangleArea);

console.log(getTriangleArea(10, 6));

var triangleArea1 = getTriangleArea(-4, 10);
var triangleArea2 = getTriangleArea(3, 9);
var triangleArea3 = getTriangleArea(19, 0);

console.log(triangleArea1);
console.log(triangleArea2)
console.log(triangleArea3)
