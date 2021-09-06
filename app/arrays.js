exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    return arr.reduce((acc, cur) => {
      return acc += cur
  }, 0)
  },

  remove: function(arr, item) {
    return arr.filter(i => i !== item)
  },

  removeWithoutCopy: function(arr, item) {
    // arr.forEach((i, idx) => {
    //   if (i === item) {
    //     arr.splice(idx, 1)
    //   }
    // })
    // return arr
    var i;
    var len;
    for (i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
