//target all elements to save to constants
const page1btn = document.getElementById('page1btn');
const page2btn = document.getElementById('page2btn');
const page3btn = document.getElementById('page3btn');
const page4btn = document.getElementById('page4btn');
const page5btn = document.getElementById('page5btn');
const page6btn = document.getElementById('page6btn');
const homebtn = document.getElementById('home');
const musicBtn = document.getElementById('musicButton');

const page1Content = document.querySelectorAll(".page1Content");

const title = document.getElementById('title');
const bar = document.getElementById('cursor');

const backgroundMusic = new Audio("audio/bg.mp3");
backgroundMusic.loop = true;

const drum = new Audio("audio/drum.mp3");
const gong = new Audio("audio/gong.mp3");
const dot = new Audio("audio/dot.mp3");
const drum2 = new Audio("audio/drum2.mp3");
const travelMusic = new Audio("audio/travel.mp3");
const win = new Audio("audio/win.mp3");
const enemy = new Audio("audio/enemy.mp3");
const oof = new Audio("audio/oof.mp3");
const lose = new Audio("audio/lose.mp3");
const guzheng = new Audio("audio/guzheng.mp3");

musicBtn.addEventListener("click", function () {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicBtn.classList.add("playing");
    } else {
        backgroundMusic.pause();
        musicBtn.classList.remove("playing");
    }
});

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
        setTimeout(function () {
            homebtn.classList.remove("animation");
        }, 2000);
    }
    typeWriter(title, bar, 'CHINA', 150);
    drum.currentTime = 0;
    drum.play();
});
page1btn.addEventListener("click", function () {
    show(1);
    navMenu.classList.remove("menuShow");
    typeWriter(title, bar, 'CHINA', 150);
    drum.currentTime = 0;
    drum.play();
});
page2btn.addEventListener("click", function () {
    show(2);
    navMenu.classList.remove("menuShow");
    typeWriter(title, bar, 'Major Dynasties', 125);
    calculateAndSetHeight();
    drum.currentTime = 0;
    drum.play();
});
page3btn.addEventListener("click", function () {
    show(3);
    navMenu.classList.remove("menuShow");
    typeWriter(title, bar, 'Famous Inventions', 125);
    drum.currentTime = 0;
    drum.play();
});
page4btn.addEventListener("click", function () {
    show(4);
    navMenu.classList.remove("menuShow");
    const ballContainerStyle = getComputedStyle(ballContainer);
    ballContainerWidth = ballContainer.offsetWidth - parseFloat(ballContainerStyle.paddingLeft) - parseFloat(ballContainerStyle.paddingRight) - ball.offsetWidth;
    typeWriter(title, bar, 'Silk Road & Trade', 100);
    UpdateBallContentAndImage();
    drum.currentTime = 0;
    drum.play();
});
page5btn.addEventListener("click", function () {
    show(5);
    navMenu.classList.remove("menuShow");
    typeWriter(title, bar, 'Ancient Chinese Culture', 100);
    drum.currentTime = 0;
    drum.play();
});
page6btn.addEventListener("click", function () {
    show(6);
    navMenu.classList.remove("menuShow");
    typeWriter(title, bar, 'Game', 100);
    drum.currentTime = 0;
    drum.play();
});
page1Content.forEach(function (content) {
    content.querySelector("aside:nth-of-type(1)").addEventListener("click", function () {
        show(2);
        navMenu.classList.remove("menuShow");
        typeWriter(title, bar, 'Major Dynasties', 125);
        calculateAndSetHeight();
        drum.currentTime = 0;
        drum.play();
    });
    content.querySelector("aside:nth-of-type(2)").addEventListener("click", function () {
        show(3);
        navMenu.classList.remove("menuShow");
        typeWriter(title, bar, 'Famous Inventions', 125);
        drum.currentTime = 0;
        drum.play();
    });
    content.querySelector("aside:nth-of-type(3)").addEventListener("click", function () {
        show(4);
        navMenu.classList.remove("menuShow");
        const ballContainerStyle = getComputedStyle(ballContainer);
        ballContainerWidth = ballContainer.offsetWidth - parseFloat(ballContainerStyle.paddingLeft) - parseFloat(ballContainerStyle.paddingRight) - ball.offsetWidth;
        typeWriter(title, bar, 'Silk Road & Trade', 100);
        UpdateBallContentAndImage();
        drum.currentTime = 0;
        drum.play();
    });
    content.querySelector("aside:nth-of-type(4)").addEventListener("click", function () {
        show(5);
        navMenu.classList.remove("menuShow");
        typeWriter(title, bar, 'Ancient Chinese Culture', 100);
        drum.currentTime = 0;
        drum.play();
    });
    content.querySelector("aside:nth-of-type(5)").addEventListener("click", function () {
        show(6);
        navMenu.classList.remove("menuShow");
        typeWriter(title, bar, 'Game', 100);
        drum.currentTime = 0;
        drum.play();
    });
});

