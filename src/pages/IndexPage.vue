<template>
  <q-page class="flex flex-center">
    <Bar :data="data" :options="options" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import * as chartConfig from './chartConfig.ts'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default defineComponent({
  name: 'IndexPage , App',
  components: {
    Bar
  },
  data() {
    return chartConfig
  }
}
)
</script>
