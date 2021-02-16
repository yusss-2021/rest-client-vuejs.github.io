<template>
  <div class="admin_post">
    <navBar />
    <main class="p-4">
      <div class="border-b-2 pb-3 flex flex-row">
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
            Insert Data
          </a>
        </div>
      </div>
      <!-- breadcrumb -->
      <form @submit.prevent="send_data()" method="post">
        <div class="text-left mt-4 input_title">
          <span class=" ml-2 font-bold text-sm">
            Masukan Judul
          </span>
          <input
            v-model="data_send.title"
            type="text"
            placeholder="masukan judul"
            required
            class="p-3 outline border w-full rounded focus:outline-white focus:bg-blue-200 text-gray-700"
          />
        </div>
        <!-- title -->
        <div class="text-left mt-4 input_image">
          <span class=" ml-2 font-bold text-sm">
            Masukan Gambar
          </span>
          <input
            v-model="data_send.image"
            type="text"
            placeholder="masukan Gambar"
            class="p-3 outline border w-full rounded focus:outline-white focus:bg-blue-200 text-gray-700"
            required
          />
        </div>
        <!-- image -->
        <div class="input_content mt-4 text-left">
          <span class=" ml-2 font-bold text-sm">
            Masukan Content
          </span>
          <editor v-model="data_send.content"> </editor>
        </div>
        <div class="mt-2 error_content text-left" v-if="error_contents.length">
          <ul>
            <li v-for="item in error_contents" :key="item.id">
              {{ item }}
            </li>
          </ul>
        </div>
        <!-- content -->
        <div class="date md:flex flex-row">
          <div class="input_author mt-4 text-left">
            <span class="ml-2 font-bold text-sm">
              Pilih Author
            </span>
            <select
              v-model="data_send.author"
              required
              class="p-2 rounded ml-2 mt-1"
            >
              <option value="admin">Admin</option>
              <option value="penulis_1">penulis_1</option>
            </select>
          </div>
          <div class="input_date_post mt-4 text-left">
            <span class="ml-2 font-bold text-sm">
              Masukan Tanggal Post
            </span>
            <input
              required
              v-model="data_send.date_post"
              type="date"
              name=""
              class="p-2 rounded "
              style="background:whitesmoke"
            />
          </div>
        </div>
        <!-- date -->
        <button
          class="bg-blue-400 p-4 rounded w-full mt-4 mb-4 text-white font-bold focus:outline-none"
        >
          Kirim Data
        </button>
      </form>
      <!-- input -->
    </main>
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
import navBar from "@/components/admin/navigasi.vue";
export default {
  name: "admin_post",
  data: function() {
    return {
      error_contents: [],
      data_send: {
        title: null,
        image: null,
        content: null,
        author: null,
        date_post: null
      }
    };
  },
  components: {
    navBar,
    editor: Editor
  },
  methods: {
    send_data: function() {
      if (
        this.data_send.content == null ||
        this.data_send.content == "" ||
        this.data_send.title == null ||
        this.data_send.image == null ||
        this.data_send.author == null ||
        this.data_send.date_post == null
      ) {
        this.error_contents.push(" Content Required !");
      } else {
        this.error_contents.pop();
        fetch("http://localhost/rest-api/admin", {
          method: "POST",
          mode: "cors",
          headers: {
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Origin,Content-Type",
            "Content-Type": "application/json",
            Origin: "http://localhost:8080"
          },
          body: JSON.stringify(this.data_send)
        })
          .then(function(response) {
            return response.json();
          })
          .then(response => this.show(response.message, response.data))
          .catch(error => console.log(error));
      }
    },
    show: function($mes, $dat) {
      alert($mes, $dat);
    }
  }
};
</script>
