function calculateStatistics() {

    const input = document.getElementById('numbers').value.trim();


    document.getElementById('error-message').style.display = 'none';
    document.getElementById('mean').textContent = '';
    document.getElementById('variance').textContent = '';
    document.getElementById('std-deviation').textContent = '';

    const numbersArray = input.split(/\s+/).map(Number);
    

    if (numbersArray.some(isNaN) || numbersArray.length === 0) {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('error-message').textContent = 'Enter valid numbers.';
        return;
    }


    const mean = calculateMean(numbersArray);

    const variance = calculateVariance(numbersArray, mean);

    const stdDev = Math.sqrt(variance);

    document.getElementById('mean').textContent = `Mean: ${mean.toFixed(2)}`;
    document.getElementById('variance').textContent = `Variance: ${variance.toFixed(2)}`;
    document.getElementById('std-deviation').textContent = `Standard Deviation: ${stdDev.toFixed(2)}`;
}

function calculateMean(arr) {
    const sum = arr.reduce((a,b)=>a+b,0);
    return sum / arr.length;
}

function calculateVariance(arr, mean) {
    const squaredDifferences = arr.map(num => Math.pow(num-mean,2));
    const sumSquaredDifferences = squaredDifferences.reduce((a,b)=>a+b,0);
    return sumSquaredDifferences/arr.length;
}
