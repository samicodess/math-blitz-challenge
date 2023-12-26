var elec;

const game = document.getElementById("game");

const correctsId = document.getElementById("corrects");

const incorrectsId = document.getElementById("incorrects");

const calif = document.getElementById("qualification");

const countdown1 = document.getElementById("countdown1");

const countdown2 = document.getElementById("countdown2");

const countdown3 = document.getElementById("countdown3");

const timeTrialIn = document.getElementById("timeTrialIn");

const survivalIn = document.getElementById("survivalIn");

const harCoreIn = document.getElementById("hardcoreIn");

const finish1 = document.getElementById("finish1");

const finish2 = document.getElementById("finish2");

const finish3 = document.getElementById("finish3");

const menuId = document.getElementById("menu");

const answer = document.getElementById("answer");

const main = document.getElementById("main");

const dig1 = document.getElementById("dig1");

const dig2 = document.getElementById("dig2");

const ope = document.getElementById("op");

const result = document.getElementById("result");

const score = document.getElementById("score");

const msg = document.getElementById("msg");

const pauseMenu = document.getElementById("pauseMenu");

const initialTime1 = 120;
const initialTime2 = 10;
const initialTime3 = 3;
var totaltime1, totaltime2, totaltime3;
var counter_mC = 0;
var counter_sC = 0;
var counter_s = 0;
var counter_m = 0;
var corrects = 0;
var incorrects = 0;
var t1, t2, t3;

// start the game when page load
const load = () => {
  menuId.style.display = "block";
  random();
};

//the time introdution
const timeTrial = () => {
  timeTrialIn.style.display = "block";
  menuId.style.display = "none";

  countdown1.style.display = "inline";
  countdown2.style.display = "none";
  countdown3.style.display = "none";
};

//start the time trial game mode
const startTimeTrial = () => {
  elec = 1;
  totaltime1 = initialTime1;
  setTimeout(function () {
    game.style.display = "block";
  }, 500);

  timeTrialIn.style.display = "none";
  //start the time trial function
  updateClock1();
};

//close de time trial introdution
const closeTimeTrialIn = () => {
  timeTrialIn.style.display = "none";
  menuId.style.display = "block";
};

const survival = () => {
  survivalIn.style.display = "block";
  menuId.style.display = "none";

  countdown1.style.display = "none";
  countdown2.style.display = "inline";
  countdown3.style.display = "none";
};

// start the survival introduction

const startSurvival = () => {
  elec = 2;
  totaltime2 = initialTime2;
  // the counters start at 0
  counter_m = 0;
  counter_s = 0;

  // start the stopwatch function
  watch();

  setTimeout(function () {
    game.style.display = "block";
  }, 500);
  survivalIn.style.display = "none";
  // start the survival game mode;
  updateClock2();
};

const closeSurvivalIn = () => {
  survivalIn.style.display = "none";
  menuId.style.display = "block";
};

// start the hardcore introduction
const hardCore = () => {
  harCoreIn.style.display = "block";
  menuId.style.display = "none";

  countdown3.style.display = "inline";
  countdown1.style.display = "none";
  countdown2.style.display = "none";
};

// start the hardcorre gamemode
const startHardCore = () => {
  elec = 3;
  totaltime3 = initialTime3;
  setTimeout(function () {
    game.style.display = "block";
  }, 500);
  harCoreIn.style.display = "none";
  // start the hard core function
  updateClock3();
};

// close hardcore introduction
const closeHardCoreIn = () => {
  document.getElementById("hardcoreIn").style.display = "none";
  document.getElementById("menu").style.display = "block";
};

const stopStopWatch = () => {
  clearInterval(stopWatch);
  counter_mC = document.getElementById("minutes").innerHTML;
  counter_sC = document.getElementById("seconds").innerHTML;
};

// start the stopwatch
const watch = () => {
  s = document.getElementById("seconds");
  m = document.getElementById("minutes");

  stopWatch = setInterval(function () {
    if (counter_s == 60) {
      counter_s = 0;
      counter_m++;
    }

    m.innerHTML = counter_m;
    s.innerHTML = counter_s;
    counter_s++;
  }, 1000);
};

// keyboard functions
// wrte the digits
const dig = (x) => {
  if (answer.innerHTML.length < 7) {
    answer.innerHTML += x;
  }
};

// delete the digits
const del = () => {
  answer.innerHTML = answer.innerHTML.substring(0, answer.innerHTML.length - 1);
};

