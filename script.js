const display = document.getElementById("input-display")

function addToDisplay(char){
    if(display.value=='ERROR') clearDisplay()
    display.value += char
}

function clearDisplay(){
    display.value = ''
}

function calculate(){
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'ERROR'
    }
}

function backspace(){
    if(display.value=='ERROR') clearDisplay()
    display.value = display.value.slice(0, display.value.length -1)
}