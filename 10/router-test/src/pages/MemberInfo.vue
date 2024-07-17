<template>
    <div className="mt-5">
        <img :src="member.photo" class="img" />
        <h4 class="mt-2">{{ member.name }}({{ member.role }})</h4>
        <p>{{ member.desc }}</p>
        <a v-if="member.insta && member.insta.length > 0" class="f fa-instagram m1" :href="member.insta"></a>
        <a v-if="member.facebook && member.facebook.length > 0" class="f fa-facebook m1" :href="member.facebook"></a>
        <a v-if="member.youtube && member.youtube.length > 0" class="f fa-youtube m1" :href="member.youtube"></a>
        <br />
        <br />
        <router-link to="/members">멤버 목록으로</router-link>
    </div>
</template>


<script>
import { useRoute } from 'vue-router'
import members from '@/members.json'

export default {
    name: 'MemberInfo',
    setup: function(props, context) {
        const currentRoute = useRoute()
        const id = parseInt(currentRoute.params.id, 10)
        const member = members.find(m => m.id === id)
        return { member }
    }
}
</script>