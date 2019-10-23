<template>
     <div>
     <div class="container">
            <div class="my-5">
                <form v-on:submit.prevent="getData">
                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                        
                            <div class="input-group">
                             <h5> City:</h5>  <input type="text" class="form-control" v-model="city">
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="my-5">
                <div class="alert alert-info" v-show="loading">
                    Loading...
                </div>
                <div v-show="chart != null">
                    <canvas id="myChart"></canvas>
                </div>
            </div>
        </div>
      <!-- <h4>DAYS</h4>
       <div class="container">
          <div class="col"><highcharts :options="chartOptions"></highcharts></div>
        
      </div>  -->
  </div> 
</template>

<script>
// import { Chart } from "highcharts-vue";

export default {
    components:{
        highcharts:Chart
    },
    data() {
      return{
      chart: null,
      city: '',
      dates: [],
      temps: [],
      loading: false,
      errored: false
      }
  },
  methods: {
      getData: function() {

          this.loading = true;

          if (this.chart != null) {
              this.chart.destroy();
          }

          axios.get('https://api.openweathermap.org/data/2.5/forecast', {
              
              params: {
                  q: this.city,
                  units: 'imperial',
                  appid: '7fecff555d03787322e5aa20232870c7'
              }
          })
          .then(response => {

              this.dates = response.data.list.map(list => {
                  return list.dt_txt
              })

              this.temps = response.data.list.map(list => {
                  return list.main.temp;
              })

              var ctx = document.getElementById("myChart");
              this.chart = new Chart(ctx, {
                  type: 'bar',
                  data: {
                      labels: this.dates,
                      datasets: [{
                          label: 'Avg. Temp',
                          backgroundColor: 'blue',
                          borderColor: 'rgb(54, 162, 235)',
                          fill: false,
                          data: this.temps
                      }]
                  },
                  options: {
                      title: {
                          display: true,
                          text: 'Temperature with Chart.js'
                      },
                      tooltips: {
                          callbacks: {
                              label: function(tooltipItem, data) {
                                  var label = data.datasets[tooltipItem.datasetIndex].label || '';

                                  if (label) {
                                      label += ': ';
                                  }

                                  label += Math.floor(tooltipItem.yLabel);
                                  return label + '°F';
                              }
                          }
                      },
                      scales: {
                          xAxes: [{
                              type: 'time',
                              time: {
                                  unit: 'hour',
                                  displayFormats: {
                                      hour: ' @ hA'
                                  },
                                  tooltipFormat: 'MMM. DD @ hA'
                              },
                              scaleLabel: {
                                  display: true,
                                  labelString: 'Date/Time'
                              }
                          }],
                          yAxes: [{
                              scaleLabel: {
                                  display: true,
                                  labelString: 'Temperature (°F)'
                              },
                              ticks: {
                                  callback: function(value, index, values) {
                                      return value + '°F';
                                  }
                              }
                          }]
                      },
                  }
              });

          })
          .catch(error => {
              console.log(error);
              this.errored = true;
          })
          .finally(() => this.loading = false)
      }
  }
    //     return{
    //         time: "hours",
    //   chartOptions: {
    //     chart: {
    //       type: "column"
    //     },
    //     title: {
    //       text: "Days"
    //     },
    //     xAxis: {
    //       categories: [
    //         "sun",
    //         "Mon",
    //         "Tue",
    //         "Wed",
    //         "Thu",
    //         "Fri",
    //         "Sat"
            
    //       ],
    //       crosshair: true
    //     },
    //     yAxis: {
    //       min: 0,
    //       title: {
    //         text: "Rain(mm)"
    //       }
    //     },
    //     colors: ["blue"],
    //     series: [
    //       {
    //         data: [
    //           49.9,
    //           71.5,
    //           106.4,
    //           129.2,
    //           144.0,
    //           176.0,
    //           135.6
              
    //         ] 
    //       }
    //     ],
    //   }
    // }
    }

</script>
