const caesar = function(string, shifts) {
    let returnThis = '';

    for (let i = 0; i < string.length; i++){
        let letterCode = string[i].charCodeAt();
        if (string[i].match(/[\s!,\.]/i)){
            returnThis += string[i];
            continue;
        }
        if (string[i].match(/[A-Z]/)){ //maiúscula
            returnThis += String.fromCharCode((letterCode + shifts) % 0x5A);
            continue;
        }

        returnThis += String.fromCharCode((letterCode + shifts) % 0x7A);
    }

    return returnThis;
};

// Do not edit below this line
module.exports = caesar;
