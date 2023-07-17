<template>
  <div class="row text-center">
    <div class="col q-pa-md">
      <q-page class="flex flex-center">
        <Bar :data="data1" :options="options" />
      </q-page>
    </div>
    <div class="col q-pa-md">
      <q-page class="flex flex-center">
        <Radar :data="data2" :options="options" />
      </q-page>
    </div>
    <div class="col q-pa-md">
      <q-page class="flex flex-center">
        <PolarArea :data="data3" :options="options" />
      </q-page>
    </div>
  </div>
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
  LinearScale,
  RadialLinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Filler
} from 'chart.js'
import { Bar, Radar, PolarArea } from 'vue-chartjs'
import * as chartConfig from './chartConfig.ts'

ChartJS.register(CategoryScale, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler)

export default defineComponent({
  name: 'IndexPage , App',
  components: {
    Bar, Radar, PolarArea
  },
  data() {
    return chartConfig
  }
}
)
</script>
