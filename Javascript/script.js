document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || isNaN(age)) {
        alert("Tolong masukkan nilai tinggi, berat, dan usia yang valid.");
        return;
    }

    const bmi = calculateBMI(height, weight);
    const { category, explanation } = categorizeBMI(bmi, age);

    displayResult(gender, age, bmi, category, explanation);
});

function calculateBMI(height, weight) {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

function categorizeBMI(bmi, age) {
    if (age < 18) {
        return { category: 'Tidak tersedia', explanation: 'BMI kategori anak-anak tidak tersedia dalam kalkulator ini.' };
    } else if (bmi < 18.5) {
        return { category: 'Kurus', explanation: 'Berat badan Anda kurang. Pertimbangkan untuk menambah asupan kalori.' };
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return { category: 'Normal', explanation: 'Berat badan Anda normal. Pertahankan pola makan dan gaya hidup sehat.' };
    } else if (bmi >= 25 && bmi < 29.9) {
        return { category: 'Berat badan berlebih', explanation: 'Anda memiliki berat badan berlebih. Pertimbangkan untuk mengadopsi pola makan yang lebih sehat dan lebih banyak berolahraga.' };
    } else {
        return { category: 'Obesitas', explanation: 'Anda mengalami obesitas. Disarankan untuk berkonsultasi dengan dokter untuk mendapatkan saran yang tepat.' };
    }
}

function displayResult(gender, age, bmi, category, explanation) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Hasil BMI</h2>
        <p>Jenis Kelamin: ${gender === 'male' ? 'Laki-Laki' : 'Wanita'}</p>
        <p>Usia: ${age}</p>
        <p>BMI: ${bmi}</p>
        <p>Kategori: ${category}</p>
        <p>Penjelasan: ${explanation}</p>
    `;
}
