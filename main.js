const fs = require('fs');
const inquirer = require('inquirer')


const promptUser = () => {
  return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your location?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Add a bio about yourself',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'Add your LinkedIn URL',
            name: 'linkedin',
        },
        {
            type: 'input',
            message: 'Add your Github URL',
            name: 'github',
        },
    ]).then(
        (response) => fs.writeFileSync('index.HTML', generateHTML(response), err => {
            if (err) {
                console.log('Error writing file.')
            }
            else {
                console.log('File made.')
            }
        })
    );
};

const generateHTML = ({ name, location, bio, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>About me</h3>
    <p> ${bio}</p>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
  
</div>
</body>
</html>`;


const init = () => {
    promptUser(); 
}

init ();