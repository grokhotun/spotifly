export const pick = <R = any>(entity: any, property: string) => {
  return entity[property] as R;
};
