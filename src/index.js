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
  let n = expr.length;
  if (n % 10 !== 0) {
    expr = '0'.repeat(10 - (n % 10)) + expr;
  }
  let pro = expr.match(/.{1,10}/g);
  pro.forEach(item => {
    if (item.includes('*')) {
      result += ' ';
      return
    }
    let doubles = item.match(/.{1,2}/g)
    let pri = '';
    doubles.forEach(d => {
      if (d === '10') {
        pri += '.';
      } else if (d === '11') {
        pri += '-';
      }
    });
    result += MORSE_TABLE[pri]
  });
return result
}

module.exports = {
    decode
}
