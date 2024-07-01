<template>
  <div>
    <InputName @nameChanged="nameChangedHandler" @contextmenu="test" />
    <br />
    <h3>App 데이터 : {{ parentName }} </h3>
  </div>
</template>


<script>
import InputName from './components/InputName.vue';

export default {
  name: 'App4',
  components: { InputName },
  data: () => ({
    parentName: ''
  }),
  methods: {
    nameChangedHandler: function(arg) {
      console.log(va);
      this.parentName = arg.name;
    },
    test: function(e) {
      console.log(arguments);
    }
  }
};
</script>