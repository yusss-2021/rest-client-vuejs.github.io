<template>
  <div class="nav w-full border pl-4 pr-4 pt-2 pb-2 flex flex-row relative">
    <div class="navigation flex flex-row w-full">
      <button
        @click="data_button = !data_button"
        class="button focus:outline-none  mt-1 rounded-full bg-blue-400 pl-3 pl-3 pt-4 pb-4"
        type="button"
      >
        <span class="block h-0.5  w-7 bg-white mb-1"></span>
        <span class="block h-0.5  w-10 bg-white mb-1"></span>
        <span class="block h-0.5 w-7 bg-white mb-1"></span>
      </button>
      <router-link to="/admin" class="nav_logo ml-auto mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-10 text-gray-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg> </router-link
      ><!-- nav-logo -->
    </div>
    <!-- nav -->
    <div
      v-show="data_button"
      class="nav_menu w-full absolute bg-transparent mt-16 left-0 p-2"
    >
      <ul
        class="text-left p-4 bg-white shadow-lg rounded  z-30 relative border"
      >
        <li class="mb-2">
          <span class=" font-bold">
            Menu
          </span>
        </li>
        <li>
          <router-link to="/admin_post" class="flex flex-row">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="ml-2 mt-1 text-sm">
              Add Data
            </span>
          </router-link>
        </li>
        <li class="mt-2">
          <router-link to="/admin_news" class="flex flex-row">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </span>
            <span class="ml-2 mt-1 text-sm">
              List Data
            </span>
          </router-link>
        </li>
        <li class="mt-4">
          <span class="font-bold">
            Setting
          </span>
        </li>
        <li class="mt-2">
          <router-link to="" class="flex flex-row">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6"
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
            </span>
            <span class="ml-2 mt-1 text-sm">
              Setting
            </span>
          </router-link>
        </li>
        <li class="mt-2">
          <router-link to="" class="flex flex-row">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="ml-2 mt-1 text-sm">
              Account
            </span>
          </router-link>
        </li>
        <li class="mt-8">
          <router-link to="" class="flex flex-row">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </span>
            <span class="ml-2 mt-1 text-sm">
              Logout
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      data_button: false
    };
  }
};
</script>
