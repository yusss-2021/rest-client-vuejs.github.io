<template>
  <div class="detail_news w-full pb-5 shadow">
    <navs />
    <div class="news_header w-full mt-8">
      <div class="date flex flex-row p-4">
        <img
          class="w-12 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
          alt=""
        />
        <div class="ml-1">
          <span class="text-base font-bold mt-1 -ml-12 block capitalize">
            {{ detail_data.author }}
          </span>
          <span class="text-sm mt-0 block ml-4">
            21 september 2020
          </span>
        </div>
        <!-- author -->
      </div>
      <h2 class="text-lg text-left font-bold mb-0 pl-3 pr-3 mt-1 mb-3">
        {{ detail_data.title }}
      </h2>
      <div class="tags block text-left pl-3 pr-3 mb-6">
        <span
          class="pl-3 pr-3 pt-1 pb-1 bg-blue-500 text-sm text-white rounded inline-block mr-2"
        >
          artikel baru
        </span>
        <span
          class="pl-3 pr-3 pt-1 pb-1 bg-blue-500 text-sm text-white rounded inline-block mr-2"
        >
          artikel baru
        </span>
      </div>

      <div class="header_img mt-2">
        <img :src="detail_data.image" class="w-full" />
      </div>
      <!-- tags -->
    </div>
    <!-- news_header -->
    <div
      class="news_content text-sm mt-4 pl-4 pr-3 text-left md:text-base leading-relaxed"
      v-html="detail_data.content"
    ></div>
    <router-view></router-view>
  </div>
</template>

<script>
import navs from "./navigasi.vue";

export default {
  data: function() {
    return {
      detail_data: ""
    };
  },
  components: {
    navs
  },
  beforeCreate() {
    function cut() {
      var oke = decodeURI(window.location.pathname).substring(1);
      return oke;
    }
    var url = "http://localhost/rest-api/" + cut();

    this.axios
      .get(url)
      .then(Response => (this.detail_data = Response.data))
      .catch(function() {
        return (window.location = "http://localhost:8081/");
      });
  }
};
</script>
