// Nút correct
let correctButton = document.getElementById("clickCorrect")

// Nút wrong
let wrongButton = document.getElementById("clickWrong")

// Khung hiển thị số để tạo hiệu ứng translate
let resetRandomNumber = document.getElementById("freekingMath--calculation")

// Tạo biến đếm số lượt đúng và hiển thị
let countCorrect = 0
let showRCountCorrect = document.getElementById("freekingMath--countTurn")

// 2 số của phép toán
let showNumber1 = document.getElementById("number1")
let showNumber2 = document.getElementById("number2")

// 2 số bất kỳ để làm phép toán
let randomNum1;
let randomNum2;
let randomResultShow = document.getElementById("calcResult")

// Nút start game
let start = document.getElementById("gameStart")

// Hàm bắt đầu game khi bấm start
function startGame() {
    randomShowNumber()
    start.style.opacity = "0.4"
    start.disabled = true
    start.style.backgroundColor = "white"
    start.style.transition = "0.5s"
    start.style.color = "black"
    start.style.transform = "scale(1)"

    wrongButton.disabled = false
    wrongButton.style.opacity = "1"
    correctButton.disabled = false
    correctButton.style.opacity = "1"
    countCorrect = 0
    showRCountCorrect.innerText = 0


}

// Hàm tạo phép toán
function randomShowNumber() {

    countCorrect++
    showRCountCorrect.innerText = countCorrect


    // Change background color
    let colors = ["lightcoral", "lightsalmon", "lightseagreen", "lightslategrey", "peru", "SaddleBrown", "Chocolate", "RosyBrown", "DarkOliveGreen"]
    let randomIndex = Math.floor(Math.random() * colors.length - 1)
    let bg = document.getElementById("freekingMath")
    bg.style.backgroundColor = colors[randomIndex]

    // Tạo kết quả ngẫu nhiên
    randomResult = Math.floor(Math.random() * 20) + 1
    randomResultShow.innerText = randomResult

    // Tạo 2 số ngẫu nhiên phụ thuộc vào kết quả
    if (randomResult <= 7) {

        randomNum1 = Math.floor(Math.random() * (3 - 1)) + 2
        randomNum2 = Math.floor(Math.random() * (4 - 1)) + 3

        showNumber1.innerText = randomNum1
        showNumber2.innerText = randomNum2

    } else if (randomResult > 7 && randomResult <= 15) {

        randomNum1 = Math.floor(Math.random() * (8 - 4)) + 4
        randomNum2 = Math.floor(Math.random() * (7 - 4)) + 4

        showNumber1.innerText = randomNum1
        showNumber2.innerText = randomNum2

    } else if (randomResult > 15 && randomResult <= 20) {

        randomNum1 = Math.floor(Math.random() * (10 - 8)) + 8
        randomNum2 = Math.floor(Math.random() * (9 - 7)) + 7

        showNumber1.innerText = randomNum1
        showNumber2.innerText = randomNum2
    }
    return randomNum1, randomNum2, randomResult
}

// Start Game
randomShowNumber()

// Biến chứa kết quả của phép toán
let compareResult

// Hàm tính kết quả của phép toán
function getReult() {
    compareResult = (randomNum1 + randomNum2) - randomResult
    console.log(compareResult)

}

// Khi bấm Correct Button
function chooseCorrect() {

    // Lấy kết quả của phép toán
    getReult()

    // Tạo hiệu ứng bấm nút
    correctButton.style.backgroundColor = "white"
    correctButton.style.color = "green"
    correctButton.style.transform = "scale(0.9)"


    if (compareResult === 0) {
        // NẾU NGƯỜI CHƠI CHỌN ĐÚNG

        // Cho khung phép toán sang trái
        resetRandomNumber.style.transition = "0.6s"
        resetRandomNumber.style.transform = "translate(-600px)"

        // Sau 0,2s mới hiện phép toán mới để ko kịp nhìn thấy sự thay đổi của khung
        setTimeout(() => {
            randomShowNumber()
        }, 200);

        // Sau 0,4s quay lại chỗ cũ với phép toán mới
        setTimeout(() => {
            resetRandomNumber.style.transform = "translate(0)"
        }, 400);

    } else if (compareResult !== 0) {
        // resetRandomNumber.style.fontSize = "50px"
        // resetRandomNumber.innerText = `Xong con ong`
        alert("BIẾT CỘNG KHÔNG ĐẤY?")
        resetCorrectNumber()
        resetWrongNumber()
        start.disabled = false
        start.style.transition = "1s"
        start.style.opacity = "1"
        start.style.transform = "scale(1.5)"
        start.style.backgroundColor = "green"
        start.style.color = "white"

        showRCountCorrect.innerText = 0
        wrongButton.disabled = true
        correctButton.disabled = true
        wrongButton.style.opacity = "0.5"
        correctButton.style.opacity = "0.5"

    }

}

// Khi bấm Correct Button
function chooseWrong() {

    // Lấy kết quả của phép toán
    getReult()

    // Tạo hiệu ứng bấm nút
    wrongButton.style.backgroundColor = "white"
    wrongButton.style.color = "red"
    wrongButton.style.transform = "scale(0.9)"


    if (compareResult !== 0) {
        // NẾU NGƯỜI CHƠI CHỌN ĐÚNG

        // Cho khung phép toán sang trái
        resetRandomNumber.style.transition = "0.6s"
        resetRandomNumber.style.transform = "translate(600px)"

        // Sau 0,2s mới hiện phép toán mới để ko kịp nhìn thấy sự thay đổi của khung
        setTimeout(() => {
            randomShowNumber()
        }, 200);

        // Sau 0,4s quay lại chỗ cũ với phép toán mới
        setTimeout(() => {
            resetRandomNumber.style.transform = "translate(0)"
        }, 400);


    } else if (compareResult === 0) {
        // resetRandomNumber.style.fontSize = "50px"
        // resetRandomNumber.innerText = `Xong con ong`
        alert("BIẾT CỘNG KHÔNG ĐẤY?")
        resetCorrectNumber()
        resetWrongNumber()
        start.disabled = false
        start.style.transition = "1s"
        start.style.opacity = "1"
        start.style.backgroundColor = "green"
        start.style.color = "white"
        start.style.transform = "scale(1.5)"

        showRCountCorrect.innerText = 0
        wrongButton.disabled = true
        correctButton.disabled = true
        wrongButton.style.opacity = "0.5"
        correctButton.style.opacity = "0.5"

    }
}

function resetCorrectNumber() {
    // Reset Correct Button
    correctButton.style.backgroundColor = "green"
    correctButton.style.color = "white"
    correctButton.style.transform = "scale(1.03)"
}

function resetWrongNumber() {
    // Reset Wrong Button
    wrongButton.style.backgroundColor = "red"
    wrongButton.style.color = "white"
    wrongButton.style.transform = "scale(1.03)"
}