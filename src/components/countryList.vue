<template>
  <div class="list">
    <div>
      <input type="radio" id="tr" value="tr" v-model="CountryCode" @change="codeChanged">
      <label for="tr">Turkey</label>
    </div>
    <div>
      <input type="radio" id="us" value="us" v-model="CountryCode" @change="codeChanged">
      <label for="us">USA</label>
    </div>
    <div>
      <input type="radio" id="gb" value="gb" v-model="CountryCode" @change="codeChanged">
      <label for="gb">United Kingdom</label>
    </div>
    <div>
      <input type="radio" id="de" value="de" v-model="CountryCode" @change="codeChanged">
      <label for="de">Germany</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    countryCode: {
      type: String,
      default: "tr"
    },
  },
  data() {
    return {
      CountryCode: this.countryCode,
    }
  },
  methods: {
    codeChanged() {
      this.$emit('codeChanged', this.CountryCode);
    }
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  gap: 1vh;
  margin-bottom: 3vh;
}
</style>