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
    ]
    const { translate } = request.query;

    const text =  base_numbers[Number(translate)]
    console.log(text)
    
    return response.status(200).json({msg: text});
  }
}

export default new TranslateController();