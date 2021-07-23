---
title: Removing Duplicates from Sorted Array
date: 2021-07-03
topic: LeetCode
topicDescription: Solutions for LeetCode Problems Enjoy!!! 🍌 🐒
description: Solution & Notes for the LeetCode problem Removing Duplicates from Sorted Array.
img: LeetCodeLogo.png
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
sidebar: auto
---

# Removing Duplicates from Sorted Array

<iframe width="560" height="315" src="https://www.youtube.com/embed/ApBQCp1RfnA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Assumptions

- We have an <span style="color:#ffcc00">_integer_</span> array <span style="color:#ffcc00">_nums_</span>
- With a length of <span style="color:#ffcc00">_0 &#8804; nums.length &#8804; 3 x 10<sup>4</sup>_</span>
- Sorted in <span style="color:#ffcc00">_non-decreasing order_</span>

## What does In-Place mean?

- Algorithm that transforms input using no auxiliary data structure
- So, we cannot allocate extra space for another array, a hash table, or any other data structure
- Another way of saying this is we must use <span style="color:#ffcc00">_O(1) extra memory_</span>

## Removing (or Moving) Duplicates & Maintaining Relative Order

- In JavaScript we can change the length of an array by adding or removing elements, but in other languages like C for example we cannot change the length of an array after it's created
- So, to get around this we're told we can place the result in the first part of the array <span style="color:#ffcc00">_nums_</span>
- Here's a more formal description: if there are <span style="color:#ffcc00">_k_</span> elements after removing the duplicates, then the first <span style="color:#ffcc00">_k_</span> elements of <span style="color:#ffcc00">_nums_</span> should hold the final result & it doesn't matter what is left after the first <span style="color:#ffcc00">_k_</span> elements
- Some examples should make this clearer:

  - Ex 1) Input: <span style="color:#ffcc00">_nums = [1, 1, 1, 2, 2]_</span>, Output: <span style="color:#ffcc00">_2, nums = [1, 2, \_, \_, \_ ]_</span>

  - Explanation:

    - Our function should return <span style="color:#ffcc00">_k = 2_</span> since we have two elements left after removing (or moving) the duplicates, & <span style="color:#ffcc00">_nums_</span> should have the only elements (if we're removing duplicates), or the first two elements (if we're moving duplicates) as <span style="color:#ffcc00">_1 & 2_</span> respectively
    - Notice how the output maintains the relative order for <span style="color:#ffcc00">_nums_</span> by keeping the elements we care about in <span style="color:#ffcc00">_non-decreasing_</span> order
    - Also, if we're moving the duplicates it doesn't matter what we leave after the <span style="color:#ffcc00">_kth_</span> element, so we'll denote those elements with underscores</br></br>

  - Ex 2) Input: <span style="color:#ffcc00">_nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]_</span>, Output: <span style="color:#ffcc00">_5, nums = [0, 1, 2, 3, 4, \_, \_, \_, \_, \_]_</span>

  - Explanation:

    - Our function should return <span style="color:#ffcc00">_k = 5_</span> since we have five elements left after removing (or moving) the duplicates, & <span style="color:#ffcc00">_nums_</span> should have the only elements (if we're removing duplicates), or the first five elements (if we're moving duplicates) as <span style="color:#ffcc00">_0, 1, 2, 3, & 4_</span> respectively
    - Notice again how the output maintains the relative order for <span style="color:#ffcc00">_nums_</span> by keeping the elements we care about in <span style="color:#ffcc00">_non-decreasing_</span> order
    - And again if we're moving the duplicates it doesn't matter what we leave after the <span style="color:#ffcc00">_kth_</span> element, so we'll denote those elements with underscores

## How to Modify nums In-Place?

- We know we can only modify <span style="color:#ffcc00">_nums_</span> in-place, so let's start with example (1) & see if we can come up with some way to move around the elements to get our desired output

