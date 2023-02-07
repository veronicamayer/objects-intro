/* Lev 1_2 */
console.log("----------Lev 1_2----------");
const person = {
    name: 'Veronica',
    alter: 25,
    sagNameAlter: function() {
/*         alert(`Name: ${this.name}, Alter: ${this.alter}`);
 */    }
};

person.sagNameAlter();
console.log(`Name: ${person.name}, Alter: ${person.alter}`);

/* Lev 1_4 */
console.log("----------Lev 1_4----------");

let unsereHaustiere = [{
    tiertyp: "Katze",
    names: [
        "Gipsy",
        "Nala",
        "Dinky"
    ]
    },
    {
    tiertyp: "Hunde",
    names: [
        "Knöpfchen",
        "Pinselchen",
        "Droopy"
    ]
    }
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[1].names);

unsereHaustiere[1].names[0] = "Bello";
unsereHaustiere[1].names[1] = "Rocky";
unsereHaustiere[1].names[2] = "Max";
console.log(unsereHaustiere[1].names);

/* Lev 1_5 */
console.log("----------Lev 1_5----------");

let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
    "Obere Schublade": {
        Ordner1: "Dokumente",
        Ordner2: "Geheimnisse"
    },
    "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

/* Lev 1_6 */
console.log("----------Lev 1_6----------");


let myMusic = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];
console.log(myMusic);

let newAlbum = {
    kunstler: "Taylor Swift",
    title: "Midnights",
    release_jahr: 2022,
    formate: ["LP", "Download"],
    gold: true
};

myMusic.push(newAlbum);
console.log(myMusic);

console.log(myMusic[0].kunstler);
console.log(`Von Pink Floyd: ${myMusic[1].formate[3]}`);
console.log(`Von Pink Floyd: ${myMusic[1].gold}`);
console.log(`${myMusic[2].release_jahr} und ${myMusic[3].release_jahr}`);
console.log(`Von Metallica: ${myMusic[3].formate[2]}`);
console.log(`Von Metallica das Wort: ${myMusic[3].title.slice(17, 21)}`);
console.log(`Von Led Zeppelin das Wort: ${myMusic[2].title.slice(13, 15)}`);
console.log(`Von Pink Floyd das Wort: ${myMusic[1].kunstler.slice(5, 10)}`);

/* Lev 1_7 */
console.log("----------Lev 1_7----------");

for (let i = 0; i < myMusic.length; i++) {
    console.log(myMusic[i].kunstler);
    document.querySelector("#sectionOne").innerHTML += `<p>${myMusic[i].kunstler}</p>`;
    console.log(myMusic[i].title);
    document.querySelector("#sectionOne").innerHTML += `<p>${myMusic[i].title}</p>`;
    console.log(myMusic[i].formate);
    document.querySelector("#sectionOne").innerHTML += `<p>${myMusic[i].formate}</p>`;
    
    if (myMusic[i].release_jahr < 1975) {
        console.log(myMusic[i].release_jahr);
        document.querySelector("#sectionOne").innerHTML += `<p>${myMusic[i].release_jahr}</p>`
    }

    document.querySelector("#sectionOne").innerHTML += `<p></br></p>`;
}


/* Lev 1_8 */
console.log("----------Lev 1_8----------");

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

studentData.forEach(function(student) {
    console.log(student.name);
    console.log(student.coop);
    console.log(student.address.city);
    console.log(student.emails);

});

/* Lev 2_1 */
console.log("----------Lev 2_1----------");

let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

let names = [];
edelMetallPreise.forEach(function(element) {
    names.push(element.name)});
console.log(names);

console.log(edelMetallPreise.map(function(element) {return element.name}));

let preiseGramEuro = [];
edelMetallPreise.forEach(function(element) {
    preiseGramEuro.push(element.preiseGramEuro)});
console.log(preiseGramEuro);

console.log(edelMetallPreise.map(function(element) {return element.preiseGramEuro}));

let veraenderung = [];
edelMetallPreise.forEach(function(element) {
    veraenderung.push(element.veraenderung)});
console.log(veraenderung);

console.log(edelMetallPreise.map(function(element) {return element.veraenderung}));

console.log(edelMetallPreise.filter(function(element) {return element.preiseGramEuro > 50}));

edelMetallPreise.forEach(function(element) {
    document.querySelector("table").innerHTML += 
        `<tr><td>${element.name}</td><td>${element.preiseGramEuro}</td><td>${element.veraenderung}</td></tr>`;
});

/* Lev 2_2 */
console.log("----------Lev 2_2----------");

const singers = [
	{ name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
	{ name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
	{ name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B"},
	{ name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock"},
	{ name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica"},
	{ name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock"},
	{ name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop"},
	{ name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock"},
];

console.log(singers.sort((a, b) => a.name.localeCompare(b.name)));