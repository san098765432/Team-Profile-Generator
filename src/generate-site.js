const generateTeam = (team) => {
    console.log(team);
    
    //creating an empty array to push html elements on to and loop through the team data 
    const html = [];

    //creating functions for each type of employee that returns HTML data 
    const generateManager = manager => {
      console.log(manager);
      let managerHtml =`
     <div class="card" style="width: 18rem;">
     <div class="card-header">
         ${manager.name} <br/>
         <i class="fas fa-mug-hot"></i>Manager</div>
         <ul class="list-group list-group-flush">
         <li class="list-group-item">ID: ${manager.id}</li>
         <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
       </ul>
       </div>
       `;
      html.push(managerHtml);
}
const generateEngineer = engineer => {
    console.log(engineer);
    let engineerHtml =`
    <div class="card" style="width: 18rem;">
    <div class="card-header">
        ${engineer.name} <br/>
        <i class="fas fa-glasses"></i>Engineer</div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
        <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.githubUsername}">$(engineer.githubUsername)</a></li>  
       </ul>
       </div>
       `;
       html.push(engineerHtml);

}
const generateIntern = intern => {
    console.log(intern);
    let internHtml =`
    <div class="card" style="width: 18rem;">
    <div class="card-header">
        ${intern.name} <br/>
        <i class="fas fa-user-graduate"></i>Intern</div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
        <li class="list-group-item">School: ${intern.school}</li>
       </ul>
       </div>
       `;
       html.push(internHtml);
}

//creating a loop for all employees
for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
        generateManager(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
        generateEngineer(team[i]);
    }
    if (team[i].getRole() === "Intern") {
        generateIntern(team[i]);
    }
}

//join the HTML blocks
return html.join('');

}


//exporting function to create the page
module.exports = team => {
    return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
     integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    
     <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>

    <title> Team Profile Generator </title>

</head>

<body>
    <header>
        My Team
    </header>

    <main> ${generateTeam(team)} </main>
</body>
</html>
    `;
}



