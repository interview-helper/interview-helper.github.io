import { computed } from 'nanostores';
import { $introduce } from './store-introduce';
import { Career, $careers } from './store-career';
import { Project, $projects } from './store-project';
import { TechStack, $techkstacks } from './store-techstack';

export interface Resume {
  introduce: string;
  careers: Career[];
  projects: Project[];
  techstacks: TechStack[];
}

export const $resume = computed(
  [$introduce, $careers, $projects, $techkstacks],
  (introduce, $careers, $projects, $techkstacks) => {
    return {
      introduce: introduce,
      careers: $careers.filter((item) => item.text !== ''),
      projects: $projects.filter((item) => item.text !== ''),
      techstacks: $techkstacks
        .filter((item) => item.text !== '')
        .map((each) => each.text)
        .join(','),
    };
  }
);

