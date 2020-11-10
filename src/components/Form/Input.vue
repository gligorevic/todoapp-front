<template>
  <div class="input-field">
    <label :for="label">{{ label }}</label>
    <input
      :value="value"
      @input="updateValue($event.target.value)"
      :type="type"
      :id="label"
      class="form-control"
      :class="{ invalid: !!error }"
      :autofocus="autofocus"
    />
    <span class="red-text text-darken-1" v-if="!!error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  props: ["label", "type", "value", "error", "autofocus"],
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>
