"use strict";

// * bmi = weight/height*2
// * bmi<18.5=>underweight
// * bmi intre 18.5 si 25 => normal weight
// * bmi intre 25 si 30 -> overweight
// * bmi > 30 -> obesity

const weightInputElement = document.querySelector("#weight");
const heightInputElement = document.querySelector("#height");
const calculateBMIbutton = document.querySelector("#button");
const resultBMI = document.querySelector("#result");

function buttonClicked() {
  const weight = weightInputElement.value;
  const height = heightInputElement.value;

  if (weight == "" || height == "") {
    alert("please new value");
  }

  let bmi = weight / (height * height);

  let result;
  if (bmi < 18.5) {
    result = "underweight";
  } else if (bmi > 18.5 && bmi < 25) {
    result = "normal weight";
  } else if (bmi > 25 && bmi < 30) {
    result = "overweight";
  } else {
    result = "obesity";
  }
  resultBMI.innerText = result;
}

calculateBMIbutton.addEventListener("click", buttonClicked);

console.log(resultBMI);

/*

function buttonClicked() {
    const weight = weightInputElement.value;
    //console.log(weight);
    const height = heightInputElement.value;
    //console.log(height);
    let bmi = weight / (height * height);
    console.log(bmi);
    let result;
    if (bmi < 18.5) {
        result = "underweight";
    } else if (bmi > 18.5 && bmi < 25) {
        result = "normal weight";
    } else if (bmi > 25 && bmi < 30) {
        result = "overweight";
    } else {
        result = "obesity";
    }
    resultBMI.innerText = result;
}
calculateBMIButton.addEventListener("click", buttonClicked);

*/ 

// * -------------- Object oriented programming in JS --------------

var names = ["ryu", "crystal", "mario"];
names.length;
names.sort(); // * ordine alfabetica

var name = "mario";

console.log(name.length);

var name2 = new String ('ryu');

console.log(name2);