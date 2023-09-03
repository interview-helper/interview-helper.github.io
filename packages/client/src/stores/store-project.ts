import { atom, action } from 'nanostores';

export interface Project {
  text: string;
}

export const $projects = atom<Project[]>([{ text: '' }]);
export const addProject = action($projects, 'addProject', (store, project) => {
  store.set([...store.get(), project]);
  return store.get();
});
export const deleteProject = action(
  $projects,
  'deleteProject',
  (store, project) => {
    store.set(store.get().filter((_item, index) => index !== project.index));
    return store.get();
  }
);
export const updateProject = action(
  $projects,
  'updateProject',
  (store, project) => {
    store.set(
      store.get().map((item, index) => {
        if (index !== project.index) {
          return item;
        }

        return {
          ...item,
          ...project.item,
        };
      })
    );
    return store.get();
  }
);
export const removeEmptyProject = action(
  $projects,
  'removeEmptyProject',
  (store) => {
    store.set(store.get().filter((item) => item.text !== ''));
    return store.get();
  }
);

