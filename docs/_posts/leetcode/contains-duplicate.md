---
title: Contains Duplicate
date: 2021-08-06T18:24:00.000Z
topic: LeetCode
description: Hey fellow Code Monkeys!!! 🐵 Check out the Solution & Notes for the LeetCode problem Contains Duplicate! 🍌🐒
preview: Given an integer array nums, return true if any value appears at least twice, and return false if every...
img: leetcode/06-contains-duplicate/leetcode-contains-duplicate-post.png
placeholder: leetcode/06-contains-duplicate/leetcode-contains-duplicate-post-90w.png
alt: LeetCode - Contains Duplicate Post Picture
linkImg: leetcode/06-contains-duplicate/leetcode-contains-duplicate-post-link.png
linkImgAlt: LeetCode - Contains Duplicate Solution Image
videoURL: 'https://www.youtube-nocookie.com/embed/P_SCtMIgZJs'
canonicalUrl: contains-duplicate/
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
permalink: /contains-duplicate/
redirectFrom: /posts/2021/08/06/contains-duplicate/
---

::: slot header

# Contains Duplicate

:::

## Links

<p><a href="https://leetcode.com/problems/contains-duplicate/" target="_blank" rel="noopener noreferrer">Contains Duplicate <div class="emoji-wrap">Problem<span>&nbsp;💡</span></div></a></p>
<p><a href="https://github.com/codemonkeysio/LeetCode" target="_blank" rel="noopener noreferrer">Get the code & notes on <div class="emoji-wrap">GitHub<span>&nbsp;💻</span></div></a></p>
<p><a href="https://discord.gg/mh9rQmwJ8H" target="_blank" rel="noopener noreferrer">Ask Questions & Share Solutions in <div class="emoji-wrap">Discord<span>&nbsp;🤖</span></div></a></p>

## Problem Description

Given an <span class="post-term-one">integer</span> array <span class="post-term-one">nums</span>, return <span class="post-term-one">true</span> if any value appears <span class="post-term-one post-term-bold">at least twice</span>, and return <span class="post-term-one">false</span> if every element is distinct.

## Examples

Ex 1) Input: <span class="post-term-one">nums</span> = [1, 2, 3, 1] $\implies$ Output: <span class="post-term-one">true</span> since 1 appears twice.

Ex 2) Input: <span class="post-term-one">nums</span> = [1, 2, 3, 4] $\implies$ Output: <span class="post-term-one">false</span> since no value appears twice.

Ex 3) Input: <span class="post-term-one">nums</span> = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2] $\implies$ Output: <span class="post-term-one">true</span> since 1, 3, and 2 appear more than once.

Ex 4) Input: <span class="post-term-one">nums</span> = [] $\implies$ Output: <span class="post-term-one">false</span> since there are no values.

## Constraints

