// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    # Project-Title
    ${data.title}
    
    # Description
    ${data.description}

    # Table of Contents
    *[Installation](#-Installation)
    *[Usage](#-Usage)
    *[License](#-License)
    *[Contributing](#-Contributing)
    *[Tests](#-Tests)
    *[Questions](#-Contact-Information)

    # Installation
    ${data.installation}

    # Usage
    ${data.usage}

    # License
    ${data.license}

    # Contributing
    ${data.contributing}

    # Tests
    ${data.tests}

    # Contact-Information
    *GitHub username: {data.userName}
    *Contact Email: {data.userEmail}
`;
}

module.exports = generateMarkdown;
