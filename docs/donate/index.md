---
title: Donate
description: If you've found our content helpful and would like to support us, then you can donate here! All donations will go towards maintaining an adequate 🍌 supply!
sidebar: auto
canonicalUrl: donate/
---

::: slot header

# Thanks for the <div class="emoji-wrap">Bananas!!! 🍌</div>

:::

<div class="topic-card">

## Crypto 🔗

⚠️ Sending Crypto to the Wrong Address will Result in Loss of <span class="emoji-wrap">Funds! ⚠️</span>

✅ Always double check the address & amount before <span class="emoji-wrap">sending! ✅</span>

🤖 Instead of using the static Bitcoin address below, improve your privacy by using a <span class="emoji-wrap">[PayNym](https://paynym.is/)! 🤖</span>

<PayNymDonation />

<CryptoDonations />

</div>

<div class="topic-card fiat-card">

## Fiat 💵

Subscribe for more monkey business on [SubscribeStar!](https://www.subscribestar.com/code-monkeys)

Support your fellow Code Monkeys by becoming a [Patron!](https://www.patreon.com/codemonkeys?fan_landing=true)

Buy us a banana using [PayPal!](https://paypal.me/codemonkeystech?locale.x=en_US)

Buy us more bananas using [Venmo!](https://venmo.com/u/codemonkeys)

Become a [Code Monkeys Sponsor!](https://github.com/sponsors/codemonkeysio)

Sponsor Jay the Code Monkey on [GitHub!](https://github.com/sponsors/jchiarulli)

</div>

<script>
import PayNymDonation from '../.vuepress/theme/components/PayNymDonation';
import CryptoDonations from '../.vuepress/theme/components/CryptoDonations';

export default {
  components: {
   CryptoDonations,
   PayNymDonation
  }
}
</script>

<style lang="stylus" scoped>
h1
  padding-bottom: 5rem

h2
  color: $accentColor
  margin: 1.875rem 0

.topic-card
  border: 0.125rem solid $darkBorderColor
  box-shadow: 0 0.5rem 1rem 0 $darkBorderColor
  transition: 0.2s
  border-radius: 1.875rem
  background-image: radial-gradient(circle at center center, $backgroundColorThree, $backgroundColor)

.topic-card:hover
  box-shadow: 0.125rem 0.5rem 1rem 0.125rem $darkBoxShadowColor

.fiat-card
  margin-top: 3.5rem

@media (max-width: 54.6875rem)
  p
    text-align: center

@media (max-width: 26.3125rem)
  .topic-card
    padding: 0 1rem

@media (min-width: 26.375rem)
  .topic-card
    padding: 0 2rem
</style>
