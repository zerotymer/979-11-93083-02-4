<template>
  <div class="header">
    <h1 class="headerText">태평양 전쟁의 해전</h1>
    <nav>
      <ul class="nav nav-tabs nav-fill">
        <li class="nav-item" v-for="tab in tabs" :key="tab.id">
          <a class="nav-link" style="cursor: pointer;"
            :class="{ active: tab.id === currentTab}"
            @click="changeTab(tab.id)">{{ tab.label }}</a>
        </li>
      </ul>
    </nav>
  </div>  
  <div class="container">
    <component :is="currentTab"></component>
  </div>
</template>


<script>
import { defineAsyncComponent } from 'vue';
import pMinDelay from 'p-min-delay';
import Loading from './components/Loading.vue';

const CoralSeaTab = defineAsyncComponent({
  loader: () => pMinDelay(import('./components/CoralSeaTab.vue'), 2000),
  loadingComponent: Loading
});
const MidwayTab = defineAsyncComponent(() => pMinDelay(import('./components/MidwayTab.vue'), 2000));
const LeyteGulfTab = defineAsyncComponent(() => pMinDelay(import('./components/LeyteGulfTab.vue'), 2000));
// import CoralSeaTab from './components/CoralSeaTab.vue';
// import MidwayTab from './components/MidwayTab.vue';
// import LeyteGulfTab from './components/LeyteGulfTab.vue';

export default {
  name: 'App',
  components: { CoralSeaTab, LeyteGulfTab, MidwayTab },
  data: () => ({
    currentTab: 'CoralSeaTab',
    tabs: [
      { id: 'CoralSeaTab', label: '산호해 해전' },
      { id: 'MidwayTab', label: '미드웨이 해전' },
      { id: 'LeyteGulfTab', label: '레이테만 해전' },
    ]
  }),
  methods: {
    changeTab: function(tab) {
      this.currentTab = tab;
    }
  }
}
</script>


<style>
.header { padding: 20px 0 0 20px; }
.headerText { padding: 0 20px 40px 20px; }
.tab { padding: 30px; }
</style>
