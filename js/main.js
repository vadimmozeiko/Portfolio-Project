// imports  -----------------------------
import { init } from "./components/TypeWriter.js";
import { progressBarData } from "./data/progessBarData.js";
import { ProgressBar } from "./components/ProgressBar.js";
import { projectData } from "./data/projectData.js";
import { renderProjects } from "./components/renderProjects.js";
import { backToTop } from "./components/backToTop.js";
import {mobileMenu} from "./components/mobileMenu.js"

// initialization -----------------------

// ********* typewhiter *********

init();

// ********* progress bars *********

new ProgressBar(".progress-bar", progressBarData);

// ********* render projects *********

renderProjects(projectData);

// ********* back to top button *********
backToTop();

// ********* mobile menu *********
mobileMenu();

