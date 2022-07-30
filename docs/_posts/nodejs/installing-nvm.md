---
title: Installing Node Version Manager (nvm)
author: Jay the Code Monkey
date: 2021-12-07T22:01:15.000Z
topic: Node.js
description: Hey fellow Code Monkeys!!! 🐵 Want to be able to easily install and switch between Node versions, then check out Installing Node Version Manager (nvm)! 🍌🐒
cardDescription: A Node version manager allows you to easily install and switch between numerous versions of Node.js. This is useful...
img: nodejs/01-installing-nvm/nodejs-installing-nvm-post.png
altText: Node.js Installing nvm Post Picture
sidebar: auto
permalink: installing-nvm/
redirectFrom: /posts/2021/12/07/installing-nvm/
meta:
  - property: 'og:title'
    content: 'Installing Node Version Manager (nvm)'
  - property: 'og:type'
    content: 'website'
  - property: 'og:image'
    content: 'https://codemonkeys.tech/images/nodejs/01-installing-nvm/nodejs-installing-nvm-post-link.png'
  - property: 'og:image:width'
    content: '1200'
  - property: 'og:image:height'
    content: '628'
  - property: 'og:image:alt'
    content: 'Installing Node Version Manager (nvm) Image'
  - property: 'og:url'
    content: 'https://www.codemonkeys.tech/installing-nvm/'
  - property: 'og:description'
    content: 'Hey fellow Code Monkeys!!! 🐵 Want to be able to easily install and switch between Node versions, then check out Installing Node Version Manager (nvm)! 🍌🐒'
  - property: 'og:site_name'
    content: 'Code Monkeys'
  - name: 'twitter:card'
    content: 'summary_large_image'
  - name: 'twitter:title'
    content: 'Installing Node Version Manager (nvm)'
  - name: 'twitter:description'
    content: 'Hey fellow Code Monkeys!!! 🐵 Want to be able to easily install and switch between Node versions, then check out Installing Node Version Manager (nvm)! 🍌🐒'
  - name: 'twitter:url'
    content: 'https://www.codemonkeys.tech/installing-nvm/'
  - name: 'twitter:site'
    content: '@codemonkeystech'
  - name: 'twitter:image'
    content: 'https://codemonkeys.tech/images/nodejs/01-installing-nvm/nodejs-installing-nvm-post-link.png'
  - name: 'twitter:image:alt'
    content: 'Installing Node Version Manager (nvm) Image'
  - name: 'twitter:creator'
    content: '@codemonkeystech'
---

::: slot header

# Installing Node Version Manager (nvm)

:::

## Why use a Node Version Manager?

