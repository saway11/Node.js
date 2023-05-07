// Function that takes in a license string as a parameter and returns a license badge in markdown format
function renderLicenseBadge(license) {
    if (license !== "None") {
      return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  
    }
    return "";
  
  }
  
// Function that takes in a license string as a parameter and retuns a link to the corresponding license page
function renderLicenseLink(license) {
    if (license !== "None") {
      return (
        `https://choosealicense.com/licenses/${license.toLowerCase()}`
  
      );
    }
    return "";
  }
// Function created to take in a license string as a parameter and returns a Markdown section with information
// about the license
function renderLicenseSection(license) {
    if (license !== "None") {
      return `## License
   This project is licensed under the ${license} license. To learn more please visit ${renderLicenseLink(license)}.`;
    }
    return "";
    }
  
    // function created to take in an email address as a parameter and retun as a markdown link that will open the user's email
    // with a new email addressed to the provided email
    function renderMailTo(email) {
        return `[${email}](mailto:${email})`;
      }
    // function takes in a Github username as a parameter and returns a Markdown link to the user's Github Profile
    function renderGitHubLink(github) {
        return `[${github}](github.com/${github})`;
      }    
    // function to generate the README file contents
    function generateMarkdown(data) {
        return `# ${data.title}
        ${renderLicenseBadge(data.license)}
        ## Description
        ${data.description}
        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [Contributing](#credits)
        - [License](#license)
        - [Tests](#tests)
        - [Questions](#questions)
        ## Installation
        ${data.installation}
        ## Usage
        ${data.usage}
        ${renderLicenseSection(data.license)}
        ## Contributing
        ${data.credits}
        ## Tests
        ${data.tests}
        ## Questions
        If any questions arise regarding the repositoru, open an issue or contact me directly at ${renderMailTo(data.email)}. Additionally source where my work can be viewed is in ${renderGitHubLink(data.github)}.`;
      }
      
      module.exports = generateMarkdown;
