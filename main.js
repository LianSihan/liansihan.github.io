//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");
const page5btn = document.querySelector("#page5btn");
const homebtn = document.querySelector("#home");

const title = document.getElementById('title');
const bar = document.getElementById('cursor');



var allpages = document.querySelectorAll(".page");
//select all subtopic pages
function hideall() { //function to hide all pages
    for (let onepage of allpages) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
}

function show(pgno) { //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
    onepage.style.display = "block"; //show the page
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
homebtn.addEventListener("click", function () {
    show(1);
    navMenu.classList.remove("menuShow");
    if (!homebtn.classList.contains("animation")) {
        homebtn.classList.add("animation");
        setTimeout(() => {
            homebtn.classList.remove("animation");
        }, 2000);
    }
    typeWriter(title, bar, 'CHINA', 150);
});
page1btn.addEventListener("click", function () {
    show(1);
    navMenu.classList.remove("menuShow");
    typeWriter(title, bar, 'CHINA', 150);
});
page2btn.addEventListener("click", function () {
    show(2);
    navMenu.classList.remove("menuShow");
    typeWriter(title, bar, 'Major Dynasties', 125);
    calculateAndSetHeight();
});
page3btn.addEventListener("click", function () {
    show(3);
    navMenu.classList.remove("menuShow");
    typeWriter(title, bar, 'Famous Inventions', 125);
});
page4btn.addEventListener("click", function () {
    show(4);
    navMenu.classList.remove("menuShow");
    const ballContainerStyle = getComputedStyle(ballContainer);
    ballContainerWidth = ballContainer.offsetWidth - parseFloat(ballContainerStyle.paddingLeft) - parseFloat(ballContainerStyle.paddingRight) - ball.offsetWidth;
    typeWriter(title, bar, 'Silk Road & Trade', 100);
    UpdateBallContentAndImage();
});
page5btn.addEventListener("click", function () {
    show(5);
    navMenu.classList.remove("menuShow");
    typeWriter(title, bar, 'Ancient Chinese Culture', 100);
});
hideall();
show(3);

const hamBtn = document.getElementById("hamIcon"); // the button
const navMenu = document.getElementById("sideMenu"); // the menu to show/hide
const closeBtn = document.getElementById("closeMenu");


hamBtn.addEventListener("click", () => {
    navMenu.classList.add("menuShow");
});

closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("menuShow");
});




document.addEventListener("DOMContentLoaded", () => {
    const dynasties = document.querySelectorAll('.dynasty');
    const date = document.querySelectorAll('.date');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5
    });

    dynasties.forEach(dynasty => observer.observe(dynasty));
    date.forEach(date => observer.observe(date));
});




const dynastyInfo = {
    "Xia": {
        title: "Xia Dynasty (c. 2100-1600 BCE)",
        description: "The legendary first dynasty in traditional Chinese history. No archaeological proof, but it's believed to mark the start of civilization in China."
    },
    "Shang": {
        title: "Shang Dynasty (c. 1600-1046 BCE)",
        description: "The first confirmed dynasty with writing and bronze tools. Famous for oracle bones and early Chinese script."
    },
    "Zhou": {
        title: "Zhou Dynasty (1046-256 BCE)",
        description: "The longest dynasty, marked by the Mandate of Heaven and split into Western and Eastern Zhou."
    },
    "Warring": {
        title: "End of Warring States Period (256 BCE)",
        description: "Marks the end of the chaotic Warring States period and the beginning of Qin unification."
    },
    "Han": {
        title: "Han Dynasty (206 BCE-220 CE)",
        description: "Golden age of Chinese civilization, known for major advancements in culture, science, and the Silk Road trade."
    },
    "Three": {
        title: "Three Kingdoms Period (220-280 CE)",
        description: "Division of China into three rival kingdoms: Wei, Shu, and Wu, following the fall of the Han."
    },
    "Western": {
        title: "Western Jin Dynasty (265-316 CE)",
        description: "Brief reunification of China before collapse due to civil war and invasion."
    },
    "Sui": {
        title: "Sui Dynasty (581-618 CE)",
        description: "Short dynasty that reunified China and constructed the Grand Canal."
    },
    "Tang": {
        title: "Tang Dynasty (618-907 CE)",
        description: "A cultural golden age with flourishing arts, poetry, and international trade along the Silk Road."
    },
    "Five": {
        title: "Five Dynasties Period (907-960 CE)",
        description: "A time of fragmentation with rapid succession of short-lived dynasties."
    },
    "Song": {
        title: "Song Dynasty (960-1279 CE)",
        description: "Era of technological and economic advances; divided into Northern and Southern Song periods."
    },
    "Yuan": {
        title: "Yuan Dynasty (1271-1368 CE)",
        description: "Established by the Mongols under Kublai Khan; first foreign-led dynasty of China."
    },
    "Ming": {
        title: "Ming Dynasty (1368-1644 CE)",
        description: "Known for restoring Han rule, naval expeditions, and building much of the Great Wall as it stands today."
    },
    "Qing": {
        title: "Qing Dynasty (1644-1912 CE)",
        description: "Last imperial dynasty ruled by the Manchus; ended with the Xinhai Revolution and establishment of the Republic."
    },
    "Republic": {
        title: "Republic of China (1912-present)",
        description: "The end of imperial rule and start of modern Chinese government, with continuing historical significance today."
    }
};

