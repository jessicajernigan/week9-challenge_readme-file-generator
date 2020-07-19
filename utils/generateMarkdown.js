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

  ## License  
  * ${data.license}
  (explanations of licenses the application is covered under - corresponding to badges at the top of the README)

  ## Contributing

  ## Tests  

  ## Questions
  Please direct all inquiries to [${data.github}](https://github.com/${data.github}) via email at:  

  ${data.email}

`;
}

module.exports = generateMarkdown;


