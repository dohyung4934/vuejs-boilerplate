<template>
    <div>
        <h1>{{ computedMessage }}</h1>
        <h2>{{ mynum }}</h2>
        <button @click="myOnClick">클릭</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class MyComponent extends Vue {
    @Prop({ type: Number }) readonly mynum!: number

    message = 'Hello world!!!'

    get computedMessage(): string {
        return 'mynum = ' + this.mynum
    }

    myOnClick() {
        console.log('클릭')
    }
}
</script>
