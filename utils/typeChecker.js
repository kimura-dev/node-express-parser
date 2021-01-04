function typeChecker(name, item, description){
    const type = typeof item;
    console.log(`${name} is of type ==> "${type}" ${description}`);
}

module.exports = typeChecker;