document.querySelectorAll('.dynasty button').forEach(button => {
    button.addEventListener('click', () => {
        const dynastyName = button.textContent.split(' ')[0];
        const info = dynastyInfo[dynastyName];
        if (info) {
            document.getElementById('dynastytitle').textContent = info.title;
            document.getElementById('dynastydescription').textContent = info.description;
            document.getElementById('dynastyinfo').classList.toggle('show');
        }
    });
});

document.getElementById('closebutton').addEventListener('click', () => {
    document.getElementById('dynastyinfo').classList.toggle('show');
});


const tiles = document.querySelectorAll('.blockingtile');
tiles.forEach(tile => {
    tile.addEventListener('click', () => {
        tile.classList.add('gone');
    });
});

const page3Reset = document.querySelector('#inventions > button');
page3Reset.addEventListener('click', () => {
    tiles.forEach(tile => {
        tile.classList.remove('gone');
    });
});

const inventions = document.querySelector('#inventions');
const quizButton = document.querySelector('#quizButton > button');
const quiz = document.querySelector('#quiz');

quizButton.addEventListener('click', () => {
    quiz.classList.toggle('gone');
    inventions.classList.toggle('gone');
    if (quiz.classList.contains('gone')) {
        quizButton.textContent = 'Enter Quiz';
    } 
    else {
        quizButton.textContent = 'Exit Quiz';
    }
});


const popAudio = new Audio("popsound.mp3");
const durianId = document.getElementById("durianId");
function GetRandom(min, max) {
    //this will select a number between min and max
    return Math.round(Math.random() * (max - min)) + min;
}
function MoveDurian() {
    durianId.style.left = GetRandom(0, 500) + "px";
    durianId.style.top = GetRandom(0, 250) + "px";
}

// moveDurianItvId = setInterval(MoveDurian, 1000);

// const scoreBox=document.getElementById("scoreBox");
// var score=0; //to track how many clicks
// function durianCatch() {
//     //increases score after clicking
//     score++;
//     //update html scorebox
//     scoreBox.innerHTML = "Score: " + score;
//     popAudio.play(); //play the audio!
//     durianId.classList.add("animation");

//     if (score <= 80) {
//         MoveDurian(); //move durian to new position
//         moveDurianItvId = clearInterval(moveDurianItvId);
//         moveDurianItvId = setInterval(MoveDurian, 1000 - (score * 10));
//     }
// }
// //link durian to mouseclick to durianCatch function
// durianId.addEventListener("click",durianCatch);


// var ballX = ballY = 0;
// //define more variables and constants
// var velX, velY;
// const minLeft = minTop = 0;
// const maxTop = maxLeft = 300;

// //function to pick random number from a min-max range
// function RandomRange(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }

// /* Move Pos function with collision check and reaction*/
// function MovePosWifCollision() {
//     ballX += velX;
//     ballY += velY;

