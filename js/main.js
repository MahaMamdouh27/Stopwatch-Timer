let restBtn = document.querySelector(".rest");
let playBtn = document.querySelector(".play");
let lapBtn = document.querySelector(".lap");
let minute = document.querySelector(".minute");
let second = document.querySelector(".sec");
let mSecond = document.querySelector(".msec");
let laps = document.querySelector(".laps");
let clearBtn = document.querySelector(".lapClearBtn");

let isPlay = false;
let minCounter = 0;
let min;
let secCounter = 0;
let sec;
let mSecCounter = 0;
let mSec;
let lapNumber = 0;

let toggleBtn = () => {
  lapBtn.classList.remove("hidden");
  restBtn.classList.remove("hidden");
};

let play = () => {
  if (!isPlay) {
    playBtn.innerHTML = "Pause";
    min = setInterval(() => {
      minute.innerHTML = `${++minCounter} : `;
    }, 60 * 1000);

    sec = setInterval(() => {
      if (secCounter === 59) {
        secCounter = 0;
      }
      second.innerHTML = `&nbsp;${++secCounter} : `;
    }, 1000);
    mSec = setInterval(() => {
      if (mSecCounter === 100) {
        mSecCounter = 0;
      }
      mSecond.innerHTML = `&nbsp;${++mSecCounter} `;
    }, 10);

    isPlay = true;
  } else {
    playBtn.innerHTML = "Play";

    clearInterval(min);
    clearInterval(sec);
    clearInterval(mSec);
    isPlay = false;
  }

  toggleBtn();
};

let rest = () => {
  play();
  lapBtn.classList.add("hidden");
  restBtn.classList.add("hidden");
  playBtn.innerHTML = "Play";
  minute.innerHTML = "00 :";
  second.innerHTML = "00 :";
  mSecond.innerHTML = "00 ";

  clearInterval(min);
  clearInterval(sec);
  clearInterval(mSec);

  minCounter = 0;
  secCounter = 0;
  mSecCounter = 0;

  laps.innerHTML = "";
  laps.append(clearBtn);
  lapNumber = "0";

  clearBtn.classList.add("d-none");
};

let lap = () => {
  let li = document.createElement("li");
  let number = document.createElement("span");
  let timeStamp = document.createElement("span");

  li.setAttribute("class", "lapItems");
  number.setAttribute("class", "number");
  timeStamp.setAttribute("class", "timeStamp");

  number.innerHTML = `${++lapNumber})`;

  timeStamp.innerHTML = `${minCounter} : ${secCounter} : ${mSecCounter}`;
  clearBtn.classList.remove("d-none");
  li.append(number, timeStamp);
  laps.append(li);
};

let clearAll = () => {
  laps.innerHTML = "";
  laps.append(clearBtn);
  lapNumber = "0";
  clearBtn.classList.add("d-none");
};
lapBtn.addEventListener("click", function () {
  laps.classList.remove("d-none");
  laps.classList.add("d-block");
  TimeOut.classList.add("pt-5");
  StopWatch.classList.add("pt-3");
});
restBtn.addEventListener("click", function () {
  laps.classList.remove("d-block");
  laps.classList.add("d-none");
});

playBtn.addEventListener("click", play);
restBtn.addEventListener("click", rest);
lapBtn.addEventListener("click", lap);
clearBtn.addEventListener("click", clearAll);

//************************************* Timer *******************************//
let stopWatchBtn = document.querySelector(".stopWatchBtn");
let TimerBtn = document.querySelector(".TimerBtn");
let StopWatch = document.querySelector(".StopWatch");
let TimeOuttxt = document.querySelector(".TimeOuttxt");

stopWatchBtn.addEventListener("click", function () {
  StopWatch.classList.remove("d-none");
  StopWatch.classList.add("d-flex");
  TimeOut.classList.remove("vh-100");
  allTimer.classList.remove("d-flex");
  allTimer.classList.add("d-none");
  TimeOuttxt.classList.add("d-none");
});

TimerBtn.addEventListener("click", function () {
  allTimer.classList.remove("d-none");
  allTimer.classList.add("d-flex");
  StopWatch.classList.remove("d-flex");
  StopWatch.classList.add("d-none");
  TimeOut.classList.remove("vh-100");
  TimeOut.classList.add("pt-3");
  TimeOuttxt.classList.add("d-none");
});


