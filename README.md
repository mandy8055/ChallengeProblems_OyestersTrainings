# ChallengeProblems_OyestersTrainings

## Problem 1
Given an array of bird where every element represents a bird type id, determine the id’s of the
most frequently and least frequently sighted type. If more than 1 type has been spotted that
maximum amount, return the smallest of their ids & If more than 1 type has been spotted that
minimum amount, return the smallest of their ids.

```
E.g.: - Input – [1,1,2,2,4,4,4,4,5] Output – [4, 5]
Input – [2,2,2,2,4,4,4,4,5] Output – [2, 5]
Input – [1,2,2,4,4,4,4,5] Output – [4, 1]
```
### Approach and algorithm for solving the problem:
**Assumptions:** The problem given is about birds so I have safely assumed that the array will not contain any negative values.
  #### Initial Idea
  The quick idea was to use **two nested loops.** The outer loop will iterate the element in the `birdArr` and the inner loop keeps the count of `max` and `min` frequency of the birds. Obviously, this approach is the brute-force or naive approach as the time complexity tradeoff is **O(n^2)**.
  #### Final Idea
  The second idea which came to me is to use a `Hashtable` or a `Map`. In this approach, I created a `Map` and populated it with the elements as **keys of the Map** and  **every element's frequency** as their corresponding values. I could also have taken an **auxiliary array** for the same and kept the count but this idea was not good as for large ids, the memory would be wasted a lot. When using this approach the time complexity is significantly reduced to **O(n)** along with space complexity as **O(n)** since we took an extra space for `Map`.

  ##### Proposed algorithm
  1. Create a Map object `map`.
  2. Populate `map` with the **array elements** as `keys` and their respective frequencies as `values`.
  3. To get the `keys` corresponding to the maximum and minimum occurrence,
     1. Find the `key` corresponding to **maximum value** as well as **minimum value**.
     2. In case of a tie between maximum or minimum value of birds spotted, to return the minimum value based on `min key`, run a loop on `map` which is **spread[ES6]** to an array and calculate the `minKey`(initialized to **MaxInteger**) among the maximum or minimum ties.
  4. Return the result as an array of Minimum and maximum value.

## Problem 2
Given a time in 12-hr AM/PM format, convert it to military time(24hr) and you also need to add 45 min and 45 seconds in the result and display the output.

```
Input - 12:01:00PM Output 12:46:45
Input - 12:01:00AM Output 00:46:45
```

### Approach and algorithm for solving the problem:
As mentioned in the problem, the time will be given in 12-hr AM/PM format, so there is no need to apply input sanity check. However, for edge cases, I used a **regex-based** sanity check on the input.

#### Proposed Algorithm
1. Split the given string input in order to get **hour** and **AM/PM modifier**. However, the tricky part is we cannot take the **modifier** directly since it is attached with **12-hr** time format. 
2. So, I used the regex `:[0-5]\d:[0-5]\d` for the same.
   1. **:** - Matches the colon literally.
   2. **[0-5]\d** - Matches the digits in the range `0-5` followed by any digit since maximum minutes and seconds could only be between `00-59`.
3. After getting the `hour` and `modifier`, 
   1. Check if `hour` is equal to `12`. If yes, convert it to `00`.
   2. Check if `modifier` is `PM`. If yes, parse the string `hour` to integer and add `12` to it.
4. Append the `46:45` minute and second and return the result.

**NOTE: Flowchart's pdf is available in data folder.**

