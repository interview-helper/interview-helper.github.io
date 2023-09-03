import { atom, action } from 'nanostores';

export const $introduce = atom('');
export const updateIntroduce = action(
  $introduce,
  'updateIntroduce',
  (store, intro) => {
    store.set(intro);
    return store.get();
  }
);

