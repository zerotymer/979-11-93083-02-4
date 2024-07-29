<template>
    <div>
        <h2>콘솔을 확인합니다.</h2>
    </div>
</template>


<script setup>
import axios from 'axios'

const requestAPI = async () => {
    const url = '/api/todolist_long/gdhong'
    const response = await axios.get(url, { timeout: 2200 })
        .catch((e) => {
            console.log('오류가 발생하였습니다.')
            if (e instanceof Error)     console.log(e.message)
            else                        console.log(e) 

            return
        })

    // .then((response) => {
    //         console.log('# 응답객체: ', response)
    //     })
        console.log('# 응답객체: ', response)
}

requestAPI()
</script>