import { atom, action } from 'nanostores';

export interface TechStack {
  text: string;
}

export const $techkstacks = atom<TechStack[]>([{ text: '' }]);
export const addTechStack = action(
  $techkstacks,
  'addTechStack',
  (store, techStack) => {
    store.set([...store.get(), techStack]);
    return store.get();
  }
);
export const deleteTechStack = action(
  $techkstacks,
  'deleteTechStack',
  (store, techStack) => {
    store.set(store.get().filter((_item, index) => index !== techStack.index));
    return store.get();
  }
);
export const updateTechStack = action(
  $techkstacks,
  'updateTechStack',
  (store, techStack) => {
    store.set(
      store.get().map((item, index) => {
        if (index !== techStack.index) {
          return item;
        }

        return {
          ...item,
          ...techStack.item,
        };
      })
    );
    return store.get();
  }
);
export const removeEmptyTechStack = action(
  $techkstacks,
  'removeEmptyTechStack',
  (store) => {
    store.set(store.get().filter((item) => item.text !== ''));
    return store.get();
  }
);

