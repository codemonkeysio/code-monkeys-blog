---
title: Remove Duplicates from Sorted Array
date: 2021-07-03T17:25:34.000Z
topic: LeetCode
description: Hey fellow Code Monkeys!!! 🐵 Check out the Solution & Notes for the LeetCode problem Remove Duplicates from Sorted Array! 🍌🐒
preview: Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each...
img: leetcode/05-remove-duplicates-from-sorted-array/leetcode-remove-duplicates-from-sorted-array-post.png
placeholder: leetcode/05-remove-duplicates-from-sorted-array/leetcode-remove-duplicates-from-sorted-array-post-90w.png
alt: LeetCode - Remove Duplicates from Sorted Array Post Picture
linkImg: leetcode/05-remove-duplicates-from-sorted-array/leetcode-remove-duplicates-from-sorted-array-post-link.png
linkImgAlt: LeetCode - Remove Duplicates from Sorted Array Solution Image
videoURL: 'https://www.youtube-nocookie.com/embed/ApBQCp1RfnA'
canonicalUrl: remove-duplicates-from-sorted-array/
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
permalink: /remove-duplicates-from-sorted-array/
redirectFrom: /posts/2021/07/03/remove-duplicates-from-sorted-array/
---

::: slot header

# Remove Duplicates from Sorted Array

:::

## Links

<p><a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array/" target="_blank" rel="noopener noreferrer">Remove Duplicates from Sorted Array <div class="emoji-wrap">Problem<span>&nbsp;💡</span></div></a></p>
<p><a href="https://github.com/codemonkeysio/LeetCode" target="_blank" rel="noopener noreferrer">Get the code & notes on <div class="emoji-wrap">GitHub<span>&nbsp;💻</span></div></a></p>
<p><a href="https://discord.gg/mh9rQmwJ8H" target="_blank" rel="noopener noreferrer">Ask Questions & Share Solutions in <div class="emoji-wrap">Discord<span>&nbsp;🤖</span></div></a></p>

## Problem Description

Given an <span class="post-term-one">integer</span> array <span class="post-term-one">nums</span> sorted in <span class="post-term-one post-term-bold">non-decreasing order</span>, remove the duplicates <span class="post-term-one">in-place</span> such that each unique element appears only <span class="post-term-one post-term-blod">once</span>. The relative <span class="post-term-one post-term-bold">order</span> of the elements should be kept the <span class="post-term-one post-term-bold">same</span>.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the <span class="post-term-one post-term-bold">first part</span> of the array <span class="post-term-one">nums</span>. More formally, if there are <span class="post-term-one">k</span> elements after removing the duplicates, then the first <span class="post-term-one">k</span> elements of <span class="post-term-one">nums</span> should hold the final result. It does not matter what you leave beyond the first <span class="post-term-one">k</span> elements.

Return <span class="post-term-one">k</span> after placing the final result in the first <span class="post-term-one">k</span> slots of <span class="post-term-one">nums</span>.

Do <span class="post-term-one post-term-bold">not</span> allocate extra space for another array. You must do this by <span class="post-term-one post-term-bold">modifying the input array in-place</span> with <span class="post-term-one">O(1)</span> extra memory.

## Examples

Ex 1) Input: <span class="post-term-one">nums</span> = [1, 1, 2] $\implies$ Output: <span class="post-term-one">2, nums = [1, 2, _]</span>

Explanation: Your function should return <span class="post-term-one">k = 2</span>, with the first two elements of <span class="post-term-one">nums</span> being <span class="post-term-one">1</span> and <span class="post-term-one">2</span> respectively.<br>It does not matter what you leave beyond the returned k (hence they are underscores).

Ex 2) Input: <span class="post-term-one">nums</span> = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] $\implies$ Output: <span class="post-term-one">5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]</span>

