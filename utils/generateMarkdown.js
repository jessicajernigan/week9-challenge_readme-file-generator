// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
![${data.license} license badge](https://img.shields.io/badge/license-${data.license.split(' ').join('%20')}-green)

  ## Description  
  ${data.description} 

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation  
  ${data.installation} 

  ## Usage
  ${data.usage} 

  ## License(s)  
  ${data.license}



  ## Contribution Guidelines
  ${data.contribution} 

  ## Tests  
  ${data.tests}

  ## Questions
  Please direct all inquiries to [${data.github}](https://github.com/${data.github}) via email at:  

  [${data.email}](mailto:${data.email}?subject=Question%20About%20${data.title.split(' ').join('%20')})

`;
}

module.exports = generateMarkdown;