$1 \leq \color{#ebeb33}{nums.length} \leq 10^5$

$-10^9 \leq \color{#ebeb33}{nums[i]} \leq 10^9$

## Thought Process

- By looking at the examples, the 1<sup>st</sup> thought that comes to mind may be to simply take each value in <span class="post-term-one">nums</span>, and compare it with every other value.

  - Basically, we'll be comparing each pair of values in <span class="post-term-one">nums</span> to see if a duplicate has occurred.

  - To do this we'll start at the <span class="post-term-one">first</span> value in <span class="post-term-one">nums</span>, and compare it with each value to the right until we reach the end of <span class="post-term-one">nums</span>.

  - Then we'll take the <span class="post-term-one">second</span> value in nums, and compare it with each value to the right until we reach the end of <span class="post-term-one">nums</span>.

  - We repeat this process until we reach the end of <span class="post-term-one">nums</span> in the worst case or until we find a duplicate value.

  - Here's a visualization for <span class="post-term-one">nums</span> = [1, 2, 3] which represents a worst case scenario:

    - Let's take our 1<sup>st</sup> value in <span class="post-term-one">nums</span>, and compare it with each value to the right of it:

      - <span class="post-term-one">1<sup>st</sup> Comparison:</span>

      $$\color{#ebeb33}{nums} = [\overset{\color{#33eb61}0}{\color{#33eb61}1}, \overset{\color{#33ebeb}1}{\color{#33ebeb}2}, \overset{2}{3}]$$

      $$\color{#33eb61}{nums[0]} \neq \color{#33ebeb}{nums[1]} \implies No \;{duplicate} \;{found}$$

      - <span class="post-term-one">2<sup>nd</sup> Comparison:</span>

      $$\color{#ebeb33}{nums} = [\overset{\color{#33eb61}0}{\color{#33eb61}1}, \overset{1}{2}, \overset{\color{#cc99ff}2}{\color{#cc99ff}3}]$$

      $$\color{#33eb61}{nums[0]} \neq \color{#cc99ff}{nums[2]} \implies No \;{duplicate} \;{found}$$

    - Now, let's take our 2<sup>nd</sup> value in <span class="post-term-one">nums</span>, and compare it with each value to the right of it:

      - <span class="post-term-one">3<sup>rd</sup> Comparison:</span>

      $$\color{#ebeb33}{nums} = [\overset{0}{1}, \overset{\color{#33ebeb}1}{\color{#33ebeb}2}, \overset{\color{#cc99ff}2}{\color{#cc99ff}3}]$$

      $$\color{#33ebeb}{nums[1]} \neq \color{#cc99ff}{nums[2]} \implies No \;{duplicate} \;{found}$$

      - The 3<sup>rd</sup> value in <span class="post-term-one">nums</span> is also the last value, so there's no more comparisons to be made.

  - To achieve this we'll need to loop over each value in <span class="post-term-one">nums</span>, and for each iteration of this loop we need to compare our current value which will denote as <span class="post-term-one">nums[i]</span> with each value to the right of it.

  - The process of comparing <span class="post-term-one">nums[i]</span> with each value to the right of it means we'll need a nested for loop that loops from <span class="post-term-one">nums[i + 1]</span> to the last value in <span class="post-term-one">nums</span>.

  - A nested for loop $\implies$ a time complexity of $\color{#ebeb33}{O(n^2)}$ which is not efficient and will result in a Time Limit Exceeded error on LeetCode.

- Before checking for duplicate values, we can realize that if we <span class="post-term-one">sort nums</span> any duplicate values will be consecutive.

  - Let's visualize this with an example for <span class="post-term-one">nums</span> = [1, 2, 3, 1]:

    - Sorting <span class="post-term-one">nums</span> gives us:

      $$\color{#ebeb33}{sort(nums)} = [1, 1, 2, 3]$$

    - Now, we can loop over <span class="post-term-one">nums</span> and check for duplicates values.

  - Looping over <span class="post-term-one">nums</span> has a time complexity of <span class="post-term-one">O(n)</span>, and the sorting algorithm can have a time complexity as good as <span class="post-term-one">O(nlogn)</span> if something like heapsort is used.

  - So, the overall time complexity is <span class="post-term-one">O(nlogn)</span> since it's the dominating factor.

- Solving this problem requires the ability to efficiently search for values, and a great way to do that is to use a <span class="post-term-one">hash table</span>.

  - A <span class="post-term-one">hash table</span> is an object that maps keys to values.

  - The search and insert opertions in a hash table have a time complexity of <span class="post-term-one">O(1)</span>.

  - Using a <span class="post-term-one">hash table</span> will allow us to store each value in <span class="post-term-one">nums</span> as a key, and we can map a value of let's say <span class="post-term-one">true</span> to it if it's the first time we've seen the value.

  - Now, to create our <span class="post-term-one">hash table</span> we can loop over <span class="post-term-one">nums</span> then check to see if the key is present.

  - If the key is present, then we have found a duplicate, and we'll return true.

  - If the key isn't present, then we'll store the current value of <span class="post-term-one">nums</span> as a key in our <span class="post-term-one">hash table</span> with a value of <span class="post-term-one">true</span>.

  - If no key appears twice, then <span class="post-term-one">nums</span> has no duplicates, and we'll return false.

  - Here's a visualization of creating our <span class="post-term-one">hash table</span> which we'll denote as <span class="post-term-one">obj</span> for <span class="post-term-one">nums</span> = [1, 2, 1]:

    - <span class="post-term-one">1<sup>st</sup> Iteration:</span>

    $$\color{#33eb61}{nums[0]} = 1$$

    $$\color{#ebeb33}{obj} = \{ \} \implies \color{#33eb61}{nums[0]} \;{is} \;{not} \;{a} \;{key}$$

    - So, we'll store the value of <span class="post-term-two">nums[0]</span> as a key in our <span class="post-term-one">hash table</span> with a value of true.

      $$\color{#ebeb33}{obj} = \{ 1: true \}$$

    - <span class="post-term-one">2<sup>nd</sup> Iteration:</span>

    $$\color{#33ebeb}{nums[1]} = 2$$

    $$\color{#ebeb33}{obj} = \{ 1: true \} \implies \color{#33ebeb}{nums[1]} \;{is} \;{not} \;{a} \;{key}$$

    - So, we'll store the value of <span class="post-term-three">nums[1]</span> as a key in our <span class="post-term-one">hash table</span> with a value of true.

      $$\color{#ebeb33}{obj} = \{ 1: true, 2: true \}$$

    - <span class="post-term-one">3<sup>rd</sup> Iteration:</span>

    $$\color{#cc99ff}{nums[2]} = 1$$

    $$\color{#ebeb33}{obj} = \{ 1: true, 2: true \} \implies \color{#cc99ff}{nums[2]} \;{is} \;{already} \;{a} \;{key}$$

    - Since the same key appeared in our <span class="post-term-one">hash table</span>, a duplicate has been found in <span class="post-term-one">nums</span>, so we'll return false.

## Implementation

<code-fence lang="js" heading="Contains Duplicate">
<pre vue-slot="code">
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
</pre>
</code-fence>
