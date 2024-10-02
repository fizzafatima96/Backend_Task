import { Response } from 'express';

interface SuccessResponse {
  success: boolean;
  message?: string;
  data?: object | any[]; // Union type to accept object or array
}

const successHandler = (
  res: Response,
  statusCode: number,
  dataObject?: object | any[], // Accepts object or array
  message?: string
) => {
  const responseBody: SuccessResponse = {
    success: true,
  };

  if (dataObject !== undefined) {
    responseBody.data = dataObject; // Assigns the provided object or array to data
  }

  if (message) {
    responseBody.message = message;
  }

  return res.status(statusCode).json(responseBody);
};

export default successHandler;
