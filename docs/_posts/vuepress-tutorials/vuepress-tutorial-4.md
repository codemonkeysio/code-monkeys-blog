---
title: VuePress Tutorial 4 - Directory Structure
author: Jay the Code Monkey
date: 2022-01-22T16:55:00.000Z
topic: VuePress
description: Hey fellow Code Monkeys!!! 🐵 Want to learn how to structure your VuePress site, then check out VuePress Tutorial 4 - Directory Structure! 🍌🐒
cardDescription: We're going to start with an overview of the current directory structure from the previous tutorial. Then we'll describe the...
img: vuepress-tutorials/tutorial-4/vuepress-tutorial-4-directory-structure-post.png
altText: VuePress Tutorial 4 Directory Structure Post Picture
canonicalUrl: https://codemonkeys.tech/vuepress-tutorial-4/
sidebar: auto
permalink: /vuepress-tutorial-4/
redirectFrom: /posts/2022/01/22/vuepress-tutorial-4/
meta:
  - property: 'og:title'
    content: 'VuePress Tutorial 4 - Directory Structure'
  - property: 'og:type'
    content: 'website'
  - property: 'og:image'
    content: 'https://codemonkeys.tech/images/vuepress-tutorials/tutorial-4/vuepress-tutorial-4-directory-structure-post-link.png'
  - property: 'og:image:width'
    content: '1200'
  - property: 'og:image:height'
    content: '628'
  - property: 'og:image:alt'
    content: 'VuePress Tutorial 4 - Directory Structure Image'
  - property: 'og:url'
    content: 'https://codemonkeys.tech/vuepress-tutorial-4/'
  - property: 'og:description'
    content: 'Hey fellow Code Monkeys!!! 🐵 Want to learn how to structure your VuePress site, then check out VuePress Tutorial 4 - Directory Structure! 🍌🐒'
  - property: 'og:site_name'
    content: 'Code Monkeys'
  - name: 'twitter:card'
    content: 'summary_large_image'
  - name: 'twitter:title'
    content: 'VuePress Tutorial 4 - Directory Structure'
  - name: 'twitter:description'
    content: 'Hey fellow Code Monkeys!!! 🐵 Want to learn how to structure your VuePress site, then check out VuePress Tutorial 4 - Directory Structure! 🍌🐒'
  - name: 'twitter:url'
    content: 'https://codemonkeys.tech/vuepress-tutorial-4/'
  - name: 'twitter:site'
    content: '@codemonkeystech'
  - name: 'twitter:image'
    content: 'https://codemonkeys.tech/images/vuepress-tutorials/tutorial-4/vuepress-tutorial-4-directory-structure-post-link.png'
  - name: 'twitter:image:alt'
    content: 'VuePress Tutorial 4 - Directory Structure Image'
  - name: 'twitter:creator'
    content: '@codemonkeystech'
---

::: slot header

# VuePress Tutorial 4 - Directory Structure

:::

## Current Directory Structure

