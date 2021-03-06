// Hold Akan names in the global scope
const akanNames = [
    {
        male: "Kwasi",
        female: "Akosua"
    },
    {
        male: "Kwadwo",
        female: "Adwoa"
    },
    {
        male: "Kwabena",
        female: "Abenaa"
    },
    {
        male: "Kwaku",
        female: "Akua"
    },
    {
        male: "Yaw",
        female: "Yaa"
    },
    {
        male: "Kofi",
        female: "Afua"
    },
    {
        male: "Kwame",
        female: "Ama"
    }
];

/**
 * Get the day of the week for date of birth
 * @param {*} date 
 * @returns int
 */
const getDay = (date) => {
    // Parse the date to get Date object
    const parsedDate = new Date(date);

    // Return the day of the week otherwise
    return parsedDate.getDay();
};

/**
 * Pick Akan Name based on the gender and day of week
 * @param {*} gender 
 * @param {*} dayOfWeek 
 * @returns 
 */
const pickAkanName = (gender, dayOfWeek) => {

    if (gender === 'male') {
        return akanNames[dayOfWeek].male;
    }
    return akanNames[dayOfWeek].female;
}

/**
 * Main function of the app
 * @returns  void
 */
const main = () => {
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const name = document.getElementById('fullName').value;

    if (validate(dob, gender, name)) {
        const dayOfWeek = getDay(dob);
        const akanName = pickAkanName(gender, dayOfWeek);

        // Show Modal with the name
        document.getElementById('modal-overlay').classList.toggle('hidden');
        document.getElementById('modal').classList.toggle('hidden');
        document.getElementById('username').innerText = `Hello ${name}`;
        document.getElementById('text').innerText = `Your Akan Name is: ${akanName}`
    } else {
        var toast = document.getElementById("toast");
        toast.className = "show";

        // Show the toast for 3 seconds only
        setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);

    }

}

/**
 * Listen to events from Submit button and trigger the main function
 * This method prevents main function from being caled prematurely
 * @returns  - void
 */
document.getElementById('submit').addEventListener("click", (event) => {
    // Prevent the default action of the event {Reloading the page, e.t.c}
    event.preventDefault();

    // Trigger the main function
    main();
});

/**
 * Validates the input values
 * @param {*} dob 
 * @param {*} gender 
 * @param {*} name 
 * @returns bool
 */
const validate = (dob, gender, name) => {
    console.log(dob);
    if (dob.length === 0 || gender.length === 0 || name.length === 0) {

        return false;

    }
    console.info("Seems good, proceed");
    return true;
}