---
title: Resources
description: Ready to take your Code Monkey skills to the next level? Then check out these useful resources which include free and open source software recommendations! 💻🐒
sidebar: auto
canonicalUrl: resources/
---

::: slot header

# Giving Credit to the Great <div class="emoji-wrap">Apes!!! 🦍 🍌 🐒</div>

:::

Here you'll find a list of topics I'm interested in presented in alphabetical order. The goal of providing resources for these topics is to help people learn more about programming as well as to provide people with free and open source software that also respects their privacy.

Moving over to using only free and open source software that also respects users' privacy is a process, so don't feel like you have to switch everything at once. I'm still using proprietary software that doesn't respect users' privacy, and I may continue to do so if I feel the pros outweigh the cons. However, over time if possible I would prefer to phase out all of the proprietary software I'm using.

While I believe these links are to resources that will help you gain a better conceptual and practical understanding of the topics, I haven't personally used and verified all of these resources. Be sure to do your own research and always double check the links are bringing you to the correct sites, especially when dealing with a site related to privacy or finances. Don't trust, verify.

I'll be updating these resources from time to time, so if you have any suggestions on how to improve them let me know.

<div
  class="resource-card"
  @click="handleNavigation('/resources/bitcoin', $event)"
>

<div class="title">

## Bitcoin

</div>

"The root problem with conventional currency is all the trust that’s required to make it work. The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust." - Satoshi Nakamoto

Bitcoin is a decentralized digital currency that enables instant payments to anyone, anywhere in the world. Bitcoin uses peer-to-peer (P2P) technology to operate with no central authority: transaction management and money issuance are carried out collectively by the network.

</div>

<div
  class="resource-card"
  @click="handleNavigation('/resources/foss', $event)"
>

<div class="title">

## Free and Open Source Software (FOSS)

</div>

“Free software” means software that respects users' freedom and community. Roughly, it means that the users have the freedom to run, copy, distribute, study, change, and improve the software.

"Open source software" also gives the users the ability to run, copy, distribute, study, change, and improve the software; however, it does not share the same goal of making sure the software that is being developed is actually attempting to improve users' freedom.

</div>

<div
  class="resource-card"
  @click="handleNavigation('/resources/nostr', $event)"
>

<div class="title">

## Notes and Other Stuff Transmitted by Relays (Nostr)

</div>

The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all.

It doesn't rely on any trusted central server, hence it is resilient; it is based on cryptographic keys and signatures, so it is tamperproof; it does not rely on peer-to-peer (P2P) techniques, and therefore it works.

</div>

<div
  class="resource-card"
  @click="handleNavigation('/resources/privacy', $event)"
>

<div class="title">

## Privacy

</div>

“Privacy is the power to selectively reveal oneself to the world." - Eric Hughes

To learn more about why privacy is important especially in our digital age, then be sure to check out these resources which include tools that you can use to increase and maintain your privacy.

</div>

<div
  class="resource-card"
  @click="handleNavigation('/resources/webdev', $event)"
>

<div class="title">

## Web Development

</div>

To learn about the process of building, programming, and maintaining websites and web applications using HTML, CSS, JavaScript, TypeScript, etc., then be sure to check out these resources.

</div>

<script>
export default {
  methods: {
    handleNavigation(path, event) {
      if (!event.target.classList.contains('header-anchor')) {
        this.$router.push(path).catch(err => {
          if (
            !err.message.includes(
              'Redirected when going from'
            )
          ) {
            console.log(err.name)
          }
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  padding-bottom: 5rem

h2
  color: $accentColor
  margin: -2.125rem 0 1.875rem
  padding-top: 4.6rem

.resource-card
  border: 0.125rem solid $darkBorderColor
  box-shadow: 0 0.5rem 1rem 0 $darkBorderColor
  transition: 0.2s
  border-radius: 1.875rem
  background-image: radial-gradient(circle at center center, $backgroundColorThree, $backgroundColor)
  cursor: pointer
  .title:hover
    color: $accentColor
    text-decoration: underline

.resource-card:nth-child(n+2)
  margin-top: 3.5rem

.resource-card:hover
  box-shadow: 0.125rem 0.5rem 1rem 0.125rem $darkBoxShadowColor

@media (max-width: 61.25rem)
  h1, h2, h3, p
    text-align: center

@media (max-width: 26.3125rem)
  .resource-card
    padding: 0 1rem

@media (min-width: 26.375rem)
  .resource-card
    padding: 0 2rem
</style>