* Initially we have:
  $$\color{#ffcc00}{nums} = [1, 1, 1, 2, 2]$$

* Now, let's take our 1st element in <span style="color:#ffcc00">_nums_</span> & compare it with the 2nd element, then we can compare the 2nd element with the 3rd & so on...

* <span style="color:#ffcc00">_1st Iteration:_</span>

$$\color{#ffcc00}{nums} = [\overset{\color{#00ff00}0}{\color{#00ff00}1}, \overset{\color{#00ffff}1}{\color{#00ffff}1}, \overset{2}{1}, \overset{3}{2}, \overset{4}{2}]$$

$$\color{#00ff00}{nums[0]} \equiv \color{#00ffff}{nums[1]} \implies \color{#00ff00}{1} \equiv \color{#00ffff}{1} \implies We \;{don't} \;{need} \;{to} \;{move} \;\color{#00ffff}{nums[1]}$$

- <span style="color:#ffcc00">_2nd Iteration:_</span>

$$\color{#ffcc00}{nums} = [\overset{0}{1}, \overset{\color{#00ff00}1}{\color{#00ff00}1}, \overset{\color{#00ffff}2}{\color{#00ffff}1}, \overset{3}{2}, \overset{4}{2}]$$

$$\color{#00ff00}{nums[1]} \equiv \color{#00ffff}{nums[2]} \implies \color{#00ff00}{1} \equiv \color{#00ffff}{1} \implies We \;{don't} \;{need} \;{to} \;{move} \;\color{#00ffff}{nums[2]}$$

- <span style="color:#ffcc00">_3rd Iteration:_</span>

$$\color{#ffcc00}{nums} = [\overset{0}{1}, \overset{1}{1}, \overset{\color{#00ff00}2}{\color{#00ff00}1}, \overset{\color{#00ffff}3}{\color{#00ffff}2}, \overset{4}{2}]$$

$$\color{#00ff00}{nums[2]} \neq \color{#00ffff}{nums[3]} \implies \color{#00ff00}{1} \neq \color{#00ffff}{2} \implies We \;{need} \;{to} \;{move} \;\color{#00ffff}{nums[3]} \;{to} \;{the} \;{2^{nd}} \;{spot} \;{in} \;{our} \;{array} \;{which} \;{is} \;\color{#cc99ff}{nums[1]}$$

$$To \;{do} \;{that} \;{we} \;{can} \;{set} \;\color{#cc99ff}{nums[1]} \;{=} \;\color{#00ffff}{nums[3]}$$

- <span style="color:#ffcc00">_4th Iteration:_</span>

$$\color{#ffcc00}{nums} = [\overset{0}{1}, \overset{\color{#cc99ff}1}{\color{#cc99ff}2}, \overset{2}{1}, \overset{\color{#00ff00}3}{\color{#00ff00}2}, \overset{\color{#00ffff}4}{\color{#00ffff}2}]$$

$$\color{#00ff00}{nums[3]} \equiv \color{#00ffff}{nums[4]} \implies \color{#00ff00}{2} \equiv \color{#00ffff}{2} \implies We \;{don't} \;{need} \;{to} \;{move} \;\color{#00ffff}{nums[4]}$$

- After the 4th iteration there's nothing left to compare <span style="color:#00ffff">_nums[4]_</span> with, so that's the last iteration we need

* During our iterations we had to keep track of our current value in <span style="color:#ffcc00">_nums_</span> which we'll call <span style="color:#00ff00">_nums[i]_</span> & the next value in <span style="color:#ffcc00">_nums_</span> which will be <span style="color:#00ffff">_nums[i + 1]_</span>

* We also had to keep track of which element we needed to replace in <span style="color:#ffcc00">_nums_</span> if we ran into an element we hadn't seen before which we'll call <span style="color:#cc99ff">_nums[j]_</span>

* So, to implement this we'll loop over <span style="color:#ffcc00">_nums_</span> from the beginning to the length of <span style="color:#ffcc00">_nums - 1_</span> since when we get to the last element there's nothing else for us to compare it with

* On each iteration we'll compare the current value of <span style="color:#ffcc00">_nums_</span> which is <span style="color:#00ff00">_nums[i]_</span> with the next value of <span style="color:#ffcc00">_nums_</span> which is <span style="color:#00ffff">_nums[i + 1]_</span>

* If they're not equal then we'll set <span style="color:#cc99ff">_nums[j]_</span> <span style="color:#ffcc00">=</span> <span style="color:#00ffff">_nums[i + 1]_</span> where <span style="color:#cc99ff">_j_</span> gets initialized to <span style="color:#cc99ff">_1_</span> & we'll increment <span style="color:#cc99ff">_j_</span> every time <span style="color:#00ff00">_nums[i]_</span> doesn't equal <span style="color:#00ffff">_nums[i + 1]_</span>

* We also need to remember the case of <span style="color:#cc99ff">_nums.length = 0_</span> which means we have no elements in our array, so we'll just return 0

## Implementation

<code-group>
<code-block title="Removing Duplicates from Sorted Array">

```js
var removeDuplicates = function(nums) {
  const numsLength = nums.length;

  if (numsLength === 0) {
    return 0;
  }

  let j = 1;
  for (let i = 0; i < numsLength - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[j] = nums[i + 1];
      j++;
    }
  }

  return j;
};

nums = [1, 1, 1, 2, 2];
console.log("k =", removeDuplicates(nums), "nums =", nums);
```

</code-block>
</code-group>

<style scoped>
li, p {
  font-size: 1.25rem;
}

.language-text {
  height: 0;
}

.theme-code-group {
  font-size: 1.25rem;
  margin-top: 2rem;
}

pre.language-js {
  margin-bottom: 0;
}

iframe {
  margin-top: 2rem;
}
</style>
