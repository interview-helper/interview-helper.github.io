import axios from 'axios';

export interface IRequestPostProject {
  text: string;
}

export interface IResponsePostProject {
  answer: string;
}

export async function postProject(
  data: IRequestPostProject
): Promise<IResponsePostProject> {
  const response = await axios.post<IResponsePostProject>(`/project`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
}

