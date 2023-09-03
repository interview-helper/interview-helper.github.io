import { atom, action } from 'nanostores';

export interface Career {
  text: string;
}

export const $careers = atom<Career[]>([{ text: '' }]);
export const addCareer = action($careers, 'addCareer', (store, career) => {
  store.set([...store.get(), career]);
  return store.get();
});
export const deleteCareer = action(
  $careers,
  'deleteCareer',
  (store, career) => {
    store.set(store.get().filter((_item, index) => index !== career.index));
    return store.get();
  }
);
export const updateCareer = action(
  $careers,
  'updateCareer',
  (store, career) => {
    store.set(
      store.get().map((item, index) => {
        if (index !== career.index) {
          return item;
        }

        return {
          ...item,
          ...career.item,
        };
      })
    );
    return store.get();
  }
);
export const removeEmptyCareer = action(
  $careers,
  'removeEmptyCareer',
  (store) => {
    store.set(store.get().filter((item) => item.text !== ''));
    return store.get();
  }
);

