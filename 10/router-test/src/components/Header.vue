<template>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2">
        <span class="navbar-brand">이날치(LeeNalChi)</span>
        <button class="navbar-toggler1" type="button" @click="changeIsNavShow">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div :class="navClass">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'home' }">홈</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'about' }">소개</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'members' }">멤버</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'videos' }">영상</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>


<script>
import { reactive, computed } from 'vue'

export default {
    setup: function(props, context) {
        /// data
        const state = reactive({
            isNavShow: false
        })

        /// computed
        const navClass = computed(() => state.isNavShow ? 'collapse navbar-collapse show' : 'collapse navbar-collapse')
        
        /// methods
        const changeIsNavShow = () => { state.isNavShow = !state.isNavShow }

        return { state, changeIsNavShow, navClass }
    }
}
</script>