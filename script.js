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
        description: "walking past a gym and my brain goes... oh, him."
    },

    {
        title: "late nights",
        description: "something about being awake at 2am will always remind me of you."
    },

    {
        title: "your songs",
        description: "i hear them and suddenly you're in my head again."
    },

    {
        title: "your favorite color",
        description: "i didn't even notice this color that much before you."
    },

    {
        title: "your usual drink",
        description: "i can't see this without thinking about your usual order."
    },

    {
        title: "my phone",
        description: "especially when it lights up and i'm secretly hoping it's you."
    },

    {
        title: "your hoodie",
        description: "it's just a hoodie, but obviously my brain had to make it about you."
    },

    {
        title: "computer stuff",
        description: "i don't understand half of it, but somehow it still reminds me of you."
    },

    {
        title: "that one photo",
        description: "you probably don't even like this picture, but i do."
    },

    {
        title: "your laugh",
        description: "sometimes i hear someone laugh and for half a second i think it's you."
    },

    {
        title: "your little habits",
        description: "it's always the tiny things you don't even realize you do."
    },

    {
        title: "our inside jokes",
        description: "probably makes absolutely no sense to anyone else, which makes it better."
    },

    {
        title: "that one place",
        description: "it's just a place now, but i'll always remember you there."
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
// FIND THE ELEMENTS ON OUR PAGE
// ================================

const startButton = document.getElementById("startButton");

const nextButton = document.getElementById("nextButton");

const intro = document.getElementById("intro");

const things = document.getElementById("things");

const ending = document.getElementById("ending");

const number = document.getElementById("number");

const title = document.getElementById("title");

const description = document.getElementById("description");


// ================================
// KEEP TRACK OF WHICH THING WE'RE ON
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
