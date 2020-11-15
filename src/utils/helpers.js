export const maxChars = (str, max) => {
  if (str.length < max) {
    return str;
  }
  return str.slice(0, max - 4) + '...';
};