let hours = 0;
let minutes = 0;
let seconds = 0;
let t;
let isTimerRunning = false;
let TimeOut = document.querySelector(".TimeOut");
let allTimer = document.querySelector(".allTimer");

function startTimer() {
  t = setInterval(() => {
    if (seconds === 0 && minutes === 0 && hours === 0) {
      clearInterval(t);
      TimeOut.classList.remove("d-none");
      TimeOut.classList.add("d-flex");
      TimeOuttxt.classList.add("d-flex");
      TimeOuttxt.classList.remove("d-none");
      allTimer.classList.remove("d-flex");
      allTimer.classList.add("d-none");
      TimeOut.classList.add("vh-100");
      TimeOut.classList.remove("pt-3");
      document.getElementById("startTimer").textContent = "Play";
      return;
    }

    if (seconds === 0) {
      if (minutes === 0) {
        hours--;
        minutes = 59;
      } else {
        minutes--;
      }
      seconds = 59;
    } else {
      seconds--;
    }

    let hh = hours < 10 ? "0" + hours : hours;
    let mm = minutes < 10 ? "0" + minutes : minutes;
    let ss = seconds < 10 ? "0" + seconds : seconds;

    document.querySelector(".hh").textContent = hh + ":";
    document.querySelector(".mm").textContent = mm + ":";
    document.querySelector(".ss").textContent = ss;
  }, 1000);
}

let isTimerPaused = false;

function startTimer() {
  t = setInterval(() => {
    if (seconds === 0 && minutes === 0 && hours === 0) {
      clearInterval(t);
      TimeOut.classList.remove("d-none");
      TimeOut.classList.add("d-flex");
      TimeOuttxt.classList.add("d-flex");
      TimeOuttxt.classList.remove("d-none");
      allTimer.classList.remove("d-flex");
      allTimer.classList.add("d-none");
      TimeOut.classList.add("vh-100");
      TimeOut.classList.remove("pt-3");
      document.getElementById("startTimer").textContent = "Start";
      return;
    }

    if (!isTimerPaused) {
      if (seconds === 0) {
        if (minutes === 0) {
          hours--;
          minutes = 59;
        } else {
          minutes--;
        }
        seconds = 59;
      } else {
        seconds--;
      }
    }

    let hh = hours < 10 ? "0" + hours : hours;
    let mm = minutes < 10 ? "0" + minutes : minutes;
    let ss = seconds < 10 ? "0" + seconds : seconds;

    document.querySelector(".hh").textContent = hh + ":";
    document.querySelector(".mm").textContent = mm + ":";
    document.querySelector(".ss").textContent = ss;
  }, 1000);
}

document.getElementById("startTimer").addEventListener("click", function () {
  if (!isTimerRunning) {
    let inputHours = parseInt(document.getElementById("inputHours").value) || 0;
    let inputMinutes = parseInt(document.getElementById("inputMinutes").value) || 0;
    let inputSeconds = parseInt(document.getElementById("inputSeconds").value) || 0;

    if (inputMinutes >= 60 || inputSeconds >= 60) {
      alert("Minutes and seconds should be less than 60");
      return;
    }
    hours = inputHours;
    minutes = inputMinutes;
    seconds = inputSeconds;

    startTimer();
    isTimerRunning = true;
    document.getElementById("startTimer").textContent = "Pause";
  } else {
    if (isTimerPaused) {
      startTimer(); // Resume timer
      document.getElementById("startTimer").textContent = "Pause";
    } else {
      clearInterval(t); // Pause timer
      document.getElementById("startTimer").textContent = "Resume";
    }
    isTimerPaused = !isTimerPaused;
  }
});


document.getElementById("resetTimer").addEventListener("click", function () {
  clearInterval(t);
  isTimerRunning = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.querySelector(".hh").textContent = "00" + ":";
  document.querySelector(".mm").textContent = "00" + ":";
  document.querySelector(".ss").textContent = "00";
  document.getElementById("startTimer").textContent = "Play";
});

document.getElementById("resetTimer").addEventListener("click", function () {
  clearInterval(t);
  isTimerRunning = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.querySelector(".hh").textContent = "00" + ":";
  document.querySelector(".mm").textContent = "00" + ":";
  document.querySelector(".ss").textContent = "00";
  
  document.getElementById("inputHours").value = "";
  document.getElementById("inputMinutes").value = "";
  document.getElementById("inputSeconds").value = "";

  document.getElementById("startTimer").textContent = "Play";
});
