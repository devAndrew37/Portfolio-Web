const dukeRock = new Audio("assets/dukerock.mp3");
const pokemonMusic = new Audio("assets/music1.mp3");
const casinoMusic = new Audio("assets/music2.mp3");
const pokedexMusic = new Audio("assets/music3.mp3");
const download = new Audio("assets/download_notification.mp3");
const typing = new Audio("assets/typing.mp3");
const popupIcon = new Audio("assets/icon-popup.mp3");
const card = document.querySelector(".card");
const cardFront = document.querySelector(".card-front");
const cardBack = document.querySelector(".card-back");
const font1 = document.getElementById("name-job");
const font2 = document.querySelector(".skills");
const font3 = document.querySelector(".skills-cont");
const font4 = document.querySelector(".languages");
const font5 = document.querySelector(".description");
const font6 = document.getElementById("contacts");
const font7 = document.querySelector(".h2-project");
const photo = document.getElementById("foto");
const email = document.getElementById("email");
const github = document.getElementById("github-icon");
const border = document.querySelector(".card-container");
const h2Project1 = document.querySelector(".h2-projectcard1");
const h2Project2 = document.querySelector(".h2-projectcard2");
const h2Project3 = document.querySelector(".h2-projectcard3");
const project1 = document.querySelector(".project-card.project1");
const project2 = document.querySelector(".project-card.project2");
const project3 = document.querySelector(".project-card.project3");
const swipeGif = document.querySelector(".swipe-card");
const swipeText = document.querySelector(".swipe-text");
const backImage = document.getElementById("back-image");
const portrait = document.getElementById("portrait");
const pProject1 = document.querySelector(".p-projectcard1");
const pProject2 = document.querySelector(".p-projectcard2");
const pProject3 = document.querySelector(".p-projectcard3");
const project1ArrowLeft = document.querySelector(".project1-arrow-left");
const project1ArrowRight = document.querySelector(".project1-arrow-right");
const project2ArrowLeft = document.querySelector(".project2-arrow-left");
const project2ArrowRight = document.querySelector(".project2-arrow-right");
const project3ArrowLeft = document.querySelector(".project3-arrow-left");
const project3ArrowRight = document.querySelector(".project3-arrow-right");
const moreProjectsContainer = document.querySelector(".container-more");
const moreProjectsText1 = document.querySelector(".p-text-more1");
const moreProjectsText2 = document.querySelector(".p-text-more2");
const moreProjectsText3 = document.querySelector(".p-text-more3");
const moreProjectsText4 = document.querySelector(".p-text-more4");
const moreProjectsText5 = document.querySelector(".p-text-more5");
const moreProjectsText6 = document.querySelector(".p-text-more6");
const moreProjectsIcon = document.querySelector(".more-icon");

const icon1Link = document.createElement("a");
icon1Link.target = "_blank";
icon1Link.rel = "noopener noreferrer";
const icon1 = document.createElement("img");
icon1.src = "assets/link.png";
icon1.classList.add("card-icon");
icon1Link.appendChild(icon1);
const icon2Link = document.createElement("a");
icon2Link.target = "_blank";
icon2Link.rel = "noopener noreferrer";
const icon2 = document.createElement("img");
icon2.src = "assets/github-icon.png";
icon2.classList.add("card-icon-2");
icon2Link.appendChild(icon2);

if (portrait) {
	portrait.addEventListener('mousemove', onPortraitMouseMove);
	portrait.addEventListener('mouseleave', onPortraitMouseLeave);
}

let swipeFlag = false
let bgChangeFlag = false;
let clickCardFlag = false;
let photoChanged = false;
let iconsChangeFlag = false;
let project1Flag = false;
let project2Flag = false;
let project3Flag = false;
let moreProjectsFlag = false;
let typingFlag = false;
let sequenceFlag = false;
let photoTimeout;
let timeout1;
let timeout2;
let timeout3;
let timeout4;

document.body.addEventListener("mousemove", (e) => {
	if (e.target.closest(".project1") || e.target.closest(".project2") || e.target.closest(".project3")) return;
	if (project1Flag && project2Flag && project3Flag) return;
	project1.classList.add("left");
	project2.classList.add("left");
	project3.classList.add("left");
	setTimeout(() => {
		project1.classList.remove("left");
		project2.classList.remove("left");
		project3.classList.remove("left");
	}, 4000);
});