Explanation: Your function should return <span class="post-term-one">k = 5</span>, with the first five elements of <span class="post-term-one">nums</span> being <span class="post-term-one">0, 1, 2, 3,</span> and <span class="post-term-one">4</span> respectively.<br>It does not matter what you leave beyond the returned k (hence they are underscores).

## Constraints

- $0 \leq \color{#ebeb33}{nums.length} \leq 3*10^4$

- $-100 \leq \color{#ebeb33}{nums[i]} \leq 100$

- <span class="post-term-one">nums</span> is sorted in <span class="post-term-one post-term-bold">non-decreasing</span> order.

## What does In-Place mean?

- Let's start by defining <span class="post-term-one">in-place</span> which is an algorithm that transforms input using no auxiliary data structure.

- So, we <span class="post-term-one">cannot</span> allocate extra space for another array, a hash table, or any other data structure.

- Another way of saying this is we must use <span class="post-term-one">O(1) extra memory</span>.

## Removing (or Moving) Duplicates & Maintaining Relative Order

- In JavaScript we <span class="post-term-one">can</span> change the length of an array by adding or removing elements, but in other languages like C for example we <span class="post-term-one">cannot</span> change the length of an array after it's created.

- So, to get around this we're told we can place the result in the first part of <span class="post-term-one">nums</span>.

- Recall the formal description from earlier: if there are <span class="post-term-one">k</span> elements after removing the duplicates, then the first <span class="post-term-one">k</span> elements of <span class="post-term-one">nums</span> should hold the final result, and it doesn't matter what is left after the first <span class="post-term-one">k</span> elements.

- The examples from earlier should make this clearer:

  - Ex 1) Input: <span class="post-term-one">nums</span> = [1, 1, 2] $\implies$ Output: <span class="post-term-one">2, nums = [1, 2, _ ]</span>

  - Notice:

    - The output maintains the relative order for <span class="post-term-one">nums</span> by keeping the elements we care about in <span class="post-term-one post-term-bold">non-decreasing</span> order.

    - Also, recall if we're moving the duplicates it doesn't matter what we leave after the <span class="post-term-one">k<sup>th</sup></span> element, so those elements were denoted with underscores.

  - Ex 2) Input: <span class="post-term-one">nums</span> = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] $\implies$ Output: <span class="post-term-one">5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]</span>

  - Notice:

    - The output maintains the relative order again for <span class="post-term-one">nums</span> by keeping the elements we care about in <span class="post-term-one post-term-bold">non-decreasing</span> order.

    - And again, recall if we're moving the duplicates it doesn't matter what we leave after the <span class="post-term-one">k<sup>th</sup></span> element, so those elements were denoted with underscores.

## How to Modify nums In-Place?

- We're told we can only modify <span class="post-term-one">nums in-place</span>.

- Let's start with <span class="post-term-one">nums</span> = [1, 1, 1, 2, 2], and see if we can come up with some way to move around the elements to get our desired output.

- Let's start by taking our 1<sup>st</sup> element in <span class="post-term-one">nums</span> and compare it with the 2<sup>nd</sup> element, then we can compare the 2<sup>nd</sup> element with the 3<sup>rd</sup> and so on...

- <span class="post-term-one">1<sup>st</sup> Iteration:</span>

