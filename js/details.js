const container = document.querySelector(".container");

const detailsContainer = document.querySelector(".team-details");

const outputError = document.querySelector(".error");

const queryString = document.location.search;
// console.log(queryString);

const params = new URLSearchParams(queryString);
// console.log(params);

const id = params.get("id");

async function fetchTeamDetails() {
    try {
        const response = await fetch("https://free-nba.p.rapidapi.com/teams/" + id, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "4b9fee3481msh5fb2cf3af18a49fp12c8f4jsnfb1165884b03",
                "x-rapidapi-host": "free-nba.p.rapidapi.com"
            }
        })
        
        const details = await response.json();
        // console.log(details);

        createHtml(details);

    } catch (err) {
        console.log("Error: " + err);
        outputError.innerHTML = "<div><strong>An error occurred loading the data. Maybe the API is down. Please try again later</strong></div>";
    }
}

fetchTeamDetails();

function createHtml(details) {
    container.innerHTML = `<h1>${details.full_name}</h1>
                            <div class="breadcrumb-nav"><a href=index.html>Go back to teams</a>
                            <div class="result">The <strong>${details.name}</strong>
                                come from the city of <strong>${details.city}</strong>. <br>
                                They play in the <strong>${details.division} division</strong> of the      
                                <strong>${details.conference}ern Conference</strong> of the NBA. <br>
                                When you watch <strong>${details.full_name}</strong>
                                play, it will be shortened to: <strong>${details.abbreviation}</strong>
                                on the scoreboard.
                            </div>`
}