We're going to start with an overview of the current directory structure from the previous tutorial. Then we'll describe the recommended directory structure for a [VuePress](https://vuepress.vuejs.org/) site.

The current directory structure of the project is based off of creating a repository for your project on [GitHub](https://github.com/), cloning the repository, setting a <span class="post-term-one">local version</span> of <code class="inline-code-block">yarn</code> for your project, and doing a manual installation of [VuePress](https://vuepress.vuejs.org/). This means if you're not using a <span class="post-term-one">local version</span> of <code class="inline-code-block">yarn</code> and/or did a quick start installation your current directory structure will be a little different.

Here's the current directory structure of the project:

<code-group class="remove-code-group-line-numbers">
<code-block title="Current Directory Structure">
```
.
├── .yarn (Optional)
│   ├── releases
│   │   └── yarn-1.22.17.cjs
├── docs
│   └── README.md
├── node_modules
├── .gitattributes (Optional)
├── .gitignore
├── .yarnrc (Optional)
├── LICENSE
├── package.json
├── README.md
└── yarn.lock
```
</code-block>
</code-group>

- <code class="inline-code-block">.yarn/releases</code>: Stores a <span class="post-term-one">local version</span> of <code class="inline-code-block">yarn</code> for the project which ensures everyone working on the project is using the same version. If you didn't set a <span class="post-term-one">local version</span> of <code class="inline-code-block">yarn</code> for your project, you won't have this directory.
- <code class="inline-code-block">.yarn/releases/yarn-1.22.17.cjs</code>: Specific <span class="post-term-one">local version</span> of <code class="inline-code-block">yarn</code> used in the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials) and the [code-monkeys-blog](https://github.com/codemonkeysio/code-monkeys-blog) repositories. The file name will be different if you're using a different version.
- <code class="inline-code-block">docs/README.md</code>: The first document for the site which will be used as the homepage.
- <code class="inline-code-block">node_modules</code>: Contains all of the code for the installed packages.
- <code class="inline-code-block">.gitattributes</code>: Used to prevent <code class="inline-code-block">git</code> from showing large diffs when you add or update <span class="post-term-one">local versions</span> of <code class="inline-code-block">yarn</code>. If you didn't set a <span class="post-term-one">local version</span> of <code class="inline-code-block">yarn</code> for your project, you won't have this file.
- <code class="inline-code-block">.gitignore</code>: Ignores specified files and directories when making a commit to your repository.
- <code class="inline-code-block">.yarnrc</code>: Instructs your <span class="post-term-one">global version</span> of <code class="inline-code-block">yarn</code> to use the specified <span class="post-term-one">local version</span> in the project. If you didn't set a <span class="post-term-one">local version</span> of <code class="inline-code-block">yarn</code> for your project, you won't have this file.
- <code class="inline-code-block">LICENSE</code>: Tells others how they can use your code.
- <code class="inline-code-block">package.json</code>: Describes metadata about your site.
- <code class="inline-code-block">README.md</code>: Used to describe your project in more detail and to document how to install and use your project.
- <code class="inline-code-block">yarn.lock</code>: Keeps track of the exact versions of packages installed in the project. If you're using <code class="inline-code-block">npm</code> you'll have a <code class="inline-code-block">package-lock.json</code> file instead.

## Contents of the package.json file

Before moving on to the recommended directory structure, we're going to first go over the contents of the <code class="inline-code-block">package.json</code> file and add some simple updates.

The properties of your <code class="inline-code-block">package.json</code> file may be different depending on how you answered the questions when initializing your project and if you used the quick start installation method instead of the manual installation method. If you want to update any properties or values, you can edit your <code class="inline-code-block">package.json</code> file directly.

If you plan on publishing your project to the [npm](https://www.npmjs.com/) registry, then take a look at the [npm package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json) documentation to make sure you are following all of the specifications.

Here's what the contents of the <code class="inline-code-block">package.json</code> file looks like for the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials):

<code-group>
<code-block title="package.json">
```json
{
  "name": "code-monkeys-blog-tutorials",
  "version": "1.0.0",
  "description": "Learn VuePress and how to create the Code Monkeys Blog by following along with these tutorials!",
  "main": "index.js",
  "repository": "https://github.com/codemonkeysio/code-monkeys-blog-tutorials.git",
  "author": "Jay the Code Monkey",
  "license": "GPL-3.0-or-later",
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  "devDependencies": {
    "vuepress": "1.8.2"
  }
}
```
</code-block>
</code-group>

The <code class="inline-code-block">package.json</code> file contains metadata about your project. This metadata includes information used to identify and describe your project and the packages you install which follow [semantic versioning (semver)](https://semver.org/).

Let's describe each property in a little more detail:

- <code class="inline-code-block">name</code> is the name given to your project
- <code class="inline-code-block">version</code> indicates the current version of your project
  - The versioning follows [semver](https://semver.org/) notation
- <code class="inline-code-block">description</code> is used to describe and provide more information about your project
- <code class="inline-code-block">main</code> is a JavaScript file that starts the execution of your project
- <code class="inline-code-block">repository</code> describes the location of the project repository containing the code
  - You can explicitly set the URL and a version control type in the <code class="inline-code-block">package.json</code> file by adding, e.g., <code class="inline-code-block">"repository": { "type": "git", "url": "https://github.com/github-username/your-project" }</code>
- <code class="inline-code-block">author</code> describes the creator or owner of the project
  - You can explicitly set the author name, email, and website in the <code class="inline-code-block">package.json</code> file by adding, e.g., <code class="inline-code-block">"author": { "name": "Your Name", "email": "youremail@example.com", "url": "https://your-website.com" }</code>
- <code class="inline-code-block">license</code> indicates the type of license being used by the project
- <code class="inline-code-block">scripts</code> are command-line applications that are describe as an object where the property is the name of the script and the value is a command that gets run
- <code class="inline-code-block">devDependencies</code> are dependencies you need during development only, i.e., not during production

::: tip Installing the Same VuePress Version
If you see a different version of [VuePress](https://vuepress.vuejs.org/) and want to install the same version being used in the tutorials and blog, then you can run <code class="inline-code-block">yarn upgrade vuepress@1.8.2</code>.
:::

Now, let's make some simple updates to the <code class="inline-code-block">package.json</code> file.

To start we're going to be adding a version control type to the <code class="inline-code-block">repository</code> property by updating it to be <code class="inline-code-block">"repository": { "type": "git", "url": "https://github.com/github-username/your-project" }</code>.

Next we're going to be adding an optional email and url to the <code class="inline-code-block">author</code> property by updating it to be <code class="inline-code-block">"author": { "name": "Your Name", "email": "youremail@example.com", "url": "https://your-website.com" }</code>.

If you prefer you can also shorten the <code class="inline-code-block">author</code> property to be one string by defining it like this <code class="inline-code-block">"author": "Your Name &lt;youremail@example.com&gt; (https://your-website.com)"</code>.

The email could be a personal or work email, and the url could be a link to a personal website or the website related to your project.

Here's what the contents of the <code class="inline-code-block">package.json</code> file looks like for the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials) after adding the updates:

<code-group>
<code-block title="package.json">
```json
{
  "name": "code-monkeys-blog-tutorials",
  "version": "1.0.0",
  "description": "Learn VuePress and how to create the Code Monkeys Blog by following along with these tutorials!",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "https://github.com/codemonkeysio/code-monkeys-blog-tutorials.git"
  },
  "author": {
    "name": "Jay the Code Monkey",
    "email": "c0dem0nkeys@pm.me",
    "url": "https://codemonkeys.tech/"
  },
  "license": "GPL-3.0-or-later",
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  "devDependencies": {
    "vuepress": "1.8.2"
  }
}
```
</code-block>
</code-group>

Now that we have a good understanding or our current directory structure and the <code class="inline-code-block">package.json</code> file, let's discuss the recommended directory structure.

## Recommended Directory Structure

Here's the recommended directory structure for a [VuePress](https://vuepress.vuejs.org/) site. Many of the directories and files are optional, and we'll be adding the directories and files we need as we go through the development of the site.

Be sure to check out the [Directory Structure](https://vuepress.vuejs.org/guide/directory-structure.html) documentation if you have any questions.

<code-group class="remove-code-group-line-numbers">
<code-block title="Recommended Directory Structure">
```
.
├── docs
│ ├── .vuepress (Optional)
│ │ ├── components (Optional)
│ │ ├── public (Optional)
│ │ ├── styles (Optional)
│ │ │ ├── index.styl
│ │ │ └── palette.styl
│ │ ├── templates (Optional, Danger Zone)
│ │ │ ├── dev.html
│ │ │ └── ssr.html
│ │ ├── theme (Optional)
│ │ │ └── Layout.vue
│ │ ├── config.js (Optional)
│ │ └── enhanceApp.js (Optional)
│ │
│ └── README.md
│
└── package.json
```
</code-block>
</code-group>

::: warning Capitalization
When creating these directories and files be sure to follow the capitalization to prevent any potential issues.
:::

- <code class="inline-code-block">docs/.vuepress</code>: Stores the global configuration, components, static resources, etc.
- <code class="inline-code-block">docs/.vuepress/components</code>: The [Vue components](https://vuejs.org/v2/guide/components.html) in this directory automatically get registered as global components.
- <code class="inline-code-block">docs/.vuepress/public</code>: Static resource directory.
- <code class="inline-code-block">docs/.vuepress/styles</code>: Stores style related files.
- <code class="inline-code-block">docs/.vuepress/styles/index.styl</code>: Used to add global styles that can override the default styles.
- <code class="inline-code-block">docs/.vuepress/styles/palette.styl</code>: Used to define global styling variables and override the default styling variables.
- <code class="inline-code-block">docs/.vuepress/templates</code>: Stores HTML template files.
- <code class="inline-code-block">docs/.vuepress/templates/dev.html</code>: HTML template file for development environment.
- <code class="inline-code-block">docs/.vuepress/templates/ssr.html</code>: HTML template file used in the build time.
- <code class="inline-code-block">docs/.vuepress/theme</code>: Stores the local theme of the site.
- <code class="inline-code-block">docs/.vuepress/theme/Layout.vue</code>: Layout component used by the theme
- <code class="inline-code-block">docs/.vuepress/config.js</code>: Entry file for configuration, can also be <code class="inline-code-block">yml</code> or <code class="inline-code-block">toml</code>.
- <code class="inline-code-block">docs/.vuepress/enhanceApp.js</code>: App level enhancement.
- <code class="inline-code-block">docs/README.md</code>: The first document for the site which will be used as the homepage (same file described in the current directory structure section).
- <code class="inline-code-block">package.json</code>: Describes metadata about your site (same file described in the current directory structure section).

## Default Page Routing

In the directory structure above we used the <code class="inline-code-block">docs</code> directory as the <code class="inline-code-block">targetDir</code>. If you want to learn more about how the <code class="inline-code-block">targetDir</code> is used, then take a look at the [Command-line Interface](https://vuepress.vuejs.org/api/cli.html) documentation.

To see an example of the <code class="inline-code-block">docs</code> directory being used as the <code class="inline-code-block">targetDir</code> we can take a look at the <code class="inline-code-block">scripts</code> object we defined in the <code class="inline-code-block">package.json</code> file which is in the root directory of the project. Notice the <code class="inline-code-block">targetDir</code> gets set as the <code class="inline-code-block">docs</code> directory for the <code class="inline-code-block">docs:dev</code> and <code class="inline-code-block">docs:build</code> scripts:

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

All the relative paths are relative to the <code class="inline-code-block">docs</code> directory. So, for the directory structure above the relative path for the homepage is <code class="inline-code-block">/README.md</code> and the default page routing path for the homepage is <code class="inline-code-block">/</code>.

## Next Steps

In the next tutorial we'll discuss the basics of [Configuration](https://vuepress.vuejs.org/guide/basic-config.html).
