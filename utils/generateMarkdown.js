// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
export default function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
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

## Tests

Run the following command to run tests:

${data.test}

## Questions

You can contact me via email: ${data.email}

More of my work: [${data.githubName}](https://github.com/${data.githubName}/)

`;
}
