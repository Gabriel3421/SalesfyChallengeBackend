const baseNumbers = [
  'ZERO',
  'ONE',
  'TWO',
  'THREE',
  'FOUR',
  'FIVE',
  'SIX',
  'SEVEN',
  'EIGHT',
  'NINE',
  'TEN',
  'ELEVEN',
  'TWELVE',
  'TRIRTEEN',
  'FOURTEEN',
  'FIFTEEN',
  'SIXTEEN',
  'SEVENTENN',
  'EIGHTEEN',
  'NINETEEN'
]
const dozens = [
  '',
  '',
  'TWENTY',
  'THIRTY',
  'FORTY',
  'FIFTY',
  'SIXTY',
  'SEVENTY',
  'EIGHTY',
  'NINETY'
]
const orderOfMagnitude = [
  '',
  ' THOUSAND ',
  ' MILLION ',
  ' BILLION ',
  ' TRILLION ',
  ' QUADRILLION ',
  ' QUINTILLION ',
  ' SEXTILLION ',
  ' SEPTILLION ',
  ' OCTILLION ',
  ' NONILLION ',
]

function handleTranslateCDU (num: string){
  let translated = ''
  for (let i = 2; i >= 0; i--) {
    if(i === 2){
      translated = baseNumbers[Number(num[i])] + translated
    }
    if(i === 1){
      if(num[1] === '1'){// saber se eh < 19
        translated = ''
        translated = baseNumbers[Number(num[i]+num[i+1])] + translated
      }
      if(num[1] !== '1' && num[2] === '0' && num[1] !== '0'){// saber se eh 20,30 ...
        translated = ''
        translated = dozens[Number(num[1])] + translated
      }
      if(num[1] !== '1' && num[1] !== '0' && num[2] !== '0'){// colocar os 21,58 ...
        translated = dozens[Number(num[1])]+"-" + translated
      }
    }
    if(i === 0 && num[0] !== '0'){
      translated = baseNumbers[Number(num[i])]+' HUNDRED '+ translated
    }
  }
  return translated;
}

function handleNumberOfDigitsMultipleOf3(numberOfDigits: number, number: string) {
  let digits = numberOfDigits;
  while(!Number.isInteger(+digits/3)){
    number = '0'+number;
    digits = Number(number.length);
  }
  return number;
}

function handleTranslate ( number: string ) {
  let num = handleNumberOfDigitsMultipleOf3(Number(number!.length), number)
  let numOfDigits = Number(num.length)
  let magnitude = numOfDigits/3 -1
  let cdu = '';
  let translated = '';
  for (let i = 0; i <= numOfDigits; i++) {
    if (i%3 === 0 && i!== 0){
      if(cdu === '000'){
        translated += handleTranslateCDU(cdu)
      }else {
        translated += handleTranslateCDU(cdu) + orderOfMagnitude[magnitude]
      }
      magnitude--
      cdu=''
    }
    cdu += num[i]
  }
  return translated;
}

export default handleTranslate
