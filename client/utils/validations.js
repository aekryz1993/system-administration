export const isEmpty = value => value === undefined || value === null || value.trim() === '';

export function required(value) {
  return isEmpty(value);
}
