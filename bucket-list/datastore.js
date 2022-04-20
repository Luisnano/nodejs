const fs = require("fs");

module.exports.load = function(filepath){
    try{
        const content = fs.readFileSync(filepath, "utf-8");
        return JSON.parse(content);
    } catch (e){
        //Si no existe
        return [];
    }
};

module.exports.save = function(filepath, content){
    fs.writeFileSync(filepath, JSON.stringify(content, null, 2));
};