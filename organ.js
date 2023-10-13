// Get the elements
const timerElement = document.querySelector('.time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let timerInterval;
let currentTime = 0;

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function startTimer() {
  startButton.disabled = true;
  stopButton.disabled = false;

  timerInterval = setInterval(function () {
    currentTime++;
    timerElement.textContent = formatTime(currentTime);
  }, 1000);
}

function stopTimer() {
  startButton.disabled = false;
  stopButton.disabled = true;
  
  clearInterval(timerInterval);
}

function resetTimer() {
  currentTime = 0;
  timerElement.textContent = formatTime(currentTime);
  startButton.disabled = false;
  stopButton.disabled = true;
  
  clearInterval(timerInterval);
}

// Event listeners for buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
