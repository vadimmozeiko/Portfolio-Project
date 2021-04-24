// imports  -----------------------------
import {init} from "./components/TypeWriter.js"
import {progressBarData} from "./data/progessBarData.js"
import {ProgressBar} from "./components/ProgressBar.js"





// initialization -----------------------

// ********* typewhiter *********

init();

// ********* progress bars *********

new ProgressBar ('.progress-bar', progressBarData);