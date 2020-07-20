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
      name: 'description',
      message: 'Please provide a brief description of your project. (REQUIRED)',
      validate: title => {
        if (title) {
          return true;
        } else {
          console.log('Wait! We still don\'t know what your project does!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please add some installation instructions. (REQUIRED)',
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
      type: 'list',
      name: 'license',
      message: 'Select a license from the options below.',
      choices: ['Apache 2.0', 'PDDL', 'CC0', 'Unlicense', 'MPL 2.0', 'MIT'],
      when: ({ confirmLicense }) => confirmLicense
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the contribution guidelines for this project?',
      validate: installation => {
        if (installation) {
          return true;
        } else {
          console.log('Please add contribution guidelines!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please add testing guidelines. (REQUIRED)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Ahem... please add testing guidelines for your project.');
          return false;
        }
      }
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