hideall();
show(1);

const hamBtn = document.getElementById("hamIcon"); // the button
const navMenu = document.getElementById("sideMenu"); // the menu to show/hide
const closeBtn = document.getElementById("closeMenu");


hamBtn.addEventListener("click", function () {
    navMenu.classList.add("menuShow");
});

closeBtn.addEventListener("click", function () {
    navMenu.classList.remove("menuShow");
});

const flipCards = document.querySelectorAll('.flip');
            
flipCards.forEach(function(card) {
    card.addEventListener('click', function() {
        dot.currentTime = 0;
        dot.play();
        this.classList.toggle('flipped');
    });
});

/* When can see the dynasties, itll appear/float up to their original location, else itll be hidden */
document.addEventListener("DOMContentLoaded", function () {
    const dynasties = document.querySelectorAll('.dynasty');
    const date = document.querySelectorAll('.date');

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5
    });

    dynasties.forEach(function (dynasty) {
        observer.observe(dynasty);
    });
    date.forEach(function (date) {
        observer.observe(date);
    });
});




const dynastyInfo = {
    "Xia": {
        title: "Xia Dynasty (c. 2100-1600 BCE)",
        description: "The legendary first dynasty in traditional Chinese history. No archaeological proof, but it's believed to mark the start of civilization in China.",
        col: 0,
        row: 0
    },
    "Shang": {
        title: "Shang Dynasty (c. 1600-1046 BCE)",
        description: "The first confirmed dynasty with writing and bronze tools. Famous for oracle bones and early Chinese script.",
        col: 1,
        row: 0
    },
    "Zhou": {
        title: "Zhou Dynasty (1046-256 BCE)",
        description: "The longest dynasty, marked by the Mandate of Heaven and split into Western and Eastern Zhou.",
        col: 2,
        row: 0
    },
    "Warring": {
        title: "End of Warring States Period (256 BCE)",
        description: "Marks the end of the chaotic Warring States period and the beginning of Qin unification.",
        col: 3,
        row: 0
    },
    "Han": {
        title: "Han Dynasty (206 BCE-220 CE)",
        description: "Golden age of Chinese civilization, known for major advancements in culture, science, and the Silk Road trade.",
        col: 4,
        row: 0
    },
    "Three": {
        title: "Three Kingdoms Period (220-280 CE)",
        description: "Division of China into three rival kingdoms: Wei, Shu, and Wu, following the fall of the Han.",
        col: 0,
        row: 1
    },
    "Western": {
        title: "Western Jin Dynasty (265-316 CE)",
        description: "Brief reunification of China before collapse due to civil war and invasion.",
        col: 1,
        row: 1
    },
    "Sui": {
        title: "Sui Dynasty (581-618 CE)",
        description: "Short dynasty that reunified China and constructed the Grand Canal.",
        col: 2,
        row: 1
    },
    "Tang": {
        title: "Tang Dynasty (618-907 CE)",
        description: "A cultural golden age with flourishing arts, poetry, and international trade along the Silk Road.",
        col: 3,
        row: 1
    },
    "Five": {
        title: "Five Dynasties Period (907-960 CE)",
        description: "A time of fragmentation with rapid succession of short-lived dynasties.",
        col: 4,
        row: 1
    },
    "Song": {
        title: "Song Dynasty (960-1279 CE)",
        description: "Era of technological and economic advances; divided into Northern and Southern Song periods.",
        col: 0,
        row: 2
    },
    "Yuan": {
        title: "Yuan Dynasty (1271-1368 CE)",
        description: "Established by the Mongols under Kublai Khan; first foreign-led dynasty of China.",
        col: 1,
        row: 2
    },
    "Ming": {
        title: "Ming Dynasty (1368-1644 CE)",
        description: "Known for restoring Han rule, naval expeditions, and building much of the Great Wall as it stands today.",
        col: 2,
        row: 2
    },
    "Qing": {
        title: "Qing Dynasty (1644-1912 CE)",
        description: "Last imperial dynasty ruled by the Manchus; ended with the Xinhai Revolution and establishment of the Republic.",
        col: 3,
        row: 2
    },
    "People's": {
        title: "People's Republic of China (1912-present)",
        description: "The end of imperial rule and start of modern Chinese government, with continuing historical significance today.",
        col: 4,
        row: 2
    }
};

