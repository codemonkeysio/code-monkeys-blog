---
title: Single Number
date: 2021-06-29
topic: LeetCode
topicDescription: Solutions for LeetCode Problems Enjoy!!! 🍌🐒
description: Solution & Notes for the LeetCode problem Single Number.
img: 01-single-number.png
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
sidebar: auto
meta:
  - property: 'og:title'
    content: 'LeetCode - Single Number Solution'
  - property: 'og:type'
    content: 'website'
  - property: 'og:image'
    content: 'https://codemonkeys.tech/images/leetcode/social/01-single-number-link-post.png'
  - property: 'og:image:width'
    content: '1200'
  - property: 'og:image:height'
    content: '628'
  - property: 'og:image:alt'
    content: 'LeetCode - Single Number Solution Image'
  - property: 'og:url'
    content: 'https://www.codemonkeys.tech/posts/2021/06/29/single-number/'
  - property: 'og:description'
    content: 'Hey fellow Code Monkeys!!! 🐵 Check out the Solution & Notes for the LeetCode problem Single Number! 🍌🐒'
  - property: 'og:site_name'
    content: 'Code Monkeys'
  - name: 'twitter:card'
    content: 'summary_large_image'
  - name: 'twitter:title'
    content: 'LeetCode - Single Number Solution'
  - name: 'twitter:description'
    content: 'Hey fellow Code Monkeys!!! 🐵 Check out the Solution & Notes for the LeetCode problem Single Number! 🍌🐒'
  - name: 'twitter:url'
    content: 'https://www.codemonkeys.tech/posts/2021/06/29/single-number/'
  - name: 'twitter:site'
    content: '@codemonkeystech'
  - name: 'twitter:image'
    content: 'https://codemonkeys.tech/images/leetcode/social/01-single-number-link-post.png'
  - name: 'twitter:image:alt'
    content: 'LeetCode - Single Number Solution Image'
  - name: 'twitter:creator'
    content: '@codemonkeystech'
---

# Single Number

<div class="video-wrapper">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/K6TuMWpnmqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Links

<p><a href="https://leetcode.com/problems/single-number/" target="_blank" rel="noopener noreferrer">Single Number Problem</a> 💡</p>
<p><a href="https://github.com/codemonkeysio/LeetCode" target="_blank" rel="noopener noreferrer">Get the code & notes on GitHub</a> 💻</p>
<p><a href="https://discord.gg/mh9rQmwJ8H" target="_blank" rel="noopener noreferrer">Ask Questions & Share Solutions in Discord</a> 🤖</p>

## Problem Description

Given a <span class="post-term-one post-term-bold">non-empty</span> array of integers <span class="post-term-one">nums</span>, every element appears <span class="post-term-one">twice</span> excpet for one. Find that single one.

You must implement a solution with a <span class="post-term-one">linear runtime</span> complexity and use only <span class="post-term-one">constant extra space</span>.

## Examples

Ex 1) Input: <span class="post-term-one">nums</span> = [2, 2, 1] $\implies$ Output: <span class="post-term-one">1</span> since 1 appears once.

Ex 2) Input: <span class="post-term-one">nums</span> = [4, 1, 2, 1, 2] $\implies$ Output: <span class="post-term-one">4</span> since 4 appears once.

Ex 3) Input: <span class="post-term-one">nums</span> = [1] $\implies$ Output: <span class="post-term-one">1</span> since 1 appears once.

## Constraints

- $1 \leq \color{#ebeb33}{nums.length} \leq 3*10^4$

- $-3*10^4 \leq \color{#ebeb33}{nums[i]} \leq 3*10^4$

- Each element in the array appears <span class="post-term-one">twice</span> except for one element which appears only once.

## What does Linear Runtime Mean?

- A <span class="post-term-one">linear runtime</span> means our solution must have a time complexity of <span class="post-term-one">O(n)</span>.

- So, it's ok to use a loop in our solution but not a nested loop.

## What does Using Constant Extra Space Mean?

- Our given space complexity is <span class="post-term-one">O(n)</span> since we're given <span class="post-term-one">nums</span> which is an array of <span class="post-term-one">length n</span>.

- Since we want to use <span class="post-term-one">constant extra space</span>, our solution must have at most <span class="post-term-one">O(n)</span> space complexity.

## Thought Process

- We need to iterate over <span class="post-term-one">nums</span> since we need to find out which element appears only once.

- The iteration can be done using a for loop.

- Now, to keep track of how many times an element has appeared in <span class="post-term-one">nums</span> we can use a <span class="post-term-one">hash table</span>.

- A <span class="post-term-one">hash table</span> is an object that maps keys to values.

- Here, the key will represent the element in <span class="post-term-one">nums</span>, and the value can be set to <span class="post-term-one">true</span> if it has appeared once.

- If the key appears again we can remove it since we know every element other than the unique element appears <span class="post-term-one">twice</span>.

- After removing the keys that appear <span class="post-term-one">twice</span>, we just need to return the key of our <span class="post-term-one">hash table</span> that appeared once.

- Here's a visualization of creating our <span class="post-term-one">hash table</span> which we'll denote as <span class="post-term-one">myObj</span> for <span class="post-term-one">nums</span> = [2, 2, 1]:

  - <span class="post-term-one">1<sup>st</sup> Iteration:</span>

  $$\color{#33eb61}{nums[0]} = 2$$

  $$\color{#ebeb33}{myObj} = \{ \} \implies \color{#33eb61}{nums[0]} \;{is} \;{not} \;{a} \;{key}$$

  - So, we'll store the value of <span class="post-term-two">nums[0]</span> as a key in our <span class="post-term-one">hash table</span> with a value of true.

    $$\color{#ebeb33}{myObj} = \{ 2: true \}$$

  - <span class="post-term-one">2<sup>nd</sup> Iteration:</span>

  $$\color{#33ebeb}{nums[1]} = 2$$

  $$\color{#ebeb33}{myObj} = \{ 2: true \} \implies \color{#33ebeb}{nums[1]} \;{is} \;{a} \;{key}$$

  - So, we'll remove the 2 key from our <span class="post-term-one">hash table</span> since it has now appeared twice.

    $$\color{#ebeb33}{myObj} = \{ \}$$

  - <span class="post-term-one">3<sup>rd</sup> Iteration:</span>

  $$\color{#cc99ff}{nums[2]} = 1$$

  $$\color{#ebeb33}{myObj} = \{ \} \implies \color{#cc99ff}{nums[2]} \;{is} \;{not} \;{a} \;{key}$$

  - So, we'll store the value of <span class="post-term-four">nums[2]</span> as a key in our <span class="post-term-one">hash table</span> with a value of true.

  - Now, we have reached the end of the loop, so we'll return the value of the only key left in our <span class="post-term-one">hash table</span> which in this case is 1.

## Implementation

<code-group>
<code-block title="Single Number">

```js
var singleNumber = function(nums) {
  const myObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (myObj[nums[i]]) {
      delete myObj[nums[i]];
    } else {
      myObj[nums[i]] = true;
    }
  }
  return Object.keys(myObj)[0];
};

nums = [2, 2, 1];
console.log(singleNumber(nums));
```

</code-block>
</code-group>
