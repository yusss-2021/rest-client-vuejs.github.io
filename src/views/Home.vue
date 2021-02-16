<template>
  <div class="home">
    <navBar />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/homePage.vue";
import navBar from "@/components/navigasi.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    navBar
  }
};
</script>
