import { atom, action } from 'nanostores';
import { $resume } from './store-resume';
import { postIntroduce } from '../apis/post-introduce';
import { postCareer } from '../apis/post-career';
import { postProject } from '../apis/post-project';
import { postTechStack } from '../apis/post-tech_stack';

export interface InterviewQuestion {
  text: string;
}

export interface InterviewQuestions {
  introduce: {
    loading?: boolean;
    error?: unknown;
    data?: InterviewQuestion;
  };
  careers: {
    loading?: boolean;
    error?: unknown;
    data?: InterviewQuestion;
  }[];
  projects: {
    loading?: boolean;
    error?: unknown;
    data?: InterviewQuestion;
  }[];
  techStacks: {
    loading?: boolean;
    error?: unknown;
    data?: InterviewQuestion;
  };
}

export const $interviewQuestions = atom<InterviewQuestions>({
  introduce: {
    loading: true,
  },
  careers: [],
  projects: [],
  techStacks: {
    loading: true,
  },
});
export const createIntroInterviewQuestion = action(
  $interviewQuestions,
  'createIntroInterviewQuestion',
  async (store) => {
    if (!$resume.get().introduce) return;
    try {
      store.set({
        ...store.get(),
        introduce: {
          loading: true,
          data: {
            text: 'loading',
          },
        },
      });
      const res = await postIntroduce({
        text: $resume.get().introduce,
      });
      store.set({
        ...store.get(),
        introduce: {
          loading: false,
          data: {
            text: res.answer,
          },
        },
      });
      return store.get();
    } catch (error) {
      console.error(error);
      store.set({
        ...store.get(),
        introduce: {
          loading: false,
          data: {
            text: '',
          },
          error: error,
        },
      });
      return store.get();
    }
  }
);
export const createCareerInterviewQuestion = action(
  $interviewQuestions,
  'createCareerInterviewQuestion',
  async (store, index) => {
    const data = store.get().careers || [];
    if (!data?.[index]) {
      data[index] = {};
    }

    try {
      if (!$resume.get().careers[index]) return;
      data[index].loading = true;

      store.set({
        ...store.get(),
        careers: data,
      });

      const res = await postCareer({
        text: $resume.get().careers[index].text,
      });

      data[index].loading = false;
      data[index].data = {
        text: res.answer,
      };
      store.set({
        ...store.get(),
        careers: data,
      });
      return store.get();
    } catch (error) {
      console.error(error);
      data[index].loading = false;
      data[index].error = error;
      store.set({
        ...store.get(),
        careers: data,
      });
      return store.get();
    }
  }
);
export const createProjectInterviewQuestion = action(
  $interviewQuestions,
  'createProjectInterviewQuestion',
  async (store, index) => {
    const data = store.get().projects || [];

    if (!data?.[index]) {
      data[index] = {};
    }

    try {
      if (!$resume.get().projects[index]) return;
      data[index].loading = true;

      store.set({
        ...store.get(),
        projects: data,
      });

      const res = await postProject({
        text: $resume.get().projects[index].text,
      });

      data[index].loading = false;
      data[index].data = {
        text: res.answer,
      };
      store.set({
        ...store.get(),
        projects: data,
      });
      return store.get();
    } catch (error) {
      console.error(error);
      data[index].loading = false;
      data[index].error = error;
      store.set({
        ...store.get(),
        projects: data,
      });
      return store.get();
    }
  }
);
export const createTechStackInterviewQuestion = action(
  $interviewQuestions,
  'createTechStacksInterviewQuestion',
  async (store) => {
    if (!$resume.get().techstacks) return;
    try {
      store.set({
        ...store.get(),
        techStacks: {
          loading: true,
          data: {
            text: 'loading',
          },
        },
      });
      const res = await postTechStack({
        text: $resume.get().techstacks,
      });
      store.set({
        ...store.get(),
        techStacks: {
          loading: false,
          data: {
            text: res.answer,
          },
        },
      });
      return store.get();
    } catch (error) {
      console.error(error);
      store.set({
        ...store.get(),
        techStacks: {
          loading: false,
          data: {
            text: '',
          },
          error: error,
        },
      });
      return store.get();
    }
  }
);

