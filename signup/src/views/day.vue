<template>
     <div id="div">
     <div class="container">
            <div class="my-5">
                <form>
                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                        
                            <div class="input-group">
                             <h5> City:</h5>  <input type="text" class="form-control" v-model="city">
                                <div class="input-group-append">
                                    <button @click="getData2"  class="btn btn-success" type="submit">Hour</button>
                                    <button @click="getData"  class="btn btn-success" type="submit">Day</button>
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
                  type: 'line',
                  data: {
                      labels: this.dates,
                      datasets: [{
                          label: 'Avg. Temp',
                          backgroundColor: 'red',
                          borderColor: 'maroon',
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

                                  label += Math.Floor(tooltipItem.yLabel);
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
                                      hour: 'D',
                                
    
                                      backgroundcolor:'green',
                                  },
                                  tooltipFormat: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                              },
                              scaleLabel: {
                                  display: true,
                                  labelString: 'Date'
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
      },
    getData2: function() {

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
                          borderColor: '#cc6d3e',
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
                                   borderColor: 'green',
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
                                   borderColor: '#cc6d3e',
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
  }

    

</script>
<style scoped>
.container{
    background: url("../assets/weather.jpeg");
}
h5{
    color: brown;
}

</style>
