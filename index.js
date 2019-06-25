"use strict"

let choose = prompt("Choose shape console you want = 1. Rectangle 2. Circle 3. Triangle 4. Square");
switch (choose) {
    case "1":
        let rectangleWidth = prompt("Input Rectangle Width");
        let rectangleHeigth = prompt("Input Rectangle Heigth");
        const rectangleArea = parseInt(rectangleWidth) * parseInt(rectangleWidth);
        console.log("Rectangle Area = " + rectangleWidth + " x " + rectangleHeigth + " = " + rectangleArea);
        break;
    case "2":
        let circleRadius = prompt("Input the Radius");
        const circleArea = 3.14 * (circleRadius * circleRadius);
        console.log("Circle Area = π x " + circleRadius + "² = " + circleArea);
        break;
    case '3':
        let triangleBase = prompt("Input Triangle Base");
        let triangleHeigth = prompt("Input Triangle Heigth");
        const triangleArea = 0.5 * triangleBase * triangleHeigth;
        console.log("Triangle Area = 1/2 x " + triangleBase + " x " + triangleHeigth + " = " + triangleArea)
        break;
    case '4':
        let squareWidth = prompt("Input Square Width");
        let squareHeigth = prompt("Input Square Heigth");
        const squareArea = squareHeigth * squareWidth;
        console.log("Square Area = " + squareWidth + " x " + squareHeigth + " = " + squareArea);
        break;
    default:
        console.log("There is no option for that");
        break;
}