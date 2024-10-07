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
    let result = '';

    // Break the input string into chunks of 10 characters
    for (let i = 0; i < expr.length; i += 10) {
        const chunk = expr.slice(i, i + 10);

        if (chunk === '**********') {
            result += ' ';  // Handle space
        } else {
            // Replace '10' with '.', '11' with '-', remove '00'
            let morseCode = '';
            for (let j = 0; j < 10; j += 2) {
                const symbol = chunk.slice(j, j + 2);
                if (symbol === '10') {
                    morseCode += '.';
                } else if (symbol === '11') {
                    morseCode += '-';
                }
            }
            // Convert morse code to the corresponding letter
            result += MORSE_TABLE[morseCode];
        }
    }

    return result;
}

module.exports = {
    decode
};