/* Show dynasty info but using sprites to show which part the iamge is at using col and row */
document.querySelectorAll('.dynasty button').forEach(function (button) {
    button.addEventListener('click', function () {
        gong.currentTime = 0;
        gong.play();
        const dynastyName = button.textContent.split(' ')[0];
        const info = dynastyInfo[dynastyName];
        if (info) {
            document.getElementById('dynastytitle').textContent = info.title;
            document.getElementById('dynastydescription').textContent = info.description;
            let x = (info.col / 4) * 100;
            let y = (info.row / 2) * 100;
            document.getElementById('dynastyimage').style.backgroundPosition = x + '% ' + y + '%';
            document.getElementById('dynastyinfo').classList.toggle('show');
        }
    });
});

document.getElementById('closebutton').addEventListener('click', function () {
    document.getElementById('dynastyinfo').classList.toggle('show');
});

/* remove tile to show content behind when clicked */
const tiles = document.querySelectorAll('.blockingtile');
tiles.forEach(function (tile) {
    tile.addEventListener('click', function () {
        drum2.currentTime = 0;
        drum2.play();
        tile.classList.add('gone');
    });
});

const page3Reset = document.querySelector('#inventions > button');
page3Reset.addEventListener('click', function () {
    drum2.currentTime = 0;
    drum2.play();
    tiles.forEach(function (tile) {
        tile.classList.remove('gone');
    });
});

const inventions = document.querySelector('#inventions');
const quizButton = document.querySelector('#quizButton > button');
const quiz = document.querySelector('#quiz');

quizButton.addEventListener('click', function () {
    quiz.classList.toggle('gone');
    inventions.classList.toggle('gone');
    if (quiz.classList.contains('gone')) {
        quizButton.textContent = 'Enter Quiz';
    } 
    else {
        quizButton.textContent = 'Exit Quiz';
    }
});




const submit = document.querySelector("#quizSubmit");
const reset = document.querySelector("#quizReset");
const quizResult = document.querySelector("#quizResult");
const q2Ans = ["Compass", "Gunpowder", "Papermaking", "Printing"];

let score = 0;

submit.addEventListener("click", CheckAns);

/* Check Quiz Submit */
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
    if (q3 === "han" || q3 === "handynasty") {
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

    quizResult.innerHTML = "<h2>Your Score: " + score + "/6</h2>";
}

/* Reset quiz inputs */
reset.addEventListener("click", function () {
    // Reset all input fields
    document.querySelectorAll("input").forEach(function (input) {
        if (input.type === "checkbox" || input.type === "radio") {
            input.checked = false;
        } else {
            input.value = "";
        }
    });

    // Reset all select dropdowns
    document.querySelectorAll("select").forEach(function (select) {
        select.selectedIndex = 0;
    });
});







