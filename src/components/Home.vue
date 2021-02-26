<template>
    <div>
        <router-link :to="{ name: 'Register' }">회원 가입</router-link>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class HomeComponent extends Vue {}
</script>