card.addEventListener("mousemove", () => {
  setTimeout(() => {
	swipeGif.classList.remove("transparent");
	swipeText.textContent = "Click on card to check out my resume!";
	swipeText.classList.add("typing-effect");
	setTimeout(() => {
		if (bgChangeFlag) swipeGif.src = "assets/swipe-white.png";
		else swipeGif.src = "assets/swipe.png";
		swipeFlag = true;
	}, 2000);
  }, 1500);
});

card.addEventListener("mouseleave", () => {
  if(typingFlag) return;
  if (clickCardFlag) {
	setTimeout(() => {
		clickCardFlag = false;
	}, 2000);
	return;
  }
  card.classList.add("left");
  setTimeout(() => {
	card.classList.remove("left");
  }, 2000);
});

if (card) {
  card.addEventListener('click', function(e) {
	if (e.target.closest('#contacts a') || clickCardFlag) return;
	clickCardFlag = true;
	card.classList.remove("left");
	backImage.src = "assets/doge1.png";
	setTimeout(() => {
	  backImage.src = "assets/doge2.PNG";	
	}, 500);
	setTimeout(() => {
		//download.play();
		//window.open("assets/resume.pdf", "_blank");
		clickCardFlag = false;
		card.classList.remove('flipped');
	}, 1800);
    card.classList.add('flipped');
  });
}

project1.addEventListener("mouseleave", () => {
	if (project1Flag && project2Flag && project3Flag) {
	if (moreProjectsFlag) return;
	setTimeout(() => {
		project1.classList.add("move-project");
		project2.classList.add("move-project");
		project3.classList.add("move-project");
		moreProjectsFlag = true;
		moreProjects();
	}, 1000);
	}
});

project2.addEventListener("mouseleave", () => {
	if (project1Flag && project2Flag && project3Flag) {
	if (moreProjectsFlag) return;
	setTimeout(() => {
		project1.classList.add("move-project");
		project2.classList.add("move-project");
		project3.classList.add("move-project");
		moreProjectsFlag = true;
		moreProjects();
	}, 1000);
	}
});

project3.addEventListener("mouseleave", () => {
	if (project1Flag && project2Flag && project3Flag) {
	if (moreProjectsFlag) return;
	setTimeout(() => {
		project1.classList.add("move-project");
		project2.classList.add("move-project");
		project3.classList.add("move-project");
		moreProjectsFlag = true;
		moreProjects();
	}, 1000);
	}
});

async function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function moreProjects() {
	await delay(500);
	changePhotoDelayed();
	sequenceFlag = true;
	typingFlag = true;
    typing.volume = 0.4;
    moreProjectsContainer.classList.remove("none");
    typing.play();
    const steps = [
        { el: moreProjectsText1, text: "Check" },
        { el: moreProjectsText2, text: "out" },
        { el: moreProjectsText3, text: "more" },
        { el: moreProjectsText4, text: "projects" },
        { el: moreProjectsText5, text: "on my" },
        { el: moreProjectsText6, text: "GitHub:" }
    ];
    for (let i = 0; i < steps.length; i++) {
        const current = steps[i];
        current.el.textContent = current.text;
        current.el.classList.add("typing-effect-word");
        await delay(720);
        if (i < steps.length - 1) {
            current.el.classList.remove("typing-effect-word");
			current.el.style.width = "max-content";
            current.el.style.borderRight = "none";
            current.el.style.width = "auto";
			current.el.style.margin = "0 auto";
        }
    }
	popupIcon.volume = 0.3;
	popupIcon.play();
	typingFlag = false;
    setTimeout(() => {
        moreProjectsIcon.classList.remove("none");
    }, 100);
	setTimeout(() => {
		sequenceFlag = false;
		originalPhoto();
	}, 17000);
}

function changePhotoDelayed() {
	if (photoChanged || sequenceFlag) return;
	photoChanged = true;
	setTimeout(() => {
		if (swipeFlag) swipeGif.src = "assets/swipe-white.png";
		else if (!swipeFlag) swipeGif.src = "assets/swipe-card-white.gif";
		bgChangeFlag = true;
		swipeText.style.color = "#2cffcc";
		swipeText.classList.add("typing-effect-green");
		swipeText.classList.remove("typing-effect");
		pokemonMusic.pause();
		photo.src = "assets/smile.jpg";
		dukeRock.volume = 0.2;
		dukeRock.play();
		document.body.style.background = "radial-gradient(circle at 30%, #232526 0%, #414345 70%, #000 100%)";
		font1.classList.add("changed");
		font2.classList.add("changed");
		font3.classList.add("changed");
		font4.classList.add("changed");
		font5.classList.add("changed");
		font6.classList.add("changed");
		font7.classList.add("changed");
		email.classList.add("changed");
		moreProjectsContainer.classList.add("changed");
		github.src = "assets/github-green.png";
		moreProjectsIcon.src = "assets/github-green.png";
		border.style.borderColor = "white";
		project1.classList.add("change-card");
		project2.classList.add("change-card");
		project3.classList.add("change-card");
		cardFront.classList.add("change-card");
		cardBack.classList.add("change-card");
		photo.style.opacity = 1;
	}, 20);
}

