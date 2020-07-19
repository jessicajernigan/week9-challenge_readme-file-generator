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
      type: 'confirm',
      name: 'confirmInstall',
      message: 'Would you like to include installation instructions?',
      default: true
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Add installation instructions now:',
      when: ({ confirmInstall }) => confirmInstall
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
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username.');
          return false;
        }
      }
    },
  ])
};


const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./README.md', fileContent, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }
      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
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



// function call to initialize program
// init();
