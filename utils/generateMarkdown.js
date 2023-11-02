// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") return "";
  return `![${license} license](https://img.shields.io/badge/License-${license}-yellow.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") return "";

  return `* [License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") return "";

  return `\nThis project is licensed under the ${license} license.\n`;
}

// TODO: Create a function to generate markdown for README
export default function generateMarkdown(data) {
  return `# ${data.projectTitle}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
${renderLicenseLink(data.license)}
* [Tests](#tests)
* [Questions](#questions)

## Installation

Run the following command to install:

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License
${renderLicenseSection(data.license)}
## Tests

Run the following command to run tests:

${data.test}

## Questions

You can contact me via email: ${data.email}

More of my work: [${data.githubName}](https://github.com/${data.githubName}/)

`;
}
