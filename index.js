// TODO: Include packages needed for this application
import inquirer from "inquirer";
import { writeFileSync } from "fs";
import { join } from "path";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What's your project name?",
  },
  {
    type: "input",
    name: "description",
    message: "Description for your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use:",
  },
  {
    type: "input",
    name: "credits",
    message: "Are there any collaborators or third party assets?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license are you using?",
    choices: [
      "MIT",
      "ISC",
      "GPLv3",
      "LGPLv3",
      "APACHE 2.0",
      "MPL 2.0",
      "BSD 3",
      "None",
    ],
  },
  {
    type: "input",
    name: "test",
    message: "What command should be used to run the tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "githubName",
    message: "What's your GitHub name?",
  },
  {
    type: "input",
    name: "email",
    message: "What's your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return writeFileSync(join(process.cwd(), "outputs", fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((res) => {
    console.log("Information received -> Generating README.md now......");
    writeToFile("README.md", generateMarkdown({ ...res }));
  });
}

// Function call to initialize app
init();
