// ===============================
// DARK MODE / LIGHT MODE
// ===============================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});


// ===============================
// CHATBOT
// ===============================

const askBtn = document.getElementById("askBtn");
const userQuestion = document.getElementById("userQuestion");
const chatMessages = document.getElementById("chatMessages");

function askQuestion() {

    let question = userQuestion.value.trim();

    if (question === "") {
        return;
    }

    // Display user's question
    let userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = question;

    chatMessages.appendChild(userMessage);

    // Get chatbot answer
    let answer = getAnswer(question);

    // Display chatbot answer
    let botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.textContent = answer;

    chatMessages.appendChild(botMessage);

    // Clear input
    userQuestion.value = "";

    // Scroll to latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// ===============================
// CHATBOT ANSWERS
// ===============================

function getAnswer(question) {

    question = question.toLowerCase();

    if (
        question.includes("skill") ||
        question.includes("skills")
    ) {
        return "My skills include HTML, CSS, JavaScript, Python, SQL, and Git.";
    }

    else if (
        question.includes("education") ||
        question.includes("school") ||
        question.includes("study")
    ) {
        return "I am currently studying BS Computer Science at LCC.";
    }

    else if (
        question.includes("project") ||
        question.includes("projects")
    ) {
        return "My projects include a Guessing Game and a Payroll System using HTML, CSS, JavaScript, and MySQL.";
    }

    else if (
        question.includes("name") ||
        question.includes("who are you")
    ) {
        return "My name is Shaun Isaac Telen. I am a BSCS2A student interested in technology and programming.";
    }

    else if (
        question.includes("course") ||
        question.includes("degree")
    ) {
        return "I am taking Bachelor of Science in Computer Science.";
    }

    else if (
        question.includes("html")
    ) {
        return "I use HTML to create the structure of websites.";
    }

    else if (
        question.includes("css")
    ) {
        return "I use CSS to design websites and make them responsive and attractive.";
    }

    else if (
        question.includes("javascript") ||
        question.includes("js")
    ) {
        return "I use JavaScript to add interaction and functionality to websites.";
    }

    else if (
        question.includes("python")
    ) {
        return "I use Python for programming, problem-solving, and creating applications.";
    }

    else if (
        question.includes("contact") ||
        question.includes("email")
    ) {
        return "You can contact me through my email at telen0006@gmail.com.";
    }

    else if (
        question.includes("hello") ||
        question.includes("hi") ||
        question.includes("hey")
    ) {
        return "Hello! Nice to meet you. You can ask me about my skills, education, projects, or background.";
    }

    else if (
        question.includes("hobby") ||
        question.includes("hobbies")
    ) {
        return "I enjoy learning about technology, programming, creating websites, and developing applications.";
    }

    else {
        return "Sorry, I don't know the answer to that yet. Try asking about my skills, education, projects, or contact information.";
    }
}


// ===============================
// ASK BUTTON
// ===============================

askBtn.addEventListener("click", function () {
    askQuestion();
});


// ===============================
// ENTER KEY
// ===============================

userQuestion.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        askQuestion();
    }

});


// ===============================
// SUGGESTED QUESTIONS
// ===============================

function askSuggested(question) {

    userQuestion.value = question;

    askQuestion();

}


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name + "!\n\nYour message has been received."
    );

    contactForm.reset();

});