$$\color{#ebeb33}{nums} = [\overset{\color{#33eb61}0}{\color{#33eb61}1}, \overset{\color{#33ebeb}1}{\color{#33ebeb}1}, \overset{2}{1}, \overset{3}{2}, \overset{4}{2}]$$

$$\color{#33eb61}{nums[0]} \equiv \color{#33ebeb}{nums[1]} \implies \color{#33eb61}{1} \equiv \color{#33ebeb}{1} \implies We \;{don't} \;{need} \;{to} \;{move} \;\color{#33ebeb}{nums[1]}$$

- <span class="post-term-one">2<sup>nd</sup> Iteration:</span>

$$\color{#ebeb33}{nums} = [\overset{0}{1}, \overset{\color{#33eb61}1}{\color{#33eb61}1}, \overset{\color{#33ebeb}2}{\color{#33ebeb}1}, \overset{3}{2}, \overset{4}{2}]$$

$$\color{#33eb61}{nums[1]} \equiv \color{#33ebeb}{nums[2]} \implies \color{#33eb61}{1} \equiv \color{#33ebeb}{1} \implies We \;{don't} \;{need} \;{to} \;{move} \;\color{#33ebeb}{nums[2]}$$

- <span class="post-term-one">3<sup>rd</sup> Iteration:</span>

$$\color{#ebeb33}{nums} = [\overset{0}{1}, \overset{1}{1}, \overset{\color{#33eb61}2}{\color{#33eb61}1}, \overset{\color{#33ebeb}3}{\color{#33ebeb}2}, \overset{4}{2}]$$

$$\color{#33eb61}{nums[2]} \neq \color{#33ebeb}{nums[3]} \implies \color{#33eb61}{1} \neq \color{#33ebeb}{2} \implies We \;{need} \;{to} \;{move} \;\color{#33ebeb}{nums[3]} \;{to} \;{the} \;{2^{nd}} \;{spot} \;{in} \;{our} \;{array} \;{which} \;{is} \;\color{#cc99ff}{nums[1]}$$

$$To \;{do} \;{that} \;{we} \;{can} \;{set} \;\color{#cc99ff}{nums[1]} \;{=} \;\color{#33ebeb}{nums[3]}$$

- <span class="post-term-one">4<sup>th</sup> Iteration:</span>

$$\color{#ebeb33}{nums} = [\overset{0}{1}, \overset{\color{#cc99ff}1}{\color{#cc99ff}2}, \overset{2}{1}, \overset{\color{#33eb61}3}{\color{#33eb61}2}, \overset{\color{#33ebeb}4}{\color{#33ebeb}2}]$$

$$\color{#33eb61}{nums[3]} \equiv \color{#33ebeb}{nums[4]} \implies \color{#33eb61}{2} \equiv \color{#33ebeb}{2} \implies We \;{don't} \;{need} \;{to} \;{move} \;\color{#33ebeb}{nums[4]}$$

- After the 4<sup>th</sup> iteration, there's nothing left to compare <span class="post-term-three">nums[4]</span> with, so that's the last iteration we need.

- During our iterations we had to keep track of our current element in <span class="post-term-one">nums</span> which we'll call <span class="post-term-two">nums[i]</span> and the next element in <span class="post-term-one">nums</span> which will be <span class="post-term-three">nums[i + 1]</span>.

- We also had to keep track of which element we needed to replace in <span class="post-term-one">nums</span> if we ran into an element we hadn't seen before which we'll call <span class="post-term-four">nums[j]</span>.

- So, to implement this we'll loop over <span class="post-term-one">nums</span> from the beginning to the length of <span class="post-term-one">nums - 1</span> since when we get to the last element there's nothing else for us to compare it with.

- On each iteration we'll compare the current element of <span class="post-term-one">nums</span> which is <span class="post-term-two">nums[i]</span> with the next element of <span class="post-term-one">nums</span> which is <span class="post-term-three">nums[i + 1]</span>.

- If they're not equal then we'll set <span class="post-term-four">nums[j]</span> <span class="post-term-one">=</span> <span class="post-term-three">nums[i + 1]</span> where <span class="post-term-four">j</span> gets initialized to <span class="post-term-four">1</span>, and we'll increment <span class="post-term-four">j</span> every time <span class="post-term-two">nums[i]</span> doesn't equal <span class="post-term-three">nums[i + 1]</span>.

- We also need to remember the case of <span class="post-term-four">nums.length = 0</span> which means we have no elements in our array, so we'll just return 0.

## Implementation

<code-fence lang="js" heading="Remove Duplicates from Sorted Array">
<pre vue-slot="code">
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
console.log('k =', removeDuplicates(nums), 'nums =', nums);

</pre>
</code-fence>
