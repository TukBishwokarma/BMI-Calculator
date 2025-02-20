let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status = false, weight_status = false;

    if (height === '' || isNaN(height) || height <= 0) {
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    } else {
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }

    // Fixed the typo here by correcting the if statement
    if (weight === '' || isNaN(weight) || weight <= 0) {
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if (height_status && weight_status) {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = 'Under Weight: ' + bmi;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = 'Normal: ' + bmi;
        } else { // Fixed typo here ("esle" to "else")
            result.innerHTML = 'Over Weight: ' + bmi;
        }
    } else { // Moved this else block outside of the condition
        alert('The form has errors');
        result.innerHTML = ''; 
    }
});
