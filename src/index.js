const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result='';
    let morse=[];
    let strLiter='';
    let i=0;
    for(let j=0; j<expr.length; j+=10){
        i=0;
        strLiter='';
        if (expr[j]=="*"){
            result= result + ' ';
            continue;
        }
        while(i<9){
            if(expr[i+j]==1 && expr[j+i+1]==0){
                strLiter+='.';
                i++;
            }else if(expr[i+j]==1 && expr[j+i+1]==1){
                strLiter+='-';
                i++;
            }
            i++;
        }
        result= result + MORSE_TABLE[strLiter];
    }
    return result;
}

module.exports = {
    decode
}