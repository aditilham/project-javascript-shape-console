"use strict"

let choose = parseInt(prompt("Choose shape console you want = 1. Rectangle 2. Circle 3. Triangle 4. Square"));
switch (choose) {
    case 1:
        let rectangleWidth = parseInt(prompt("Input Rsectangle Width"));
        let rectangleHeigth = prompt("Input Rectangle Heigth");
        const rectangleArea = parseInt(rectangleWidth) * parseInt(rectangleWidth);
        alert("Rectangle Area = " + rectangleWidth + " x " + rectangleHeigth + " = " + rectangleArea);
        console.log("Rectangle Area = " + rectangleWidth + " x " + rectangleHeigth + " = " + rectangleArea);
        break;
    case 2:
        let circleRadius = parseInt(prompt("Input the Radius"));
        const circleArea = 3.14 * (circleRadius * circleRadius);
        alert("Circle Area = π x " + circleRadius + "² = " + circleArea);
        console.log("Circle Area = π x " + circleRadius + "² = " + circleArea);
        break;
    case 3:
        let triangleBase = parseInt(prompt("Input Triangle Base"));
        let triangleHeigth = parseInt(prompt("Input Triangle Heigth"));
        const triangleArea = 0.5 * triangleBase * triangleHeigth;
        alert("Triangle Area = 1/2 x " + triangleBase + " x " + triangleHeigth + " = " + triangleArea)
        console.log("Triangle Area = 1/2 x " + triangleBase + " x " + triangleHeigth + " = " + triangleArea)
        break;
    case 4:
        let squareWidth = parseInt(prompt("Input Square Width"));
        let squareHeigth = parseInt(prompt("Input Square Heigth"));
        const squareArea = squareHeigth * squareWidth;
        alert("Square Area = " + squareWidth + " x " + squareHeigth + " = " + squareArea);
        console.log("Square Area = " + squareWidth + " x " + squareHeigth + " = " + squareArea);
        break;
    default:
        console.log("There is no option for that");
        break;
}