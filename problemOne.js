/** 
 * Given an array of bird where every element represents a bird type id, determine the id’s of the
most frequently and least frequently sighted type. If more than 1 type has been spotted that
maximum amount, return the smallest of their ids & If more than 1 type has been spotted that
minimum amount, return the smallest of their ids.
 * E.g.: - Input – [1,1,2,2,4,4,4,4,5] Output – [4, 5]
    Input – [2,2,2,2,4,4,4,4,5] Output – [2, 5]
    Input – [1,2,2,4,4,4,4,5] Output – [4, 1]  
 */
const countLeastAndMostFrequentBirds = (arr) => {
  const map = arr.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  );

  const getKey = (value) => {
    let minKey = Number.MAX_SAFE_INTEGER;
    [...map].forEach(([key, val]) => {
      if (val === value && key < minKey) minKey = key;
    });
    return minKey;
  };
  return [getKey(Math.max(...map.values())), getKey(Math.min(...map.values()))];
};

// const birdArr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// const birdArr = [1, 2, 2, 4, 4, 4, 4, 5];
const birdArr = [1, 1, 2, 2, 4, 4, 4, 4, 5];

console.log(countLeastAndMostFrequentBirds(birdArr));
