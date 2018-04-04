function getTriangleArea(a, h) { 
  return a * h / 2 
};

if ((a < 0) && (h < 0)) {
  console.log("Nieprawidłowe dane")
};

console.log(getTriangleArea(10, 6));

var triangleArea1 = getTriangleArea(10, 10);
var triangleArea2 = getTriangleArea(3, 9);
var triangleArea3 = getTriangleArea(19, 8);

console.log(triangleArea3);