function onPortraitMouseMove() {
	if (photoTimeout) clearTimeout(photoTimeout);
	if (!photoChanged) {
		photoTimeout = setTimeout(changePhotoDelayed, 20);
	}
}

async function onPortraitMouseLeave() {
	if (clickCardFlag) {
		setTimeout(() => {
			originalPhoto();
			photoChanged = false;
		}, 2000);
		return;
	}
	if (photoTimeout) clearTimeout(photoTimeout);
	photoChanged = false;
	originalPhoto();
}

function originalPhoto() {
	if (typingFlag || sequenceFlag) return;
	if (swipeFlag) swipeGif.src = "assets/swipe.png";
	else if (!swipeFlag) swipeGif.src = "assets/swipe-card.gif";
	bgChangeFlag = false;
	swipeText.style.color = "black";
	swipeText.classList.remove("typing-effect-green");
	swipeText.classList.add("typing-effect");
	photo.src = "assets/profile.jpeg";
    font1.classList.remove("changed");
	font2.classList.remove("changed");
	font3.classList.remove("changed");
	font4.classList.remove("changed");
	font5.classList.remove("changed");
	font6.classList.remove("changed");
	font7.classList.remove("changed");
	moreProjectsContainer.classList.remove("changed");
	moreProjectsIcon.src = "assets/github.png";
	github.src = "assets/github.png";
	email.classList.remove("changed");
	border.style.borderColor = "black";
	project1.classList.remove("change-card");
	project2.classList.remove("change-card");
	project3.classList.remove("change-card");
	cardFront.classList.remove("change-card");
	cardBack.classList.remove("change-card");
	document.body.style.background = "linear-gradient(270deg, #8bc5cd, #5a9ca4, #297383)";
}

function backgroundTransition(project, direction) {
	if ((direction === "left") && (project === 1 || project === 3)) {
		document.body.classList.add("background-transition-left");
		document.body.classList.remove("background-transition-right");
	} else if ((direction === "right") && (project === 1 || project === 3)) {
		document.body.classList.add("background-transition-right");
		document.body.classList.remove("background-transition-left");
	} else if ((direction === "left") && (project === 2)) {
		document.body.classList.add("background-transition-left-2");
		document.body.classList.remove("background-transition-right-2");
	} else if ((direction === "right") && (project === 2)) {
		document.body.classList.add("background-transition-right-2");
		document.body.classList.remove("background-transition-left-2");
	}
}

