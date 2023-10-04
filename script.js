// Event listeners
document.getElementById('backspace').addEventListener('click', clearOne)
document.getElementById('clear').addEventListener('click', clearAll)
document.getElementById('(').addEventListener('click', leftParen)
document.getElementById(')').addEventListener('click', rightParen)
document.getElementById('1/x').addEventListener('click', fraction)
document.getElementById('x^2').addEventListener('click', square)
document.getElementById('%').addEventListener('click', percent)
document.getElementById('/').addEventListener('click', divide)
document.getElementById('*').addEventListener('click', multiply)
document.getElementById('-').addEventListener('click', substract)
document.getElementById('+').addEventListener('click', add)
document.getElementById('.').addEventListener('click', period)
document.getElementById('0').addEventListener('click', zero)
document.getElementById('1').addEventListener('click', one)
document.getElementById('2').addEventListener('click', two)
document.getElementById('3').addEventListener('click', three)
document.getElementById('4').addEventListener('click', four)
document.getElementById('5').addEventListener('click', five)
document.getElementById('6').addEventListener('click', six)
document.getElementById('7').addEventListener('click', seven)
document.getElementById('8').addEventListener('click', eight)
document.getElementById('9').addEventListener('click', nine)
document.getElementById('00').addEventListener('click', doubleZero)
document.getElementById('=').addEventListener('click', calculate)
document.getElementById('display').addEventListener('input',calculate2)
window.addEventListener('click', calculate2)

window.addEventListener('keypress', (event) => {
    let end = document.getElementById('display').value.length
    document.getElementById('display').setSelectionRange(end, end);
    document.getElementById('display').focus();
});


// Functions
function clearOne() {
    let val = document.getElementById('display').value
    val2 = val.slice(0, -1)
    document.getElementById('display').value = val2
}
function clearAll() {
    document.getElementById('display').value = null
    document.getElementById('display2').value = null
}
function leftParen() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('(')
}
function rightParen() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat(')')
}
function fraction() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('1/')
}
function square() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('^2')
}
function divide() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('/')
}
function multiply() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('*')
}
function substract() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('-')
}
function add() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('+')
}
function period() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('.')
}
function percent() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('%')
}
function one() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('1')
}
function two() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('2')
}
function three() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('3')
}
function four() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('4')
}
function five() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('5')
}
function six() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('6')
}
function seven() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('7')
}
function eight() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('8')
}
function nine() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('9')
}
function zero() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('0')
}
function doubleZero() {
    let val = document.getElementById('display').value
    document.getElementById('display').value = val.concat('00')
}
function calculate() {
    let val = document.getElementById('display').value
    val2 = math.evaluate(val)
    document.getElementById('display').value = val2
}
function calculate2() {
    let val = document.getElementById('display').value
    val2 = math.evaluate(val)
    if (typeof val2 !== 'undefined') {
        document.getElementById('display2').innerHTML = val2
    } 
    else {
        document.getElementById('display2').innerHTML = ''
    } 
}