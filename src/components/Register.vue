<template>
    <div id="contents">
        <h1>회원 가입</h1>
        <form ref="signUpForm" method="POST" @submit="formSubmit">
            <validated-form name="name" label="이름" placeholder="이름을 입력하세요" :rule="/[가-힣A-Za-z ]{1,15}/" errorMsg="이름은 한글 또는 영문으로만 입력하실 수 있습니다"></validated-form>
            <div>
                <label for="name">이름</label>
                <input type="text" name="name" autocomplete="name" v-model.trim="name" placeholder="이름을 입력하세요" />
                <p class="error-message">{{ errorName }}</p>
            </div>
            <div>
                <label for="username">아이디</label>
                <input type="text" name="username" autocomplete="username" v-model="username" placeholder="아이디를 입력하세요" />
            </div>
            <div>
                <label for="password">비밀번호</label>
                <input type="password" name="password" autocomplete="current-password" v-model="password" placeholder="비밀번호를 입력하세요" />
            </div>
            <div>
                <input type="submit" value="가입" />
                <p class="error-message">{{ errorForm }}</p>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import ValidatedForm from './ValidatedForm.vue'

@Component({
    components: { ValidatedForm }
})
export default class RegisterComponent extends Vue {
    name = ''
    errorName = ''
    username = ''
    password = ''
    errorForm = ''

    @Watch('name')
    onNameChange() {
        if (!this.isValidName()) {
            this.errorName = '유효하지 않은 값입니다'
        } else {
            this.errorName = ''
        }
    }
    // @Watch('username')
    // onUsernameChange() {
    //     if ()
    // }
    // @Watch('password')
    // onNameChange() {

    // }

    isValidName(): boolean {
        return /^[A-Za-z가-힣 ]{1,15}$/.test(this.name)
    }

    formSubmit(e: Event) {
        if (!this.isValidName()) {
            this.errorForm = '오류를 모두 수정하신 후 다시 제출해 주세요'
            e.preventDefault()
        } else {
            this.errorForm = ''
            alert('성공')
        }
    }
}
</script>

<style scoped lang="scss">
#contents {
    margin-left: 20px;
}
form {
    div {
        margin-bottom: 10px;

        label {
            display: block;
        }
    }
}
</style>
