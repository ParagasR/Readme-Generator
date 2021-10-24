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
    return ''
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
    return ''
  }

  return `<p align="right"><a href="${link}"><img src="${renderLicenseBadge(license)}"></a></p<`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let link;
  if (license === 'MIT') {
      link = "https://opensource.org/licenses/MIT"
  } else if (license === 'GPLv3') {
      link = "(https://www.gnu.org/licenses/gpl-3.0"
  } else if (license === 'Mozilla') {
      link = "https://opensource.org/licenses/MPL-2.0"
  } else {
    return 'There are no license associated with this project.'
  }

  return `To read more about this license, please follow this [link](${link}).`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseLink(data.license)}
<br>


<h3>Table of Contents</h3>

  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#install-instruct">Installation Instructions</a></li>
    <li><a href="#usage">Usage Information</a></li>
    <li><a href="#contribute">Contributors</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#questions">Questions</a></li>
  </ol>


<h2 id='description'>Description</h2>

${data.description}
<br>


<h2 id='install-instruct'>Installation Instructions</h2>

${data.installation}
<br>


<h2 id='usage'>Usage Information</h2>

${data.usage}
<br>


<h2 id='contribute'>Contributors</h2>

${data.contributors}
<br>


<h2 id='tests'>Tests</h2>

${data.test}
<br>


<h2 id='license'>License</h2>

${renderLicenseSection(data.license)} 
<br>


<h2 id='questions'>Questions</h2>

If you have any questions or issues, please email me at ${data.email}.

For any further information, here is my [github page](https://github.com/${data.github}).
`
}

module.exports = {
  generateMarkdown,
};