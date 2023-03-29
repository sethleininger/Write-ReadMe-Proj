// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = licenses => {
  switch (licenses) {
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    case 'GNU AGPLv3':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
    case 'GNU LGPLv3':
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
    case 'Mozilla Public Lisense 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    default:
      return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = licenses => { 
  switch (licenses) {
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT'
    case 'GNU GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0'
    case 'GNU AGPLv3':
      return 'https://www.gnu.org/licenses/agpl-3.0'
    case 'GNU LGPLv3':
      return 'https://www.gnu.org/licenses/lgpl-3.0'
    case 'Mozilla Public License 2.0':
      return 'https://opensource.org/licenses/MPL-2.0'
    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) { 
  const licenseLink = renderLicenseLink(licenses);
  if (!licenseLink) {
    return '';
  }
  return `
## License

This application is covered by the [${licenses}](${licenseLink}) license.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   //const licenses = data.licenses.choices;
   //console.log(licenses);
   //console.log(renderLicenseSection(licenses));
  const licenseSection = renderLicenseSection(data.licenses);
  return `# ${data.title}

  ${renderLicenseBadge(data.licenses)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Licenses](#licenses)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ${licenseSection}

  ## Contributors 

  ${data.contributions}

  ## GitHub

  GitHub User - ${data.GitHub}

  ## Email

  Contact the Maker at - ${data.email}
`;
}

module.exports = generateMarkdown;
