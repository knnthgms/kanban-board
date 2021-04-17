// simple util to calculate sizeof an object to assign a new id based on count
// generated name may not always be unique when delete operation is added to functionality
export const fn = (Object.size = function (obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
});
