// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }
  if (license === 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  }
  if (license === 'Apache') {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  console.log(license)
  if (license === 'None' || license === 'Other') {
return ''
  }
  const badge = renderLicenseBadge(license)
  const link = renderLicenseLink(license)
  const section = `${badge} ${link}` //template literal 
 return section 
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, contribution, license, email, github } = data;

  return `# ${title}
  ${renderLicenseSection(license)}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  ${description}
  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## Contributing
  ${contribution}
  ## Questions
  ${email}
  ${github}
`;
}

module.exports = generateMarkdown;