//     /*check if reach min/max left/top and flip velocity*/
//     if (ballX > maxLeft) {
//         velX = -velX; //reverse the X velocity
//         ballX = maxLeft; //snap ballX to maxLeft
//     }
//     if (ballY > maxTop) {
//         velY = -velY;
//         ballY = maxTop; //snap ballY to maxTop
//     }
//     if (ballX < minLeft) {
//         velX = -velX;
//         ballX = minLeft;
//     }
//     if (ballY < minTop) {
//         velY = -velY;
//         ballY = minTop;
//     }

//     UpdateBallStyle();
// }
// //Modify StartAutoMove function
// function StartAutoMove() {
//     velX = RandomRange(-10, 10);
//     velY = RandomRange(-10, 30);
//     //setInterval(MoveIt,100); don't use this anymore
//     setInterval(MovePosWifCollision, 10); //use this instead
// }


// StartAutoMove(); //invoke the function to activate automove


// //function to update ball css as well as display text
// function UpdateBallStyle() {
//     durianId.style.left = ballX + "px"; //set left property to ball x variable
//     durianId.style.top = ballY + "px"; //set top property to ball x variable
// }






const submit = document.querySelector("#quizSubmit");
const reset = document.querySelector("#quizReset");
const quizResult = document.querySelector("#quizResult");
const q2Ans = ["Compass", "Gunpowder", "Papermaking", "Printing"];

let score = 0;

submit.addEventListener("click", CheckAns);

function CheckAns() {
    score = 0;
    const q1 = document.querySelector('input[name="q1"]').value.trim();
    if (q1 === "4") {
        score++;
    }

    const q2 = document.querySelectorAll('input[name="q2"]:checked');
    const selected = [];
    for (let chosen of q2) {
        selected.push(chosen.value);
    }

    let correct = true;
    for (let ans of q2Ans) {
        if (!selected.includes(ans)) {
            correct = false;
            break;
        }
    }

    if (correct && selected.length === q2Ans.length) {
        score++;
    }

    const q3 = document.querySelector('input[name="q3"]').value.trim().toLowerCase();
    if (q3 === "han") {
        score++;
    }

    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4) {
        if (q4.value === "Tang") {
        score++;
        }
    }

    const q5 = document.querySelector('select[name="q5"]');
    if (q5.value === "Cai Lun") {
        score++;
    }

    const q6 = document.querySelector('select[name="q6"]');
    if (q6.value === "Tang Dynasty") {
        score++;
    }

    quizResult.innerHTML = `<h2>Your Score: ${score}/6</h2>`;
}

reset.addEventListener("click", () => {
    // Reset all input fields
    document.querySelectorAll("input").forEach(input => {
        if (input.type === "checkbox" || input.type === "radio") {
            input.checked = false;
        } else {
            input.value = "";
        }
    });

    // Reset all select dropdowns
    document.querySelectorAll("select").forEach(select => {
        select.selectedIndex = 0;
    });
});






















/*find references to all the buttons and ball */
const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
const resetBtn = document.querySelector("#resetBtn");
const ball = document.querySelector("#ball");
const ballContainer = document.querySelector("#ballContainer");
const ballContainerStyle = getComputedStyle(ballContainer);
let ballContainerWidth = ballContainer.offsetWidth - parseFloat(ballContainerStyle.paddingLeft) - parseFloat(ballContainerStyle.paddingRight) - ball.offsetWidth;
const ballImage = ball.querySelector("img");
const ballContent = document.querySelector("#ballContent");
var ballX = ballY = 0; //assign initial position of ball

//functions to update variables to control ball position
function ResetPos() {
    ballX=ballY=0; //reset to zero
    UpdateBallStyle();
}

function MovePos(leftInc) {
    ballX += leftInc;
    UpdateBallStyle();
}

//function to update ball css as well as display text
function UpdateBallStyle(){
    if (ballX < 0) {
        ballX = 0;
    }
    else if (ballX > ballContainerWidth) {
        ballX = ballContainerWidth;
    }
    ball.style.left = ballX+"px";

    UpdateBallContentAndImage();
}

//eventlisteners to activate MovePos
leftBtn.addEventListener("click", function () {
    MovePos(-ballContainerWidth/5)
});

//leftBtn.addEventListener("click", MoveLeft(-10,0)); //wrong
//cannot do like this. MoveLeft(-10,0) will execute immediately

