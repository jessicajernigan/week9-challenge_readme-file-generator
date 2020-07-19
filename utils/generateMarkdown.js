// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
  ## Description  

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
  ${data.license.join(`  
  `
  )}


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


