---
title: Installing Yarn 1
author: Jay the Code Monkey
date: 2021-12-28T22:56:00.000Z
topic: Node.js
description: Hey fellow Code Monkeys!!! 🐵 Want to learn how to install and use Yarn 1, then check out this post! 🍌🐒
cardDescription: Before discussing Yarn in more detail, let's first define what a package manager is and what it handles for us. A pacakage...
img: nodejs/03-installing-yarn-1/post.png
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
sidebar: auto
meta:
  - property: 'og:title'
    content: 'Installing Yarn 1'
  - property: 'og:type'
    content: 'website'
  - property: 'og:image'
    content: 'https://codemonkeys.tech/images/nodejs/03-installing-yarn-1/link-post.png'
  - property: 'og:image:width'
    content: '1200'
  - property: 'og:image:height'
    content: '628'
  - property: 'og:image:alt'
    content: 'Installing Yarn 1 Image'
  - property: 'og:url'
    content: 'https://www.codemonkeys.tech/posts/2021/12/28/installing-yarn-1/'
  - property: 'og:description'
    content: 'Hey fellow Code Monkeys!!! 🐵 Want to learn how to install and use Yarn 1, then check out this post! 🍌🐒'
  - property: 'og:site_name'
    content: 'Code Monkeys'
  - name: 'twitter:card'
    content: 'summary_large_image'
  - name: 'twitter:title'
    content: 'Installing Yarn 1'
  - name: 'twitter:description'
    content: 'Hey fellow Code Monkeys!!! 🐵 Want to learn how to install and use Yarn 1, then check out this post! 🍌🐒'
  - name: 'twitter:url'
    content: 'https://www.codemonkeys.tech/posts/2021/12/28/installing-yarn-1/'
  - name: 'twitter:site'
    content: '@codemonkeystech'
  - name: 'twitter:image'
    content: 'https://codemonkeys.tech/images/nodejs/03-installing-yarn-1/link-post.png'
  - name: 'twitter:image:alt'
    content: 'Installing Yarn 1 Image'
  - name: 'twitter:creator'
    content: '@codemonkeystech'
---

::: slot header

# Installing Yarn 1

:::

## What is a Package Manager?

