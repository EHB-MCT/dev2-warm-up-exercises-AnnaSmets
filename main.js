import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";

let buttonName = document.getElementById("button-1a");
let buttonBckg = document.getElementById("button-1b");
let buttonReady = document.getElementById("button-1c");
let content1 = document.getElementById("content-1");
let sectie1 = document.getElementById("section-1");

function warmup1() {
	console.log("Exercise week 1");
	buttonName.onclick = function introduction() {
		content1.innerHTML = "Hallo, dit is de oefening van Anna";
	};
	buttonBckg.onclick = function background() {
		sectie1.style.backgroundColor = "lightblue";
	};
	buttonReady.onclick = function ready() {
		let title = document.createElement("h1");
		title.innerHTML = "Ik ben er klaar voor.";
		content1.appendChild(title);
	};
}

function warmup2() {
	console.log("Exercise week 2");
	const scores = getRandomScores(10);
}

function warmup3() {
	let student = getStudentJSON();
}

function warmup4() {
	let main, min, max;
}

function warmup5() {}

warmup1();
