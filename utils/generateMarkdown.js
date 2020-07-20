// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
![license](https://img.shields.io/badge/license-${data.license.split(' ').join('%20')}-green)

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Description  
  ${data.description} 

  ## Installation  
  ${data.installation} 

  ## Usage
  ${data.usage} 

  ## License
  This project is covered under ${data.license}.

  ## Contribution Guidelines
  ${data.contribution} 

  ## Tests  
  ${data.tests}

  ## Questions
  Please direct all inquiries to [${data.github}](https://github.com/${data.github}) via email at: [${data.email}](mailto:${data.email}?subject=Question%20About%20${data.title.split(' ').join('%20')})

`;
}

module.exports = generateMarkdown;


