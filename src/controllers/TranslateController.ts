import { Request, Response } from 'express';
import handleTranslate from '../service/translate'

function handleVerification(number: number, response: Response){
  const oneDecillion = 1000000000000000000000000000000000;
  if(isNaN(number)){
    return response.status(400).json({ error: 'Only Digits are permitted. Ex.:003 or 123123'});
  }
  if(!Number.isInteger(number)){
    return response.status(400).json({ error: 'Number must be a positive intenger.'});
  }
  if(number < 0){
    return response.status(400).json({ error: 'Only positive Number are permitted.'});
  }
  if(number > oneDecillion){
    return response.status(400).json({ error: 'Only Number < 999 nonillion are permitted.'});
  }
}

class TranslateController {

  async index(request: Request, response: Response) {

    console.log('Request logged:', request.method, request.path, request.query)

    const { translate } = request.query;

    handleVerification(Number(translate), response)

    let translated = handleTranslate(String(translate));

    return response.status(200).json({ translated });
  }
}

export default new TranslateController();
