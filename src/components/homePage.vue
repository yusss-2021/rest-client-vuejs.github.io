<template>
  <div class="w-full bg-gray-100 p-4">
    <carousel :items="1" :autoplay="true" :nav="false" :dots="true">
      <div class="item-carousel w-full">
        <div class="item-image  p-0 rounded">
          <img :src="data_carousel[0].image" class="w-full rounded" />
          <div class="text-left ml-3 mb-4 absolute bottom-0">
            <span class="tags text-left">
              <a
                href=""
                class="underline font-bold text-sm text-white ml-3 mb-4"
              >
                css trik terbaru
              </a>
            </span>
            <a href="" class="text-lg mr-3 ml-3 text-white font-bold block">
              {{ data_carousel[0].title }}
            </a>
          </div>
        </div>
      </div>
      <!-- item -->
      <div class="item-carousel w-full">
        <div class="item-image  p-0 rounded">
          <img :src="data_carousel[1].image" class="w-full rounded" />
          <div class="text-left ml-3 mb-4 absolute bottom-0">
            <span class="tags text-left">
              <a
                href=""
                class="underline font-bold text-sm text-white ml-3 mb-4"
              >
                php indonesia programing
              </a>
            </span>
            <a href="" class="text-lg mr-3 ml-3 text-white font-bold block">
              {{ data_carousel[1].title }}
            </a>
          </div>
        </div>
      </div>
      <!-- item --> </carousel
    ><!-- carousel -->
    <div class="filter">
      <span class="text-center font-bold text-lg"> Cari Artikel </span
      ><!-- title -->
      <div class="filter-search mt-3">
        <div class="flex flex-row p-3 rounded bg-gray-200">
          <svg
            class="w-5 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            class="bg-transparent focus:outline-none"
            placeholder="masukan kata kunci"
          />
        </div>
      </div>
      <!-- filter-search -->
      <div class="filter_tags pl-3 pr-3 pb-2 pt-3 flex flex-row mt-3">
        <span class="text-2xl font-bold capitalize float-left mt-2">
          Semua Berita
        </span>
        <button
          type="button"
          class="bg-gray-200 pl-4 pr-4 pt-2 pb-2 rounded ml-auto mr-4"
        >
          <svg
            class="w-4 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
              clip-rule="evenodd"
            />
          </svg>
          <span>
            Filter
          </span>
        </button>
      </div>
      <!-- filter_tags -->
    </div>
    <!-- filter -->
    <div class="main_content pl-2 pr-0">
      <ul>
        <li class="item-list mb-3 mt-3" v-for="item in data_all" :key="item.id">
          <div class="card_custom w-full flex flex-row">
            <div class="card_img w-5/12 pt-2">
              <img class="w-auto rounded" :src="item.image" />
            </div>
            <!-- card_img -->
            <div class="card_content w-7/12 text-left pl-4 pt-2 md:pt-2">
              <span class="tags text-left mb-1 block">
                <span class="underline font-bold text-sm ">
                  css trik terbaru
                </span>
              </span>
              <router-link
                :to="{ name: 'news', params: { id: item.title } }"
                class="title text-xs font-bold text-left mt-2 md:text-sm"
              >
                {{ item.title }}
              </router-link>
              <div class="date hidden md:block md:pt-2">
                <span class="author">
                  <span class="p-1 rounded-full bg-blue-500 text-white">
                    <svg
                      class="w-4 inline-block -mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span
                    class="text-sm mt-2
"
                  >
                    {{ item.author }}
                  </span> </span
                ><!-- author -->
                <span class="date_post font-light ml-3">
                  <span class="p-1 rounded-full bg-blue-500 text-white">
                    <svg
                      class="w-4 inline-block -mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span class="text-sm mt-2">
                    {{ item.date_post }}
                  </span> </span
                ><!-- date_post -->
              </div>
              <!-- date -->
            </div>
            <!-- content -->
          </div>
        </li>
      </ul>
      <div class="text-center w-full mt-8 mb-2">
        <button
          type="button"
          class="w-8/12 ml-3 mr-3 p-2 bg-blue-500 font-medium text-white focus:outline-none"
        >
          Load More
        </button>
      </div>
      <!-- load more -->
    </div>
    <!-- main_content -->
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "homePage",
  data: function() {
    return {
      data_all: null,
      data_carousel: [{}, {}]
    };
  },
  components: {
    carousel
  },
  methods: {},
  created() {
    const axios = require("axios");
    function url() {
      return axios.get("http://localhost/rest-api/");
    }
    Promise.all([url(), url()])
      .then(
        Response => (
          (this.data_all = Response[0].data.all_news),
          (this.data_carousel = Response[1].data.carousel)
        )
      )
      .catch(error => console.log(error));
  }
};
</script>

<style scoped lang="scss"></style>
