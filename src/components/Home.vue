<template>
    <div>
        <div>
            <router-link :to="{ name: 'MemberRegister' }">회원 가입</router-link>
        </div>
        <div>
            <router-link :to="{ name: 'MemberList' }">회원 목록</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class HomeComponent extends Vue {}
</script>
