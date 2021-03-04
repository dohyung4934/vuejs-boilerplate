<template>
    <div id="contents">
        <h1>회원 가입</h1>
        <form ref="signUpForm" method="POST" @submit="formSubmit">
            <div>
                <label for="name">이름</label>
                <input type="text" name="name" autocomplete="name" v-model.trim="name" placeholder="이름을 입력하세요" />
                <p class="error-message">{{ nameError }}</p>
            </div>
            <div>
                <label for="username">아이디</label>
                <input type="text" name="username" autocomplete="username" v-model="username" placeholder="아이디를 입력하세요" />
                <p class="error-message">{{ usernameError }}</p>
            </div>
            <div>
                <label for="password">비밀번호</label>
                <input type="password" name="password" autocomplete="current-password" v-model="password" placeholder="비밀번호를 입력하세요" />
                <p class="error-message">{{ passwordError }}</p>
            </div>
            <div>
                <input type="submit" value="가입" />
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { component } from 'node_modules/vue/types/umd'
import { Vue, Component, Watch } from 'vue-property-decorator'
import { ValidatePreset, ValidateRegExp, validateForm } from '@/services/globalValidator'

@Component({
    components: {}
})
export default class RegisterComponent extends Vue {
    @ValidateRegExp(/^[A-Za-z가-힣 ]{1,15}$/, '이름은 한글 또는 영문으로만 입력 가능하며, 길이는 최대 15자까지 허용됩니다.')
    name = ''
    @ValidateRegExp(/^[A-Za-z0-9]{1,15}$/, '아이디는 영문과 숫자로 이루어진 값만 허용되며, 길이는 최대 15자까지 가능합니다.')
    username = ''
    @ValidateRegExp(/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&()\-_=+]).{8,30}$/, '비밀번호는 영문, 숫자, 특수문자를 각각 1자씩 포함해야 하며, 전체 길이는 8자 ~ 30자 사이여야 합니다.')
    password = ''

    nameError = ''
    usernameError = ''
    passwordError = ''

    @Watch('name')
    onNameChange(): void {
        //this.validateName()
        validateForm(this, 'name')
    }
    @Watch('username')
    onUsernameChange(): void {
        //this.validateUsername()
        validateForm(this, 'username')
    }
    @Watch('password')
    onPasswordChange(): void {
        //this.validatePassword()
        validateForm(this, 'password')
    }

    formSubmit(e: Event): void {
        //if (this.formHasErrors()) {
        if (!validateForm(this)) {
            e.preventDefault()
        } else {
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

        .error-message {
            color: red;
        }
    }
}
</style>
