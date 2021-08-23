---
title: Valid Anagram
date: 2021-07-02
topic: LeetCode
topicDescription: Solutions for LeetCode Problems Enjoy!!! 🍌 🐒
description: Solution & Notes for the LeetCode problem Valid Anagram.
img: 04-valid-anagram.png
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
sidebar: auto
---

# Valid Anagram

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Bh4f8Ui1gOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Links

<p><a href="https://leetcode.com/problems/valid-anagram/" target="_blank" rel="noopener noreferrer">Valid Anagram Problem</a> 💡</p>
<p><a href="https://github.com/codemonkeysio/LeetCode" target="_blank" rel="noopener noreferrer">Get the code & notes on GitHub</a> 💻</p>
<p><a href="https://discord.gg/mh9rQmwJ8H" target="_blank" rel="noopener noreferrer">Ask Questions & Share Solutions in Discord</a> 🤖</p>

## Problem Description

Given two strings <span class="post-term-two">s</span> and <span class="post-term-three">t</span>, return <span class="post-term-one">true</span>
if <span class="post-term-three">t</span> is an <span class="post-term-one">anagram</span> of <span class="post-term-two">s</span>, and <span class="post-term-one">false</span> otherwise.

## Examples

Ex 1) Input: <span class="post-term-two">s</span> = "anagram", <span class="post-term-three">t</span> = "nagaram" $\implies$ Output: <span class="post-term-one">true</span>

Ex 2) Input: <span class="post-term-two">s</span> = "rat", <span class="post-term-three">t</span> = "car" $\implies$ Output: <span class="post-term-one">false</span>

## Constraints

- $1 \leq \color{#33eb61}{s.length}, \color{#33ebeb}{t.length} \leq 5*10^4$
- <span class="post-term-two">s</span> and <span class="post-term-three">t</span> consist of lowercase English letters

## What is an Anagram?

- A word or a phrase that is formed by <span class="post-term-one">rearranging</span> the letters of a different word or phrase typically using all of the original letters exactly <span class="post-term-one">once</span>.

## Assumptions

- To clarify the provided constraints we're also assuming <span class="post-term-two">s</span> and <span class="post-term-three">t</span> contain no spaces, and we're only able to use each letter <span class="post-term-one">once</span>.

## How to Check if t is an Anagram of s?

- Since we're assuming we can only use each letter in <span class="post-term-two">s</span> and <span class="post-term-three">t</span> once, then for <span class="post-term-three">t</span> to be an anagram of <span class="post-term-two">s</span> they must be the same length.

- We can first check that <span class="post-term-two">s</span> and <span class="post-term-three">t</span> are the same length, and if they aren't we can return false.

- Now, if <span class="post-term-two">s</span> and <span class="post-term-three">t</span> are the same length, they must also contain the same letters.

### How to Check if s and t contain the same letters?

- We're given <span class="post-term-two">s</span> and <span class="post-term-three">t</span> as strings, but we care about being able to examine each character in the strings. So, what we can do is create an array of characters for <span class="post-term-two">s</span> and <span class="post-term-three">t</span>.

  - Ex 1) <span class="post-term-two">s</span> = "anagram" $\implies$ <span class="post-term-two">sArray</span> = ["a", "n", "a", "g", "r", "a", "m"]<br><span class="post-term-three post-example">t</span> = "nagaram" $\implies$ <span class="post-term-three">tArray</span> = ["n", "a", "g", "a", "r", "a", "m"]

  - Ex 2) <span class="post-term-two">s</span> = "rat" $\implies$ <span class="post-term-two">sArray</span> = ["r", "a", "t"]<br><span class="post-term-three post-example">t</span> = "car" $\implies$ <span class="post-term-three">tArray</span> = ["c", "a", "r"]

- We can use the <span class="post-term-one">split()</span> method, and pass it a pattern of <span class="post-term-one">""</span>.

- This tells <span class="post-term-one">split()</span> to split our strings into substrings where a <span class="post-term-one">""</span> pattern occurs which is between each character in our strings.

- <span class="post-term-one">split()</span> will then return an array of these substrings.

- Now, we need a way to compare the letters of <span class="post-term-two">sArray</span> with the letters of <span class="post-term-three">tArray</span>.

- We could take the first value of <span class="post-term-two">sArray</span> and compare it with each value of <span class="post-term-three">tArray</span>. Then break when the letters are the same, and keep track of which index the match occurred at. This will allow us to not use the value at the matched index again on the next comparison.

- A simplier solution though is to realize that we can sort our arrays, and if <span class="post-term-three">t</span> is an anagram of <span class="post-term-two">s</span>, then our arrays will have all the same letters in the same order.

  - Ex 1) <span class="post-term-two">sArray.sort()</span> = ["a", "a", "a", "g", "m", "n", "r"]<br><span class="post-term-three post-example">tArray.sort()</span> = ["a", "a", "a", "g", "m", "n", "r"]

  - Ex 2) <span class="post-term-two">sArray.sort()</span> = ["a", "r", "t"]<br><span class="post-term-three post-example">tArray.sort()</span> = ["a", "c", "r"]

- Then we can check if the letters in the arrays are equal by comparing each value at index <span class="post-term-one">i</span> of <span class="post-term-two">sArray</span> with each value at index <span class="post-term-one">i</span> of <span class="post-term-three">tArray</span>.

- To do this we can loop over the length of one of the arrays, and if the values of our arrays at index <span class="post-term-one">i</span> are <span class="post-term-one">not</span> equal, then we can break the loop by returning false.

- If the arrays are <span class="post-term-one">equal</span>, then we'll loop over the entire length of our array and return true.

## Implementation

<code-group>
<code-block title="Valid Anagram">

```js
var isAnagram = function(s, t) {
  if (s.length === t.length) {
    let sArray = s.split('');
    let tArray = t.split('');

    sArray.sort();
    tArray.sort();

    for (let i = 0; i < s.length; i++) {
      if (sArray[i] !== tArray[i]) {
        return false;
      }
    }

    return true;
  } else {
    return false;
  }
};

let s = 'rat';
let t = 'car';

console.log(isAnagram(s, t));
```

</code-block>
</code-group>
