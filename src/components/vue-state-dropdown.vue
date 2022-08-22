<template>
  <v-select 
    v-model="selected" 
    class="select"
    label="name"
    :options="states" 
    :disabled="disabled"
    :clearable="clearable"
    :multiple="multiple"
    :searchable="searchable"
    :closeOnSelect="closeOnSelect"
    :placeholder="placeholder"
    @input="onSelect"
    @open="open"
    @close="close"
    @option:selecting="option_selecting"
    @option:selected="option_selected"
    @option:deselecting="option_deselecting"
    @option:deselected="option_deselected"
  >
    <!-- Selected Template -->
    <template #selected-option="state">
      <div class="selected-option">
        <span class="name">
          {{ state.name }}
        </span>
      </div>
    </template>

    <!-- Option Template -->
    <template #option="state">
      <div class="option">
        <span 
          class="name" 
          :class="{ 'bold-text': preferredStates.length && preferredStates.includes(state.state_code) }"
        >
          {{ state.name }}
        </span>
      </div>
    </template>
  </v-select>
</template>

<script>
import States from '../data/states.js';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
  name: "vue-state-dropdown",
  components: {
    vSelect,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    countryCode: {
      type: String,
      default: null
    },
    countryName: {
      type: String,
      default: null
    },
    countryId: {
      type: Number,
      default: null
    },
    defaultState: {
      type: Number,
      default: null
    },
    defaultStateByName: {
      type: String,
      default: null
    },
    selectFirstItem: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: Boolean,
      default: true
    },
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: ""
    },
    preferredStates: {
      type: Array,
      default: () => []
    },
    onlyStates: {
      type: Array,
      default: () => []
    },
    ignoredStates: {
      type: Array,
      default: () => []
    },
    immediateCallSelectEvent: {
      type: Boolean,
      default: false
    },
    showNotSelectedOption: {
      type: Boolean,
      default: false
    },
    notSelectedOptionText: {
      type: String,
      default: "Not selected"
    }
  },
  data() {
    return {
      selected: null,
      states: [],
      notSelectedOption: {
        id: 0,
        name: this.notSelectedOptionText,
        country_id: 0,
        country_code: "",
        country_name: "",
        state_code: "",
        type: "",
        latitude: "",
        longitude: ""
      },
    }
  },
  created() {
    this.getStates();
  },
  mounted() {
    this.PreferredStates();
    this.OnlyStates();
    this.IgnoredStates();
    this.ShowNotSelectedOption();
    this.SelectFirstItem();
    this.DefaultState();
    this.DefaultStateByName();
    this.ImmediateCallSelect();
  },
  methods: {
    getStates() {
      if(this.countryCode) {
        this.states = States.filter(
          s => s.country_code.toUpperCase() === this.countryCode.toUpperCase()
        );
      } else if(this.countryName) {
        this.states = States.filter(
          s => s.country_name.toLowerCase() === this.countryName.toLowerCase()
        );
      } else if(this.countryId) {
        this.states = States.filter(
          s => s.country_id === this.countryId
        );
      }
    },
    PreferredStates() {
      if(this.preferredStates.length) {
        const preferredStates = this.states.filter(
          s => this.preferredStates.includes(s.state_code)
        );
        this.states = this.states.filter(
          s => !this.preferredStates.includes(s.state_code)
        );
        this.states.unshift(...preferredStates);
      }
    },
    OnlyStates() {
      if(this.onlyStates.length) {
        this.states = this.states.filter(
          s => this.onlyStates.includes(s.state_code)
        )
      }
    },
    IgnoredStates() {
      if(this.ignoredStates.length) {
        this.states = this.states.filter(
          s => !this.ignoredStates.includes(s.state_code)
        )
      }
    },
    ShowNotSelectedOption() {
      if(this.showNotSelectedOption) {
        this.states.unshift(this.notSelectedOption);
      }
    },
    onSelect(state) {
      this.$emit('onSelect', state);
    },
    open() {
      this.$emit('open');
    },
    close() {
      this.$emit('close');
    },
    option_selecting(state) {
      this.$emit('option_selecting', state);
    },
    option_selected(state) {
      this.$emit('option_selected', state);
    },
    option_deselecting(state) {
      this.$emit('option_deselecting', state);
    },
    option_deselected(state) {
      this.$emit('option_deselected', state);
    },
    SelectFirstItem() {
      if(this.selectFirstItem) {
        this.selected = this.states.at(0);
        //this.ImmediateCallSelect();
      }
    },
    DefaultState() {
      if(this.defaultState) {
        this.selected = this.states.find(
          s => s.id === this.defaultState
        )
        //this.ImmediateCallSelect();
      }
    },
    DefaultStateByName() {
      if(this.defaultStateByName) {
        this.selected = this.states.find(
          s => s.name.toLowerCase() === this.defaultStateByName.toLowerCase()
        )
        //this.ImmediateCallSelect();
      }
    },
    ImmediateCallSelect() {
      this.immediateCallSelectEvent && this.onSelect(this.selected)
    },
    CallFunctionsAgain() {
      this.selected = null;
      this.getStates();
      this.SelectFirstItem();
      this.DefaultState();
      this.DefaultStateByName();
      this.onSelect(this.selected);
    }
  },
  watch: {
    countryCode: function() {
      this.CallFunctionsAgain();
    },
    countryName: function() {
      this.CallFunctionsAgain();
    },
    countryId: function() {
      this.CallFunctionsAgain();
    },
    defaultState: function() {
      this.DefaultState();
      this.onSelect(this.selected);
    },
    defaultStateByName: function() {
      this.DefaultStateByName();
      this.onSelect(this.selected);
    }
  }
}
</script>

<style scoped>
.select {
  min-width: 250px;
  cursor: pointer;
}
.option, 
.selected-option {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  gap: 8px;
}
.bold-text {
  font-weight: 700;
}

:deep(.vs__dropdown-menu) {
  overflow-x: hidden;
}
:deep(.vs__search) {
  cursor: pointer;
}
:deep(.vs--searchable .vs__dropdown-toggle) {
  cursor: pointer;
}
</style>