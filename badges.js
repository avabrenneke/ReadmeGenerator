//Build the badge
exports.badgeType = function (build) {
    if (!build){
        return;
    }

    const buildPieces = build.split(' ');
    return `![${buildPieces[0]}-${buildPieces[1]}](https://img.shields.io/badge/${buildPieces[0]}-${buildPieces[1]}-blue.svg)`
}
//Find badge rating 
exports.badgeRating = function (rating) {
    if (!rating) {
        return '';
    }
    const starPieces = rating.split('/');
    return `![rating-${starPieces.join('%2F')}](https://img.shields.io/badge/rating-${starPieces.join('%2F')}-blue.svg)`
}
//Grab chosen license 
exports.licensecreator = function (license, title) {
    if (license) {
        return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${this.generateProjectUrl(title)})`
    }
    return '';
}
//Generate URL
exports.generateProjectUrl = function (user, title) {
    return `https://github.com/${user}/${title}`;
}