---
title: Contains Duplicate
date: 2021-08-06
topic: LeetCode
topicDescription: Solutions for LeetCode Problems Enjoy!!! 🍌 🐒
description: Solution & Notes for the LeetCode problem Contains Duplicate.
img: LeetCodeLogo.png
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
sidebar: auto
---

# Contains Duplicate

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/P_SCtMIgZJs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Links

<p><a href="https://leetcode.com/problems/contains-duplicate/">Contains Duplicate Problem</a> 💡</p>
<p><a href="https://github.com/codemonkeysio/LeetCode">Get the code & notes on GitHub</a> 💻</p>
<p><a href="https://discord.gg/mh9rQmwJ8H">Ask Questions & Share Solutions in Discord</a> 🤖</p>

## Problem Description

Given an <span style="color:#ebeb33">_integer_</span> array <span style="color:#ebeb33">_nums_</span>, return <span style="color:#ebeb33">_true_</span> if any value appears <span style="color:#ebeb33">**at least twice**</span>, and return <span style="color:#ebeb33">_false_</span> if every element is distinct.

## Examples

Ex 1) Input: <span style="color:#ebeb33">_nums_</span> = [1, 2, 3, 1] $\implies$ Output: <span style="color:#ebeb33">_true_</span> since 1 appears twice.

Ex 2) Input: <span style="color:#ebeb33">_nums_</span> = [1, 2, 3, 4] $\implies$ Output: <span style="color:#ebeb33">_false_</span> since no value appears twice.

Ex 3) Input: <span style="color:#ebeb33">_nums_</span> = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2] $\implies$ Output: <span style="color:#ebeb33">_true_</span> since 1, 3, and 2 appear more than once.

Ex 4) Input: <span style="color:#ebeb33">_nums_</span> = [] $\implies$ Output: <span style="color:#ebeb33">_false_</span> since there are no values.

## Constraints

