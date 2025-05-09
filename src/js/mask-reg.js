function removeFirstSeven(input) {
    const numbers = input.split('');
    numbers.splice(0, 1)
    if (numbers[1] == '7' || numbers[1] == '8') numbers.splice(1, 1);
    return '8' + numbers.join('');
}
const telForm = document.querySelector('#formValidationTel');
telForm.addEventListener("input", () => telForm.value = removeFirstSeven(telForm.value));