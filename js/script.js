const resultsContainer = document.querySelector(".results");

const outputError = document.querySelector(".error");

async function getTeams() {
    try {
        const response = await fetch("https://free-nba.p.rapidapi.com/teams", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "4b9fee3481msh5fb2cf3af18a49fp12c8f4jsnfb1165884b03",
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "page": "0"
            }
        })

        const json = await response.json();
        // console.log(data);

        const teams = json.data;
        // console.log(teams);

        resultsContainer.innerHTML = "";

        for (let i = 0; i < teams.length; i++) {
                        
            let teamsName = teams[i].full_name;
            // console.log(teamsName);

            let teamsDivision = teams[i].division;
            // console.log(teamsCity);

            let teamsConference = teams[i].conference;
            // console.log(teamsConference);

            let teamsId = teams[i].id;
            // console.log(teamsId);

            if (i === 15) {
                break;
            }

            resultsContainer.innerHTML += `<a href="details.html?id=${teamsId} class="container"
                                                <div class="result">
                                                    <strong>Name: </strong>${teamsName} <br>
                                                    <strong>Division: </strong>${teamsDivision} <br>
                                                    <strong>Conference: </strong>${teamsConference}
                                                </div>
                                            </a>`
        }

    } catch (err) {
        console.log("Error: " + err);
        outputError.innerHTML = "<div><strong>An error occurred loading the data. Maybe the API is down. Please try again later</strong></div>";
    } finally {
        document.querySelector(".loader").remove();
    }
}

getTeams();