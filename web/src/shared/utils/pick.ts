import { GeneralObject } from '@/types';

export const pick = <R extends GeneralObject>(entity: R, property: string) => {
  return entity[property] as R;
};
