// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None"){
    return 
  }else{ 
   return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  }
}

// Create a function that returns the license link (readme table of content)
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None"){
    return 
  }else{
  return (
    `\n* [License](#license)\n`
  )
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None"){
    return "" 
  }else{
    return `## License 🪪
Copyright © ${license}. All rights reserved.
Licensed under the ${license} license.`
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title} 

## Description 🏆

${data.description} 

## Github URL

https://github.com/${data.github}/

## Table of Contents 📋

* [Installation](#dependencies)

* [Usage](#usage)

* [License](#license)${renderLicenseLink(data.license)}

* [Credits](#contributors)

* [Test](#test)


## [Installation](#dependencies)

Run the following commands to install dependencies:

\`\`\`
${data.dependencies}
\`\`\`

## Usage 

${data.usage}
${renderLicenseSection(data.license)}

## Contributors 👏🏻

${data.contributors}

`;
}

module.exports = generateMarkdown;
