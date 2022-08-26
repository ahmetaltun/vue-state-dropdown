<template>
  <div id="app">
    <!-- Title -->
    <h2 class="title">Vue State Dropdown</h2>
    <!-- CountryList -->
    <country-list :countryCode="countryCode" @codeChanged="codeChanged" />
    <!-- Dropdown -->
    <vue-state-dropdown
      v-model="state"
      :countryCode="countryCode"
      :selectFirstItem="true"
      :preferredStates="['06', '34']"
      :immediateCallSelectEvent="true"
      :disabled="false"
      :clearable="false"
      :multiple="false"
      :searchable="true"
      :closeOnSelect="true"
    />
    <!-- Selected Item Details -->
    <div class="description" v-if="state">
      {{ 
        `{ 
          id: "${state.id}", 
          state_code: "${state.state_code}", 
          name: "${state.name}", 
          country_name: "${state.country_name}" 
        }` 
      }}
    </div>
    <!-- Links -->
    <links />
    <!-- Vue Country Dropdown Link -->
    <div>
      <a href="https://vue-country-dropdown-2.pages.dev/" target="_blank" class="country-dropdown-link">
        Vue Country Dropdown
        <svg width="1.2vh" height="1.2vh" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 10.5L21 3" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 3L21 3L21 8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 14V19C21 20.1046 20.1046 21 19 21H12H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import VueStateDropdown from './components/vue-state-dropdown.vue';
import Links from './components/links.vue';
import CountryList from './components/countryList.vue';

export default {
  name: 'App',
  components: {
    VueStateDropdown,
    Links,
    CountryList,
  },
  data() {
    return {
      state: {},
      countryCode: "tr",
    }
  },
  methods: {
    stateSelected(state) {
      this.state = state;
    },
    codeChanged(code) {
      this.countryCode = code;
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #2c3e50;
  margin-top: 6vh;
}
.title {
  margin-bottom: 3vh;
}
.description {
  margin-top: 3vh;
  font-weight: 700;
}
.country-dropdown-link {
  font-size: 1.2vh;
  display: flex;
  justify-items: center;
  align-items: center;
  gap: .2vh;
  margin-top: 1.2vh;
  text-decoration: none;
}
</style>
