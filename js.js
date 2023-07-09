// function isJavaScriptFile(string){
//     if(typeof string !== 'string'){
//     return "please type string"
//     }
//     else{
//     let filename = string;
//     //Check File
//     let result = filename.endsWith(".js");
//     return result;
//     }
//     }
//     let file=isJavaScriptFile('image.jpg.js');
//     console.log(file);


let isJavaScriptFile = string =>{
    if (typeof string !== 'string') {
        return('Please enter string');
    }
    else{
        let result = string.endsWith('.js');
    return result;
    }
    
}
let file = isJavaScriptFile('lk.pdf');
console.log(file);