<template>
  <Field>
    <label :for="label" v-if="label">{{ label }}</label>
    <input
      :id="label"
      :value="value"
      v-bind="$attrs"
      @input="updateValue"
    />
    <span @click="dismissError" v-if="error && errorDisplayed">{{ error }}</span>
  </Field>
</template>

<script>
import inputFieldMixin from '@/mixins/inputFieldMixin'
import Field from '@/components/form/Field'

export default {
  name: 'TextInput',
  mixins: [inputFieldMixin],
  components: {
    Field
  }
  inheritAttrs: false
}
</script>
