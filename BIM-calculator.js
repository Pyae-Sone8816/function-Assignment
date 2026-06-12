function metricUnits(height, weight) {
  let BMI = Number(weight / Math.pow(height, 2)).toFixed(2);
  if (BMI < 18.5) {
    console.log("Your body is Under Weight");
  } else if (BMI > 18.5 && BMI < 24.9) {
    console.log("Your body is Healthy Weight");
  } else if (BMI > 25 && BMI < 29.9) {
    console.log("Your body is Over Weight");
  } else if (BMI >= 30) {
    console.log("Your body is Obsense");
  }
}

metricUnits(2, 60); //Under Weight
metricUnits(2, 80); //Healthy Weight
metricUnits(2, 110); //Over Weight
metricUnits(2, 140); //Obsense

console.log("===========================Imperial Units============================================");

function imperialUnits(height, weight) {
  let BMI = Number((weight * 703) / Math.pow(height, 2)).toFixed(2);
  if (BMI < 18.5) {
    console.log("Your body is Under Weight");
  } else if (BMI > 18.5 && BMI < 24.9) {
    console.log("Your body is Healthy Weight");
  } else if (BMI > 25 && BMI < 29.9) {
    console.log("Your body is Over Weight");
  } else if (BMI >= 30) {
    console.log("Your body is Obsense");
  }
}
imperialUnits(70, 120);
imperialUnits(70, 150);
imperialUnits(70, 190);
imperialUnits(70, 250);
