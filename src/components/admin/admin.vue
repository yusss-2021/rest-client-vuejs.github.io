<template>
  <div class="admin w-full border pb-4">
    <navBar />
    <main class="pl-4 pr-4 ">
      <div class="breadcrumb flex mt-5 mr-auto">
        <router-link to="/admin" class="">
          Home
        </router-link>
        <span class="mt-0.5 ml-1">
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
              d="M9 5l7 7-7 7"
            />
          </svg> </span
        ><!-- arrow -->
        <a href="#" class="ml-1 mt-0">
          Dashboard
        </a>
      </div>
      <!-- breadcrumb -->
      <div class="flex user flex-col mt-4 bg-blue-200 rounded p-4 -ml-3 -mr-3">
        <div class="title_information flex flex-row">
          <span
            class="block relative text-left mb-1 mt-1 w-full text-gray-600 font-bold z-10"
          >
            Informasi User
          </span>
          <button class="btn focus:outline-none mt-0 bg-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-4 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 15l7-7 7 7"
              />
            </svg></button
          ><!-- button -->
        </div>
        <!-- title_information -->
        <div
          class="information_user hidden flex flex-row  mt-4 bg-white rounded p-4"
        >
          <span class="icon_admin flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-10 inline"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="admin_title ml-2 mt-3 font-bold">
              <p>
                Admin
              </p>
            </span> </span
          ><!-- admin -->
          <span
            class="status bg-green-500 text-white font-bold pt-2 mt-2 pb-2 pr-4 pl-4 rounded ml-auto"
          >
            active
          </span>
        </div>
      </div>
      <div class="information_umum block mt-4 -ml-3 -mr-3">
        <ul class="bg-gray-300 rounded p-4">
          <li class="text-left mb-4">
            <span
              class="title block relative text-left mb-1 mt-1 w-full text-gray-600 font-bold"
            >
              Informasi Umum
            </span>
          </li>
          <li class="flex flex-row mt-2 border-b-2 pb-4">
            <span class="icon bg-blue-400 text-white rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span class="title mt-4 ml-2 font-bold">
              FILE
            </span>
            <span class="total mt-4 ml-auto font-bold text-xl mr-3">
              32
              <span class="font-normal text-xs">
                file
              </span>
            </span>
          </li>
          <li class="flex flex-row mt-2 border-b-2 pb-4">
            <span class="icon bg-blue-400 text-white rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </span>
            <span class="title mt-4 ml-2 font-bold">
              Article
            </span>
            <span class="total mt-4 ml-auto font-bold text-xl mr-3">
              {{ data_long }}
              <span class="font-normal text-xs">
                article
              </span>
            </span>
          </li>
        </ul>
      </div>
      <!-- user -->
    </main>
  </div>
</template>

<script>
import navBar from "@/components/admin/navigasi.vue";

export default {
  name: "admin",
  data: function() {
    return {
      data_long: null
    };
  },
  components: {
    navBar
  },
  methods: {},
  created: function() {
    this.axios
      .get("http://localhost/rest-api/admin")
      .then(res => (this.data_long = res.data.data))
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
input {
  background: gainsbro;
  padding: 0.5em;
  margin: 1em;
  display: block;
}
</style>
