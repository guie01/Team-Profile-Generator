renderHTML = (newEmployees) => {

    renderContent = (newEmployees) => {

        let returnedString = "";

        specificInfo = (employee) => {
            if(employee.getRole() === "Engineer"){
                return "GitHub: " + employee.github;
            } else if(employee.getRole() === "Intern"){
                return "School: " + employee.school;
            } else if(employee.getRole() === "Manager"){
                return "Ph: " + employee.officeNumber;
            }
        }

        newEmployees.forEach(employee => {
            returnedString += `
                    <div class="card mx-auto" style="width: 18rem">
                        <h5 class="card-header">${employee.name}<br /><br />${employee.getRole()}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.id}</li>
                            <li class="list-group-item">Email:<a href="mailto:${employee.email}">${employee.email}</a></li>
                            <li class="list-group-item">${specificInfo(employee)}</li>
                        </ul>
                    </div>`;
        })
        return returnedString;
    }

    let htmlString =
        `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Check Out Your Team!</title>
    </head>
    <body>
    <nav class="navbar navbar-dark bg-dark mb-5">
        <span class="navbar-brand mb-0 h1 w-100 text-center" id= "title">Team Profile</span>
    </nav>
    <div class="container">
        <div class="col-12">
    ${renderContent(newEmployees)}
        </div>
        </div>
    </body>
    </html>
    `

    return htmlString;
}

module.exports = renderHTML;