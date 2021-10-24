// TODO: Create a function that returns a license badge based on which license is passed in 
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
      return "https://img.shields.io/badge/License-MIT-yellow.svg"
  } else if (license === 'GPLv3') {
      return "https://img.shields.io/badge/License-GPLv3-blue.svg"
  } else if (license === 'Mozilla') {
      return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"
  } else {
    return
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  if (license === 'MIT') {
      link = "https://opensource.org/licenses/MIT"
  } else if (license === 'GPLv3') {
      link = "https://www.gnu.org/licenses/gpl-3.0"
  } else if (license === 'Mozilla') {
      link = "https://opensource.org/licenses/MPL-2.0"
  } else {
    return
  }

  return `<p align="right"><a href="${link}"><img src="${renderLicenseBadge(license)}"></a></p<`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  `


### Table of Contents

<detail>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href=""></a></li>
  </ol>
</detail>

<a name= "description">

## Description



<a name= "install-instruct">

## Installation Instructions



<a name= "usage">

## Usage Information



<a name= "contribute">

## Contributors



<a name= "tests">

## Tests



<a name= "license">

## License



<a name= "questions">

## Questions

If you have any questions or issues, please leave them on my github page
github.com/}
`;
}

module.exports = generateMarkdown();
