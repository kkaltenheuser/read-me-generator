// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    # Project Title
    {data.title}
    
    #Description
    {data.description}

    #Table of Contents
    [Installation]{#-Installation}
    [Usage]{#-Usage}
    [License]{#-License}
    [Contributing]{#-Contributing}
    [Tests]{#-Tests}
    [Questions]{#-Contact-Information}
`;
}

module.exports = generateMarkdown;
