function getTriangleArea(a, h) { 
  if ((a < 0) && (h < 0)) {
     return "Nieprawidłowe dane";
  } else {
     return a * h / 2;
  }
  };

 var triangleArea = getTriangleArea(5, 5);
  console.log(triangleArea);

console.log(getTriangleArea(10, 6));

var triangleArea1 = getTriangleArea(10, 10);
var triangleArea2 = getTriangleArea(3, 9);
var triangleArea3 = getTriangleArea(19, 8);

console.log(triangleArea3);
