---
title: Valid Anagram
date: 2021-07-02
topic: LeetCode
topicDescription: Solutions for LeetCode Problems Enjoy!!! 🍌 🐒
description: Solution & Notes for the LeetCode problem Valid Anagram.
img: LeetCodeLogo.png
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
sidebar: auto
---

# Valid Anagram

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Bh4f8Ui1gOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Links

<p><a href="https://leetcode.com/problems/valid-anagram/">Valid Anagram Problem</a> 💡</p>
<p><a href="https://github.com/codemonkeysio/LeetCode">Get the code & notes on GitHub</a> 💻</p>
<p><a href="https://discord.gg/mh9rQmwJ8H">Ask Questions & Share Solutions in Discord</a> 🤖</p>

## Problem Description

Given two strings <span style="color:#33eb61">_s_</span> and <span style="color:#33ebeb">_t_</span>, return <span style="color:#ebeb33">_true_</span>
if <span style="color:#33ebeb">_t_</span> is an <span style="color:#ebeb33">_anagram_</span> of <span style="color:#33eb61">_s_</span>, and <span style="color:#ebeb33">_false_</span> otherwise.

## Examples

Ex 1) Input: <span style="color:#33eb61">_s_</span> = "anagram", <span style="color:#33ebeb">_t_</span> = "nagaram" $\implies$ Output: <span style="color:#ebeb33">_true_</span>

Ex 2) Input: <span style="color:#33eb61">_s_</span> = "rat", <span style="color:#33ebeb">_t_</span> = "car" $\implies$ Output: <span style="color:#ebeb33">_false_</span>

## Constraints

- $1 \leq \color{#33eb61}{s.length}, \color{#33ebeb}{t.length} \leq 5*10^4$
- <span style="color:#33eb61">_s_</span> and <span style="color:#33ebeb">_t_</span> consist of lowercase English letters

## What is an Anagram?

- A word or a phrase that is formed by <span style="color:#ebeb33">rearranging</span> the letters of a different word or phrase typically using all of the original letters exactly <span style="color:#ebeb33">once</span>.

## Assumptions

- To clarify the provided constraints we're also assuming <span style="color:#33eb61">_s_</span> and <span style="color:#33ebeb">_t_</span> contain no spaces, and we're only able to use each letter <span style="color:#ebeb33">once</span>.

## How to Check if _t_ is an Anagram of _s_?

- Since we're assuming we can only use each letter in <span style="color:#33eb61">_s_</span> and <span style="color:#33ebeb">_t_</span> once, then for <span style="color:#33ebeb">_t_</span> to be an anagram of <span style="color:#33eb61">_s_</span> they must be the same length.

- We can first check that <span style="color:#33eb61">_s_</span> and <span style="color:#33ebeb">_t_</span> are the same length, and if they aren't we can return false.

- Now, if <span style="color:#33eb61">_s_</span> and <span style="color:#33ebeb">_t_</span> are the same length, they must also contain the same letters.

### How to Check if _s_ and _t_ contain the same letters?

- We're given <span style="color:#33eb61">_s_</span> and <span style="color:#33ebeb">_t_</span> as strings, but we care about being able to examine each character in the strings. So, what we can do is create an array of characters for <span style="color:#33eb61">_s_</span> and <span style="color:#33ebeb">_t_</span>.

  - Ex 1) <span style="color:#33eb61">_s_</span> = "anagram" $\implies$ <span style="color:#33eb61">_sArray_</span> = ["a", "n", "a", "g", "r", "a", "m"]<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:#33ebeb">_t_</span> = "nagaram" $\implies$ <span style="color:#33ebeb">_tArray_</span> = ["n", "a", "g", "a", "r", "a", "m"]

  - Ex 2) <span style="color:#33eb61">_s_</span> = "rat" $\implies$ <span style="color:#33eb61">sArray</span> = ["r", "a", "t"]<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:#33ebeb">_t_</span> = "car" $\implies$ <span style="color:#33ebeb">tArray</span> = ["c", "a", "r"]

- We can use the <span style="color:#ebeb33">_split()_</span> method, and pass it a pattern of <span style="color:#ebeb33">_""_</span>.

- This tells <span style="color:#ebeb33">_split()_</span> to split our strings into substrings where a <span style="color:#ebeb33">_""_</span> pattern occurs which is between each character in our strings.

- <span style="color:#ebeb33">_split()_</span> will then return an array of these substrings.

- Now, we need a way to compare the letters of <span style="color:#33eb61">_sArray_</span> with the letters of <span style="color:#33ebeb">_tArray_</span>.

- We could take the first value of <span style="color:#33eb61">_sArray_</span> and compare it with each value of <span style="color:#33ebeb">_tArray_</span>. Then break when the letters are the same, and keep track of which index the match occurred at. This will allow us to not use the value at the matched index again on the next comparison.

- A simplier solution though is to realize that we can sort our arrays, and if <span style="color:#33ebeb">_t_</span> is an anagram of <span style="color:#33eb61">_s_</span>, then our arrays will have all the same letters in the same order.

  - Ex 1) <span style="color:#33eb61">_sArray.sort()_</span> = ["a", "a", "a", "g", "m", "n", "r"]<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:#33ebeb">_tArray.sort()_</span> = ["a", "a", "a", "g", "m", "n", "r"]

  - Ex 2) <span style="color:#33eb61">_sArray.sort()_</span> = ["a", "r", "t"]<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:#33ebeb">_tArray.sort()_</span> = ["a", "c", "r"]

- Then we can check if the letters in the arrays are equal by comparing each value at index <span style="color:#ebeb33">_i_</span> of <span style="color:#33eb61">_sArray_</span> with each value at index <span style="color:#ebeb33">_i_</span> of <span style="color:#33ebeb">_tArray_</span>.

- To do this we can loop over the length of one of the arrays, and if the values of our arrays at index <span style="color:#ebeb33">_i_</span> are <span style="color:#ebeb33">not</span> equal, then we can break the loop by returning false.

- If the arrays are <span style="color:#ebeb33">equal</span>, then we'll loop over the entire length of our array and return true.

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
