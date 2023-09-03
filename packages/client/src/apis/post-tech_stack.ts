import axios from 'axios';

export interface IRequestPostTechStack {
  text: string;
}

export interface IResponsePostTechStack {
  answer: string;
}

export async function postTechStack(
  data: IRequestPostTechStack
): Promise<IResponsePostTechStack> {
  const response = await axios.post<IResponsePostTechStack>(
    `/tech_stack`,
    data,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
}

