---
title: Installing Fast Node Manager (fnm)
author: Jay the Code Monkey
date: 2021-12-08T21:27:15.000Z
topic: Node.js
description: Hey fellow Code Monkeys!!! 🐵 Want to switch between Node versions extremely fast, then check out Installing Fast Node Manager (fnm)! 🍌🐒
cardDescription: Fast Node Manager (fnm) is a fast and simple Node version manager built in Rust. For those of you who haven't read...
img: nodejs/02-installing-fnm/nodejs-installing-fnm-post.png
alt: Node.js - Installing Fast Node Manager (fnm) Post Picture
linkImg: nodejs/02-installing-fnm/nodejs-installing-fnm-post-link.png
linkImgAlt: Node.js - Installing Fast Node Manager (fnm) Image
canonicalUrl: https://codemonkeys.tech/installing-fnm/
sidebar: auto
permalink: /installing-fnm/
redirectFrom: /posts/2021/12/08/installing-fnm/
---

::: slot header

# Installing Fast Node Manager (fnm)

:::

## Why use fnm?

[Fast Node Manager (fnm)](https://github.com/Schniz/fnm) is a fast and simple Node version manager built in [Rust](https://www.rust-lang.org/).

For those of you who haven't read the post [Installing Node Version Manager (nvm)](/installing-nvm/), a Node version manager allows you to <span class="post-term-one">easily install and switch</span> between numerous versions of [Node.js](https://nodejs.org/en/). This is useful when a project you’re working on requires a different version of [Node.js](https://nodejs.org/en/) than what you currently have installed.

Here are some features of [fnm](https://github.com/Schniz/fnm):

- Cross-platform, i.e., supports Linux, macOS, and Windows
- Single file, easy installation, and instant startup
- Significantly faster than [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm)
- Works with <code class="inline-code-block">.node-version</code> and <code class="inline-code-block">.nvmrc</code> files

Since [fnm](https://github.com/Schniz/fnm) is much faster than [nvm](https://github.com/nvm-sh/nvm), it's my <span class="post-term-one">preferred</span> way to manage my Node versions.

## Installation

We'll be going over how to install [fnm](https://github.com/Schniz/fnm) on Linux, macOS, and Windows. If you run into any issues with installation then check out the [fnm](https://github.com/Schniz/fnm) repository for any updates.

::: tip Other Installation Methods
If you're interested in using [Cargo](https://doc.rust-lang.org/cargo/) or downloading a release binary, then check out the [fnm](https://github.com/Schniz/fnm) repository for installation instructions.
:::

### Linux

First make sure you have <code class="inline-code-block">curl</code> installed:

<code-group>
<code-block title="Arch">
```sh
pacman -Sy curl
```
</code-block>

<code-block title="Ubuntu">
```sh
apt-get install curl
```
</code-block>
</code-group>

Next you can install [fnm](https://github.com/Schniz/fnm) using either one of the following commands for <code class="inline-code-block">bash</code>, <code class="inline-code-block">zsh</code>, and <code class="inline-code-block">fish</code> shells.

Here we're setting the custom directory <code class="inline-code-block">$HOME/.local/bin</code> as the location to install [fnm](https://github.com/Schniz/fnm) using <code class="inline-code-block">--install-dir</code>.

If you want to install [fnm](https://github.com/Schniz/fnm) in a different location, then change <code class="inline-code-block">$HOME/.local/bin</code> to your preferred directory.

You can also remove <code class="inline-code-block">--install-dir</code> when installing to use the default directory <code class="inline-code-block">$HOME/.fnm</code>.

<code-group>
<code-block title="Custom Directory">
```sh
curl -fsSL https://fnm.vercel.app/install | bash -s -- --install-dir $HOME/.local/bin
```
</code-block>

<code-block title="Default Directory">
```sh
curl -fsSL https://fnm.vercel.app/install | bash
```
</code-block>
</code-group>

Run the following command if you <span class="post-term-one">don't</span> have <code class="inline-code-block">.local/bin</code> in your path and you're using the custom directory <code class="inline-code-block">$HOME/.local/bin</code>.

If you're using a different custom directory and you <span class="post-term-one">don't</span> have it in your path, then replace <code class="inline-code-block">$HOME/.local/bin</code> with you're preferred directory.

<code-group>
<code-block title="Setting PATH">
```sh
export PATH=/home/$USER/.local/bin/fnm:$PATH
```
</code-block>
</code-group>

Run the following command to upgrade [fnm](https://github.com/Schniz/fnm).

If you're using a different custom directory, then replace <code class="inline-code-block">$HOME/.local/bin</code> with you're preferred directory.

<code-group>
<code-block title="Custom Directory">
```sh
curl -fsSL https://fnm.vercel.app/install | bash -s -- --install-dir $HOME/.local/bin --skip-shell
```
</code-block>

<code-block title="Default Directory">
```sh
curl -fsSL https://fnm.vercel.app/install | bash -s -- --install-dir "./.fnm" --skip-shell
```
</code-block>
</code-group>

### macOS

The <span class="post-term-one">preferred</span> way to install on macOS is to use [Homebrew](https://brew.sh/):

<code-group>
<code-block title="Installing fnm">
```sh
brew install fnm
```
</code-block>
</code-group>

Here's how to upgrade using [Homebrew](https://brew.sh/):

<code-group>
<code-block title="Upgrading fnm">
```sh
brew upgrade fnm
```
</code-block>
</code-group>

### Windows

You can manually install on Windows using either [Scoop](https://scoop.sh/) or [Chocolatey](https://chocolatey.org/):

<code-group>
<code-block title="Scoop">
```sh
scoop install fnm
```
</code-block>

<code-block title="Chocolatey">
```sh
choco install fnm
```
</code-block>
</code-group>

## Shell Setup

Before you can use [fnm](https://github.com/Schniz/fnm), you have to first set up your shell. We'll be going over how to set up [fnm](https://github.com/Schniz/fnm) for <code class="inline-code-block">bash</code>, <code class="inline-code-block">zsh</code>, <code class="inline-code-block">fish</code>, and <code class="inline-code-block">powershell</code>.

::: tip Windows Command Prompt and Cmder
If you're interested in using Windows Command Prompt or Cmder then check out the [fnm](https://github.com/Schniz/fnm) repository for instructions.
:::

### Bash

Add the following to your <code class="inline-code-block">.bashrc</code>:

<code-group>
<code-block title="Bash">
```sh
eval "$(fnm env)"
```
</code-block>
</code-group>

### Zsh

Add the following to your <code class="inline-code-block">.zshrc</code>:

<code-group>
<code-block title="Zsh">
```sh
eval "$(fnm env)"
```
</code-block>
</code-group>

### Fish Shell

Create <code class="inline-code-block">~/.config/fish/conf.d/fnm.fish</code> and add this line:

<code-group>
<code-block title="Fish Shell">
```sh
fnm env | source
```
</code-block>
</code-group>

### PowerShell

Add this line to the end of your profile file:

<code-group>
<code-block title="PowerShell">
```sh
fnm env --use-on-cd | Out-String | Invoke-Expression
```
</code-block>
</code-group>

On Windows, the profile is located at <code class="inline-code-block">~\Documents\PowerShell\Microsoft.PowerShell_profile.ps1</code> or <code class="inline-code-block">\$PROFILE</code>

On macOS and Linux, the profile is located at <code class="inline-code-block">~/.config/powershell/Microsoft.PowerShell_profile.ps1</code>

## Usage

Here are some useful commands to get started with [fnm](https://github.com/Schniz/fnm). You can find more commands [here](https://github.com/Schniz/fnm/blob/master/docs/commands.md) or you can run <code class="inline-code-block">fnm --help</code> to see a list of subcommands and <code class="inline-code-block">fnm &lt;SUBCOMMAND&gt; --help</code> to see information for a specific subcommand.

<code-group>
<code-block title="List All Remote Versions">
```sh
fnm ls-remote
```
</code-block>
</code-group>

<code-group>
<code-block title="Install a Version">
```sh
fnm install 16.11.1
```
</code-block>
</code-group>

<code-group>
<code-block title="List All Installed Versions">
```sh
fnm ls
```
</code-block>
</code-group>

<code-group>
<code-block title="Choose a Version to Use">
```sh
fnm use 16.11.1
```
</code-block>
</code-group>

<code-group>
<code-block title="Check Active Version">
```sh
fnm current
```
</code-block>
</code-group>

<code-group>
<code-block title="Alias a Version">
```sh
fnm alias 16.11.1 nickname
fnm use nickname
```
</code-block>
</code-group>

<code-group>
<code-block title="Default a Version">
```sh
fnm default 16.11.1
```
</code-block>
</code-group>

## Completions

Here's how to set up [fnm](https://github.com/Schniz/fnm) completions for <code class="inline-code-block">bash</code> and <code class="inline-code-block">zsh</code>:

### Bash

<code-group>
<code-block title="fnm Completions">
```sh
mkdir -p ~/.config/bash/completions

touch ~/.config/bash/completions/_fnm

fnm completions --shell=bash > ~/.config/bash/completions/_fnm
```
</code-block>
</code-group>

Add the following to your <code class="inline-code-block">.bashrc</code>:

<code-group>
<code-block title="Set Up .bashrc">
```sh
fpath+=~/.config/bash/completions/_fnm
compinit
```
</code-block>
</code-group>

### Zsh

<code-group>
<code-block title="fnm Completions">
```sh
mkdir -p ~/.config/zsh/completions

touch ~/.config/zsh/completions/_fnm

fnm completions --shell=zsh > ~/.config/zsh/completions/_fnm
```
</code-block>
</code-group>

Add the following to your <code class="inline-code-block">.zshrc</code>:

<code-group>
<code-block title="Set Up .zshrc">
```sh
fpath+=~/.config/zsh/completions/_fnm
compinit
```
</code-block>
</code-group>