// puts random number
const random = () => {
  let num = 10;

  // increase level
  if (corrects >= 10) {
    num = 15;
  }
  if (corrects >= 15 && corrects < 20) {
    num = 17;
  }
  if (corrects >= 20 && corrects < 25) {
    num = 20;
  }
  if (corrects >= 25 && corrects < 30) {
    num = 25;
  }
  if (corrects >= 30 && corrects < 35) {
    num = 30;
  }
  if (corrects >= 35 && corrects < 40) {
    num = 35;
  }
  if (corrects >= 40 && corrects < 45) {
    num = 40;
  }
  if (corrects >= 45 && corrects < 50) {
    num = 45;
  }
  if (corrects >= 50) {
    num = 50;
  }

  // choose two random number
  vdig1 = Math.ceil(Math.random() * num);
  vdig2 = Math.ceil(Math.random() * num);
  let r = Math.ceil(Math.random() * 3);
  // the rest is display only if dig1 is higher of dig2
  nma = Math.max(vdig1);
  nmi = Math.min(vdig2);

  // display the opreation
  dig1.innerHTML = vdig1 + " ";
  dig2.innerHTML = vdig2 + " ";

  // the result
  vresult = vdig1 + vdig2;

  //chose between sum or rest
  if (r == 1) {
    ope.innerHTML = "+ ";
    ope.style.color = "green";
    vresult = vdig1 + vdig2;
  } else if (r == 2) {
    if (nma >= nmi) {
      ope.innerHTML = "- ";
      ope.style.color = "red";
      vresult = vdig1 - vdig2;
    } else {
      ope.innerHTML = "+ ";
      ope.style.color = "green";
      vresult = vdig1 + vdig2;
    }
  } //choose between multiplication or sum
  else if (r == 3) {
    if (vdig1 < 12 && vdig2 < 12 && corrects > 15) {
      ope.innerHTML = "* ";
      ope.style.color = "orange";
      vresult = vdig1 * vdig2;
    } else {
      ope.innerHTML = "+ ";
      ope.style.color = "green";
      vresult = vdig1 + vdig2;
    }
  } else {
    ope.innerHTML = "+ ";
    ope.style.color = "green";
    vresult = vdig1 + vdig2;
  }

  result.style.color = "black";
};

const enter = () => {
  if (answer.innerHTML == "") {
    answer.style.borderColor = "orange";
    setTimeout(function () {
      answer.style.borderColor = "black";
    }, 700);
  }
  // if the answer is correct
  if (answer.innerHTML == vresult) {
    result.style.color = "green";
    result.innerHTML = vresult;
    answer.innerHTML = "";

    corrects += 1;
    totaltime3 = initialTime3;

    setTimeout(function () {
      main.style.display = "none";
    }, 500);
    setTimeout(function () {
      result.innerHTML = " ?";
      random();
      main.style.display = "inline";
    }, 1000);

    totaltime2 += 3;
  } //if the answer is incorrect
  else if (answer.innerHTML != vresult && answer.innerHTML != "") {
    answer.innerHTML = "";
    answer.style.borderColor = "red";
    result.style.color = "red";
    totaltime2 -= 2;
    incorrects += 1;
    navigator.vibrate(200);

    // if is the hardcore mode game
    if (elec == 3) {
      clearInterval(t3);
      countdown3.innerHTML = 0;
      finish3.style.display = "block";
      game.style.display = "none";

      answer.innerHTML = "";
      score.innerHTML = corrects;
    }

    setTimeout(function () {
      answer.style.borderColor = " black";
      result.style.color = "black";
    }, 700);
  }
};

//  the time trial countdown
function updateClock1() {
  countdown1.innerHTML = totaltime1;

  if (totaltime1 <= 10) {
    countdown1.style.color = "red";
  }

  if (countdown1.innerHTML <= 0) {
    countdown1.innerHTML = 0;
    game.style.display = "none";

    answer.innerHTML = "";

    correctsId.innerHTML = corrects;
    incorrectsId.innerHTML = incorrects;
    if (corrects >= 40) {
      calif.style.color = "gold";
      calif.innerHTML = "A+";
      msg.style.color = "gold";
      msg.innerHTML = "You are a master!";
    } else if (corrects >= 35 && corrects < 40) {
      calif.style.color = "green";
      calif.innerHTML = "A";
      msg.style.color = "green";
      msg.innerHTML = "wow excellent would you be able to get the A+ ?";
    } else if (corrects >= 15 && corrects < 25) {
      calif.style.color = "#ff5733";
      calif.innerHTML = "C";
      msg.style.color = "#ff5733";
      msg.innerHTML = "sincerely you should try again";
    } else {
      calif.style.color = " #839192";
      calif.innerHTML = "D";
      msg.style.color = "#212129";
      msg.innerHTML = "Try again!";
    }
    finish1.style.display = "block";
  } else {
    totaltime1 -= 1;
    t1 = setTimeout("updateClock1()", 1000);
  }
}

