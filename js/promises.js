(function () {
    "use strict";

    // let githubAPI = fetch("https://api.github.com/users/JahzielB/events", {headers: {'Authorization': `token ${GITHUB_KEY}`}})
    //
    // githubAPI.then(response => response.json())
    //     // .then(jsonResponse => console.log(jsonResponse.filter(user => user.type === "PushEvent")[0].created_at))
    //     .then(jsonResponse => console.log(jsonResponse))
    //     .catch(error => console.log(error))

    let lastCommit = (username, githubKey) => {
        let githubAPI = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${githubKey}`}})

        githubAPI.then(response => response.json())
            .then(jsonResponse => console.log(jsonResponse.filter(user => user.type === "PushEvent")[0].created_at))
            .catch(error => console.log(error))
    }

    // lastCommit("JahzielB", GITHUB_KEY);

    let wait = num => {
        let milliseconds = num * 1000;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, milliseconds);
        });
    }

    // console.log(wait(2));

    wait(3).then(() => console.log("You'll see this after 3 seconds"));

})();