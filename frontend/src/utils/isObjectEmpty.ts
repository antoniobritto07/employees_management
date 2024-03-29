export function isObjectEmpty(obj: Object) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}