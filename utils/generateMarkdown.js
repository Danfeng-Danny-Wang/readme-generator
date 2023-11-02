function renderLicenseBadge(license) {
  if (license === "None") return "";
  return `![${license} license](https://img.shields.io/badge/License-${license}-yellow.svg)`;
}

function renderLicenseLink(license) {
  if (license === "None") return "";

  return `* [License](#license)`;
}

function renderLicenseSection(license) {
  if (license === "None") return "";

  return `\nThis project is licensed under the ${license} license.\n`;
}

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
