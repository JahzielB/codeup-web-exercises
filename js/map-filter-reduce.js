(function () {
    "use strict";

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    let atLeastThreeLang = users.filter((lang) => lang.languages.length >= 3);

    let emails = users.map((e) => e.email);

    let totalYearsExp = users.reduce((acc, cur) => {return acc + cur.yearsOfExperience}, 0);

    let avgYearsExp = totalYearsExp / users.length;

    let longestEmail = users.reduce((acc, cur) => {
        return acc.length > cur.email.length ? acc : cur.email;
    }, '');

    let nameStr = users.reduce((acc, cur, index) => {
        if (index < users.length - 1) {
             return `${acc}${cur.name.substring(0, 1).toUpperCase()}${cur.name.substring(1, cur.name.length).toLowerCase()}, `
        } else {
            return `${acc}${cur.name.substring(0, 1).toUpperCase()}${cur.name.substring(1, cur.name.length).toLowerCase()}.`
        }
    }, 'Your instructors are: ');

    let uniqueLangs = users.reduce((acc, cur) => {
        for (let lang of cur.languages) {
            if (!acc.includes(lang)) {
                acc.push(lang)
            }
        }
        return acc;
    }, [])
})();