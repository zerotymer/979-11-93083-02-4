<template>
  <div>
    <h2>할일 수정</h2>
    <div>
      <h5>할일: </h5>
      <input type="text" v-model.trim="todo" />
    </div>
    <div>
      <h5>설명: </h5>
      <textarea v-model.trim="desc" />
    </div>
    <div>
      <button @click.stop="add">추가</button>
      <button @click.stop="cancel">취소</button>
    </div>
  </div>
</template>


<script setup>
import { ref, reactive } from 'vue';
import { createRouter } from 'vue-router'


/// region pre-setup
const props = defineProps({
  id: { type: string, required: true }
})
// const emit = defineEmits({})
/// endregion


/// region data
const todo = ref('')
const desc = ref('')
/// endregion


/// region methods
const add = () => {
  const valid = validate()
  if (!valid.status) {
    window.alert(valid.message)
    return 
  }

  // todo : API?

}
const cancel = () => {
  console.log('cancel', todo.value)
  todo.value = ''
  desc.value = ''
}

const validate = () => {
  const valid = { status: false, message: '' }
  if (todo.value.length < 4) return 


  return { status: true, ...valid }
}
/// endregion

</script>