//using anonymous function to pass in arguments from eventlistener
rightBtn.addEventListener("click", function () {
    MovePos(ballContainerWidth/5)
});

resetBtn.addEventListener("click", ResetPos);


document.addEventListener('keydown', (e) => {
    if (e.repeat) return;

    switch (e.code) {
    case "KeyD":
        MovePos(80);
        break;
    case "KeyA":
        MovePos(-80);
        break;
    }
});

const regionInfo = {
  "China": {
    title: "China - The Birthplace of Silk and Innovation",
    description: "China was the eastern origin of the Silk Road and the world's sole producer of silk for centuries. The trade routes began in Chang'an (now Xi'an), capital of multiple Chinese dynasties.",
    exports: "Silk, porcelain, tea, paper, gunpowder, compass",
    exportsHeader: "Key Exports",
    exportsDescription: "China's monopoly on silk production made it the most coveted luxury item worldwide, while their revolutionary inventions like gunpowder, paper, and the compass fundamentally changed how people lived, communicated, and navigated across continents.",
    culture: "Buddhism spread, inventions, Confucian ideas",
    cultureHeader: "Cultural Contributions",
    cultureDescription: "Chinese technological innovations revolutionized warfare, navigation, and knowledge preservation globally, while Buddhist and Confucian philosophies provided new frameworks for governance, ethics, and spiritual understanding that shaped entire civilizations from Korea to Central Asia.",
    img: "images/china emoji.png",
    exportsImage: "images/China.png",
    cultureImage: "images/China.png",
    emoji: { filter: "drop-shadow(0 0 10px rgba(255, 0, 0, 0.8))" }
  },
  "India": {
    title: "India - The Spiritual and Spicy Connector",
    description: "India was a cultural and trade crossroads of East and West. It participated in both land and maritime Silk Road routes.",
    exports: "Spices, textiles, gemstones, ivory, cotton, indigo dye",
    exportsHeader: "Key Exports",
    exportsDescription: "India's aromatic spices like black pepper, cinnamon, and cardamom were literally worth their weight in gold, driving European exploration for centuries, while precious gemstones, fine cotton textiles, and indigo dye became status symbols across the ancient world.",
    culture: "Hinduism, Buddhism, mathematics, medicine, art, astronomy",
    cultureHeader: "Cultural Contributions",
    cultureDescription: "Indian mathematical concepts including the decimal system and zero revolutionized global mathematics, while Ayurvedic medicine and surgical techniques advanced healthcare, and Hindu-Buddhist art styles influenced temple architecture from Southeast Asia to Central Asia.",
    img: "images/india emoji.png",
    exportsImage: "images/China.png",
    cultureImage: "images/China.png",
    emoji: { filter: "drop-shadow(0 0 10px rgba(255, 186, 108, 0.8))" }
  },
  "Uzbekistan": {
    title: "Uzbekistan - Oasis Cities of Central Asia",
    description: "Uzbekistan's cities like Samarkand and Bukhara were caravan hubs where traders from China, India, Persia converged.",
    exports: "Horses, metalwork, leather goods, dried fruits",
    exportsHeader: "Key Exports",
    exportsDescription: "Central Asian horses were crucial for military campaigns and long-distance travel, while expert metalworkers produced weapons and tools that were traded across continents, and dried fruits provided essential nutrition for grueling caravan journeys through harsh desert terrain.",
    culture: "Islamic learning, arts, Persian-Chinese cultural exchange, trade facilitation",
    cultureHeader: "Cultural Role",
    cultureDescription: "The great cities of Samarkand and Bukhara became prestigious centers of Islamic scholarship where Persian poetry merged with Chinese philosophy, creating unique architectural styles and fostering the translation movement that preserved and transmitted ancient Greek and Indian knowledge to the world.",
    img: "images/uzbekistan emoji.png",
    exportsImage: "images/China.png",
    cultureImage: "images/China.png",
    emoji: { filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 1))" }
  },
  "Persia": {
    title: "Persia - The Imperial Bridge Between Worlds",
    description: "Persia controlled many crucial Silk Road sections, linking East and West through its vast empire.",
    exports: "Persian rugs, wine, pearls, perfume oils, metalwork, glass",
    exportsHeader: "Key Exports",
    exportsDescription: "Persian carpets became symbols of wealth and sophistication in palaces from China to Europe, while their fine wines, lustrous pearls from the Persian Gulf, and exquisite perfume oils set the standards for luxury goods that influenced court culture across three continents.",
    culture: "Literature, infrastructure development, Zoroastrianism, Persian art and poetry",
    cultureHeader: "Cultural Contributions",
    cultureDescription: "Persian engineers built the world's most advanced road systems and caravanserais that enabled safe long-distance trade, while Persian literature and poetry became the lingua franca of educated elites from Turkey to India, and Zoroastrian concepts of good versus evil influenced major world religions.",
    img: "images/persia emoji.png",
    exportsImage: "images/China.png",
    cultureImage: "images/China.png",
    emoji: { filter: "drop-shadow(0 0 10px rgba(72, 255, 0, 1))" }
  },
  "Turkey": {
    title: "Turkey - The Continental Gateway",
    description: "Turkey was home to Constantinople, the crucial link between Asia and Europe, controlling access to European markets.",
    exports: "Processed goods, wine, olive oil, Byzantine crafts",
    exportsHeader: "Key Exports",
    exportsDescription: "Constantinople's strategic position allowed it to control and tax all goods flowing between Asia and Europe, while Byzantine artisans refined Eastern silk and spices into luxury products that commanded premium prices in European markets.",
    culture: "Byzantine heritage, blend of Christian and Islamic cultures, architectural innovations",
    cultureHeader: "Cultural Contributions",
    cultureDescription: "As the last remnant of the Roman Empire, Byzantium preserved classical Greek and Roman knowledge while absorbing Islamic innovations, creating magnificent architectural wonders like the Hagia Sophia that influenced both Eastern Orthodox and Islamic building traditions for centuries.",
    img: "images/turkey emoji.png",
    exportsImage: "images/China.png",
    cultureImage: "images/China.png",
    emoji: { filter: "drop-shadow(0 0 10px rgba(255, 0, 0, 0.8))" }
  },
  "Italy": {
    title: "Italy - The European Endpoint",
    description: "Italy's merchant republics like Venice and Genoa were the main European recipients and distributors of Eastern goods.",
    exports: "European manufactured goods, wine, olive oil, glass (Venetian)",
    exportsHeader: "Key Exports to East",
    exportsDescription: "Italy traded European products eastward while importing Asian luxuries.",
    culture: "Renaissance funding through trade wealth, maritime exploration, luxury culture development",
    cultureHeader: "Cultural Impact",
    cultureDescription: "Silk Road wealth fueled the Renaissance and European exploration age.",
    img: "images/italy emoji.png",
    exportsImage: "images/China.png",
    cultureImage: "images/China.png",
    emoji: { filter: "drop-shadow(0 0 10px rgba(21, 255, 0, 1))" }
  }
};


