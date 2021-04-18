let stringNumber = ""
let resultCalc = document.getElementById("result")



function chooseNumber(numberC) {
    stringNumber += numberC
    resultCalc.innerText = stringNumber

}


function calcu(userAction) {
    stringNumber += userAction
    resultCalc.innerText = stringNumber
}

function clearAll() {
    stringNumber = ""
    resultCalc.innerText = 0
}

function getResult() {
    let finalResult = eval(stringNumber)
    resultCalc.innerText = finalResult
    stringNumber = finalResult
}


// Có thể lấy kết quả để tiếp tục thực hiện phép tính được
// Phải AC để reset máy tính mới tiếp tục phép tính mới