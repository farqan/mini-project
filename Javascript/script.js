document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight)) {
        alert("Tolong masukkan nilai tinggi dan berat yang valid.");
        return;
    }

    const bmi = calculateBMI(height, weight);
    const category = categorizeBMI(bmi);

    displayResult(gender, bmi, category);
});

function calculateBMI(height, weight) {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

function categorizeBMI(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

function displayResult(gender, bmi, category) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Hasil BMI</h2>
        <p>Jenis Kelamin: ${gender === 'male' ? 'Laki-Laki' : 'Wanita'}</p>
        <p>BMI: ${bmi}</p>
        <p>Kategori: ${category}</p>
    `;
}
