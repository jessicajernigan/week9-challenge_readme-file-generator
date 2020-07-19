// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
  ### Description  

  ### Table of Contents
  (anchor links to sections below)
  
  ### Installation 

  ### Usage

  ### License  
  (explanations of licenses the application is covered under - corresponding to badges at the top of the README)

  ### Contributing

  ### Tests  

  ### Questions
  Please direct all inquiries to (link to Github profile based on username entered) at:
  (email address)

`;
}

module.exports = generateMarkdown;


