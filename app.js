// app.js
document.addEventListener('DOMContentLoaded', () => {
    const playerDisplay = document.getElementById('player');
    const buttons = document.querySelectorAll('.XOBtn');
    const resetButton = document.getElementById('resetBtn');

    let currentPlayer = "X";

    // Function to update the current player display
    const updatePlayerDisplay = () => {
        playerDisplay.textContent = `Player: ${currentPlayer}`;
    };

    const resetBoard = () => {
        buttons.forEach(button => {
            button.disabled = false;
            button.textContent = '';
        });
    }
    
    // Function to handle button click
    const handleButtonClick = (event) => {
        const button = event.target;
        if (button.textContent.trim() === '') {
            button.textContent = currentPlayer;
            button.disabled = true;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            updatePlayerDisplay();
        }
    };

    // Add event listeners to all buttons
    buttons.forEach(button => {
        console.log("button click");
        button.addEventListener('click', handleButtonClick);
    });

    resetButton.addEventListener('click', resetBoard);

    updatePlayerDisplay();
    console.log("player display updated");
});
