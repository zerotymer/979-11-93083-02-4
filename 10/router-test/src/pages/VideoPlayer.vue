<template>
    <div class="modal">
        <div class="box">
            <div class="heading">
                <span class="title">:: {{ videoInfo.video.title }}</span>
                <span class="category">({{ videoInfo.video.category }})</span>
                <span class="float-end badge bg-secondary pointer" @click="stopVideo">X</span>
            </div>
            <div class="player">
                <YouTubeVue3 ref="playerRef" :videoid="videoInfo.video.id" 
                :autoplay="1" :controls="1" 
                    @ended="playNext"/>
            </div>
            <div>
                <div>
                    <i class="fa fa-backward ml-2 pointer" @click="playPrev"></i>
                    <i class="fa fa-stop ml-2 pointer" @click="stopVideo"></i>
                    <i class="fa fa-forward ml-2 pointer" @click="playNext"></i>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { reactive, ref, inject } from 'vue'
import { useRoute, useRouter  } from 'vue-router'
import { YouTubeVue3  } from 'youtube-vue3'

export default {
    name: 'VideoPlayer',
    components: { YouTubeVue3 },
    setup: function(props, context) {
        /// defines
        const videos = inject('videos')
        const playerRef = ref()
        const currentRoute = useRoute()
        const router = useRouter()

        console.log('playerRef', playerRef)
        window.test = playerRef

        /// data
        let videoInfo = reactive({
            video: videos.find(i => i.id === currentRoute.params.id)
        })

        console.log('test')
        console.log(playerRef.value)

        /// methods
        const stopVideo = () => {
            // playerRef.value.player is undefined.
            const player = playerRef.value.player
            player && player.stopVideo()
            console.log('debug', player)
            router.push('/videos')
        }
        const playNext = () => {
            let index = videos.findIndex( i => i.id === currentRoute.params.id)
            index = ++index < videos.length ? index : 0;

            const nextVideo = videos[index]
            videoInfo.video = nextVideo
            router.push(`/videos/${ videoInfo.video.id }`)
        }
        const playPrev = () => {
            let index = videos.findIndex( i => i.id === currentRoute.params.id)
            index = --index >= 0 ? index : videos.length - 1;

            const prevVideo = videos[index]
            videoInfo.video = prevVideo
            router.push(`/videos/${ prevVideo.id }`)
        }

        return { videoInfo, stopVideo, playNext, playPrev, playerRef }
    }
}
</script>


<style scoped>
.modal { display: block; position: fixed; z-index: 1;
    left: 0; top: 0; width: 100%; hight: 100%; 
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4)}
.box { background-color: white; margin: 80px auto;
    max-width: 500px; min-width: 100px; min-height: 350px;
    font: 13px "verdana";
    padding: 10px; }
.box div { padding: 0; display: block; margin: 10px 0 0 0; }
.box .heading { background: #33A17F; font-weight: 300;
    text-align: left; color: #fff;
    margin: 5px 0; padding: 10px; min-width: 200px; max-width: 500px; }
.box .player { background-color: white; }
.pointer { cursor: pointer; }
</style>