async function changeBackground(projectNumber) {
	if (photoChanged  || sequenceFlag) return;
	cardFront.classList.add("transparent-card");
	cardBack.classList.add("transparent-card");
	swipeText.textContent = "";
	swipeText.classList.remove("typing-effect");
	swipeGif.classList.add("transparent");
	swipeGif.src = "assets/swipe-card.gif";
	project1.classList.remove("left");
	project2.classList.remove("left");
	project3.classList.remove("left");
	dukeRock.pause();
	border.style.borderColor = "transparent";
	font7.classList.add("transparent");
	photo.src = "assets/transparent.png";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundPosition = "center";
	document.body.style.backgroundSize = "cover";
  if (projectNumber === 1) {
	project1Flag = true;
	project1ArrowLeft.classList.remove("none");
	project1ArrowRight.classList.remove("none");
	pokemonMusic.volume = 0.2;
	pokemonMusic.play();
	project1.classList.add("selected-card");
	project2.classList.add("transparent-card");
	project3.classList.add("transparent-card");
	document.body.style.backgroundImage = "url('assets/project1-a.png')";
	document.body.style.backgroundSize = "110%";
	backgroundTransition(1, "left");
	timeout1 = setTimeout(() => {
		backgroundTransition(1, "right");
		document.body.style.backgroundImage = "url('assets/project1-b.png')";
	}, 2500);
	timeout2 = setTimeout(() => {
		backgroundTransition(1, "left");
		document.body.style.backgroundImage = "url('assets/project1-c.png')";
	}, 5000);
	timeout3 = setTimeout(() => {
		backgroundTransition(1, "right");
		document.body.style.backgroundImage = "url('assets/project1-d.png')";
	}, 7500);
	timeout4 = setTimeout(() => {
		changeBackground(1);
    }, 10000);
  } else if (projectNumber === 2) {
		project2Flag = true;
		casinoMusic.volume = 0.2;
		casinoMusic.play();
		project2.classList.add("selected-card");
		project1.classList.add("transparent-card");
		project3.classList.add("transparent-card");
		project2ArrowLeft.classList.remove("none");
		project2ArrowRight.classList.remove("none");
		document.body.style.backgroundImage = "url('assets/project2-a.png')";
		document.body.style.backgroundSize = "110%";
		backgroundTransition(2, "left");
		timeout1 = setTimeout(() => {
			backgroundTransition(2, "right");
			document.body.style.backgroundImage = "url('assets/project2-b.png')";
		}, 4000);
		timeout2 = setTimeout(() => {
			backgroundTransition(2, "left");
			document.body.style.backgroundImage = "url('assets/project2-c.png')";
		}, 8000);
		timeout3 = setTimeout(() => {
			changeBackground(2);
		}, 12000);
  } else if (projectNumber === 3) {
		project3Flag = true;
		pokedexMusic.volume = 0.2;
		pokedexMusic.play();
		project3.classList.add("selected-card");
		project2.classList.add("transparent-card");
		project1.classList.add("transparent-card");
		project3ArrowLeft.classList.remove("none");
		project3ArrowRight.classList.remove("none");
		document.body.style.backgroundImage = "url('assets/project3-a.png')";
		document.body.style.backgroundSize = "110%";
		backgroundTransition(3, "left");
		timeout1 = setTimeout(() => {
			backgroundTransition(3, "right");
			document.body.style.backgroundImage = "url('assets/project3-b.png')";
		}, 2500);
		timeout2 = setTimeout(() => {
			backgroundTransition(3, "left");
			document.body.style.backgroundImage = "url('assets/project3-c.png')";
		}, 5000);
		timeout3 = setTimeout(() => {
			backgroundTransition(3, "right");
			document.body.style.backgroundImage = "url('assets/project3-d.png')";
		}, 7500);
		timeout4 = setTimeout(() => {
			changeBackground(3);
		}, 10000)
	}
}

async function moveLeft(projectNumber) {
if (iconsChangeFlag) {
	icon1.classList.add("move-left");
	icon2.classList.add("move-left");
	setTimeout(() => {
		icon1.classList.remove("move-left");
		icon2.classList.remove("move-left");
		removeIcons();
	}, 500);
} else {
	if (projectNumber === 1) {
		h2Project1.classList.add("move-left");
		pProject1.classList.add("move-left");
		icon1Link.href = "https://90spokemongame.vercel.app/";
		icon2Link.href = "https://github.com/devAndrew37/90s-Pokemon-Memory-Game";
		setTimeout(() => {
			iconsChangeFlag = true;
			h2Project1.style.display = "none";
			pProject1.style.display = "none";
			project1.appendChild(icon1Link);
			project1.appendChild(icon2Link);
    		h2Project1.classList.remove("move-left");
			pProject1.classList.remove("move-left");
		}, 500);
	} else if (projectNumber === 2) {
		h2Project2.classList.add("move-left");
		pProject2.classList.add("move-left");
		icon1Link.href = "https://blackjackscript-casino.vercel.app/";
		icon2Link.href = "https://github.com/devAndrew37/Blackjackscript-Casino";
		setTimeout(() => {
			iconsChangeFlag = true;
			h2Project2.style.display = "none";
			pProject2.style.display = "none";
			project2.appendChild(icon1Link);
			project2.appendChild(icon2Link);
    		h2Project2.classList.remove("move-left");
			pProject2.classList.remove("move-left");
		}, 500);
	} else if (projectNumber === 3) {
		h2Project3.classList.add("move-left");
		pProject3.classList.add("move-left");
		icon1Link.href = "https://90s-pokedex.vercel.app/";
		icon2Link.href = "https://github.com/devAndrew37/React-Pokedex-90s";
		setTimeout(() => {
			iconsChangeFlag = true;
			h2Project3.style.display = "none";
			pProject3.style.display = "none";
			project3.appendChild(icon1Link);
			project3.appendChild(icon2Link);
    		h2Project3.classList.remove("move-left");
			pProject3.classList.remove("move-left");
		}, 500);
	}
}}

