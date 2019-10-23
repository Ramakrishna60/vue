<template>
  <div id="high">
    <nav class="navbar navbar-dark bg-warning">
      <form class="form-inline">
          <center>
        <router-link to="/Weather" button id="button-style" class="btn btn-success" type="button">Weather</router-link>
        <!-- <router-link to="/Weather">Weather</router-link> -->
          </center>
      </form>
    </nav>
     <div class="sidenav">
    </div>
<div class="container">
  <div class="row">
    <div class="col"><highcharts :options="chartOptions"></highcharts></div>
    <div class="col"><highcharts :options="chaOptions"></highcharts></div>
    <div class="w-100"></div>
    <div class="col"><highcharts :options="charOptions"></highcharts></div>
    <div class="col"> <highcharts :options="options"></highcharts></div>
  </div>
</div>
  </div>
    
</template>
<script>
import { Chart } from "highcharts-vue";

export default {
    components:{
        highcharts:Chart
    },
    
  data: function() {
    return {
     
      chartOptions: {
        chart: {
    type: 'area',
    inverted: true
  },
  title: {
    text: 'Average fruit consumption during one week'
  },
  subtitle: {
    style: {
      position: 'absolute',
      right: '0px',
      bottom: '10px'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -150,
    y: 100,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
  },
  xAxis: {
    categories: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ]
  },
  yAxis: {
    title: {
      text: 'Number of units'
    },
    allowDecimals: false,
    min: 0
  },
  plotOptions: {
    area: {
      fillOpacity: 0.5
    }
  },
  series: [{
    name: 'John',
    data: [3, 4, 3, 5, 4, 10, 12]
  }, {
    name: 'Jane',
    data: [1, 3, 4, 3, 3, 5, 4]
  }]
        // series: [
        //   {
        //     data: [1, 2, 3] // sample data
        //   }
        // ]
      },
   
      
      chaOptions:{   
       
        chart: {
          type: "pie"
        },
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie"
        },
        title: {
          text: "Browser market shares in January, 2018"
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %"
            }
          }
        },
        series: [
          {
            name: "Brands",
            colorByPoint: true,
            data: [
              {
                name: "Chrome",
                y: 61.41,
                sliced: true,
                selected: true
              },
              {
                name: "Internet Explorer",
                y: 11.84
              },
              {
                name: "Firefox",
                y: 10.85
              },
              {
                name: "Edge",
                y: 4.67
              },
              {
                name: "Safari",
                y: 4.18
              },
              {
                name: "Sogou Explorer",
                y: 1.64
              },
              {
                name: "Opera",
                y: 1.6
              },
              {
                name: "QQ",
                y: 1.2
              },
              {
                name: "Other",
                y: 2.61
              }
            ]
          }
        ]
    
      },


        
      
      charOptions: {
        chart: {
    type: 'bar'
  },
  title: {
    text: 'Historic World Population by Region'
  },
  subtitle: {
    text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
  },
  xAxis: {
    categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Population (millions)',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' millions'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Year 1800',
    data: [107, 31, 635, 203, 2]
  }, {
    name: 'Year 1900',
    data: [133, 156, 947, 408, 6]
  }, {
    name: 'Year 2000',
    data: [814, 841, 3714, 727, 31]
  }, {
    name: 'Year 2016',
    data: [1216, 1001, 4436, 738, 40]
  }]
        
        // chart: {
        //   type: "column"
        // },
        // title: {
        //   text: "Days"
        // },
        // xAxis: {
        //   categories: [
        //     "Jan",
        //     "Feb",
        //     "Mar",
        //     "Apr",
        //     "May",
        //     "Jun",
        //     "Jul",
        //     "Aug",
        //     "Sep",
        //     "Oct",
        //     "Nov",
        //     "Dec"
        //   ],
        //   crosshair: true
        // },
        // yAxis: {
        //   min: 0,
        //   title: {
        //     text: "Rain(mm)"
        //   }
        // },
        // colors: ["blue"],
        // series: [
        //   {
        //     data: [
        //       49.9,
        //       71.5,
        //       106.4,
        //       129.2,
        //       144.0,
        //       176.0,
        //       135.6,
        //       148.5,
        //       216.4,
        //       194.1,
        //       95.6,
        //       54.4
        //     ] // sample data
        //   }
        // ],
      

      },

     options:{
  title: {
    text: 'Monthly Average Temperature',
    x: -20 //center
  },
  subtitle: {
    text: 'Source: WorldClimate.com',
    x: -20
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
  },
  yAxis: {
    title: {
      text: 'Temperature (°C)'
    },
    plotLines: [{
      value: 0,
      width: 1,
      color: '#808080'
    }]
  },
  tooltip: {
    valueSuffix: '°C'
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
  },
  series: [{
    name: 'Tokyo',
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
  }, {
    name: 'New York',
    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
  }, {
    name: 'Berlin',
    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
  }, {
    name: 'London',
    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
  }]
}
 }

    }
    
  }

</script>
<style scoped>
.sidenav {
    height: 100%;
    width: 160px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-image: linear-gradient(brown, yellow);;
    overflow-x: hidden;
    padding-top: 20px;
  }
  
  .sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
  }
  
  .sidenav a:hover {
    color: #f1f1f1;
  }
  #button-style{
    margin-left: 200px;
  }
#high{
background-color:whitesmoke;
  }
</style>