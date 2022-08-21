
# Vue State Dropdown

State dropdown for Vue@2.

## [Demo](https://vue-state-dropdown.pages.dev/)
## Installation

- **yarn**:
  ```bash
    yarn add vue-state-dropdown
  ```
- **npm**:
  ```bash
    npm i --save vue-state-dropdown
  ```

## Usage

- Install as a global component:

  ```js
  import Vue from "vue";
  import VueStateDropdown from "vue-state-dropdown";

  Vue.use(VueStateDropdown);
  ```
- Or use in a specific component

  ```js
  import VueStateDropdown from 'vue-state-dropdown'

  export default {
    components: {
      VueStateDropdown
    }
  }
  ```

- In your component:

  ```html
  <template>
  ...
    <vue-state-dropdown
      @onSelect="onSelect"
      :countryCode="'tr'"
      :selectFirstItem="true"
      :preferredStates="['06', '34']"
      :immediateCallSelectEvent="true"
      :disabled="false"
      :clearable="false"
      :multiple="false"
      :searchable="true"
      :closeOnSelect="true"
    />
  ...
  <template>
  <script>
  export default {
    methods: {
       onSelect(state) {
         console.log(state);
         // Check the state object example below.
       },
    },
  }
  </script>
  ```
## State Object Example
```json
{
  "id": 2217,
  "name": "Ankara",
  "country_id": 225,
  "country_code": "TR",
  "country_name": "Turkey",
  "state_code": "06",
  "type": "province",
  "latitude": "39.78052450",
  "longitude": "32.71813750"
}
```
## Props

| Property value             | Type      | Default value  | Description                                                                             |
| -------------------------- | --------- | ---------------| --------------------------------------------------------------------------------------- |
| `disabled`                 | `Boolean` | `false`        | Disables the dropdown                                                                   |
| `countryCode`              | `string`  | `''`           | Get states by country code. ie `'tr'`                                                   |
| `countryName`              | `string`  | `''`           | Get states by country name. ie `'turkey'`                                               |
| `countryId`                | `Number`  | `null`         | Get states by country id. ie `225`                                                    |
| `selectFirstItem`          | `Boolean` | `false`        | Set first state in the list as selected                                                 |
| `clearable`                | `Boolean` | `false`        | User can clear or not the selected country                                              |
| `multiple`                 | `Boolean` | `false`        | Select multiple country                                                                 |
| `searchable`               | `Boolean` | `true`         | Set states searchable                                                                   |
| `closeOnSelect`            | `Boolean` | `true`         | Close country list on select                                                            |
| `placeholder`              | `String`  | `''`           | Set a placeholder for the input                                                         |
| `preferredState`           | `Array`   | `[]`           | Preferred states list, will be on top of the dropdown. ie `['06', 'WTO']`               |
| `onlyStates`               | `Array`   | `[]`           | List of states will be shown on the dropdown. ie `['06', 'WTO']`                        |
| `ignoredStates`            | `Array`   | `[]`           | List of states will NOT be shown on the dropdown. ie `['06', 'WTO']`                    |
| `immediateCallSelectEvent` | `Boolean` | `false`        | Call the `onSelect` event when the component is mounted.                                |
| `showNotSelectedOption`    | `Boolean` | `false`        | The `Not Selected` option is added to the top of the list. (All values are empty.)      |
| `notSelectedOptionText`    | `String`  | `Not Selected` | Replace `Not Selected` text with another string.                                        |


## Events

| Property value      | Arguments | Description                                                                                                                      |
| ------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `onSelect`          | `Object`  | Fires when the input changes with the argument is the object includes `state object`. (Check the state object example above)     |
| `open`              | `none`    | Triggered when the dropdown is open.                                                                                             |
| `close`             | `none`    | Triggered when the dropdown is closed.                                                                                           |
| `option_selecting`  | `Object`  | Triggered after an option has been selected, before updating internal state. (Return same object with onSelect).                 |
| `option_selected`   | `Object`  | Triggered when an option has been selected, after updating internal state. (Return same object with onSelect).                   |
| `option_deselecting`| `Object`  | Triggered when an option has been deselected, before updating internal state. (Return same object with onSelect).                |
| `option_deselected` | `Object`  | Triggered when an option has been deselected, after updating internal state. (Return same object with onSelect).                 |

## Highlights & Credits

- Data source: [dr5hn/countries-states-cities-database](https://github.com/dr5hn/countries-states-cities-database)
- Vue select: [sagalbot/vue-select](https://github.com/sagalbot/vue-select)
- Vue app created by [vue-cli](https://github.com/vuejs/vue-cli).
