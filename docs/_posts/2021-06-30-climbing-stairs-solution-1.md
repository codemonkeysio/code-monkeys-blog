---
title: Climbing Stairs Solution 1
date: 2021-06-30
topic: LeetCode
topicDescription: Solutions for LeetCode Problems Enjoy!!! 🍌 🐒
description: The First Solution & Notes for the LeetCode problem Climbing Staris.
img: LeetCodeLogo.png
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
sidebar: auto
---

# Climbing Stairs Solution 1

## 🚧 This post is under construction! 🚧

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jUP9BAs2GbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Links

<p><a href="https://leetcode.com/problems/climbing-stairs/">Climbing Stairs Problem</a> 💡</p>
<p><a href="https://github.com/codemonkeysio/LeetCode">Get the code & notes on GitHub</a> 💻</p>
<p><a href="https://discord.gg/mh9rQmwJ8H">Ask Questions & Share Solutions in Discord</a> 🤖</p>

## Problem Description

You are climbing a staircase. It takes <span class="post-term-one">n</span> steps to reach the top.

Each time you can either climb <span class="post-term-one">1</span> or <span class="post-term-one">2</span> steps. In how many distinct ways can you climb to the top?

## Examples

Ex 1) Input: <span class="post-term-one">n</span> = 2 $\implies$ Output: <span class="post-term-one">2</span>

Explanation: There are <span class="post-term-one">two</span> ways to climb to the top.<br>1. 1 step + 1 step<br>2. 2 steps

Ex 1) Input: <span class="post-term-one">n</span> = 3 $\implies$ Output: <span class="post-term-one">3</span>

Explanation: There are <span class="post-term-one">three</span> ways to climb to the top.<br>1. 1 step + 1 step + 1 step<br>2. 1 step + 2 steps<br>3. 2 steps + 1 step

## Constraints

- $1 \leq \color{#ebeb33}{n} \leq 45$

## Implementation

<code-group>
<code-block title="Climbing Stairs Solution 1">

```js
var climbStairs = function(n) {
  return wayToClimb(0, n);
};

var wayToClimb = function(stepsTaken, n) {
  if (stepsTaken > n) {
    return 0;
  }

  if (stepsTaken === n) {
    return 1;
  }

  return wayToClimb(stepsTaken + 1, n) + wayToClimb(stepsTaken + 2, n);
};

let n = 4;
console.log(climbStairs(n));
```

</code-block>
</code-group>