$1 \leq \color{#ebeb33}{nums.length} \leq 10^5$

$-10^9 \leq \color{#ebeb33}{nums[i]} \leq 10^9$

## Thought Process

- By looking at the examples, the 1st thought that comes to mind may be to simply take each value in <span style="color:#ebeb33">_nums_</span>, and compare it with every other value.

  - Basically, we'll be comparing each pair of values in <span style="color:#ebeb33">_nums_</span> to see if a duplicate has occurred.

  - To do this we'll start at the <span style="color:#ebeb33">_first_</span> value in <span style="color:#ebeb33">_nums_</span>, and compare it with each value to the right until we reach the end of <span style="color:#ebeb33">_nums_</span>.

  - Then we'll take the <span style="color:#ebeb33">_second_</span> value in nums, and compare it with each value to the right until we reach the end of <span style="color:#ebeb33">_nums_</span>.

  - We repeat this process until we reach the end of <span style="color:#ebeb33">_nums_</span> in the worst case or until we find a duplicate value.

  - Here's a visualization for <span style="color:#ebeb33">_nums_</span> = [1, 2, 3] which represents a worst case scenario:

    - Let's take our 1st value in <span style="color:#ebeb33">_nums_</span>, and compare it with each value to the right of it:

      - <span style="color:#ebeb33">_1st Comparison:_</span>

      $$\color{#ebeb33}{nums} = [\overset{\color{#33eb61}0}{\color{#33eb61}1}, \overset{\color{#33ebeb}1}{\color{#33ebeb}2}, \overset{2}{3}]$$

      $$\color{#33eb61}{nums[0]} \neq \color{#33ebeb}{nums[1]} \implies No \;{duplicate} \;{found}$$

      - <span style="color:#ebeb33">_2nd Comparison:_</span>

      $$\color{#ebeb33}{nums} = [\overset{\color{#33eb61}0}{\color{#33eb61}1}, \overset{1}{2}, \overset{\color{#cc99ff}2}{\color{#cc99ff}3}]$$

      $$\color{#33eb61}{nums[0]} \neq \color{#cc99ff}{nums[2]} \implies No \;{duplicate} \;{found}$$

    - Now, let's take our 2nd value in <span style="color:#ebeb33">_nums_</span>, and compare it with each value to the right of it:

      - <span style="color:#ebeb33">_3rd Comparison:_</span>

      $$\color{#ebeb33}{nums} = [\overset{0}{1}, \overset{\color{#33ebeb}1}{\color{#33ebeb}2}, \overset{\color{#cc99ff}2}{\color{#cc99ff}3}]$$

      $$\color{#33ebeb}{nums[1]} \neq \color{#cc99ff}{nums[2]} \implies No \;{duplicate} \;{found}$$

      - The 3rd value in <span style="color:#ebeb33">_nums_</span> is also the last value, so there's no more comparisons to be made.

  - To achieve this we'll need to loop over each value in <span style="color:#ebeb33">_nums_</span>, and for each iteration of this loop we need to compare our current value which will denote as <span style="color:#ebeb33">_nums[i]_</span> with each value to the right of it.

  - The process of comparing <span style="color:#ebeb33">_nums[i]_</span> with each value to the right of it means we'll need a nested for loop that loops from <span style="color:#ebeb33">_nums[i + 1]_</span> to the last value in <span style="color:#ebeb33">_nums_</span>.

  - A nested for loop $\implies$ a time complexity of $\color{#ebeb33}{O(n^2)}$ which is not efficient and will result in a Time Limit Exceeded error on LeetCode.

- Before checking for duplicate values, we can realize that if we <span style="color:#ebeb33">_sort nums_</span> any duplicate values will be consecutive.

  - Let's visualize this with an example for <span style="color:#ebeb33">_nums_</span> = [1, 2, 3, 1]:

    - Sorting <span style="color:#ebeb33">_nums_</span> gives us:

      $$\color{#ebeb33}{sort(nums)} = [1, 1, 2, 3]$$

    - Now, we can loop over <span style="color:#ebeb33">_nums_</span> and check for duplicates values.

  - Looping over <span style="color:#ebeb33">_nums_</span> has a time complexity of <span style="color:#ebeb33">_O(n)_</span>, and the sorting algorithm can have a time complexity as good as <span style="color:#ebeb33">O(nlogn)</span> if something like heapsort is used.

  - So, the overall time complexity is <span style="color:#ebeb33">O(nlogn)</span> since it's the dominating factor.

- Solving this problem requires the ability to efficiently search for values, and a great way to do that is to use a <span style="color:#ebeb33">_hash table_</span>.

  - A <span style="color:#ebeb33">_hash table_</span> is an object that maps keys to values.

  - The search and insert opertions in a hash table have a time complexity of <span style="color:#ebeb33">_O(1)_</span>.

  - Using a <span style="color:#ebeb33">_hash table_</span> will allow us to store each value in <span style="color:#ebeb33">_nums_</span> as a key, and we can map a value of let's say <span style="color:#ebeb33">_true_</span> to it if it's the first time we've seen the value.

  - Now, to create our <span style="color:#ebeb33">_hash table_</span> we can loop over <span style="color:#ebeb33">_nums_</span> then check to see if the key is present.

  - If the key is present, then we have found a duplicate, and we'll return true.

  - If the key isn't present, then we'll store the current value of <span style="color:#ebeb33">_nums_</span> as a key in our <span style="color:#ebeb33">_hash table_</span> with a value of <span style="color:#ebeb33">_true_</span>.

  - If no key appears twice, then <span style="color:#ebeb33">_nums_</span> has no duplicates, and we'll return false.

  - Here's a visualization of creating our <span style="color:#ebeb33">_hash table_</span> which we'll denote as <span style="color:#ebeb33">_obj_</span> for <span style="color:#ebeb33">_nums_</span> = [1, 2, 1]:

    - <span style="color:#ebeb33">_1st Iteration:_</span>

    $$\color{#33eb61}{nums[0]} = 1$$

    $$\color{#ebeb33}{obj} = \{ \} \implies \color{#33eb61}{nums[0]} \;{is} \;{not} \;{a} \;{key}$$

    - So, we'll store the value of <span style="color:#33eb61">_nums[0]_</span> as a key in our <span style="color:#ebeb33">_hash table_</span> with a value of true.

      $$\color{#ebeb33}{obj} = \{ 1: true \}$$

    - <span style="color:#ebeb33">_2nd Iteration:_</span>

    $$\color{#33ebeb}{nums[1]} = 2$$

    $$\color{#ebeb33}{obj} = \{ 1: true \} \implies \color{#33ebeb}{nums[1]} \;{is} \;{not} \;{a} \;{key}$$

    - So, we'll store the value of <span style="color:#33ebeb">_nums[1]_</span> as a key in our <span style="color:#ebeb33">_hash table_</span> with a value of true.

      $$\color{#ebeb33}{obj} = \{ 1: true, 2: true \}$$

    - <span style="color:#ebeb33">_3rd Iteration:_</span>

    $$\color{#cc99ff}{nums[2]} = 1$$

    $$\color{#ebeb33}{obj} = \{ 1: true, 2: true \} \implies \color{#cc99ff}{nums[2]} \;{is} \;{already} \;{a} \;{key}$$

    - Since the same key appeared in our <span style="color:#ebeb33">_hash table_</span>, a duplicate has been found in <span style="color:#ebeb33">_nums_</span>, so we'll return false.

## Implementation

<code-group>
<code-block title="Contains Duplicate">

```js
var containsDuplicate = function(nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      return true;
    }
    obj[nums[i]] = true;
  }
  return false;
};

nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
```

</code-block>
</code-group>
