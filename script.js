function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value) / 100; // convert to meters
  const weight = parseFloat(document.getElementById("weight").value);

  if (!height || !weight) {
    alert("Please enter valid height and weight.");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(1);
  document.getElementById("bmiValue").innerText = `BMI = ${bmi}`;

  let category = "";
  let degree = 0;

  if (bmi < 18.5) {
    category = "Underweight";
    degree = mapValue(bmi, 10, 18.5, -90, -30);
  } else if (bmi < 25) {
    category = "Normal";
    degree = mapValue(bmi, 18.5, 25, -30, 30);
  } else if (bmi < 30) {
    category = "Overweight";
    degree = mapValue(bmi, 25, 30, 30, 60);
  } else {
    category = "Obesity";
    degree = mapValue(bmi, 30, 40, 60, 90);
  }

  document.getElementById("needle").style.transform = `rotate(${degree}deg)`;
  document.getElementById("resultText").innerText = `Result: ${category}`;
}

// Helper: maps BMI range to degree range
function mapValue(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
