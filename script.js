document.getElementById('submit-button').addEventListener('click', function () {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;

    const result = `You entered: ${input1}, ${input2}, ${input3}`;
    document.getElementById('result').textContent = result;
});