// survival countdown
function updateClock2() {
  countdown2.innerHTML = totaltime2;
  if (totaltime2 <= 5) {
    countdown2.style.color = "red";
  } else {
    countdown2.style.color = "black";
  }

  if (countdown2.innerHTML <= 0) {
    clearInterval(t2);
    stopStopWatch();
    answer.innerHTML = "";
    countdown2.innerHTML = 0;
    finish2.style.display = "block";
    game.style.display = "none";

    answer.innerHTML = "";
  } else {
    totaltime2 -= 1;
    t2 = setTimeout("updateClock2()", 1000);
  }
}

// the hardcore countdown
function updateClock3() {
  countdown3.innerHTML = totaltime3;
  if (countdown3.innerHTML <= 0) {
    clearInterval(t3);
    countdown3.innerHTML = 0;
    finish3.style.display = "block";
    game.style.display = "none";

    answer.innerHTML = "";

    score.innerHTML = corrects;
  } else {
    totaltime3 -= 1;
    t3 = setTimeout("updateClock3()", 1000);
  }
}

// pause
const pause = () => {
  pauseMenu.style.display = "block";
  game.style.display = "none";

  switch (elec) {
    case 1:
      clearInterval(t1);
      break;

    case 2:
      clearInterval(t2);
      stopStopWatch();
      break;

    case 3:
      clearInterval(t3);
    default:
    // none
  }
};

// closepausemenu
function closePauseMenu() {
  pauseMenu.style.display = "none";
  game.style.display = "block";

  switch (elec) {
    case 1:
      updateClock1();
      break;

    case 2:
      updateClock2();
      counter_s = counter_sC;
      counter_m = counter_mC;
      watch();
      break;

    case 3:
      updateClock3();

    default:
  }
}

// contineue
function continUe() {
  closePauseMenu();
}

// function retry
function retry() {
  pauseMenu.style.display = "none";
  corrects = 0;
  incorrects = 0;
  game.style.display = "none";
  setTimeout(random, 500);

  switch (elec) {
    case 1:
      totaltime1 = initialTime1;
      setTimeout(function () {
        game.style.display = "block";
        updateClock1();
      }, 1000);
      countdown1.style.color = "black";
      break;

    case 2:
      counter_m = 0;
      counter_s = 0;
      watch();

      totaltime2 = initialTime2;
      setTimeout(() => {
        game.style.display = "block";
        updateClock2();
      }, 1000);
      countdown2.style.color = "black";
      break;

    case 3:
      totaltime3 = initialTime3;
      setTimeout(() => {
        game.style.display = "block";
        updateClock3();
      }, 1000);
      countdown3.style.color = "black";
    default:
  }
}

// retryfinish

function retryFinish() {
  corrects = 0;
  incorrects = 0;
  setTimeout(random, 500);

  switch (elec) {
    case 1:
      totaltime1 = initialTime1;
      finish1.style.display = "none";
      setTimeout(() => {
        game.style.display = "block";
        updateClock1();
      }, 1000);
      countdown1.style.color = "black";
      break;

    case 2:
      counter_m = 0;
      counter_s = 0;
      watch();

      totaltime2 = initialTime2;
      finish2.style.display = "none";
      setTimeout(() => {
        game.style.display = "block";
        updateClock2();
      }, 1000);
      countdown2.style.color = "black";
      break;

    case 3:
      totaltime3 = initialTime3;
      finish3.style.display = "none";
      setTimeout(() => {
        game.style.display = "block";
        updateClock3();
      }, 1000);
      countdown3.style.color = "black";
    default:
  }
}

// menu pause

function menuOfPaused() {
  pauseMenu.style.display = "none";
  corrects = 0;
  incorrects = 0;

  switch (elec) {
    case 1:
      clearInterval(t1);
      totaltime1 = initialTime1;
      break;

    case 2:
      clearInterval(t2);
      totaltime2 = initialTime2;
      counter_m = 0;
      counter_s = 0;
      stopStopWatch();
      break;

    case 3:
      clearInterval(t3);
      totaltime3 = initialTime3;

    default:
  }
  menuId.style.display = "block";
}

// function of menu
function menu() {
  corrects = 0;
  incorrects = 0;

  menuId.style.display = "block";

  switch (elec) {
    case 1:
      finish1.style.display = "none";
      totaltime1 = initialTime1;
      countdown1.style.color = "black";
      break;

    case 2:
      finish2.style.display = "none";
      totaltime2 = initialTime2;
      counter_m = 0;
      counter_S = 0;
      stopStopWatch();
      countdown2.style.color = "black";
      break;

    case 3:
      finish3.style.display = "none";
      totaltime3 = initialTime3;

    default:
  }
}
