---
title: VuePress Tutorial 3 - Set Up and Installation
author: Jay the Code Monkey
date: 2022-01-16T05:40:00.000Z
topic: VuePress
description: First we'll be going over how to create a repository on GitHub. If you plan on using these tutorials as guides and want to...
img: vuepress-tutorials/tutorial-3/post.png
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
sidebar: auto
meta:
  - property: 'og:title'
    content: 'VuePress Tutorial 3 - Set Up and Installation'
  - property: 'og:type'
    content: 'website'
  - property: 'og:image'
    content: 'https://codemonkeys.tech/images/vuepress-tutorials/tutorial-3/link-post.png'
  - property: 'og:image:width'
    content: '1200'
  - property: 'og:image:height'
    content: '628'
  - property: 'og:image:alt'
    content: 'VuePress Tutorial 3 - Set Up and Installation Image'
  - property: 'og:url'
    content: 'https://www.codemonkeys.tech/posts/2022/01/16/vuepress-tutorial-3/'
  - property: 'og:description'
    content: 'Hey fellow Code Monkeys!!! 🐵 Ready to set up and install VuePress, then check out VuePress Tutorial 3 - Set Up and Installation! 🍌🐒'
  - property: 'og:site_name'
    content: 'Code Monkeys'
  - name: 'twitter:card'
    content: 'summary_large_image'
  - name: 'twitter:title'
    content: 'VuePress Tutorial 3 - Set Up and Installation'
  - name: 'twitter:description'
    content: 'Hey fellow Code Monkeys!!! 🐵 Ready to set up and install VuePress, then check out VuePress Tutorial 3 - Set Up and Installation! 🍌🐒'
  - name: 'twitter:url'
    content: 'https://www.codemonkeys.tech/posts/2022/01/16/vuepress-tutorial-3/'
  - name: 'twitter:site'
    content: '@codemonkeystech'
  - name: 'twitter:image'
    content: 'https://codemonkeys.tech/images/vuepress-tutorials/tutorial-3/link-post.png'
  - name: 'twitter:image:alt'
    content: 'VuePress Tutorial 3 - Set Up and Installation Image'
  - name: 'twitter:creator'
    content: '@codemonkeystech'
---

::: slot header

# VuePress Tutorial 3 - Installation and Set Up

:::

## Setting Up and Using GitHub

First we'll be going over how to create a repository on [GitHub](https://github.com/). If you plan on using these tutorials as guides and want to start your own project from scratch, then you should create your own repository.

Each tutorial in this series involving code will also have a branch in the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials) repository. If you want the code for a specific tutorial, then you can download a specific branch or clone the repository and switch to one of the remote-tracking branches. We'll go over how to download and clone the code in more detail in the sections below.

