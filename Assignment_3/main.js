var personName = "Anas Abbasi";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\W/g, function (char) { return char.toUpperCase(); }));