let currentImage = "images/china emoji.png";
ballContent.innerHTML = `
    <h1>${regionInfo["China"].title}</h1>
    <p>${regionInfo["China"].description}</p>
    <aside><img src="${regionInfo["China"].exportsImage}" alt="exports Image"></aside>
    <article><b>${regionInfo["China"].exportsHeader}</b><p>${regionInfo["China"].exports}</p>
    <p class="description">${regionInfo["China"].exportsDescription}</p></article>
    <article><b>${regionInfo["China"].cultureHeader}</b><p>${regionInfo["China"].culture}</p>
    <p class="description">${regionInfo["China"].cultureDescription}</p></article>
    <aside><img src="${regionInfo["China"].cultureImage}" alt="culture Image"></aside>
`;

function UpdateBallContentAndImage() {
    const cutOff = ballContainerWidth / 5;

    let regionKey = "";

    if (ballX >= 0 && ballX < cutOff / 2) {
        regionKey = "China";
    }
    else if (ballX >= cutOff / 2 && ballX < (cutOff * 2 - cutOff / 2)) {
        regionKey = "India";
    }
    else if (ballX >= (cutOff * 2 - cutOff / 2) && ballX < (cutOff * 3 - cutOff / 2)) {
        regionKey = "Uzbekistan";
    }
    else if (ballX >= (cutOff * 3 - cutOff / 2) && ballX < (cutOff * 4 - cutOff / 2)) {
        regionKey = "Persia";
    }
    else if (ballX >= (cutOff * 4 - cutOff / 2) && ballX < (cutOff * 5 - cutOff / 2)) {
        regionKey = "Turkey";
    }
    else {
        regionKey = "Italy";
    }

    const info = regionInfo[regionKey];

    if (info.img !== currentImage) {
        ballImage.style.opacity = 0;
        ballImage.style.transform = "scale(0)";

        const targetRegion = regionKey;

        setTimeout(() => {
            let regionCheck = "";
            if (ballX >= 0 && ballX < cutOff / 2) {
                regionCheck = "China";
            }
            else if (ballX >= cutOff / 2 && ballX < (cutOff * 2 - cutOff / 2)) {
                regionCheck = "India";
            }
            else if (ballX >= (cutOff * 2 - cutOff / 2) && ballX < (cutOff * 3 - cutOff / 2)) {
                regionCheck = "Uzbekistan";
            }
            else if (ballX >= (cutOff * 3 - cutOff / 2) && ballX < (cutOff * 4 - cutOff / 2)) {
                regionCheck = "Persia";
            }
            else if (ballX >= (cutOff * 4 - cutOff / 2) && ballX < (cutOff * 5 - cutOff / 2)) {
                regionCheck = "Turkey";
            }
            else {
                regionCheck = "Italy";
            }

            if (regionCheck !== targetRegion) {
                ballImage.style.opacity = 1;
                ballImage.style.transform = "scale(1)";
                return;
            }

            ballImage.src = info.img;
            ballImage.style.filter = "none";
            ballImage.style.filter = info.emoji.filter;
            currentImage = info.img;
            ballContent.innerHTML = `
                <h1>${info.title}</h1>
                <p>${info.description}</p>
                <aside><img src="${info.exportsImage}" alt="exports Image"></aside>
                <article><b>${info.exportsHeader}</b> <p>${info.exports}</p>
                <p class="description">${info.exportsDescription}</p></article>
                <article><b>${info.cultureHeader}</b> <p>${info.culture}</p>
                <p class="description">${info.cultureDescription}</p></article>
                <aside><img src="${info.cultureImage}" alt="culture Image"></aside>
            `;
            ballImage.style.opacity = 1;
            ballImage.style.transform = "scale(1)";
        }, 200);
    }
}