You can also download, clone, or fork the current version of the [code-monkeys-blog](https://github.com/codemonkeysio/code-monkeys-blog).

If you don't have <code class="inline-code-block">git</code> installed, then check out the [Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) documentation. Also, if you don't have a GitHub account, then [Join GitHub](https://github.com/join) and [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git).

### Creating a Repository

A repository is a directory where you store the code and other files used in a project. A repository can be a local directory on your computer and can be stored and accessed online from a website like [GitHub](https://github.com/).

If you want to create your own repository for your own project, then you need to:

1. Go to your profile page, click on the <span class="post-term-bold">Repositories</span> tab, then click the <span class="post-term-bold">New</span> button or on any page in the upper right corner, click the <span class="post-term-bold">+</span> drop-down menu, then select <span class="post-term-bold">New repository</span>
2. Type a short and descriptive name in the <span class="post-term-bold">Repository name</span> field
3. Type a description in the <span class="post-term-bold">Description</span> field (optional)
4. Choose if you want the repository to be <span class="post-term-bold">Public</span> or <span class="post-term-bold">Private</span>
5. Add a <code class="inline-code-block">README.md</code> file which you can use to describe your project in more detail and to document how to install and use your project
6. Add a <code class="inline-code-block">.gitignore</code> file which is used to ignore specified files and directories when making a commit, I recommend selecting the <span class="post-term-bold">Node</span> template from the drop-down menu
7. Add your preferred <span class="post-term-bold">license</span> which is used to tell others how they can use your code
8. You can also choose a different default branch name, e.g., <span class="post-term-bold">master</span> instead of <span class="post-term-bold">main</span> by clicking on the settings link
9. Click the <span class="post-term-bold">Create repository</span> button

If you run into any issues when creating the repository or want to learn more, then check out the [Create a Repo](https://docs.github.com/en/get-started/quickstart/create-a-repo) documentation. If you need help determining which license you should use, then check out [Choose a License](https://choosealicense.com/). You can also learn more about the <code class="inline-code-block">.gitignore</code> file from the [gitignore](https://git-scm.com/docs/gitignore) documentation.

After successfully creating your repository, you can now clone it to make a local copy on your computer.

### Cloning a Repository

To clone your newly created repository, you need to:

1. Go to the main page of your repository
2. Click the <span class="post-term-bold">Code</span> button and select your preferred method to clone the repositroy, e.g., <span class="post-term-bold">SSH</span>
3. Copy your preferred remote URL
4. Replace the example URL below with your copied URL, then run one of the following commands in your preferred directory:

<code-group>
<code-block title="SSH">
```sh
git clone git@github.com:<username>/<repository-name>
```
</code-block>

<code-block title="HTTPS">
```sh
git clone https://github.com/<username>/<repository-name>
```
</code-block>
</code-group>

If you run into any issues when cloning the repository or want to learn more, then check out [Cloning a Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) and [About Remote Repositories](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories).

The next sections will show you how to download and clone the code from the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials) repository.

### Downloading Tutorials from GitHub

If you want to download the code for a specific tutorial, then you need to:

1. Go to the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials) repository
2. Select which branch you want to download, e.g., <span class="post-term-bold">tutorial-3</span>
3. Click the <span class="post-term-bold">Code</span> button and select <span class="post-term-bold">Download ZIP</span>
4. Save the ZIP file to your preferred directory
5. Unzip the file in your preferred directory

### Cloning and Using Tutorials from GitHub

If you want to clone the tutorials, then you need to run one of the following commands in your preferred directory depending on your preferred method:

<code-group>
<code-block title="SSH">
```sh
git clone git@github.com:codemonkeysio/code-monkeys-blog-tutorials.git
```
</code-block>

<code-block title="HTTPS">
```sh
git clone https://github.com/codemonkeysio/code-monkeys-blog-tutorials.git
```
</code-block>
</code-group>

If you run into any issues when cloning the repository or want to learn more, then check out [Cloning a Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) and [About Remote Repositories](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories).

After successfully cloning the repository, you can run the following command to list both the remote-tracking and local branches:

<code-group>
<code-block title="List All Branches">
```sh
git branch -a
```
</code-block>
</code-group>

Before switching to one of the remote-tracking branches, run the following command to get all of the latest changes from the remote repository without modifying your working directory:

<code-group>
<code-block title="Fetch All Branches">
```sh
git fetch
```
</code-block>
</code-group>

Now, to work on the code for a remote-tracking branch you need to make a local copy of it which you can do by running the following command:

<code-group>
<code-block title="Switch Branches">
```sh
git switch <branch-name>
```
</code-block>
</code-group>

If you get an error when running the above command and the provided branch name exists, then check your version of <code class="inline-code-block">git</code> by running <code class="inline-code-block">git --version</code>. You need to be using at least [Git 2.23](https://github.com/git/git/blob/master/Documentation/RelNotes/2.23.0.txt) to use the <code class="inline-code-block">switch</code> command.

If you have an older version of <code class="inline-code-block">git</code> or if you prefer to not use the <code class="inline-code-block">switch</code> command, you can alternatively run the following command to work on the code for a remote-tracking branch:

<code-group>
<code-block title="Using Checkout to Switch Branches">
```sh
git checkout [branch-name]
```
</code-block>
</code-group>

The <span class="post-term-one">recommended</span> way to switch branches is with the <code class="inline-code-block">switch</code> command since the <code class="inline-code-block">checkout</code> command does more than just switching branches which can lead to confusion.

If a remote-tracking branch is updated and you want to integrate those changes into your local branch, then switch to the branch you want to update and run the following command:

<code-group>
<code-block title="Pull Changes">
```sh
git pull
```
</code-block>
</code-group>

If you edit the code for a branch and attempt to pull, you may run into merge conflicts. You can check out [About Merge Conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts) to learn more about what they are and how to resolve them.

## Dependencies

Before installing [VuePress](https://vuepress.vuejs.org/), you first need to have [Node.js 10+](https://nodejs.org/en/) installed and optionally [Yarn 1](https://classic.yarnpkg.com/en/).

It's recommended to use [Yarn 1](https://classic.yarnpkg.com/en/) if either one of the following applies to you:

- You're using [webpack 3.x](https://webpack.js.org/) in which case you may notice installation issues with <code class="inline-code-block">npm</code>.
- You're going to be closely following along with these turtorials in which case I recommend using <code class="inline-code-block">v1.22.17</code> since it's the same version being used by the [Code Monkeys Blog](/). This will allow you to avoid any potential issues with packages and with the [GitHub Actions](https://github.com/features/actions) workflow which is used when deploying the site.

::: tip Using the Locally Set Version of Yarn in the Repositories
The [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials) and the [code-monkeys-blog](https://github.com/codemonkeysio/code-monkeys-blog) repositories both have a <span class="post-term-one">local version</span> of <code class="inline-code-block">yarn</code> set to <code class="inline-code-block">v1.22.17</code> in a <code class="inline-code-block">.yarn/releases</code> directory. This means if you use the code from the repositories, then you'll be able to use the <span class="post-term-one">locally set version</span> of <code class="inline-code-block">yarn</code> instead of having to install the specific <span class="post-term-one">local version</span> of <code class="inline-code-block">yarn</code> yourself.
:::

The next sections will show you how to check your current versions of <code class="inline-code-block">node</code> and <code class="inline-code-block">yarn</code>.

If you don't have <code class="inline-code-block">node</code> or <code class="inline-code-block">yarn</code> installed or you want to change the versions, then check out the provided resources explaining how to install specific versions.

### Checking Node Version

To check if you have <code class="inline-code-block">node</code> installed run the following command:

<code-group>
<code-block title="Check Node Version">
```sh
node -v
```
</code-block>
</code-group>

If you see an output of <code class="inline-code-block">v10.xx.xx</code> or greater, then you can continue on with the [VuePress](https://vuepress.vuejs.org/) installation.

::: tip Code Monkeys Blog Node Version
The [Code Monkeys Blog](/) is currently using [Node.js v16.11.1](https://nodejs.org/dist/v16.11.1/docs/api/). If you're going to be closely following along with these turtorials, then I recommend using the same version to avoid any potential issues.
:::

If you don't see the proper output or want to use the same version in these tutorials, then you need to either install or upgrade <code class="inline-code-block">node</code>.

To install a <span class="post-term-one">system version</span> of <code class="inline-code-block">node</code> you can go to [Node.js](https://nodejs.org/en/) and download a compatible version.

If you previously installed a <span class="post-term-one">system version</span> of <code class="inline-code-block">node</code> from [Node.js](https://nodejs.org/en/), then you can go back to the site and download a newer version to upgrade your current version.

If you're a developer that needs to use multiple versions of <code class="inline-code-block">node</code> when working on different projects, then I recommend using a <span class="post-term-one">node version manager</span>. Before installing a <span class="post-term-one">node version manager</span> like [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm), I recommend uninstalling your <span class="post-term-one">system version</span> of <code class="inline-code-block">node</code>, <code class="inline-code-block">npm</code>, and any globally installed <code class="inline-code-block">npm</code> packages to avoid potential issues.

Check out these posts [Installing Node Version Manager (nvm)](/posts/2021/12/07/installing-nvm/) and [Installing Fast Node Manager (fnm)](/posts/2021/12/08/installing-fnm/) to learn how to install and use them.

::: tip Preferred Node Version Manager
My <span class="post-term-one">preferred</span> way to manage my node versions is with [fnm](https://github.com/Schniz/fnm) since it's much faster than [nvm](https://github.com/nvm-sh/nvm).
:::

After installing a compatible version of <code class="inline-code-block">node</code>, you will now have <code class="inline-code-block">npm</code> the default package manager for <code class="inline-code-block">node</code>. If you prefer you can use <code class="inline-code-block">npm</code> to install [VuePress](https://vuepress.vuejs.org/). However, if you're going to be closely following along with these tutorials, then I recommend using <code class="inline-code-block">yarn</code>.

### Checking Yarn Version

To check if you have <code class="inline-code-block">yarn</code> installed run the following command:

<code-group>
<code-block title="Check Yarn Version">
```sh
yarn -v
```
</code-block>
</code-group>

If you don't see your preferred version of <code class="inline-code-block">yarn</code>, then it's recommended to install or upgrade a <span class="post-term-one">global version</span> of [Yarn 1](https://classic.yarnpkg.com/en/) which can then be used to set a <span class="post-term-one">local version</span> of <code class="inline-code-block">yarn</code> for the project.

To learn more about how to install a <span class="post-term-one">global version</span> of [Yarn 1](https://classic.yarnpkg.com/en/), how to use the <span class="post-term-one">global version</span> to set a <span class="post-term-one">local version</span> of <code class="inline-code-block">yarn</code> for a project, and other commonly used commands check out the [Installing Yarn 1](/posts/2021/12/28/installing-yarn-1/) post.

If you created your own repository and are using a <span class="post-term-one">locally set version</span> of <code class="inline-code-block">yarn</code>, then be sure to update your <code class="inline-code-block">.gitignore</code> file and add a <code class="inline-code-block">.gitattributes</code> file as described in the [Installing Yarn 1](/posts/2021/12/28/installing-yarn-1/) post.

::: tip Recommended Version and Repositories Reminder
Remember the recommended version of <code class="inline-code-block">yarn</code> to use with your project if you're closely following along with these tutorials is <code class="inline-code-block">v1.22.17</code>. Also, if you use the code from the repositories, then there will be a provided <span class="post-term-one">local version</span> of <code class="inline-code-block">yarn</code> which you can use instead of installing the specific <span class="post-term-one">local version</span> yourself.
:::

### Installing Tutorial Packages

If you downloaded or cloned the code from the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials), first check your version of <code class="inline-code-block">yarn</code> by running the following command in the project directory:

<code-group>
<code-block title="Check Yarn Version">
```sh
yarn -v
```
</code-block>
</code-group>

If the version of <code class="inline-code-block">yarn</code> is <code class="inline-code-block">v1.22.17</code>, then you can install all of the packages being used in the project by running the following command in the root project directory:

<code-group>
<code-block title="Install All Project Packages">
```sh
yarn
```
</code-block>
</code-group>

Make sure you're not using the <code class="inline-code-block">master</code> branch when checking the version since it doesn't have the <code class="inline-code-block">.yarn</code> directory and that you have a <span class="post-term-one">global version</span> of <code class="inline-code-block">yarn</code> installed.

If you're using your own repository and want to install [VuePress](https://vuepress.vuejs.org/) yourself, then use one of the installation methods described below.

## Installing VuePress

When installing [VuePress](https://vuepress.vuejs.org/) you have the option to use the [create-vuepress-site generator](https://github.com/vuepress/create-vuepress-site) for a quick start installation or a manual installation. We'll go over both of the installation methods, but the future tutorials will be based off of the manual installation.

### Quick Start

Using the generator will help scaffold a basic site structure for you by creating common directories and files found in [VuePress](https://vuepress.vuejs.org/) sites.

1. To use the generator run the following command in your preferred directory using your preferred package manager:

<code-group>
<code-block title="Yarn">
```sh
yarn create vuepress-site [optional-directory-name]
```
</code-block>

<code-block title="npm">
```sh
npx create-vuepress-site [optional-directory-name]
```
</code-block>
</code-group>

After running the above command, you'll be asked to answer some questions. You can enter custom values for each question or press enter to accept any defaults. Here's an example of running the command in a directory named <code class="inline-code-block">quick-start-project</code>:

<code-group>
<code-block title="Quick Start Questions">
```sh
Whats the name of your project? quick-start-project
Whats the description of your project? Learning VuePress
Whats your email? youremail@example.com
Whats your name? Your Name
Whats the repo of your project? https://github.com/github-username/quick-start-project
   create docs/.gitignore
   create docs/package.json
   create docs/src/.vuepress/components/demo-component.vue
   create docs/src/.vuepress/components/Foo/Bar.vue
   create docs/src/.vuepress/components/OtherComponent.vue
   create docs/src/.vuepress/config.js
   create docs/src/.vuepress/enhanceApp.js
   create docs/src/.vuepress/styles/index.styl
   create docs/src/.vuepress/styles/palette.styl
   create docs/src/config/README.md
   create docs/src/guide/README.md
   create docs/src/guide/using-vue.md
   create docs/src/index.md
✨ File Generate Done
Done in 38.23s.
```
</code-block>
</code-group>

The scaffolded basic site is created in a <code class="inline-code-block">docs</code> directory in your current directory which in the example above was <code class="inline-code-block">quick-start-project</code>. All of the created directories and files are listed above.

If you're using <code class="inline-code-block">npm</code> you'll see a <code class="inline-code-block">.npmignore</code> file in the <code class="inline-code-block">docs</code> directory instead of a <code class="inline-code-block">.gitignore</code> file.

::: tip Using an Optional Directory Name
If you passed an optional directory name, then the scaffolded basic site is created in the given directory in a <code class="inline-code-block">docs</code> directory.
:::

The answers given to the questions can be found in the <code class="inline-code-block">docs</code> directory in the <code class="inline-code-block">package.json</code> file which contains your site's metadata.

Here's the contents of the <code class="inline-code-block">package.json</code> file from the example above:

<code-group>
<code-block title="package.json">
```json
{
  "name": "quick-start-project",
  "version": "0.0.1",
  "description": "Learning VuePress",
  "main": "index.js",
  "authors": {
    "name": "Your Name",
    "email": "youremail@example.com"
  },
  "repository": "https://github.com/github-username/quick-start-project.git",
  "scripts": {
    "dev": "vuepress dev src",
    "build": "vuepress build src"
  },
  "license": "MIT",
  "devDependencies": {
    "vuepress": "^1.5.3"
  }
}
```
</code-block>
</code-group>

We'll be covering the contents of the <code class="inline-code-block">package.json</code> file in the next tutorial. If you're interested in learning more now, then check out the [package.json guide](https://nodejs.dev/learn/the-package-json-guide).

2. To see your newly created site, navigate to the <code class="inline-code-block">docs</code> directory:

<code-group>
<code-block title="Navigate to docs Directory">
```sh
cd docs
```
</code-block>
</code-group>

3. Install your site's packages using your preferred package manager:

<code-group>
<code-block title="Yarn">
```sh
yarn
```
</code-block>

<code-block title="npm">
```sh
npm install
```
</code-block>
</code-group>

::: tip Installing the Same VuePress Version
The above command will install the latest version. If you want to install the same version being used in the tutorials and blog, then run <code class="inline-code-block">yarn upgrade vuepress@1.8.2</code>.
:::

4. Start the hot reloading local development server:

<code-group>
<code-block title="Yarn">
```sh
yarn dev
```
</code-block>

<code-block title="npm">
```sh
npm run dev
```
</code-block>
</code-group>

Your site should now be running at [http://localhost:8080/](http://localhost:8080/).

### Manual Installation

The manual installation method allows you to start building your site from scratch unlike the quick start method which scaffolds a basic site structure for you.

As mentioned above, the following tutorials will be based off of the manual installation method.

::: tip Using an Existing Project
If you already have an existing project and you would like to keep the documentation inside of it, then start from the third command.
:::

1. Navigate to your preferred directory which should be where you cloned your site's repository:

<code-group>
<code-block title="Navigate to Preferred Directory">
```sh
cd <preferred-directory>
```
</code-block>
</code-group>

2. Initialize your project with your preferred package manager:

<code-group>
<code-block title="Yarn">
```sh
yarn init
```
</code-block>

<code-block title="npm">
```sh
npm init
```
</code-block>
</code-group>

After running the above command, you'll be asked to answer several questions. You can enter custom values for each question or press enter to accept any defaults. Here's an example of running the command in a directory named <code class="inline-code-block">project-directory</code>:

<code-group>
<code-block title="Project Questions">
```sh
question name (project-directory):
question version (1.0.0):
question description: Learning VuePress
question entry point (index.js):
question repository url: https://github.com/github-username/project-directory.git
question author: Your Name
question license (MIT):
question private:
success Saved package.json
Done in 40.63s.
```
</code-block>
</code-group>

After answering all of the questions, a <code class="inline-code-block">package.json</code> file containing the answers is created. The <code class="inline-code-block">package.json</code> file is used to describe metadata about your site.

Here's the contents of the <code class="inline-code-block">package.json</code> file from the example above:

<code-group>
<code-block title="package.json">
```json
{
  "name": "project-directory",
  "version": "1.0.0",
  "description": "Learning VuePress",
  "main": "index.js",
  "repository": "https://github.com/github-username/project-directory.git",
  "author": "Your Name",
  "license": "MIT"
}
```
</code-block>
</code-group>

We'll be covering the contents of the <code class="inline-code-block">package.json</code> file in the next tutorial. If you're interested in learning more now, then check out the [package.json guide](https://nodejs.dev/learn/the-package-json-guide).

3. Install [VuePress](https://vuepress.vuejs.org/):

<code-group>
<code-block title="Yarn">
```sh
yarn add -D vuepress
```
</code-block>

<code-block title="npm">
```sh
npm install -D vuepress
```
</code-block>
</code-group>

::: tip Installing the Same VuePress Version
The above command will install the latest version. If you want to install the same version being used in the tutorials and blog, then run <code class="inline-code-block">yarn upgrade vuepress@1.8.2</code>.
:::

4. Create a <code class="inline-code-block">docs</code> directory and your first document:

<code-group>
<code-block title="Create Your First Document">
```sh
mkdir docs && echo '# Hello VuePress' > docs/README.md
```
</code-block>
</code-group>

5. Add the following <code class="inline-code-block">scripts</code> object to your <code class="inline-code-block">package.json</code> file:

<code-group>
<code-block title="Scripts Object">
```json
"scripts": {
  "docs:dev": "vuepress dev docs",
  "docs:build": "vuepress build docs"
}
```
</code-block>
</code-group>

Here's the contents of the <code class="inline-code-block">package.json</code> file from the example above after installing [VuePress](https://vuepress.vuejs.org/) and adding the <code class="inline-code-block">scripts</code> object:

<code-group>
<code-block title="package.json">
```json
{
  "name": "project-directory",
  "version": "1.0.0",
  "description": "Learning VuePress",
  "main": "index.js",
  "repository": "https://github.com/github-username/project-directory.git",
  "author": "Your Name",
  "license": "MIT",
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  "devDependencies": {
    "vuepress": "^1.9.5"
  }
}
```
</code-block>
</code-group>

6. Start the hot reloading local development server:

<code-group>
<code-block title="Yarn">
```sh
yarn docs:dev
```
</code-block>

<code-block title="npm">
```sh
npm run docs:dev
```
</code-block>
</code-group>

Your site should now be running at [http://localhost:8080/](http://localhost:8080/).

## Next Steps

In the next tutorial we'll be summarizing our current directory structure as well as going over the recommended [directory structure](https://vuepress.vuejs.org/guide/directory-structure.html) for a [VuePress](https://vuepress.vuejs.org/) site.
