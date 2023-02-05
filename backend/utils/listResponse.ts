export const listResponse = <T>(payload: T[]) => ({
  prev: null,
  next: null,
  results: payload,
});
