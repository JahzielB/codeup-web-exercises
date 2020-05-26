(function () {
    "use strict";

    // let githubAPI = fetch("https://api.github.com/users/JahzielB/events", {headers: {'Authorization': `token ${GITHUB_KEY}`}})
    //
    // githubAPI.then(response => response.json())
    //     .then(jsonResponse => console.log(jsonResponse.filter(user => user.type === "PushEvent")[0].created_at))
    //     .then(jsonResponse => console.log(jsonResponse))
    //     .catch(error => console.log(error))

    let lastCommit = (username, githubKey) => {
        return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${githubKey}`}})
            .then(response => response.json())
            .then(jsonResponse => jsonResponse.filter(user => user.type === "PushEvent")[0].created_at)
            .then(date => new Date(date).toDateString())
            .catch(error => console.log(error))
    }

    lastCommit("JahzielB", GITHUB_KEY).then(data => console.log(data))

    let wait = num => {
        let milliseconds = num / 1000;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`You'll see this after ${milliseconds} seconds`);
            }, num);
        });
    }

    wait(3000).then((data) => console.log(data));

    // let ganymedeGithubUsernames = ["aaronsingleterry10", "AndrewBrought", "armandoroman20", "AugustineCervantesIII", "bmarchambault", "chrise08", "Damontheath", "DylanLeifeste", "Fernando5712", "george412williams", "gregjett92", "JahzielB", "jayarredondo", "juliacontreras483", "JustinMcCaleb", "cottoknoah", "larrycastillo2009", "lauraldavis", "lgrant146", "MarkTAlonge", "mgarrisonn", "ramon-villarreal-leal", "Shelbypol", "trevormullis12"];
    //
    // ganymedeGithubUsernames.forEach(username => {
    //     fetch(`https://api.github.com/repos/${username}/codeup-web-exercises/contents/js/keys.js`, {headers: {'Authorization': `token ${GITHUB_KEY}`}})
    //         .then(response => response.json())
    //         .then(jsonResponse => console.log(jsonResponse))
    //         .catch(error => console.log(error))
    // });

})();