/* Game Objects */
const locations = ['China', 'India', 'Uzbekistan', 'Persia', 'Turkey', 'Italy'];
const items = {
    'China': [
        {name: '🧵 Silk 🧵', price: 20, doublePrice: true},
        {name: '🍵 Tea 🍵', price: 15, doublePrice: false},
        {name: '🏺 Porcelain 🏺', price: 25, doublePrice: true},
        {name: '💎 Jade 💎', price: 18, doublePrice: false}
    ],
    'India': [
        {name: '🌶️ Spices 🌶️', price: 18, doublePrice: true},
        {name: '💎 Gems 💎', price: 30, doublePrice: true},
        {name: '🧵 Cotton 🧵', price: 12, doublePrice: false},
        {name: '🕯️ Incense 🕯️', price: 16, doublePrice: false}
    ],
    'Uzbekistan': [
        {name: '🧶 Carpets 🧶', price: 35, doublePrice: true},
        {name: '🍈 Melons 🍈', price: 8, doublePrice: false},
        {name: '🐎 Horses 🐎', price: 50, doublePrice: false},
        {name: '🪙 Gold Coins 🪙', price: 22, doublePrice: true}
    ],
    'Persia': [
        {name: '🌸 Perfume 🌸', price: 22, doublePrice: true},
        {name: '🌺 Saffron 🌺', price: 40, doublePrice: true},
        {name: '🥜 Pistachios 🥜', price: 14, doublePrice: false},
        {name: '🥈 Silver 🥈', price: 28, doublePrice: false}
    ],
    'Turkey': [
        {name: '👞 Leather 👞', price: 16, doublePrice: false},
        {name: '🍯 Honey 🍯', price: 10, doublePrice: false},
        {name: '🏺 Ceramics 🏺', price: 28, doublePrice: true},
        {name: '🫒 Olives 🫒', price: 12, doublePrice: false}
    ]
};



let player = 0;
let gold = 100;
let combat = false;
let inventory = {};
let enemyCount = 0;
let combatTimer = 0;
let timer = null;


const travelBtn = document.querySelector("#travelBtn");
const buyBtn = document.querySelector("#buyBtn");
const backBtn = document.querySelector("#backBtn");
const startBtn = document.querySelector("#startBtn");
const restartBtn = document.querySelector("#restartBtn");

const mainArea = document.querySelector("#mainArea");
const shopArea = document.querySelector("#shop");
const enemyArea = document.querySelector("#enemyArea");
const gameOverArea = document.querySelector("#gameOver");
const startArea = document.querySelector("#startArea");
const banditArea = document.querySelector("#banditArea");

const where = document.querySelector("#location");
const goldAmt = document.querySelector("#gold");
const progress = document.querySelector("#progress");
const time = document.querySelector("#timer");
const place = document.querySelector("#place");

const endMessage = document.querySelector("#gameOverText");

travelBtn.addEventListener("click", travel);
buyBtn.addEventListener("click", function() {
    shopArea.classList.remove("gone");
    mainArea.classList.add("gone");
    updateShop();
});
backBtn.addEventListener("click", function() {
    mainArea.classList.remove("gone");
    shopArea.classList.add("gone");
});
startBtn.addEventListener("click", function() {
    resetGame();
    updateStats();
    mainArea.classList.remove("gone");
    startArea.classList.add("gone");
});
restartBtn.addEventListener("click", function() {
    resetGame();
});

/* 50% chance to fight or travel */
function travel() {
    if (combat) {
        return;
    }

    if (Math.random() < 0.5) {
        travelMusic.pause();
        enemy.currentTime = 0;
        enemy.play();
        startCombat();
    } else {
        travelMusic.currentTime = 0;
        travelMusic.play();
        moveNext();
    }
}

/* Update user stats */
function updateStats() {
    where.innerHTML = '<p>Location: ' + locations[player] + '</p>';
    goldAmt.innerHTML = '<p>Gold: ' + gold + '</p>';
    progress.innerHTML = '<p>Progress: ' + (player + 1) + '/6</p>';
}

/* Update shop info based on location*/
function updateShop() {
    const shopItems = items[locations[player]];
    shopItems.forEach(function (item, index) {
        const product = document.getElementById('item' + (index + 1));
        const name = product.querySelector("p:nth-child(1)");
        const cost = product.querySelector("p:nth-child(2)");
        const itemBtn = product.querySelector("button");

        name.textContent = item.name;
        cost.textContent = 'Price: ' + item.price + ' Gold';

        itemBtn.onclick = function () {
            buyItem(item.name, item.price);
        };
    });
}

/* check if can buy item */
function buyItem(name, price) {
    if (gold >= price) {
        gold -= price;

        if (inventory[name]) {
            inventory[name]++;
        } else {
            inventory[name] = 1;
        }

        updateStats();
        updateInventory();
    } else {
        alert('Not enough gold!');
    }
}

/* Create divs and make them under inventoryItems */
function updateInventory() {
    const inv = document.getElementById('inventoryItems');
    inv.innerHTML = '';

    let empty = true;

    for (let item in inventory) {
        empty = false;
        const amount = inventory[item];
        const div = document.createElement('div');
        div.textContent = item + ": " + amount;
        inv.appendChild(div);
    }
    

    if (empty) {
        const div = document.createElement('div');
        div.textContent = "Empty";
        inv.appendChild(div);
    }
}

