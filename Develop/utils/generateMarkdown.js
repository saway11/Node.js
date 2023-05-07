// Function that takes in a license string as a parameter and returns a license badge in markdown format
function renderLicenseBadge(license) {
    if (license !== "None") {
        return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";

}
