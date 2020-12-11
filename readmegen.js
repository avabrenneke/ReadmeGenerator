exports.generateReadMe = (readMeData, license, licenseBadge, badges) => {
    return `
${licenseBadge} ${badges}  

# ${readMeData.title}

## Table of Contents (Optional)

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)

## Description
${readMeData.description}

## Installation
${readMeData.installation}

## Usage 
${readMeData.usage}

## Contributing
${readMeData.contributing}

## License
${license}

## Tests
${readMeData.tests}
`;
}
