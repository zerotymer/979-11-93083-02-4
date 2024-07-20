<template>
    <div class="card card-body">
        <h2 class="m-3">영상 리스트</h2>
        <ul class="list-group">
            <li v-for="video in videos" :key="video.id"
                class="list-group-item text-left" :class="playingVideo(video.id)">
                {{ video.title }} ({{ video.category }})
                <router-link :to="{ name: 'videos/id', params: { id: video.id }}">
                    <span class="float-end badge bg-secondary">듣기</span>
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>


<script>
import { inject } from 'vue'
import { useRoute } from 'vue-router'

export default {
    name: 'Videos',
    setup: function(props, context) {
        const videos = inject('videos')
        const { params }  = useRoute()
        const playingVideo = (id) => ( id === params.id ? 'list-group-item-secondary': '')

        return { playingVideo, videos }
    }
}
</script>