/* When user meets combat, spawns 3 enemies */
function startCombat() {
    combat = true;
    mainArea.classList.add("gone");
    enemyArea.classList.remove("gone");
    enemyCount = 3;
    combatTimer = 10;

    for (let i = 0; i < 3; i++) {
        spawnEnemy();
    }

    timer = setInterval(function () {
        combatTimer--;
        time.textContent = combatTimer;

        if (combatTimer <= 0) {
            lose.currentTime = 0;
            lose.play();
            endMessage.innerHTML = '<p>Game Over! You were robbed by the bandits.</p>';
            enemyArea.classList.add("gone");
            gameOverArea.classList.remove("gone");
            clearInterval(timer);
        }
    }, 1000);
}

/* Spawn an enemy */
function spawnEnemy() {
    const enemy = document.createElement("img");
    enemy.classList.add("enemy");
    enemy.src = "images/bandit.png";
    enemy.alt = "Bandit";
    enemy.style.left = 20 + Math.random() * (banditArea.offsetWidth - 80) + 'px';
    enemy.style.top =  20 + Math.random() * (banditArea.offsetHeight - 80) + 'px';

    const interval = setInterval(function () {
        enemy.style.left = 20 + Math.random() * (banditArea.offsetWidth - 80) + 'px';
        enemy.style.top =  20 + Math.random() * (banditArea.offsetHeight - 80) + 'px';
        if (combatTimer <= 0) {
            enemy.remove();
        }
    }, 1000);

    enemy.onclick = function() {
        if (enemy.style.opacity === "0") {
            return; 
        }

        oof.currentTime = 0;
        oof.play();

        enemy.classList.add("animation");
        enemy.style.opacity = "0";
        enemyCount--;

        clearInterval(interval);
        
        if (enemyCount <= 0) {
            clearInterval(timer);
            setTimeout(moveNext, 500);
            combat = false;
            combatTimer = 0;
        }
    };

    banditArea.appendChild(enemy);
}

/* Go to next location */
function moveNext() {
    player++;

    if (player >= locations.length - 1) {
        endGame();
    } else {
        place.textContent = 'You are now in ' + locations[player];
        updateStats();
        enemyArea.classList.add("gone");
        mainArea.classList.remove("gone");
    }
}

/* When player wins */
function endGame() {
    updateStats();

    let total = 0;

    for (let thing in inventory) {
        if (inventory.hasOwnProperty(thing)) {
            let found = false;

            for (let region in items) {
                for (let i = 0; i < 4; i++) {
                    let thingy = items[region][i];

                    if (thingy.name === thing) {
                        if (thingy.doublePrice) {
                            total += thingy.price * inventory[thing] * 2;
                        } 
                        else {
                            total += thingy.price * inventory[thing];
                        }
                        found = true;
                        break;
                    }
                }
                if (found) break;
            }
        }
    }

    enemy.pause();
    travelMusic.pause();
    win.currentTime = 0;
    win.play();

    endMessage.innerHTML = 
    '<p>Congratulations! You have reached Italy and sold everything!</p>' +
    '<p>You have profitted ' + (total + gold - 100) + ' Gold</p>';
    enemyArea.classList.add("gone");
    mainArea.classList.add("gone");
    gameOverArea.classList.remove("gone");
}

/* Reset player stats etc */
function resetGame() {
    player = 0;
    gold = 100;
    inventory = {};
    combat = false;
    enemyCount = 0;
    combatTimer = 0;
    timer = null;


    mainArea.classList.add("gone");
    shopArea.classList.add("gone");
    enemyArea.classList.add("gone");
    gameOverArea.classList.add("gone");
    startArea.classList.remove("gone");
    where.innerHTML = '<p>Start First</p>';
    goldAmt.innerHTML = '';
    progress.innerHTML = '';
    updateInventory();

    win.pause();
    enemy.pause();
    travelMusic.pause();
}










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
var ballX = 0; //assign initial position of ball
var ballY = 0;

//functions to update variables to control ball position
function ResetPos() {
    guzheng.currentTime = 0;
    guzheng.play();
    ballX=ballY=0; //reset to zero
    UpdateBallStyle();
}

