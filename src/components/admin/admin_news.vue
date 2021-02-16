<template>
  <div class="admin_news bg-gray-50">
    <navBar />
    <main class="text-center p-4">
      <span class=" font-bold text-xl mt-4">
        Daftar berita
      </span>
      <div class="filter">
        <div class="filter_top flex flex-row mt-4">
          <div
            class="flex flex-row border bg-white rounded pl-3 pr-3 pt-1 pb-1 w-auto md:w-full mr-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              placeholder="Cari Artikel"
              type="text"
              class="ml-1 bg-transparent rounded w-auto border-none border-light-blue-400 focus:outline-none pt-1 pb-1 pl-3 pr-3"
            />
          </div>
          <!-- input_text -->
          <button
            type="btn"
            class="border bg-white rounded p-3 ml-auto focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </button>
        </div>
      </div>
      <!-- filter -->
      <ul class="mt-4">
        <li
          v-for="item in data_get"
          :key="item.id"
          class="flex flex-row p-3 rounded bg-white shadow relative mt-3"
        >
          <div class="icon bg-red-400 rounded text-white p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-8"
            >
              <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                fill="#fff"
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </div>
          <!-- icon -->
          <span class="title font-bold text-sm pt-3 ml-4">
            {{ item.title }}
          </span>
          <button class="action ml-auto pt-1 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg></button
          ><!-- action -->
          <span class="absolute action_menus right-0 mr-8 mt-4 z-10 hidden">
            <button
              type="button"
              class="flex flex-row border p-2 bg-white focus:outline-none"
              @click="delete_data(item.id)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              <span class="text-xs mt-1 ml-1">
                Delete
              </span></button
            ><!-- delete -->
            <router-link
              :to="{ name: 'admin_id', params: { id: item.id } }"
              href="#"
              class="flex flex-row border p-2 bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="text-xs mt-1 ml-1">
                Update
              </span> </router-link
            ><!-- delete -->
          </span>
        </li>
        <!-- li -->
      </ul>
    </main>
  </div>
</template>

<script>
import navBar from "@/components/admin/navigasi.vue";

export default {
  name: "admin_news",
  data: function() {
    return {
      data_get: []
    };
  },
  methods: {
    delete_data: function($id) {
      fetch("http://localhost/rest-api/admin/news/" + $id, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Access-Control-Request-Method": "DELETE",
          "Access-Control-Request-Headers": "Origin,Content-Type",
          Origin: "http://localhost:8080/"
        }
      })
        .then(function(Response) {
          return Response.json();
        })
        .then(Response => this.show(Response.message))
        .catch(Response => console.log(Response));
    },
    show: function($get_data) {
      alert($get_data);
    }
  },
  components: {
    navBar
  },
  created: function() {
    this.axios
      .get("http://localhost/rest-api/admin/news")
      .then(Response => (this.data_get = Response.data))
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
.action:hover ~ .action_menus {
  display: block;
}
.action_menus:hover {
  display: block;
}
</style>
