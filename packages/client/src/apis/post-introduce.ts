import axios from 'axios';

export interface IRequestPostIntroduce {
  text: string;
}

export interface IResponsePostIntroduce {
  answer: string;
}

export async function postIntroduce(
  data: IRequestPostIntroduce
): Promise<IResponsePostIntroduce> {
  const response = await axios.post<IResponsePostIntroduce>(
    `/introduce`,
    data,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
}