window.addEventListener('resize', function () {
    let ratio = ballX / ballContainerWidth;
    const ballContainerStyle = getComputedStyle(ballContainer);
    ballContainerWidth = ballContainer.offsetWidth - parseFloat(ballContainerStyle.paddingLeft) - parseFloat(ballContainerStyle.paddingRight) - ball.offsetWidth;
    ballX = (ballContainerWidth * ratio);
    UpdateBallStyle();
    calculateAndSetHeight();
});


let currentTypingID = 0;

function typeWriter(title, bar, text, timeout) {
    const thisTypingID = ++currentTypingID; // unique ID per call
    let i = 0;
    title.innerHTML = '&nbsp;';

    function type() {
        if (thisTypingID !== currentTypingID) return;

        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, timeout);
        }
    }
    type();
}

const rightContainer = document.querySelector('#page2 > div > section:first-of-type');

function calculateAndSetHeight() {
    console.log('Client width:', window.innerWidth);
    if (window.innerWidth > 800) {
        rightContainer.style.maxHeight = 1 + 'px';
        rightContainer.offsetHeight;

        const leftContainer1 = document.querySelector('#page2 > div > section:nth-of-type(2)');
        const leftContainer2 = document.querySelector('#page2 > div > section:nth-of-type(3)');
        
        const totalHeight = leftContainer1.offsetHeight + leftContainer2.offsetHeight;
        rightContainer.style.maxHeight = totalHeight + 20 + 'px';
    }
    else {
        const rightContainer = document.querySelector('#page2 > div > section:first-of-type');
        rightContainer.style.maxHeight = 'none';
    }
}


// Start when page loads
window.addEventListener('load', function() {
    typeWriter(title, bar, 'CHINA', 150);
    calculateAndSetHeight();
});


