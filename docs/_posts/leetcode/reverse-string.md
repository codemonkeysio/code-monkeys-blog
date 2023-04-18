---
title: Reverse String
date: 2021-08-11T15:35:00.000Z
topic: LeetCode
description: Hey fellow Code Monkeys!!! 🐵 Check out the Solution & Notes for the LeetCode problem Reverse String! 🍌🐒
preview: Write a function that reverses a string. The input string is given as an array of characters. Ex) 1 Input...
img: leetcode/07-reverse-string/leetcode-reverse-string-post.png
placeholder: leetcode/07-reverse-string/leetcode-reverse-string-post-90w.png
alt: LeetCode - Reverse String Post Picture
linkImg: leetcode/07-reverse-string/leetcode-reverse-string-post-link.png
linkImgAlt: LeetCode - Reverse String Solution Image
videoURL: 'https://www.youtube-nocookie.com/embed/Ue3XmMvLwsY'
canonicalUrl: reverse-string/
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
permalink: /reverse-string/
redirectFrom: /posts/2021/08/11/reverse-string/
---

::: slot header

# Reverse String

:::

## Links

<p><a href="https://leetcode.com/problems/reverse-string/" target="_blank" rel="noopener noreferrer">Reverse String <div class="emoji-wrap">Problem<span>&nbsp;💡</span></div></a></p>
<p><a href="https://github.com/codemonkeysio/LeetCode" target="_blank" rel="noopener noreferrer">Get the code & notes on <div class="emoji-wrap">GitHub<span>&nbsp;💻</span></div></a></p>
<p><a href="https://discord.gg/mh9rQmwJ8H" target="_blank" rel="noopener noreferrer">Ask Questions & Share Solutions in <div class="emoji-wrap">Discord<span>&nbsp;🤖</span></div></a></p>

## Problem Description

Write a function that reverses a string. The input string is given as an array of characters <span class="post-term-one">s</span>.

## Examples

Ex 1) Input: <span class="post-term-one">s</span> = ["h", "e", "l", "l", "o"] $\implies$ Output: <span class="post-term-one">["o", "l", "l", "e", "h"]</span>

Ex 2) Input: <span class="post-term-one">s</span> = ["H", "a", "n", "n", "a", "h"] $\implies$ Output: <span class="post-term-one">["h", "a", "n", "n", "a", "H"]</span>

## Constraints

