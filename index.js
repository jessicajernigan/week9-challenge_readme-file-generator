const generateMarkdown = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer');
const fs = require('fs');


// function to write README file
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (REQUIRED)',
      validate: title => {
        if (title) {
          return true;
        } else {
          console.log('Every project needs a title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Add some installation instructions:',
      validate: installation => {
        if (installation) {
          return true;
        } else {
          console.log('Help future users with some installation instructions!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage instructions for your project: (REQUIRED)',
      validate: title => {
        if (title) {
          return true;
        } else {
          console.log('Every project needs a title!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmLicense',
      message: 'Would you like to apply a license?',
      default: true
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'What did you this project with? (Check all that apply)',
      choices: ['MIT', 'anotherLicense', 'AThirdLicense'],
      when: ({ confirmLicense }) => confirmLicense
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username? (REQUIRED)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address? (REQUIRED)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Ahem... please enter your email address.');
          return false;
        }
      }
    }
  ])
};



const writeFile = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./README.md', data, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

// function to initialize program
// function init() {

// }


promptUser()
  .then(projectData => {
    return generateMarkdown(projectData);
  })
  .then(readmeFile => {
    return writeFile(readmeFile);
  })
  .catch(err => {
    console.log(err);
  });
// console.log("Your README has been generated!");



// function call to initialize program
// init();
