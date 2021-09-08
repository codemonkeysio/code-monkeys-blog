import VueClipboard from 'vue-clipboard2';
import ImgLazy from 'vuepress-plugin-img-lazy/ImgLazy';

// async function is also supported, too
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer // is this enhancement applied in server-rendering or client
}) => {
  // ...apply enhancements to the app
  Vue.use(VueClipboard);
  Vue.component(ImgLazy.name, ImgLazy);
};
