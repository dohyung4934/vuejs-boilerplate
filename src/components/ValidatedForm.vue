<template>
    <div>
        <label class="input-label" :for="name">{{ label }}</label>
        <input type="text" :name="name" v-model.trim="name" :placeholder="placeholder" />
        <p class="error-message">{{ errorName }}</p>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ValidatedForm extends Vue {
    @Prop() name!: String
    @Prop() label!: String
    @Prop() placeholder!: String
    @Prop() rule!: RegExp
    @Prop() errorMsg!: String
}
</script>

<style scoped lang="scss">
.input-label {
    display: block;
}
.error-message {
    color: red;
}
</style>
