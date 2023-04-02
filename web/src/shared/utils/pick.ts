export const pick = <T>(entity: T, property: keyof T) => {
  return entity[property];
};
