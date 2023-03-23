function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    let newcollect = collection.slice();
    for (let i = 0; i < newcollect.length; i++) {
      callback(newcollect[i]);
    }
    return collection;
  } else {
    let newcollect = Object.values(collection);
    for (let i = 0; i < newcollect.length; i++) {
      callback(newcollect[i]);
    }
    return collection;
  }
}

const myMap = function (collection, callback) {
  let newcollect = Array.isArray(collection)
    ? collection.slice()
    : Object.values(collection);

  const newArray = [];

  for (let i = 0; i < newcollect.length; i++) {
    newArray.push(callback(newcollect[i]));
  }
  return newArray;
};

const myReduce = function (collection, callback, acc) {
  let newcollect = Array.isArray(collection)
    ? collection.slice()
    : Object.values(collection);

  if (!acc) {
    acc = newcollect[0];
    newcollect = newcollect.slice(1);
  }

  const collectlen = newcollect.length;

  for (let i = 0; i < collectlen; i++) {
    acc = callback(acc, newcollect[i], newcollect);
  }
  return acc;
};

const myFind = function (collection, predicate) {
  let newcollect = Array.isArray(collection)
    ? collection.slice()
    : Object.values(collection);

  for (let i = 0; i < newcollect.length; i++) {
    if (predicate(newcollect[i])) return newcollect[i];
  }
  return;
};

const myFilter = function (collection, predicate) {
  let newcollect = Array.isArray(collection)
    ? collection.slice()
    : Object.values(collection);

  const newArray = [];

  for (let i = 0; i < newcollect.length; i++) {
    if (predicate(newcollect[i])) newArray.push(newcollect[i]);
  }
  return newArray;
};

const mySize = function (collection) {
  let newcollect = Array.isArray(collection)
    ? collection.slice()
    : Object.values(collection);

  return newcollect.length;
};

const myFirst = function (arr, stop = false) {
  return stop ? arr.slice(0, stop) : arr[0];
};

const myLast = function (arr, start = false) {
  return start
    ? arr.slice(arr.length - start, arr.length)
    : arr[arr.length - 1];
};

const mySortBy = function (arr, callback) {
  const newArray = [...arr];
  return newArray.sort(function (a, b) {
    if (callback(a) > callback(b)) {
      return 1;
    } else if (callback(b) > callback(a)) {
      return -1;
    } else {
      return 0;
    }
  });
};

const myKeys = function (object) {
  const newkeys = [];
  for (let key in object) {
    newkeys.push(key);
  }
  return newkeys;
};

const myValues = function (object) {
  const values = [];
  for (let key in object) {
    values.push(object[key]);
  }
  return values;
};
