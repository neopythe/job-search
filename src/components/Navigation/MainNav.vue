<template>
  <header :class="['w-full', 'text-sm', 'text-gray-600', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl whitespace-nowrap"
          >Gaggle Careers</router-link
        >
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <ProfileImage v-if="isLoggedIn" data-test="profile-image" />
          <ActionButton
            v-else
            text="Sign in"
            data-test="login-button"
            @click="LOGIN_USER()"
          />
        </div>
      </div>
      <SubNav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations, mapState } from 'vuex'

import { LOGIN_USER } from '@/store/constants'

import ActionButton from '@/components/Shared/ActionButton.vue'
import ProfileImage from '@/components/Navigation/ProfileImage.vue'
import SubNav from '@/components/Navigation/SubNav.vue'

export default defineComponent({
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      menuItems: [
        { text: 'Teams', url: '/teams' },
        { text: 'Locations', url: '/' },
        { text: 'Benefits', url: '/' },
        { text: 'Jobs', url: '/jobs/results' },
        { text: 'Students', url: '/' },
      ],
    }
  },
  computed: {
    headerHeightClass() {
      return {
        'h-16': !this.isLoggedIn,
        'h-32': this.isLoggedIn,
      }
    },
    ...mapState(['isLoggedIn']),
  },
  methods: {
    ...mapMutations([LOGIN_USER]),
  },
})
</script>
