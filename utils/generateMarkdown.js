// function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {

    // Plug userReponses into TOC
    let draftTable = `## Table of Contents`;

    if (userResponses.installation !== '') { draftTable += `
    * [Installation](#installation)` };
  
    if (userResponses.usage !== '') { draftTable += `
    * [Usage](#usage)` };
  
    if (userResponses.contributing !== '') { draftTable += `
    * [Contributing](#contributing)` };
  
    if (userResponses.tests !== '') { draftTable += `
    * [Tests](#tests)` };
    
    // Create title + description
    // Generate badges for readMe
  let draftMarkdown = 
  // plug userResponses into description (if provided)

    `# ${userResponses.title}
    ![Badge for GitHub](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repository}?style=flat&logo=appveyor) 
    

    ## Description 
    ${userResponses.description}
    `
    // Add table of contents data to markdown
    draftMarkdown += draftTable;
    
    // Add license section to markdown
    draftMarkdown += `
    * [License](#license)`;
  
    // Create installation section
      // plug userResponses into installation (if provided)

    if (userResponses.installation !== '') {
    
    draftMarkdown +=
    `
    
    ## Installation
    ${userResponses.installation}`
    };
  
    // Create usage section
    if (userResponses.usage !== '') {
  // plug userResponses into usage (if provided)

    draftMarkdown +=
    
    `
    
    ## Usage 
    ${userResponses.usage}`
    };
    
    // Create contribution section
    // plug userResponses into contribution (if provided)

    if (userResponses.contributing !== '') {
    `
    
    ## Contributing
    ${userResponses.contributing}`
    };
  
    // Create tests section
    if (userResponses.tests !== '') {
      // plug userResponses into tests (if provided)

    draftMarkdown +=
    `
    
    ## Tests
    
    
    ${userResponses.tests}`
    };
  
    // Connect + plug userResponses to license section
  
    draftMarkdown +=
    `
    
    ## License
    
    ${userResponses.license}
    `;
  
    // Questions section
    let draftDeveloper = 
    `
    ---
    
    ## Questions?
    
    ![Developer Profile Pic](${userInfo.avatar_url}) 
    
    For any + all questions, please contact me using the information provided below:
   
    GitHub: [@${userInfo.login}](${userInfo.url})
    `;
  
    // If provided email is not null, plug userInfo into Dev section
    if (userInfo.email !== null) {
    
    draftDeveloper +=
    `
    Email: ${userInfo.email}
    `};
  
   // Insert dev section to markdown
  
    draftMarkdown += draftDeveloper;
  
    // Return the markdown
  
    return draftMarkdown;
  };
  
  // call to markdown js
  module.exports = generateMarkdown;