A Node version manager allows you to <span class="post-term-one">easily install and switch</span> between numerous versions of [Node.js](https://nodejs.org/en/). This is useful when a project you’re working on requires a different version of [Node.js](https://nodejs.org/en/) than what you currently have installed.

## Installation

We'll be going over how to install [nvm](https://github.com/nvm-sh/nvm) on Linux and macOS.

::: tip Windows
Windows is not supported, but you can get it to work by setting up [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/), [GitBash](https://gitforwindows.org/), or [Cygwin](https://cygwin.com/). Other alternatives exist that are not supported or developed by [nvm](https://github.com/nvm-sh/nvm) like [nvm-windows](https://github.com/coreybutler/nvm-windows). Check out the [nvm Important Notes](https://github.com/nvm-sh/nvm#important-notes) for more alternatives and details.
:::

Before installing make sure your using a POSIX-compliant shell like <code class="inline-code-block">sh</code>, <code class="inline-code-block">dash</code>, <code class="inline-code-block">ksh</code>, <code class="inline-code-block">zsh</code>, or <code class="inline-code-block">bash</code>.

::: tip Fish Shell
If you want to use [fish](https://fishshell.com/), then check out the [nvm Important Notes](https://github.com/nvm-sh/nvm#important-notes) repository for alternatives.
:::

If you run into any issues with installation, then be sure to check out the [nvm](https://github.com/nvm-sh/nvm) repository for any updates and troubleshooting tips.

### Linux Dependencies

You can install [nvm](https://github.com/nvm-sh/nvm) using either <code class="inline-code-block">curl</code> or <code class="inline-code-block">wget</code>.

Here's how to install <code class="inline-code-block">curl</code> for Linux:

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

Here's how to install <code class="inline-code-block">wget</code> for Linux:

<code-group>
<code-block title="Arch">
```sh
pacman -Sy wget
```
</code-block>

<code-block title="Ubuntu">
```sh
apt-get install wget
```
</code-block>
</code-group>

### macOS Dependencies

macOS should already have <code class="inline-code-block">curl</code> installed, but you can use [Homebrew](https://brew.sh/) to upgrade to the latest version:

<code-group>
<code-block title="macOS">
```sh
brew install curl
```
</code-block>
</code-group>

If you want to use <code class="inline-code-block">wget</code> on macOS, then you can use [Homebrew](https://brew.sh/) to install it:

<code-group>
<code-block title="macOS">
```sh
brew install wget
```
</code-block>
</code-group>

If you're using OS X 10.9 or newer, you'll need to install [Xcode](https://developer.apple.com/xcode/whats-new/) or just the <code class="inline-code-block">Command Line Tools</code>.

Here's a good post explaining how to install [Xcode](https://developer.apple.com/xcode/whats-new/):

- <span class="external-link-wrap">[How to Download Xcode and Install it on Your Mac – and Update it for iOS Development](https://www.freecodecamp.org/news/how-to-download-and-install-xcode/)</span>

If you don't want to install [Xcode](https://developer.apple.com/xcode/whats-new/), then you can install only the <code class="inline-code-block">Command Line Tools</code> by following along with this post:

- <span class="external-link-wrap">[How to Install Command Line Tools in OS X Mavericks & Yosemite (Without Xcode)](http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/)</span>

### System Version

If you have a <span class="post-term-one">system version</span> of [Node.js](https://nodejs.org/en/), i.e., you downloaded and installed [Node.js](https://nodejs.org/en/) without using [nvm](https://github.com/nvm-sh/nvm), then version mismatches may occur.

This can occur since versions installed by [nvm](https://github.com/nvm-sh/nvm) will only be available to the user account it was installed on, and any other user accounts will use the <span class="post-term-one">system version</span>.

If version mismatches are occurring or any other issues, then you can uninstall <code class="inline-code-block">node</code> and <code class="inline-code-block">npm</code> associated with the <span class="post-term-one">system version</span> and just use versions installed by [nvm](https://github.com/nvm-sh/nvm).

Be sure to uninstall any globally installed <code class="inline-code-block">npm</code> packages associated with the <span class="post-term-one">system version</span> as well.

Also, if you're using a <code class="inline-code-block">~/.npmrc</code> file it may not be compatible see [nvm Compatibility Issues](https://github.com/nvm-sh/nvm) in which case you should remove it.

When using [nvm](https://github.com/nvm-sh/nvm), you don't need to use <code class="inline-code-block">sudo npm install -g &lt;package&gt;</code> instead use <code class="inline-code-block">npm install -g &lt;package&gt;</code> when installing global packages.

Finally, if you're using a different node version manager like [fnm](https://github.com/Schniz/fnm), then you may run into issues with your installed versions from [nvm](https://github.com/nvm-sh/nvm). If this is the case, then uninstall the node version manager you will not be using to resolve the issues.

:::tip Preferred Node Manager
My preferred way to manage my node versions is with [fnm](https://github.com/Schniz/fnm). Check out [Installing Fast Node Manager (fnm)](/installing-fnm/) to learn more about it.
:::

### Install and Update Script

After installing the necessary dependencies, you can install or update [nvm](https://github.com/nvm-sh/nvm) by using <code class="inline-code-block">curl</code> or <code class="inline-code-block">wget</code> on Linux or macOS:

<code-group>
<code-block title="curl">
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```
</code-block>

<code-block title="wget">
```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```
</code-block>
</code-group>

The above commands will download and run a script to install or update [nvm](https://github.com/nvm-sh/nvm).

The script clones the [nvm](https://github.com/nvm-sh/nvm) repository to <code class="inline-code-block">~/.nvm</code>.

:::tip Additional Notes
If you're interested, check out the [nvm Additional Notes](https://github.com/nvm-sh/nvm#additional-notes) for information on more parameters and how to customize the install source, directory, profile, and version for the install script.
:::

After running the command above, you'll be prompted to close and reopen your terminal to start using [nvm](https://github.com/nvm-sh/nvm), or you can run the following commands to start using it in the current shell session:

<code-group>
<code-block title="nvm Installation Commands">
```sh
export NVM_DIR="$HOME/.config/nvm" && 
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
</code-block>
</code-group>

The third line provides autocompletion for [nvm](https://github.com/nvm-sh/nvm). Here's some examples of the [autocompletion usage](https://github.com/nvm-sh/nvm#usage-1).

### Verify Installation

To verify the installation you can run the following command:

<code-group>
<code-block title="Verify Installation">
```sh
command -v nvm
```
</code-block>
</code-group>

If the installation was successful, then the command should output <code class="inline-code-block">nvm</code>.

If you get no output after running the above command, then see the troubleshooting sections below.

### Troubleshooting

Try closing the current terminal and opening a new terminal. Then try verifying the installation again.

Here are some examples of commands you can run depending on your shell:

<code-group>
<code-block title="bash">
```sh
source ~/.bashrc
```
</code-block>
</code-group>

<code-group>
<code-block title="zsh">
```sh
source ~/.zshrc
```
</code-block>
</code-group>

<code-group>
<code-block title="ksh">
```sh
. ~/.profile
```
</code-block>
</code-group>

After running the command for your shell, try verifying the installation again.

If you're still experiencing issues verifying your installtion for Linux, then check out [Troubleshooting on Linux](https://github.com/nvm-sh/nvm#troubleshooting-on-linux).

For macOS check out [Troubleshooting on macOS](https://github.com/nvm-sh/nvm#troubleshooting-on-macos) and [macOS Troubleshooting](https://github.com/nvm-sh/nvm#macos-troubleshooting) which contain more specific information related to shell issues and to issues with Macs using the M1 chip.

For more general issues check out the [Problems](https://github.com/nvm-sh/nvm#problems) section.

:::tip Other Installation Methods
Instead of using the script above, you can also perform a [git install](https://github.com/nvm-sh/nvm#git-install) or a [manual install](https://github.com/nvm-sh/nvm#manual-install) as well as a [manaul upgrade](https://github.com/nvm-sh/nvm#manual-upgrade). The minimum required [git](https://git-scm.com/) version for the installation methods is v1.7.10.
:::

## Usage

Here are some useful commands to get started with [nvm](https://github.com/nvm-sh/nvm). You can run <code class="inline-code-block">nvm --help</code> to see a list of commands, their flags, and descriptions.

### Check nvm Version

The following command will display the version of [nvm](https://github.com/nvm-sh/nvm):

<code-group>
<code-block title="Check nvm Version">
```sh
nvm --version
```
</code-block>
</code-group>

### List Remote Versions

The following commands will list the remote versions of [Node.js](https://nodejs.org/en/).

List the all remote versions by using <code class="inline-code-block">ls-remote</code>:

<code-group>
<code-block title="List All Remote Versions">
```sh
nvm ls-remote
```
</code-block>
</code-group>

[Node.js](https://nodejs.org/en/) has a release [schedule](https://github.com/nodejs/Release#release-schedule) for long-term support (LTS).

List the LTS remote versions by using <code class="inline-code-block">--lts</code>:

<code-group>
<code-block title="List All Remote LTS Versions">
```sh
nvm ls-remote --lts
```
</code-block>
</code-group>

List all of the LTS remote versions for a specific line by using, e.g., <code class="inline-code-block">--lts=boron</code>:

<code-group>
<code-block title="List All Remote LTS Boron Versions">
```sh
nvm ls-remote --lts=boron
```
</code-block>
</code-group>

List all of the LTS remote versions for a given version number by providing, e.g., 16 to <code class="inline-code-block">ls-remote</code>:

<code-group>
<code-block title="List All Remote Versions Matching 16">
```sh
nvm ls-remote 16
```
</code-block>
</code-group>

### Install Versions

The following commands are examples of how to install different versions of [Node.js](https://nodejs.org/en/).

If you try to install a version and the installation fails, then run <code class="inline-code-block">nvm cache clear</code> to delete the cached versions.

Install the latest version by using the special default alias <code class="inline-code-block">node</code>:

<code-group>
<code-block title="Install Latest Version">
```sh
nvm install node
```
</code-block>
</code-group>

Install the latest LTS version by using <code class="inline-code-block">--lts</code>:

<code-group>
<code-block title="Install Latest LTS Version">
```sh
nvm install --lts
```
</code-block>
</code-group>

Install the latest LTS version for a specific line by using, e.g., <code class="inline-code-block">--lts=boron</code>:

<code-group>
<code-block title="Install Latest LTS Boron Version">
```sh
nvm install --lts=boron
```
</code-block>
</code-group>

Install a specific version by providing a version number:

<code-group>
<code-block title="Install a Version">
```sh
nvm install 16.11.1
```
</code-block>
</code-group>

### List Installed Versions

The following command will list all of the installed versions of [Node.js](https://nodejs.org/en/):

<code-group>
<code-block title="List All Installed Versions">
```sh
nvm ls
```
</code-block>
</code-group>

### Use a Version

The following commands will set which version of [Node.js](https://nodejs.org/en/) to use.

Use the latest version by using the special default alias <code class="inline-code-block">node</code>:

<code-group>
<code-block title="Use Latest Version">
```sh
nvm use node
```
</code-block>
</code-group>

Use the latest LTS version by using <code class="inline-code-block">--lts</code>:

<code-group>
<code-block title="Use Latest LTS Version">
```sh
nvm use --lts
```
</code-block>
</code-group>

Use the latest LTS version for a specific line by using, e.g., <code class="inline-code-block">--lts=boron</code>:

<code-group>
<code-block title="Use Latest LTS Boron Version">
```sh
nvm use --lts=boron
```
</code-block>
</code-group>

Use a specific version by providing a version number:

<code-group>
<code-block title="Use a Version">
```sh
nvm use 16.11.1
```
</code-block>
</code-group>

If you have a <span class="post-term-one">system version</span> installed, then you can use the special default alias <code class="inline-code-block">system</code> to use it:

<code-group>
<code-block title="Use System Version">
```sh
nvm use system
```
</code-block>
</code-group>

### Check Active Version

Check the currently active [Node.js](https://nodejs.org/en/) version by using <code class="inline-code-block">current</code>:

<code-group>
<code-block title="Check Active Version">
```sh
nvm current
```
</code-block>
</code-group>

### Set Aliases

Set an alias for a specific [Node.js](https://nodejs.org/en/) version by provding a name and a version.

Here, version 16.11.1 will get an alias of nickname:

<code-group>
<code-block title="Alias a Version">
```sh
nvm alias nickname 16.11.1
```
</code-block>
</code-group>

The <span class="post-term-one">default version</span> is the active version when opening new shells. The first installed version will get set as the <span class="post-term-one">default version</span>. To change the <span class="post-term-one">default version</span> run the command below.

Here, we're setting the <span class="post-term-one">default version</span> to be 17.1.0:

<code-group>
<code-block title="Alias the Default Version">
```sh
nvm alias default 17.1.0
```
</code-block>
</code-group>

### Get Path to Version

The following commands will get the path of where a [Node.js](https://nodejs.org/en/) version was installed.

Get the path of where a version was installed by specifying a version number:

<code-group>
<code-block title="Path to Version">
```sh
nvm which 16.11.1
```
</code-block>
</code-group>

Get the path to where a version is installed by specifying an alias:

<code-group>
<code-block title="Path to Version Using an Alias">
```sh
nvm which nickname
```
</code-block>
</code-group>

### Uninstall Versions

The following commands are examples of how to uninstall different versions of [Node.js](https://nodejs.org/en/).

Uninstall the latest version by using the special default alias <code class="inline-code-block">node</code>:

<code-group>
<code-block title="Uninstall Latest Version">
```sh
nvm uninstall node
```
</code-block>
</code-group>

Uninstall the latest LTS version by using <code class="inline-code-block">--lts</code>:

<code-group>
<code-block title="Uninstall Latest LTS Version">
```sh
nvm uninstall --lts
```
</code-block>
</code-group>

Uninstall the latest LTS version for a specific line by using, e.g., <code class="inline-code-block">--lts=boron</code>:

<code-group>
<code-block title="Uninstall Latest LTS Boron Version">
```sh
nvm uninstall --lts=boron
```
</code-block>
</code-group>

Uninstall a specific version by providing a version number:

<code-group>
<code-block title="Uninstall a Version">
```sh
nvm uninstall 16.11.1
```
</code-block>
</code-group>

## Uninstall nvm

To uninstall [nvm](https://github.com/nvm-sh/nvm) run the following:

<code-group>
<code-block title="Uninstall nvm">
```sh
rm -rf "$NVM_DIR"
```
</code-block>
</code-group>

Then remove these lines from your <code class="inline-code-block">~/.bashrc</code>, <code class="inline-code-block">~/.zshrc</code>, <code class="inline-code-block">~/.profile</code>, etc.

<code-group>
<code-block title="Remove these Lines">
```sh
export NVM_DIR="$HOME/.config/nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
</code-block>
</code-group>
