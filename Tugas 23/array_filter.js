let people = [
    {
        name: "Andi",
        gender: "male"
    },
    {
        name: "Siti",
        gender: "female"
    },
    {
        name: "Cindy",
        gender: "female"
    }
];

let female = people.filter(people => {
    return people.gender === "female";
});

console.log(female);