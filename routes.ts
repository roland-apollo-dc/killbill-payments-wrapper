// routes/routes.ts
import express, { Request, Response } from 'express';
import { apiCall } from './services';

const router = express.Router();

const call = async (endpoint: string, data: any, method: 'get' | 'post'| 'put' | 'delete'): Promise<{ success: boolean; data?: any; error?: string }> => {
  return apiCall(endpoint, method, data);
};

router.post('/payment', async (req: Request, res: Response) => {
    const result = await call('externalPayment', req.body, 'post');
    let resForm = result.data;
    if(result.success){
      //fix format
      resForm.message = "Success"
      resForm.status = 200
      console.log(resForm)
      res.json(resForm).status(200);
    }else{
      res.json(result)
    }
   
});

function hasDecimal(str:string) {
  return /\./.test(str);
}

router.post('/validate', async (req: Request, res: Response) => {
  const result = await call('validate', req.body, 'post');
  let resForm = result.data;
  // resForm.billAmountDue
  var temp = resForm.billAmountDue + "";
  console.log(temp)
  temp = hasDecimal(temp) ? temp : temp + "00";
  resForm.billAmountDue = temp;
  resForm.message = "Success"
  console.log(resForm)
  res.json(resForm).status(200);
});

router.post('/settlement', async (req: Request, res: Response) => {
  const result = await call('settlement', req.body, 'post');
  res.json(result);
});

router.post('/deposit', async (req: Request, res: Response) => {
  const result = await call('deposit', req.body, 'post');
  res.json(result);
});

export default router;