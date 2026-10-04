// ================================
// OUR 20 THINGS
// ================================

const thingsList = [

    {
        title: "motorcycles",
        description: "i don't think i'll ever see a bike without thinking of you now."
    },

    {
        title: "helmets",
        description: "somehow even helmets became a you thing."
    },

    {
        title: "coding",
        description: "every time i see code, i just think of you sitting there figuring something out."
    },

    {
        title: "AI",
        description: "i swear the word AI is basically your name in my head at this point."
    },

    {
        title: "the gym",
        description: "Whenever I think of workout or gym my brain goes....oh, him."
    },

    {
        title: "late nights",
        description: "i still rmrbr and miss those late night talks we used to have on dc"
    },

    {
        title: "Poetry",
        description: "Before, I never really understood poetry, and I wasn’t interested in it either. But now I can understand it, just because I think it explains my feelings for you so, so beautifully."
    },

    {
        title: "White Shalwar kameez",
        description: "honestly i never ever thought k white shalwar kameez can look this good on someone."
    },

    {
        title: "Shaam ki chai",
        description: "I don’t know if you remember it or not, but once we had this really cute conversation about making shaam ki chai together, and I swear, whenever I’m making shaam ki chai, that conversation always comes to my mind."
    },

    {
        title: "my phone",
        description: "especially when it lights up and i'm secretly hoping it's you."
    },

    {
        title: "your jacket",
        description: "i kinda like ur blue jacket you are wearing everytime in winters, actually when i saw u for the very first time u were wearing that jacket lol."
    },

    {
        title: "computer stuff",
        description: "i don't understand half of it, but somehow it still reminds me of you."
    },

    {
        title: "that one photo",
        description: "i really love your whastapp wali pfp i mean i really love lovee."
    },

    {
        title: "Your Laugh",
        description: "Omg, you look so cute when you laugh or blush. It honestly gives me butterflies, lol. That’s why I always notice whenever you’re laughing or smiling."
    },

    {
        title: "your little habits",
        description: "it's always the tiny things you don't even realize you do."
    },

    {
        title: "Jokes",
        description: "i miss wo hamare usual flirty and funny jokes."
    },

    {
        title: "that one place",
        description: "No matter what happens, I will never forget the first time I saw you on the C Block stairs, near the lift. I literally froze for a second, I was like, “Omg, that’s actually him!"
    },

    {
        title: "your name",
        description: "seeing your name pop up still makes me smile like an idiot."
    },

    {
        title: "random little things",
        description: "you've somehow managed to sneak into the most random parts of my brain."
    },

    {
        title: "you",
        description: "because somehow, out of all the things in the world, you're the one i find in all of them. ♡"
    }

];


// ================================
// FIND THE ELEMENTS
// ================================

const startButton = document.getElementById("startButton");

const nextButton = document.getElementById("nextButton");

const slide21Button = document.getElementById("slide21Button");

const slide22Button = document.getElementById("slide22Button");

const intro = document.getElementById("intro");

const things = document.getElementById("things");

const ending = document.getElementById("ending");

const slide21 = document.getElementById("slide21");

const slide22 = document.getElementById("slide22");

const number = document.getElementById("number");

const title = document.getElementById("title");

const description = document.getElementById("description");


// ================================
// KEEP TRACK OF WHICH THING
// ================================

let currentThing = 0;


// ================================
// START BUTTON
// ================================

startButton.addEventListener("click", function() {

    intro.classList.add("hidden");

    things.classList.remove("hidden");

});


// ================================
// NEXT BUTTON
// ================================

nextButton.addEventListener("click", function() {

    currentThing++;


    // If we've reached the end...

    if (currentThing >= thingsList.length) {

        things.classList.add("hidden");

        ending.classList.remove("hidden");

        window.scrollTo(0, 0);

        return;
    }


    // Change the number

    number.textContent =
        String(currentThing + 1).padStart(2, "0") + " / 20";


    // Change the title

    title.textContent =
        thingsList[currentThing].title;


    // Change the sentence

    description.textContent =
        thingsList[currentThing].description;

});


// ================================
// SLIDE 20 → SLIDE 21
// ================================

slide21Button.addEventListener("click", function() {

    ending.classList.add("hidden");

    slide21.classList.remove("hidden");

    window.scrollTo(0, 0);

    // Track that Slide 21 was reached
    if (typeof gtag === "function") {
        gtag("event", "reached_slide_21");
    }

});


// ================================
// SLIDE 21 → SLIDE 22
// ================================

slide22Button.addEventListener("click", function() {

    slide21.classList.add("hidden");

    slide22.classList.remove("hidden");

    window.scrollTo(0, 0);

    // Track that Slide 22 was reached
    if (typeof gtag === "function") {
        gtag("event", "reached_slide_22");
    }

});


