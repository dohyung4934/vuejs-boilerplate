<template>
    <div>
        <h1>회원 목록</h1>

        <table class="member-list">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>이름</th>
                    <th>가입일자</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="member in memberList" :key="member.username">
                    <td>{{ member.username }}</td>
                    <td>{{ member.name }}</td>
                    <td>{{ member.registeredDate }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { MemberService, Member } from '@/services/members'

@Component
export default class MemberList extends Vue {
    memberList: Member[] = []

    async created(): Promise<void> {
        await this.getMemberList()
    }

    async getMemberList(): Promise<void> {
        const service = new MemberService()
        const memberResponse = (await service.getMemberList()) || []
        this.memberList = memberResponse
    }
}
</script>

<style scoped lang="scss">
table.member-list {
    thead {
        tr {
            th {
                font-weight: bold;
            }
        }
    }
    tbody {
        tr {
            td {
                text-align: center;
            }
        }
    }
}
</style>