Before discussing [Yarn](https://yarnpkg.com/) in more detail, let's first define what a <span class="post-term-one">package manager</span> is and what it handles for us.

A <span class="post-term-one">package manager</span> is a tool that allows developers to manage a project's dependencies.

Dependencies also known as packages are programs that a project relys on to function properly.

Using dependencies makes development easier since you can use other developer's solutions for implementing features in your project.

A <span class="post-term-one">package manager</span> handles the following for your packages:

- Installing
- Updating and upgrading
- Uninstalling
- Configuring

## What is Yarn?

[Yarn](https://yarnpkg.com/) is a <span class="post-term-one">package manager</span> designed with three main goals in mind:

- Speed
- Security
- Reliability

Like other <span class="post-term-one">package managers</span>, [Yarn](https://yarnpkg.com/) allows you to use and share code with other developers which again makes development easier. The code is shared using a <code class="inline-code-block">package.json</code> file which describes the dependencies used in a project.

[Yarn](https://yarnpkg.com/) is an alternative to [npm](https://www.npmjs.com/) which is the default node package manager for [Node.js](https://nodejs.org/en/). It was originally developed to address the performance and security issues with [npm](https://www.npmjs.com/).

This post will cover the installation and some commands for [Yarn 1](https://classic.yarnpkg.com/en/).

::: tip Yarn 1 Maintenance Mode
[Yarn 1](https://classic.yarnpkg.com/en/) is officially in maintenance mode, so no further updates will be released unless they are needed to patch vulnerabilities. If you're starting a new project, it's recommended to use the latest stable version which at the time of this writing is [Yarn 3](https://yarnpkg.com/).
:::

If you're interested in learning more about the release history of [Yarn](https://yarnpkg.com/) and [npm](https://www.npmjs.com/), then check out the section below.

## Timeline of Yarn and npm Development

When [Yarn](https://yarnpkg.com/) was released in 2016 it achieved its goals of being a faster, more secure, and more reliable alternative to [npm](https://www.npmjs.com/). The improved reliability was accomplished by generating a <code class="inline-code-block">yarn.lock</code> file which handles keeping track of the exact versions of packages used in a project.

In 2017, [npm](https://www.npmjs.com/) addressed its speed and reliability issues with the release of [npm 5](https://www.npmjs.com/package/npm5). The reliability issue was addressed with the introduction of the <code class="inline-code-block">package-lock.json</code> file which provided similar functionality to the <code class="inline-code-block">yarn.lock</code> file.

In 2018, [npm](https://www.npmjs.com/) addressed its security issues with the release of [npm 6](https://www.npmjs.com/package/npm/v/6.0.0) by checking vulnerabilities before installing dependencies as well as introducing more improvements to speed and reliability.

[Yarn 2](https://yarnpkg.com/) and [npm 7](https://www.npmjs.com/package/npm/v/7.0.0) were both released in 2020 with improved performance and some new features as well.

In 2021, [Yarn 3](https://yarnpkg.com/) and [npm 8](https://www.npmjs.com/package/npm/v/7.0.0) were released which again introduced improved performance and some new features.

Today, the performance and features of [Yarn](https://yarnpkg.com/) and [npm](https://www.npmjs.com/) are very similar, so which one to use mainly depends on a developer's preference.

## Installation

There are multiple ways to install [Yarn 1](https://classic.yarnpkg.com/en/). Currently, the recommended way to install it is with [npm](https://www.npmjs.com/) the default node package manager that comes with [Node.js](https://nodejs.org/en/). When installing [Node.js](https://nodejs.org/en/) you have the option to install a <span class="post-term-one">system version</span> which you can do by downloading and installing a version directly from [Node.js](https://nodejs.org/en/), or you can install multiple node versions with a <span class="post-term-one">node version manager</span>.

::: tip Using a Node Version Manager
If you're a developer that needs to use multiple versions of <code class="inline-code-block">node</code> when working on different projects, then I recommend installing either [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm). My <span class="post-term-one">preferred</span> way to manage my node versions is with [fnm](https://github.com/Schniz/fnm). If you're interested in installing a <span class="post-term-one">node version manager</span>, then check out these posts [Installing Node Version Manager (nvm)](/posts/2021/12/07/installing-nvm/) and [Installing Fast Node Manager (fnm)](/posts/2021/12/08/installing-fnm/).
:::

After installing a <span class="post-term-one">system version</span> or a version with a <span class="post-term-one">node version manager</span>, you can run the following command to install and upgrade [Yarn 1](https://classic.yarnpkg.com/en/):

<code-group>
<code-block title="Installation Using npm">
```sh
npm install --global yarn
```
</code-block>
</code-group>

This will install [Yarn 1](https://classic.yarnpkg.com/en/) globally. We'll see how to install a specific <span class="post-term-one">local version</span> of <code class="inline-code-block">yarn</code> in the root of a project directory when looking at the usage of <code class="inline-code-block">yarn</code>.

::: tip Resolving Permissions Error
If you're using a <span class="post-term-one">system version</span>, you may get a permissions error when attempting to install with [npm](https://www.npmjs.com/). To resolve this check out the [installation](https://classic.yarnpkg.com/en/docs/install) documentation for <span class="post-term-one">platform-specific</span> methods for Linux, macOS, and Windows. Alternatively, you can uninstall your <span class="post-term-one">system version</span> and use a <span class="post-term-one">node version manager</span> instead.
:::

### Platform Installation Notes

When using a <span class="post-term-one">platform-specific</span> method a version of [Node.js](https://nodejs.org/en/) will also be installed. To avoid the [Node.js](https://nodejs.org/en/) installation some <span class="post-term-one">platform-specific</span> methods have the option of ignoring it by passing certain commands. See the [installation](https://classic.yarnpkg.com/en/docs/install) documentation for more details on ignoring the [Node.js](https://nodejs.org/en/) installation, configuration requirements, and possible issues.

If the option to ignore the installation of [Node.js](https://nodejs.org/en/) is not available for your preferred <span class="post-term-one">platform-specific</span> method, then you can uninstall your <span class="post-term-one">system version</span> and just use the <span class="post-term-one">platform-specific</span> method to install both [Yarn 1](https://classic.yarnpkg.com/en/) and [Node.js](https://nodejs.org/en/).

If you prefer to use a <span class="post-term-one">platform-specific</span> method with a <span class="post-term-one">node version manager</span>, then you should only use a method that can ignore the installation of [Node.js](https://nodejs.org/en/) since it can cause conflicts.

## Usage

Now we'll be discussing some useful and common commands to get you started with [Yarn 1](https://classic.yarnpkg.com/en/).

### Help Commands

Here's how to access the help documentation for the <code class="inline-code-block">yarn</code> command which is always useful and recommended to do for any installed tool.

Run the following command to see a list of commands, flags, and descriptions for <code class="inline-code-block">yarn</code>:

<code-group>
<code-block title="Display Help Information">
```sh
yarn --help
```
</code-block>
</code-group>

To see help information for a specific subcommand run the following:

<code-group>
<code-block title="Information for Subcommand">
```sh
yarn [subcommand] --help
```
</code-block>
</code-group>

### Check Yarn Version

To verify your installation was successful and to check your version of <code class="inline-code-block">yarn</code> run the following command:

<code-group>
<code-block title="Check Yarn Version">
```sh
yarn --version
```
</code-block>
</code-group>

### Setting a Local Version

To install and set a <span class="post-term-one">local version</span> of <code class="inline-code-block">yarn</code> for a specific project you can use the global <code class="inline-code-block">yarn</code> command we installed earlier. This ensures everyone working on a project is using the exact same version of <code class="inline-code-block">yarn</code> which is useful to avoid any undesired behavior like producing a different <code class="inline-code-block">yarn.lock</code> file.

This is accomplished by using [yarn policies](https://classic.yarnpkg.com/lang/en/docs/cli/policies/) which allows you to check in your [Yarn 1](https://classic.yarnpkg.com/en/) release within your repository. After running the command below in your project's root directory, a single-file release from the GitHub repository will be downloaded and stored in your project in a <code class="inline-code-block">.yarn/releases</code> directory. Then your <code class="inline-code-block">yarn-path</code> will be updated in a <code class="inline-code-block">.yarnrc</code> file.

Now any <code class="inline-code-block">yarn</code> command run in your project will be using the <span class="post-term-one">local version</span> that you set. Be sure to push these changes to your project's remote branch, so everyone using the project will be downloading and using the same version of [Yarn 1](https://classic.yarnpkg.com/en/) as you.

If you're using an existing project, then you don't need to set the <span class="post-term-one">local version</span> as long as the project has the desired version of [Yarn 1](https://classic.yarnpkg.com/en/) in the <code class="inline-code-block">.yarn/releases</code> directory, and the <code class="inline-code-block">yarn-path</code> is configured properly in the <code class="inline-code-block">.yarnrc</code> file.

If you don't have a project directory, then run the following:

<code-group>
<code-block title="Create Project Directory">
```sh
mkdir ~/<path-to-project-directory>
```
</code-block>
</code-group>

Next, navigate to your project:

<code-group>
<code-block title="Navigate to Project Directory">
```sh
cd ~/<path-to-project-directory>
```
</code-block>
</code-group>

Now, set the version of [Yarn 1](https://classic.yarnpkg.com/en/) for your project:

<code-group>
<code-block title="Set Local Version">
```sh
yarn policies set-version [version]
```
</code-block>
</code-group>

There are multiple ways to specify which version you want to use:

- <code class="inline-code-block">yarn policies set-version</code> downloads the latest stable release
- <code class="inline-code-block">yarn policies set-version --rc</code> downloads the latest rc release
- <code class="inline-code-block">yarn policies set-version 1.22.4</code> downloads a specific version

Running <code class="inline-code-block">yarn policies set-version [version]</code> is also the recommended way to upgrade your version of [Yarn 1](https://classic.yarnpkg.com/en/).

Now run <code class="inline-code-block">yarn --version</code> in your project directory, and it should output the <span class="post-term-one">local version</span> you just set. If you navigate out of your project directory and run <code class="inline-code-block">yarn --version</code>, then you should see the global version that you installed.

The global version of <code class="inline-code-block">yarn</code> will first check if it's in a directory with a <code class="inline-code-block">.yarnrc</code> file. If the directory has a <code class="inline-code-block">.yarnrc</code> file, then the configured <code class="inline-code-block">yarn-path</code> value will be used to switch the <code class="inline-code-block">yarn</code> version from the global version to the project specific version.

::: tip Resolving Installation Directory Issue
If you set the <span class="post-term-one">local version</span> in your project's root directory and the <code class="inline-code-block">.yarn</code> directory and <code class="inline-code-block">.yarnrc</code> file aren't generated there, then delete the files that were generated and run the <code class="inline-code-block">yarn init</code> command in your project's root directory before setting the <span class="post-term-one">local version</span>. The <code class="inline-code-block">yarn init</code> command is described in the Creating a New Project section.
:::

### Updating the .gitignore File

After setting your <span class="post-term-one">local version</span> of <code class="inline-code-block">yarn</code>, you should now have <code class="inline-code-block">.yarn</code> directory in the root of your project.

Some of the files <code class="inline-code-block">yarn</code> adds to your <code class="inline-code-block">.yarn</code> directory should be checked into version control, e.g., git and others should be ignored.

To specify which directories and files should be ignored when pushing to your repositiory you can create a <code class="inline-code-block">.gitignore</code> file.

After creating the <code class="inline-code-block">.gitignore</code> file, you can add the recommended basic configuration for <code class="inline-code-block">yarn</code>:

<code-group>
<code-block title=".gitignore File for Yarn">
```sh
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```
</code-block>
</code-group>

This will ignore the entire <code class="inline-code-block">.yarn</code> directory except for the directories specified after the <code class="inline-code-block">!</code>.

The <code class="inline-code-block">yarn.lock</code> and <code class="inline-code-block">.yarnrc</code> files should always be checked into version control.

### Adding a .gitattributes File

If you're using a <span class="post-term-one">local version</span> of <code class="inline-code-block">yarn</code>, then it's recommended to add a <code class="inline-code-block">.gitattributes</code> file to your project which will prevent <code class="inline-code-block">git</code> from showing large diffs when you add or update releases and plugins:

<code-group>
<code-block title=".gitattributes File for Yarn">
```sh
.yarn/releases/** binary
.yarn/plugins/** binary
```
</code-block>
</code-group>

This is accomplished by identifying the release and plugin directories as binary content.

### Creating a New Project

To create a new project first create and navigate to the project directory. See the commands above for creating and navigating to a project directory.

Then run the following command:

<code-group>
<code-block title="Create a New Project">
```sh
yarn init
```
</code-block>
</code-group>

After running the above command, you'll be asked to answer several questions. You can enter custom values for each question or press enter to accept the defaults. Here's an example of running the command in a directory named <code class="inline-code-block">project-directory</code>:

<code-group>
<code-block title="Project Questions">
```sh
question name (project-directory): my-new-project
question version (1.0.0): 1.2.4
question description: Learning Yarn
question entry point (index.js):
question repository url: https://github.com/github-username/my-new-project
question author: Your Name
question license (MIT):
question private:
success Saved package.json
Done in 34.11s.
```
</code-block>
</code-group>

After answering all of the questions, a <code class="inline-code-block">package.json</code> file containing the answers will be created. The <code class="inline-code-block">package.json</code> file contains metadata about your project. This metadata includes information used to identify and describe your project and the packages you install which follow [semantic versioning (semver)](https://semver.org/).

Now, let's describe each property in a little more detail:

- <code class="inline-code-block">name</code> is the name given to your project
  - Must be less than or equal to 214 characters including the <code class="inline-code-block">@scope/</code> for [scoped packages](https://docs.npmjs.com/cli/v8/using-npm/scope)
  - Cannot start with a dot or an underscore
  - Must contain only lowercase letters and URL-safe characters
  - If the project is published to [npm](https://www.npmjs.com/), it gets a URL based on the given value which is the reason for the requirements given above
  - The default value is the same name as the directory you're in when running the <code class="inline-code-block">yarn init</code> command
- <code class="inline-code-block">version</code> indicates the current version of your project
  - The versioning follows [semver](https://semver.org/) notation
  - The default value is 1.0.0
- <code class="inline-code-block">description</code> is used to describe and provide more information about your project
  - Especially useful to include if you plan on publishing your project to [npm](https://www.npmjs.com/)
  - If no value is given, it will not be set
- <code class="inline-code-block">entry point</code> is a JavaScript file that starts the execution of your project
  - This property is called <code class="inline-code-block">main</code> in the <code class="inline-code-block">package.json</code> file
  - The default value is index.js
- <code class="inline-code-block">repository url</code> describes the location of the project repository containing the code
  - This property is called repository in the <code class="inline-code-block">package.json</code> file
  - You can explicitly set the URL and a version control type in the <code class="inline-code-block">package.json</code> file by adding, e.g., <code class="inline-code-block">"repository": { "type": "git", "url": "https://github.com/github-username/my-new-project" }</code>
  - If no value is given, it will not be set
- <code class="inline-code-block">author</code> describes the creator or owner of the project
  - Used to describe one person
  - You can explicitly set the author name, email, and website in the <code class="inline-code-block">package.json</code> file by adding, e.g., <code class="inline-code-block">"author": { "name": "Your Name", "email": "youremail@example.com", "url": "https://your-website.com" }</code>
  - If no value is given, it will not be set
- <code class="inline-code-block">license</code> indicates the type of license being used by the project
  - Allows users to know how they're permitted to use the project
  - Check out [Choose a License](https://choosealicense.com/) if you need help determining how you should license your project
  - The default value is MIT
- <code class="inline-code-block">private</code> indicates whether or not the project can be published to [npm](https://www.npmjs.com/)
  - If set to true, it will prevent the project from being published
  - If no value is given, it's assumed the value is false, and it will not be explicitly set in the <code class="inline-code-block">package.json</code> file

If you're interested in learning more about the <code class="inline-code-block">package.json</code> file, then check out [The package.json guide](https://nodejs.dev/learn/the-package-json-guide) and the [Yarn 1 package.json](https://classic.yarnpkg.com/en/docs/package-json) documentation. Also, check out the [Versions of dependencies](https://classic.yarnpkg.com/en/docs/dependency-versions/) documentation for more information about how [semver](https://semver.org/) is used.

Here's the contents of the <code class="inline-code-block">package.json</code> file from the example above:

<code-group>
<code-block title="package.json">
```json
{
  "name": "my-new-project",
  "version": "1.2.4",
  "description": "Learning Yarn",
  "main": "index.js",
  "repository": "https://github.com/github-username/my-new-project",
  "author": "Your Name",
  "license": "MIT"
}
```
</code-block>
</code-group>

To update the <code class="inline-code-block">package.json</code> file you can open and edit it directly, or you can run the <code class="inline-code-block">yarn init</code> command again.

Check out the [yarn init](https://classic.yarnpkg.com/en/docs/cli/init) documentation for more information about the command.

### Adding Packages

When adding a package the <code class="inline-code-block">package.json</code> file gets updated by adding the package as a dependency to a <code class="inline-code-block">dependencies</code> object where each key is a package name and the value represents a range of allowed versions following [semver](https://semver.org/) notation.

A <code class="inline-code-block">yarn.lock</code> file will also be created if it doesn't exist or updated if it already exists. A <code class="inline-code-block">yarn.lock</code> file is used to keep track of the exact versions of packages added to a project. This allows consistent installs across machines by allowing developers to have the exact same versions of packages when installing all of a project's dependencies.

Here's how to handle the <code class="inline-code-block">yarn.lock</code> file in your project:

- The <code class="inline-code-block">yarn.lock</code> file should be in the root of your project directory
- You shouldn't directly edit the <code class="inline-code-block">yarn.lock</code> file it gets auto-generated and automatically updated
- When installing only the top-level <code class="inline-code-block">yarn.lock</code> file is used and any <code class="inline-code-block">yarn.lock</code> files that exist in the dependencies will be ignored
- The <code class="inline-code-block">yarn.lock</code> file should also be checked into version control since it's used to install the exact same versions of packages across machines

To add the <span class="post-term-one">latest version</span> of a package run the following command:

<code-group>
<code-block title="Add Latest Version">
```sh
yarn add <package-name>
```
</code-block>
</code-group>

To add a <span class="post-term-one">specific version</span> of a package run the following command:

<code-group>
<code-block title="Add Specific Version">
```sh
yarn add <package-name>@1.2.3
```
</code-block>
</code-group>

To add the <span class="post-term-one">latest version</span> of a package within a <span class="post-term-one">specified version range</span> run the following command:

<code-group>
<code-block title="Add a Package in a Specified Version Range">
```sh
yarn add <package-name>@"^1.2.3"
```
</code-block>
</code-group>

The <span class="post-term-one">latest version</span> within the given version range is determined by the range specifier and the version number.

In the example above the range specifier is the caret symbol, i.e., <code class="inline-code-block">^</code>. You can use any desired range specifier, and the added package will be the <span class="post-term-one">latest version</span> within the given version range.

You can also add a package with a <span class="post-term-one">specific tag</span> by running the following command:

<code-group>
<code-block title="Add Specific Tag">
```sh
yarn add <package-name>@tag
```
</code-block>
</code-group>

Tags are a way to mark published versions of a package with a label. Check out the [yarn tag](https://classic.yarnpkg.com/en/docs/cli/tag) documentation for more information about them.

To add a package to your development dependencies, i.e., <code class="inline-code-block">devDependencies</code> you can add either the <code class="inline-code-block">--dev</code> or <code class="inline-code-block">-D</code> flag to the end of the command.

Development dependencies are dependencies that you need for the development workflow, e.g., [Babel](https://babeljs.io/), but not while running the project.

Here's an example of adding the <span class="post-term-one">latest version</span> of a package to your <code class="inline-code-block">devDependencies</code>:

<code-group>
<code-block title="Add to Development Dependencies">
```sh
yarn add <package-name> --dev
```
</code-block>
</code-group>

See the [Types of dependencies](https://classic.yarnpkg.com/en/docs/dependency-types) documentation for more information about them.

To add a package globally to your operating system you can use the <code class="inline-code-block">global</code> subcommand before <code class="inline-code-block">add</code>:

<code-group>
<code-block title="Add Global Package">
```sh
yarn global add <package-name>
```
</code-block>
</code-group>

:::tip When to Use Global
In general you should be adding packages locally because anyone else using your project will then get the same packages. If you install a package globally it will be available globally on your operating system, but it won't be available to anyone else using your project. You should only install a package globally if it's for developer tooling that isn't used for only a specific project, e.g., [nodemon](https://nodemon.io/). See the [yarn global](https://classic.yarnpkg.com/en/docs/cli/global) documentation for more details.
:::

Check out the [yarn add](https://classic.yarnpkg.com/en/docs/cli/add) documentation for more information about adding packages.

### Listing Added Packages

To list all of your added packages in your project run the following command:

<code-group>
<code-block title="List All Added Packages">
```sh
yarn list
```
</code-block>
</code-group>

This will list all of the packages you added as well as their dependencies for the current working directory.

To list only the packages you explicitly added you can use the <code class="inline-code-block">--depth</code> flag as follows:

<code-group>
<code-block title="List All Explicity Added Packages">
```sh
yarn list --depth=0
```
</code-block>
</code-group>

The above will restrict the depth of the displayed dependencies to be the first level. Notice that the levels are zero-indexed.

To learn more about listing added packages check out the [yarn list](https://classic.yarnpkg.com/en/docs/cli/list) documentation.

### Upgrading Packages

The <code class="inline-code-block">upgrade</code> subcommand will update the packages to their <span class="post-term-one">latest version</span> based on the version ranges defined in the <code class="inline-code-block">package.json</code> file. See the [Versions of dependencies](https://classic.yarnpkg.com/en/docs/dependency-versions/) documentation to get a better understanding of how version ranges are used.

After running the <code class="inline-code-block">upgrade</code> subcommand, the <code class="inline-code-block">yarn.lock</code> file will be updated with the <span class="post-term-one">latest versions</span> specified by the version ranges. The versions in the <code class="inline-code-block">package.json</code> file will remain the same though since the upgraded packages will still be within the same version ranges.

To view the upgraded versions of your packages in a readable format you can use the <code class="inline-code-block">yarn list</code> command described in the previous section.

We'll see how to upgrade packages to versions outside of the <span class="post-term-one">specified version ranges</span> which will update both the <code class="inline-code-block">yarn.lock</code> file and the <code class="inline-code-block">package.json</code> file.

The following command upgrades all packages within their <span class="post-term-one">specified version ranges</span>:

<code-group>
<code-block title="Upgrade All Packages Within Version Ranges">
```sh
yarn upgrade
```
</code-block>
</code-group>

You can also upgrade a specific package within its <span class="post-term-one">specified version range</span>:

<code-group>
<code-block title="Upgrade Specific Package Within Version Range">
```sh
yarn upgrade [package-name]
```
</code-block>
</code-group>

To upgrade all packages to their <span class="post-term-one">latest versions</span> you can add the <code class="inline-code-block">--latest</code> flag:

<code-group>
<code-block title="Upgrade All Packages to Latest Versions">
```sh
yarn upgrade --latest
```
</code-block>
</code-group>

You can also upgrade a specific package to its <span class="post-term-one">latest version</span> using the <code class="inline-code-block">--latest</code> flag:

<code-group>
<code-block title="Upgrade Specific Package to Latest Versions">
```sh
yarn upgrade [package-name] --latest
```
</code-block>
</code-group>

When using the <code class="inline-code-block">--latest</code> flag, the version range in the <code class="inline-code-block">package.json</code> file will be ignored. This can potentially result in the packages being upgraded across major versions which can lead to potential incompatible API changes, so be sure to check the packages for any breaking changes.

Since the range versions in the <code class="inline-code-block">package.json</code> file are ignored, both the <code class="inline-code-block">yarn.lock</code> and <code class="inline-code-block">package.json</code> files can be updated.

Also, the range specifiers in the <code class="inline-code-block">package.json</code> file will remain the same if it is still compatible with the latest version. If the range specifier isn't compatible with the new version a caret range specifier, i.e., <code class="inline-code-block">^</code> will be used instead.

So, e.g., a tilde range specifier, i.e., <code class="inline-code-block">~</code> will still be used for any packages that we're using it previously.

You can also explicitly set the range specifier by passing a flag after the <code class="inline-code-block">--latest</code> flag, e.g., <code class="inline-code-block">--caret</code>.

You can also upgrade a package to a <span class="post-term-one">specific version</span> with the following command:

<code-group>
<code-block title="Upgrade a Package to a Specific Version">
```sh
yarn upgrade <package-name>@1.2.3
```
</code-block>
</code-group>

To upgrade a package to the <span class="post-term-one">latest version</span> within a <span class="post-term-one">specified version range</span> run the following:

<code-group>
<code-block title="Upgrade a Package in a Specified Version Range">
```sh
yarn upgrade <package-name>"@^1.2.3"
```
</code-block>
</code-group>

The <span class="post-term-one">latest version</span> within the given version range is again determined by the range specifier and the version number.

In the example above the range specifier is the caret symbol, i.e., <code class="inline-code-block">^</code>. You can again use any desired range specifier, and the package will be upgraded to the <span class="post-term-one">latest version</span> within the given version range.

You can also upgrade a package to a <span class="post-term-one">specific tag</span> using the following command:

<code-group>
<code-block title="Upgrade a Package Using a Tag">
```sh
yarn upgrade <package-name>@tag
```
</code-block>
</code-group>

Tags are again a way to mark published versions of a package with a label. Check out the [yarn tag](https://classic.yarnpkg.com/en/docs/cli/tag) documentation for more information about them.

You can specify a preferred range specifier when upgrading a package with a tag by passing, e.g., <code class="inline-code-block">--tilde</code> flag at the end of the command.

::: tip Downgrading Packages
Using specific versions and tags when upgrading packages also allows you to downgrade your package by specifying a version that is older than your currently installed version.
:::

To learn more about upgrading packages check out the [yarn upgrade](https://classic.yarnpkg.com/en/docs/cli/upgrade) documentation.

### Removing Packages

To remove a package run the following command:

<code-group>
<code-block title="Remove a Package">
```sh
yarn remove <package-name>
```
</code-block>
</code-group>

After running the command above, the <code class="inline-code-block">yarn.lock</code> and <code class="inline-code-block">package.json</code> files will both always be updated. This ensures all developers will still be using the exact same versions of the packages.

Also, when removing a package it will be removed from all types of dependencies, e.g., <code class="inline-code-block">dependencies</code>, <code class="inline-code-block">devDependencies</code>, etc.

See the [Types of dependencies](https://classic.yarnpkg.com/en/docs/dependency-types) documentation for more information about dependencies and the [yarn remove](https://classic.yarnpkg.com/en/docs/cli/remove) documentation for more information about the command.

### Installing All Project Packages

The following command should be run when checking out code for a new project and when another developer adds or removes a package.

Run the following command to install all of a project's packages specified in the <code class="inline-code-block">package.json</code> file:

<code-group>
<code-block title="Install All Project Packages">
```sh
yarn install
```
</code-block>
</code-group>

You can also just run the following:

<code-group>
<code-block title="Install All Project Packages Shorthand">
```sh
yarn
```
</code-block>
</code-group>

After running either one of the commands above, a <code class="inline-code-block">node_modules</code> directory will be created in the current directory which contains all of the code for the installed packages.

Here's how the <code class="inline-code-block">yarn.lock</code> file is used:

- If the <code class="inline-code-block">yarn.lock</code> file is present and if it contains all of the packages speccified in the <code class="inline-code-block">package.json</code> file, then the exact versions specified in the <code class="inline-code-block">yarn.lock</code> file will be installed.
- If there is no <code class="inline-code-block">yarn.lock</code> file or there is one that doesn't contain all of the packages in the <code class="inline-code-block">package.json</code> file, then the newest versions within the version ranges specified in the <code class="inline-code-block">package.json</code> file will be installed. This will then update the <code class="inline-code-block">yarn.lock</code> file.

To ensure the <code class="inline-code-block">yarn.lock</code> file is not updated when installing all of a project's dependencies you can run the following:

<code-group>
<code-block title="Prevent Lockfile Update on Install">
```sh
yarn --frozen-lockfile
```
</code-block>
</code-group>

For more information about installing all the packages in a project check out the [yarn install](https://classic.yarnpkg.com/en/docs/cli/install) documentation.

### Running Scripts

To run a script you need to first add a <code class="inline-code-block">scripts</code> object to your <code class="inline-code-block">package.json</code> file. Then you can add each script as a key-value pair where the key is the name of the script you want to run, and the value is a command that gets run in your shell.

<code-group>
<code-block title="Scripts Object in package.json">
```json
"scripts": {
  "test": "test-script",
  "build": "build-script"
}
```
</code-block>
</code-group>

Here, we have defined two scripts in our <code class="inline-code-block">scripts</code> object with the names of <code class="inline-code-block">test</code> and <code class="inline-code-block">build</code> and with the commands of <code class="inline-code-block">test-script</code> and <code class="inline-code-block">build-script</code>, respectively.

To run a script you can run the following command:

<code-group>
<code-block title="Run a Script">
```sh
yarn run [script-name]
```
</code-block>
</code-group>

You can also just run the following:

<code-group>
<code-block title="Run a Script Shorthand">
```sh
yarn [script-name]
```
</code-block>
</code-group>

::: tip Potential Shorthand Issue
Built-in CLI commands will have preference over your scripts if they share the same name. To avoid running a built-in CLI command you can always include the <code class="inline-code-block">run</code> subcommand when running your scripts.
:::

It's also possible to list all of the scripts available to run in your project by running the following:

<code-group>
<code-block title="List All Available Scripts">
```sh
yarn run
```
</code-block>
</code-group>

See the [yarn run](https://classic.yarnpkg.com/en/docs/cli/run) documentation to lean more about the command and the [yarn test](https://classic.yarnpkg.com/en/docs/cli/test) documentation for more information about testing.
