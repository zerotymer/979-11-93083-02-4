<template>
    <div>
        <h2>콘솔을 확인합니다.</h2>
    </div>
</template>


<script setup>
import axios from 'axios'

const requestAPI = async () => {
    const url = '/api/todolist/gdhong'
    let data = { todo: '윗몸일으키기 3세트', desc: '너무 빠르지 않게...' }
    const response = await axios.post(url, data)
    console.log('# 응답객체: ', response)
}

requestAPI()
</script>