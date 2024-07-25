<template>
  <div>
    <h2>로그인</h2>
    사용자: <input type="text" v-model="info.userid" /><br />
    암호: <input type="text" v-model="info.userpw" /><br />
    <br />
    <button @click="login">로그인</button>
  </div>
</template>


<script>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { loginProcess } from '@/utils/AuthUtil';

export default {
  name: 'Login',
  setup: function(props, context) {
    const router = useRouter()
    const currentRouter = useRoute()
    const fromname = currentRouter.query.fromname

    const info = reactive({ userid: '', userpw: ''})

    const success = () => {
        if (fromname)   router.push({ path: fromname })
        else            router.push({ name: 'home' })
    }
    const fail = () => alert('로그인 실패')
    const login = () => loginProcess(info.userid, info.userpw, success, fail)

    return { info, login }
  }
}
</script>