let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let winnerMessage = document.querySelector("#winnerMessage");

let turn0 = true; // true = O, false = X

let winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (box.innerText !== "") {
            return;
        }

        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }

        box.disabled = true;

        checkWinner();
    });

});

function checkWinner() {

    for (let pattern of winningPatterns) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {

            // Console ki jagah screen par message
            winnerMessage.innerText = `🎉 Congratulations! ${pos1} is the Winner! 🎉`;

            disableBoxes();

            return;
        }
    }

    // Draw check
    let allFilled = true;

    boxes.forEach((box) => {
        if (box.innerText === "") {
            allFilled = false;
        }
    });

    if (allFilled) {
        winnerMessage.innerText = "🤝 Game Draw! Well Played! 🎮";
    }
}

function disableBoxes() {

    boxes.forEach((box) => {
        box.disabled = true;
    });

}

resetBtn.addEventListener("click", () => {

    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });

    turn0 = true;

    // Winner message bhi remove
    winnerMessage.innerText = "";
});