function MovePos(leftInc) {
    guzheng.currentTime = 0;
    guzheng.play();
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
    MovePos(-ballContainerWidth/5);
});

//leftBtn.addEventListener("click", MoveLeft(-10,0)); //wrong
//cannot do like this. MoveLeft(-10,0) will execute immediately

//using anonymous function to pass in arguments from eventlistener
rightBtn.addEventListener("click", function () {
    MovePos(ballContainerWidth/5);
});

resetBtn.addEventListener("click", ResetPos);

/* move the ball left and right using A and D */
document.addEventListener('keydown', function (e) {
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

/* Region Information Object */
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
        img: "images/chinaEmoji.png",
        exportsImage: "images/silk.webp",
        cultureImage: "images/buddhism.webp",
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
        img: "images/indiaEmoji.png",
        exportsImage: "images/spices.webp",
        cultureImage: "images/hinduism.webp",
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
        img: "images/uzbekistanEmoji.png",
        exportsImage: "images/dried.webp",
        cultureImage: "images/islam.webp",
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
        img: "images/persiaEmoji.png",
        exportsImage: "images/rug.webp",
        cultureImage: "images/literature.webp",
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
        img: "images/turkeyEmoji.png",
        exportsImage: "images/art.webp",
        cultureImage: "images/christian.webp",
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
        img: "images/italyEmoji.png",
        exportsImage: "images/glass.webp",
        cultureImage: "images/maritime.webp",
        emoji: { filter: "drop-shadow(0 0 10px rgba(21, 255, 0, 1))" }
    }
};


let currentImage = "images/china emoji.png";
ballContent.innerHTML = '<h1>' + regionInfo.China.title + '</h1>' +
    '<p>' + regionInfo.China.description + '</p>' +
    '<aside><img src="' + regionInfo.China.exportsImage + '" alt="exports Image"></aside>' +
    '<article><b>' + regionInfo.China.exportsHeader + '</b><p>' + regionInfo.China.exports + '</p>' +
    '<p class="description">' + regionInfo.China.exportsDescription + '</p></article>' +
    '<article><b>' + regionInfo.China.cultureHeader + '</b><p>' + regionInfo.China.culture + '</p>' +
    '<p class="description">' + regionInfo.China.cultureDescription + '</p></article>' +
    '<aside><img src="' + regionInfo.China.cultureImage + '" alt="culture Image"></aside>';

/* Update the content in silk road based on the flag, info is retrieved from the object and html is changed */
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

        setTimeout(function () {
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
            ballContent.innerHTML = '<h1>' + info.title + '</h1>' +
                '<p>' + info.description + '</p>' +
                '<aside><img src="' + info.exportsImage + '" alt="exports Image"></aside>' +
                '<article><b>' + info.exportsHeader + '</b> <p>' + info.exports + '</p>' +
                '<p class="description">' + info.exportsDescription + '</p></article>' +
                '<article><b>' + info.cultureHeader + '</b> <p>' + info.culture + '</p>' +
                '<p class="description">' + info.cultureDescription + '</p></article>' +
                '<aside><img src="' + info.cultureImage + '" alt="culture Image"></aside>';

            ballImage.style.opacity = 1;
            ballImage.style.transform = "scale(1)";
        }, 200);
    }
}


/* Update details when window is resized */
window.addEventListener('resize', function () {
    let ratio = ballX / ballContainerWidth;
    const ballContainerStyle = getComputedStyle(ballContainer);
    ballContainerWidth = ballContainer.offsetWidth - parseFloat(ballContainerStyle.paddingLeft) - parseFloat(ballContainerStyle.paddingRight) - ball.offsetWidth;
    ballX = (ballContainerWidth * ratio);
    UpdateBallStyle();
    calculateAndSetHeight();
});


let currentTypingID = 0;

/* Keep Typing until I type finish the text */
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

/* calculate maxheight for timeline container or it will be too long */
function calculateAndSetHeight() {
    if (window.innerWidth > 800) {
        rightContainer.style.maxHeight = 1 + 'px';
        rightContainer.offsetHeight = rightContainer.offsetHeight;

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



/* User Click = fullscreen */
document.addEventListener("click", enterFullscreen);

function enterFullscreen() { //must be called by user generated event
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
}