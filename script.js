
/* =========================
   LIGHT / DARK MODE
========================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }

});


/* Remember the selected theme */

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    themeBtn.textContent = "☀️";
}


/* =========================
   CHATBOT
========================= */

const chatMessages = document.getElementById("chatMessages");
const userQuestion = document.getElementById("userQuestion");
const askBtn = document.getElementById("askBtn");


function addMessage(message, type) {

    const messageElement = document.createElement("div");

    messageElement.classList.add(type);

    messageElement.textContent = message;

    chatMessages.appendChild(messageElement);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


function getBotResponse(question) {

    question = question.toLowerCase();


    /* Question 1 - Skills */

    if (
        question.includes("skill") ||
        question.includes("technology") ||
        question.includes("technologies")
    ) {

        return "My skills include HTML, CSS, JavaScript, Python, MySQL, and Git.";

    }


    /* Question 2 - Education */

    if (
        question.includes("education") ||
        question.includes("school") ||
        question.includes("study")
    ) {

        return "I am currently studying at Your School Name, where I am learning programming, web development, and information technology.";

    }


    /* Question 3 - Projects */

    if (
        question.includes("project") ||
        question.includes("projects")
    ) {

        return "My sample projects include a Personal Portfolio Website and a Student Management System.";

    }


    /* Extra question - About */

    if (
        question.includes("about") ||
        question.includes("who are you") ||
        question.includes("yourself")
    ) {

        return "I am a student and aspiring web developer who enjoys creating websites and learning new technologies.";

    }


    /* Extra question - Contact */

    if (
        question.includes("contact") ||
        question.includes("email")
    ) {

        return "You can contact me through yourname@email.com or through my social media accounts in the Contact section.";

    }


    return "Sorry, I don't know the answer to that question. Try asking about my skills, education, projects, or contact information.";
}


/* Ask button */

askBtn.addEventListener("click", () => {

    const question = userQuestion.value.trim();

    if (question === "") {
        return;
    }

    addMessage(question, "user-message");

    const response = getBotResponse(question);

    setTimeout(() => {

        addMessage(response, "bot-message");

    }, 400);

    userQuestion.value = "";

});


/* Allow Enter key */

userQuestion.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {
        askBtn.click();
    }

});


/* Suggested questions */

function askSuggested(question) {

    userQuestion.value = question;

    askBtn.click();

}


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );

    contactForm.reset();

});

