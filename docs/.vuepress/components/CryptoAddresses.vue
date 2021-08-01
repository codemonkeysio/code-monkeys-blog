<template>
  <div class="cryptos-wrapper">
    <div class="crypto" v-for="(crypto, index) in cryptos" :key="crypto.name">
      <div class="name-and-abbreviation">
        <span>{{ crypto.name }}</span>
        <span>{{ crypto.abbr }}</span>
      </div>
      <div class="address-wrapper">
        <span class="left-address">{{
          formattedAddresses[index].leftPart
        }}</span>
        <span class="right-address">{{
          formattedAddresses[index].rightPart
        }}</span>
      </div>
      <button
        type="button"
        v-clipboard:copy="crypto.address"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
      >
        Copy
      </button>
    </div>
  </div>
</template>

<script>
const cryptos = require('../public/crypto-addresses/crypto-addresses.json');

export default {
  name: 'CryptoAddresses',
  data: function() {
    return {
      cryptos: cryptos.cryptoAddresses,
      formattedAddresses: []
    };
  },
  created() {
    this.formatAddress(this.cryptos);
  },
  methods: {
    onCopy: function(e) {
      alert(`Address:\n\n${e.text}\n\ncopied to clipboard!`);
    },
    onError: function(e) {
      alert('Failed copying address to clipboard');
    },
    formatAddress(cryptos) {
      let addressLength;
      let rightPartStart;
      cryptos.forEach((crypto) => {
        addressLength = crypto.address.length;
        rightPartStart = addressLength - 10;
        this.formattedAddresses.push({
          leftPart: crypto.address.slice(0, rightPartStart),
          rightPart: crypto.address.slice(rightPartStart, addressLength)
        });
      });
    }
  }
};
</script>

<style scoped>
.cryptos-wrapper {
  border-top: 0.0625rem solid #424857;
  padding-top: 1.25rem;
}

.crypto {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 1.25rem;
  margin-bottom: 1.25rem;
  border-bottom: 0.0625rem solid #424857;
}

.name-and-abbreviation {
  display: flex;
  flex-direction: column;
  margin-right: 1.25rem;
}

.address-wrapper {
  display: flex;
  flex: 7.75;
  color: #e6e6e6;
  border: 0.125rem solid #16181d;
  user-select: none;
}

.left-address {
  align-self: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.right-address {
  align-self: center;
  flex-shrink: 0;
}

button {
  flex: 1;
  color: #e6e6e6;
  background-color: inherit;
  border: 0.125rem solid #16181d;
  cursor: pointer;
  transition: 0.3s ease;
}

button:hover {
  background-image: radial-gradient(circle at center center, #2c303a, #21242c);
  color: #eb7132;
}

@media (max-width: 26.3125rem) {
  .cryptos-wrapper {
    margin: 0 0.25rem 1.875rem;
  }

  .name-and-abbreviation {
    min-width: 11.5rem;
  }

  .address-wrapper {
    min-width: 6.25rem;
    margin-top: 1.25rem;
    padding: 0.59375rem 0.625rem;
    border-radius: 0.625rem;
  }

  button {
    min-width: 12.75rem;
    margin-top: 1.25rem;
    padding: 0.59375rem 0.625rem;
    border-radius: 0.625rem;
  }
}

@media (min-width: 26.375rem) {
  .cryptos-wrapper {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  .name-and-abbreviation {
    min-width: 11.9375rem;
  }

  .address-wrapper {
    min-width: 15.1875rem;
    margin-top: 1.25rem;
    padding: 0.59375rem 0.875rem;
    border-radius: 0.625rem;
  }

  button {
    min-width: 13.125rem;
    margin-top: 1.25rem;
    padding: 0.59375rem 0.75rem;
    border-radius: 0.625rem;
  }
}

@media (min-width: 39.5625rem) {
  .name-and-abbreviation {
    min-width: 6.125rem;
  }

  .address-wrapper {
    margin-top: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  button {
    align-self: stretch;
    min-width: 4.375rem;
    margin-top: 0;
    padding-top: 0.0625rem;
    padding-bottom: 0.0625rem;
    border-left-width: 0.125rem;
    border-left-width: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}

@media (min-width: 45rem) {
  .name-and-abbreviation {
    min-width: 13.875rem;
  }

  .address-wrapper {
    min-width: 17.1875rem;
    margin-top: 1.25rem;
    border-top-right-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
  }

  button {
    min-width: 15.125rem;
    margin-top: 1.25rem;
    padding-top: 0.5625rem;
    padding-bottom: 0.5625rem;
    border-left-width: 0.125rem;
    border-top-left-radius: 0.625rem;
    border-bottom-left-radius: 0.625rem;
  }
}

@media (min-width: 64.5625rem) {
  .name-and-abbreviation {
    min-width: 6.5625rem;
  }

  .address-wrapper {
    min-width: 16.6875rem;
    margin-top: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  button {
    min-width: 4.375rem;
    margin-top: 0;
    border-left-width: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
