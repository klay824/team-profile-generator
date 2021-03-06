// Beginning of HTML
let header = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
    <link rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Tangerine">
    <link rel="stylesheet" type="text/css" href="./style.css">
    <title>My Team</title>
</head>

<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container text-center">
            <h1 class="display-4">MY TEAM</h1>            
        </div>
    </div>

    <!-- Team card will go below here -->
    <main class="container">
        <div class="row justify-content-center">`;


// This gets added on after the team members
let footer = `
        </div>
    </main>

</body>

</html>`

function generateHTML(team) {
    // Manager section 
    for (i = 0; i < team.length; i++) {
        if (team[i].getRole() == "Manager") {
            header += `
            <div class="card m-3 col-lg-4" style="width: 18rem;">
                <div class="card-header mt-3 mb-3">
                    <h3>${team[i].name}</h3>
                    <h4><i class="fas fa-mug-hot"></i> Manager</h4>
                </div>
                <ul class="list-group list-group-flush mb-3">
                <li class="list-group-item">Employee ID: ${team[i].id}</li>
                <li class="list-group-item">Email: <a href=mailto:${team[i].email} target="_blank">${team[i].email}</a>
                <li class="list-group-item">Office Number: ${team[i].officeNumber}</li>
                </ul>
            </div>`
        }
    }
    // Engineer
    for (i = 0; i < team.length; i++) {
        if (team[i].getRole() == "Engineer") {
            header += `
            <div class="card m-3 col-lg-4" style="width: 18rem;">
                <div class="card-header mt-3 mb-3">
                    <h3>${team[i].name}</h3>
                    <h4><i class="fas fa-glasses"></i> Engineer</h4>
                </div>
                <ul class="list-group list-group-flush mb-3">
                <li class="list-group-item">Employee ID: ${team[i].id}</li>
                <li class="list-group-item">Email: <a href=mailto:${team[i].email} target="_blank">${team[i].email}</a>
                <li class="list-group-item">GitHub: <a href="https://github.com/${team[i].GitHub}" target="_blank">${team[i].GitHub}</a></li>
                </ul>
            </div>`
        }
    }
    // Intern
    for (i = 0; i < team.length; i++) {
        if (team[i].getRole() == "Intern") {
            header += `
            <div class="card m-3 col-lg-4" style="width: 18rem;">
                <div class="card-header mt-3 mb-3">
                    <h3>${team[i].name}</h3>
                    <h4><i class="fas fa-user-graduate"></i> Intern</h4>
                </div>
                <ul class="list-group list-group-flush mb-3">
                <li class="list-group-item">Employee ID: ${team[i].id}</li>
                <li class="list-group-item">Email: <a href=mailto:${team[i].email} target="_blank">${team[i].email}</a></li>
                <li class="list-group-item">School: ${team[i].school}</li>
                </ul>
            </div>`
        }
    }

    return header + footer
}

module.exports = generateHTML;