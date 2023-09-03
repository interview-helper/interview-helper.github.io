import axios from 'axios';

export interface IRequestPostCareer {
  text: string;
}

export interface IResponsePostCareer {
  answer: string;
}

export async function postCareer(
  data: IRequestPostCareer
): Promise<IResponsePostCareer> {
  const response = await axios.post<IResponsePostCareer>(`/career`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
}

