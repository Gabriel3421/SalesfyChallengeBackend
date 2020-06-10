import { Request, Response } from 'express';

class TranslateController {

  async index(request: Request, response: Response) {

  const base_numbers = [
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
  const order_of_magnitude = [
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

  function handleTranslate (num: string){
      let translated = ''
      for (let i = 2; i >= 0; i--) {
        if(i === 2){
          translated = base_numbers[Number(num[i])] + translated
        }
        if(i === 1){
          if(num[1] === '1'){
            translated = ''
            translated = base_numbers[Number(num[i]+num[i+1])] + translated
          }
          if(num[1] !== '1' && num[2] === '0'){
            translated = ''
            translated = dozens[Number(num[1])] + translated
          }
          if(num[1] !== '1' && num[1] !== '0' && num[2] !== '0'){
            translated = dozens[Number(num[1])]+"-" + translated
          }
        }
        if(i === 0 && num[0] !== '0'){
          translated = base_numbers[Number(num[i])]+' HUNDRED '+ translated
        }
      }
      return translated;
  }

  const { translate } = request.query;
  const number = String(translate);

  if(isNaN(Number(number))){
    return response.status(400).json({ error: 'Only Digits are permitted. Ex.:003 or 123123'});
  }
  if(Number(number) > 1000000000000000000000000000000){
    return response.status(400).json({ error: 'Only Number < 999 nonillion are permitted.'});
  }
  let translated = ''
  const digits = Number(number.length);
  if(!Number.isInteger(digits/3)){
    return response.status(400).json({ error: 'digits must be multiple of 3. Ex.: 003 or 123123 '});
  }
  let cdu = ''
  let magnitude = digits/3 -1
  for (let i = 0; i <= digits; i++) {
    if (i%3 === 0 && i!== 0){
      translated += handleTranslate(cdu) + order_of_magnitude[magnitude]
      magnitude--
      cdu=''
    }
    cdu += number[i]
  }
    return response.status(200).json({translated});
  }
}

export default new TranslateController();