async function moveRight(projectNumber) {
if (iconsChangeFlag) {
	icon1.classList.add("move-right");
	icon2.classList.add("move-right");
	setTimeout(() => {
		icon1.classList.remove("move-right");
		icon2.classList.remove("move-right");
		removeIcons();
	}, 500);
} else {
	if (projectNumber === 1) {
		h2Project1.classList.add("move-right");
		pProject1.classList.add("move-right");
		icon1Link.href = "https://90spokemongame.vercel.app/";
		icon2Link.href = "https://github.com/devAndrew37/90s-Pokemon-Memory-Game";
		setTimeout(() => {
			iconsChangeFlag = true;
			h2Project1.style.display = "none";
			pProject1.style.display = "none";
			project1.appendChild(icon1Link);
			project1.appendChild(icon2Link);
    		h2Project1.classList.remove("move-right");
			pProject1.classList.remove("move-right");
		}, 500);		
	} else if (projectNumber === 2) {
		h2Project2.classList.add("move-right");
		pProject2.classList.add("move-right");
		icon1Link.href = "https://blackjackscript-casino.vercel.app/";
		icon2Link.href = "https://github.com/devAndrew37/Blackjackscript-Casino";
		setTimeout(() => {
			iconsChangeFlag = true;
			h2Project2.style.display = "none";
			pProject2.style.display = "none";
			project2.appendChild(icon1Link);
			project2.appendChild(icon2Link);
    		h2Project2.classList.remove("move-right");
			pProject2.classList.remove("move-right");
		}, 500);
	} else if (projectNumber === 3) {
		h2Project3.classList.add("move-right");
		pProject3.classList.add("move-right");
		icon1Link.href = "https://90s-pokedex.vercel.app/";
		icon2Link.href = "https://github.com/devAndrew37/React-Pokedex-90s";
		setTimeout(() => {
			iconsChangeFlag = true;
			h2Project3.style.display = "none";
			pProject3.style.display = "none";
			project3.appendChild(icon1Link);
			project3.appendChild(icon2Link);
    		h2Project3.classList.remove("move-right");
			pProject3.classList.remove("move-right");
		}, 500);
	}
}}

function removeIcons() {
	iconsChangeFlag = false;
	h2Project1.style.display = "block";
	pProject1.style.display = "block";
	h2Project2.style.display = "block";
	pProject2.style.display = "block";
	h2Project3.style.display = "block";
	pProject3.style.display = "block";
	if (icon1Link.parentNode) {
		icon1Link.parentNode.removeChild(icon1Link);
	} 
	if (icon2Link.parentNode) {
		icon2Link.parentNode.removeChild(icon2Link);
	}
}

function removeBackground() {
	if (sequenceFlag) return;
	removeIcons();
	card.classList.add("left");
	setTimeout(() => {
		card.classList.remove("left");
	}, 2000);
    document.body.classList.remove("background-transition-right");
	document.body.classList.remove("background-transition-left");
    document.body.classList.remove("background-transition-right-2");
	document.body.classList.remove("background-transition-left-2");
	project1ArrowLeft.classList.add("none");
	project1ArrowRight.classList.add("none");
	project2ArrowLeft.classList.add("none");
	project2ArrowRight.classList.add("none");
	project3ArrowLeft.classList.add("none");
	project3ArrowRight.classList.add("none");
	pokemonMusic.pause();
	casinoMusic.pause();
	pokedexMusic.pause();
	clearTimeout(timeout1);
	clearTimeout(timeout2);
	clearTimeout(timeout3);
	clearTimeout(timeout4);
	cardFront.classList.remove("transparent-card");
	cardBack.classList.remove("transparent-card");
	photo.src = "assets/profile.jpeg";
	document.body.style.backgroundImage = "none";
	document.body.style.background = "linear-gradient(270deg, #8bc5cd, #5a9ca4, #297383)";
	project1.classList.remove("selected-card");
	project2.classList.remove("selected-card");
	project3.classList.remove("selected-card");
	project1.classList.remove("transparent-card");
	project2.classList.remove("transparent-card");
	project3.classList.remove("transparent-card");
	border.style.borderColor = "black";
	font7.classList.remove("changed");
	font7.classList.remove("transparent");
	document.body.classList.remove("background-transition-left");
	document.body.classList.remove("background-transition-right");
  setTimeout(() => {
	swipeGif.classList.remove("transparent");
	swipeText.textContent = "Click on card to check out my resume!";
	swipeText.classList.add("typing-effect");
	setTimeout(() => {
		if (bgChangeFlag) swipeGif.src = "assets/swipe-white.png";
		else swipeGif.src = "assets/swipe.png";
		swipeFlag = true;
	}, 2000);
  }, 1500);
}