- $1 \leq \color{#ebeb33}{s.length} \leq 10^5$

- <span class="post-term-one">s[i]</span> is a printable ASCII character.

- Do not allocate extra space for another array. You must do this <span class="post-term-one">in-place</span> with <span class="post-term-one">O(1) extra memory</span>.

## What is a printable ASCII Character?

- ASCII stands for American Standard Code for Information Interchange and it consists of 33 non-printable and 95 printable characters.

- You can check out the non-printable, printable, and extended ASCII characters [here](https://www.ascii-code.com/).

- For this problem we only care about the printable ASCII characters.

## What does In-Place Mean?

- <span class="post-term-one">In-place</span> refers to an algorithm that transforms input using no auxiliary data structure.

- So, we <span class="post-term-one">cannot</span> allocate extra space for another array, a hash table, or any other data structure.

- Another way of saying this is we must use <span class="post-term-one">O(1) extra memory</span>.

## Thought Process

- Let's take our two examples from earlier and find a way to model the reversing of the characters in <span class="post-term-one">s</span>.

- Let's start with Ex 1)

  - Initially, we have

  $$\color{#ebeb33}{s} = [\overset{0}{h}, \overset{1}{e}, \overset{2}{l}, \overset{3}{l}, \overset{4}{o}]$$

  and after reversing <span class="post-term-one">s</span> our output should be:

  $$\color{#ebeb33}{s} = [\overset{0}{o}, \overset{1}{l}, \overset{2}{l}, \overset{3}{e}, \overset{4}{h}]$$

  - To perform the reversal we need to swap the characters in <span class="post-term-one">s</span>.

  - We can start by swapping the <span class="post-term-one">leftmost</span> character and the <span class="post-term-one">rightmost</span> character.

  - Then we'll move to the <span class="post-term-one">second leftmost</span> character and the <span class="post-term-one">second rightmost</span> character and swap them.

  - We'll continue this process until <span class="post-term-one">every</span> character has been swapped if we have an <span class="post-term-one">even</span> number of characters, or until we have <span class="post-term-one">one</span> unswapped character left if we have an <span class="post-term-one">odd</span> number of characters.

  - To perform this swapping we'll need to loop over <span class="post-term-one">s</span> while there are still characters that can be swapped.

  - Let's visualize this process to help us see how the swapping will occur and to better understand what we need to keep track of.

    - <span class="post-term-one">1<sup>st</sup> Iteration</span>:

      $$\color{#ebeb33}{s} = [\overset{\color{#33eb61}0}{\color{#33eb61}h}, \overset{1}{e}, \overset{2}{l}, \overset{3}{l}, \overset{\color{#33ebeb}4}{\color{#33ebeb}o}]$$

      - Current Leftmost Character: <span class="post-term-two">h</span>
      - Current Rightmost Character: <span class="post-term-three">o</span>

      - Now, we can swap the characters by assigning <span class="post-term-two">s[0]</span> to be <span class="post-term-three">s[4]</span>, but if we want to assign <span class="post-term-three">s[4]</span> to be <span class="post-term-two">s[0]</span>, then we must first store <span class="post-term-two">s[0]</span> in a <span class="post-term-one">temp</span> variable.

      - Storing <span class="post-term-two">s[0]</span> in a <span class="post-term-one">temp</span> variable will allow us to still have the original character that was stored in <span class="post-term-two">s[0]</span>.

      - Here's the steps for the swapping process:

      $$\color{#ebeb33}{temp} = \color{#33eb61}{s[0]}$$

      $$\color{#33eb61}{s[0]} = \color{#33ebeb}{s[4]}$$

      $$\color{#33ebeb}{s[4]} = \color{#ebeb33}{temp}$$

      - Here's <span class="post-term-one">s</span> after the 1<sup>st</sup> swap:

      $$\color{#ebeb33}{s} = [\overset{0}{o}, \overset{1}{e}, \overset{2}{l}, \overset{3}{l}, \overset{4}{h}]$$

    - <span class="post-term-one">2<sup>nd</sup> Iteration</span>:

      $$\color{#ebeb33}{s} = [\overset{0}{o}, \overset{\color{#33eb61}1}{\color{#33eb61}e}, \overset{2}{l}, \overset{\color{#33ebeb}3}{\color{#33ebeb}l}, \overset{4}{h}]$$

      - Current Leftmost Character: <span class="post-term-two">e</span>
      - Current Rightmost Character: <span class="post-term-three">l</span>

      - Now, we can swap the characters by assigning <span class="post-term-two">s[1]</span> to be <span class="post-term-three">s[3]</span> and by assinging <span class="post-term-three">s[3]</span> to be <span class="post-term-two">s[1]</span> using the swapping process from before.

      - Here's the steps for the swapping process:

      $$\color{#ebeb33}{temp} = \color{#33eb61}{s[1]}$$

      $$\color{#33eb61}{s[1]} = \color{#33ebeb}{s[3]}$$

      $$\color{#33ebeb}{s[3]} = \color{#ebeb33}{temp}$$

      - Here's <span class="post-term-one">s</span> after the 2<sup>nd</sup> swap:

      $$\color{#ebeb33}{s} = [\overset{0}{o}, \overset{1}{l}, \overset{2}{l}, \overset{3}{e}, \overset{4}{h}]$$

      - There are no unswapped characters left to swap with our only remaining unswapped character, <span class="post-term-four">s[2]</span>, so the reversal is complete.

  - To perform these swaps we had to keep track of the index of our <span class="post-term-one">current leftmost character</span> which we'll denote with <span class="post-term-two">i</span> and the index of our <span class="post-term-one">current rightmost character</span> which we'll denote with <span class="post-term-three">j</span>.

  - Keeping track of the <span class="post-term-one">current leftmost</span> index required us to start with <span class="post-term-two">i = 0</span> and to increment <span class="post-term-two">i</span> on each subsequent iteration.

  - Keeping track of the <span class="post-term-one">current rightmost</span> index required us to start with <span class="post-term-three">j = s.length - 1</span> and to decrement <span class="post-term-three">j</span> on each subsequent iteration.

  - We continued the loop while <span class="post-term-two">i</span> < <span class="post-term-three">j</span>.

- Let's now look at Ex 2)

  - Initially, we have

  $$\color{#ebeb33}{s} = [\overset{0}{H}, \overset{1}{a}, \overset{2}{n}, \overset{3}{n}, \overset{4}{a}, \overset{5}{h}]$$

  and after reversing <span class="post-term-one">s</span> our output should be:

  $$\color{#ebeb33}{h} = [\overset{0}{h}, \overset{1}{a}, \overset{2}{n}, \overset{3}{n}, \overset{4}{a}, \overset{5}{H}]$$

  - We need to swap the characters in <span class="post-term-one">s</span> again like in Ex) 1.

  - Let's visualize this process to help us see how the swapping will occur for this example:

    - <span class="post-term-one">1<sup>st</sup> Iteration</span>:

      $$\color{#ebeb33}{s} = [\overset{\color{#33eb61}0}{\color{#33eb61}H}, \overset{1}{a}, \overset{2}{n}, \overset{3}{n}, \overset{4}{a}, \overset{\color{#33ebeb}5}{\color{#33ebeb}h}]$$

      - Current Leftmost Character: <span class="post-term-two">H</span>
      - Current Rightmost Character: <span class="post-term-three">h</span>

      - Now, we can swap the characters by assigning <span class="post-term-two">s[0]</span> to be <span class="post-term-three">s[5]</span> and by assinging <span class="post-term-three">s[5]</span> to be <span class="post-term-two">s[0]</span> using the swapping process from before.

      - Here's the steps for the swapping process:

      $$\color{#ebeb33}{temp} = \color{#33eb61}{s[0]}$$

      $$\color{#33eb61}{s[0]} = \color{#33ebeb}{s[5]}$$

      $$\color{#33ebeb}{s[5]} = \color{#ebeb33}{temp}$$

      - Here's <span class="post-term-one">s</span> after the 1<sup>st</sup> swap:

      $$\color{#ebeb33}{s} = [\overset{0}{h}, \overset{1}{a}, \overset{2}{n}, \overset{3}{n}, \overset{4}{a}, \overset{5}{H}]$$

    - <span class="post-term-one">2<sup>nd</sup> Iteration</span>:

      $$\color{#ebeb33}{s} = [\overset{0}{h}, \overset{\color{#33eb61}1}{\color{#33eb61}a}, \overset{2}{n}, \overset{3}{n},\overset{\color{#33ebeb}4}{\color{#33ebeb}a}, \overset{5}{H}]$$

      - Current Leftmost Character: <span class="post-term-two">a</span>
      - Current Rightmost Character: <span class="post-term-three">a</span>

      - Now, we can swap the characters by assigning <span class="post-term-two">s[1]</span> to be <span class="post-term-three">s[4]</span> and by assinging <span class="post-term-three">s[4]</span> to be <span class="post-term-two">s[1]</span> using the swapping process from before.

      - Here's the steps for the swapping process:

      $$\color{#ebeb33}{temp} = \color{#33eb61}{s[1]}$$

      $$\color{#33eb61}{s[1]} = \color{#33ebeb}{s[4]}$$

      $$\color{#33ebeb}{s[4]} = \color{#ebeb33}{temp}$$

      - Here's <span class="post-term-one">s</span> after the 2<sup>nd</sup> swap:

      $$\color{#ebeb33}{s} = [\overset{0}{h}, \overset{1}{a}, \overset{2}{n}, \overset{3}{n}, \overset{4}{a}, \overset{5}{H}]$$

    - Note if you wanted to you could include a check to see if the characters are the same before swapping since the result after swapping will be the same.

    - <span class="post-term-one">3<sup>rd</sup> Iteration</span>:

      $$\color{#ebeb33}{s} = [\overset{0}{h}, \overset{1}{a},\overset{\color{#33eb61}2}{\color{#33eb61}n}, \overset{\color{#33ebeb}3}{\color{#33ebeb}n}, \overset{4}{a}, \overset{5}{H}]$$

      - Current Leftmost Character: <span class="post-term-two">n</span>
      - Current Rightmost Character: <span class="post-term-three">n</span>

      - Now, we can swap the characters by assigning <span class="post-term-two">s[2]</span> to be <span class="post-term-three">s[3]</span> and by assinging <span class="post-term-three">s[3]</span> to be <span class="post-term-two">s[2]</span> using the swapping process from before.

      - Here's the steps for the swapping process:

      $$\color{#ebeb33}{temp} = \color{#33eb61}{s[2]}$$

      $$\color{#33eb61}{s[2]} = \color{#33ebeb}{s[3]}$$

      $$\color{#33ebeb}{s[3]} = \color{#ebeb33}{temp}$$

      - Here's <span class="post-term-one">s</span> after the 3<sup>rd</sup> swap:

      $$\color{#ebeb33}{s} = [\overset{0}{h}, \overset{1}{a}, \overset{2}{n}, \overset{3}{n}, \overset{4}{a}, \overset{5}{H}]$$

      - Every character has been swapped, so the reversal is complete.

  - Notice again we continued the loop while <span class="post-term-two">i</span> < <span class="post-term-three">j</span>.

  - Using the model we described above we can come up with the following implementation:

## Implementation

<code-fence lang="js" heading="Reverse String">
<pre vue-slot="code">
var reverseString = function(s) {
  let temp;
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++;
    j--;
  }
};

// Case 1: s has an odd length
s = ['h', 'e', 'l', 'l', 'o'];
reverseString(s);
console.log(s);

// Case 2: s has an even length
s = ['H', 'a', 'n', 'n', 'a', 'h'];
reverseString(s);
console.log(s);
</pre>
</code-fence>
