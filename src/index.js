import VueStateDropdown from "./components/vue-state-dropdown.vue";

export default {
  ...VueStateDropdown,
  install: Vue => {
    Vue.component(VueStateDropdown.name, VueStateDropdown);
    return Vue;
  }
};