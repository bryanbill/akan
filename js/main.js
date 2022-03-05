// Hold Akan names in the global namespace
var akanNames = [
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

const day = "2001-01-18";

const dayOfWeek = new Date(day).getDay();

console.log(akanNames[dayOfWeek].male);

/**
 * Get the day of the week for date of birth
 * @param {*} date 
 * @returns int
 */
const getDay = (date) => new Date(date).getDay();

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

const main = () => {
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const name = document.getElementById('fullName').value;

    const dayOfWeek = getDay(dob);
    const akanName = pickAkanName(gender, dayOfWeek);

    // Show Modal with the name


}