<template>
  <div id="high">
    <nav class="navbar">
      <form class="form-inline">
          <center>
        <!-- <router-link to="/Weather" button id="button-style" class="btn btn-success" type="button">Weather</router-link> -->
        <!-- <router-link to="/Weather">Weather</router-link> -->
          </center>
           <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Dashboard</a>
      <router-link to="/Weather" button id="button-style" class="btn btn-success" type="button">Weather</router-link>
      <!-- <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"> -->
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#">Sign out</a>
        </li>
      </ul>
    </nav>
      </form>
    </nav>
     <div class="container-fluid">
      <div class="row">
        <a href="https://icons8.com/icon/43609/dashboard">Dashboard </a>
        <nav class="col-md-2 d-none d-md-block bg-light sidebar" id="sid">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home"></span>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Sigin">
                  <span data-feather="file"></span>
                 <img src="https://img.icons8.com/nolan/50/000000/sign-up.png">
                  Sigin
                </a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="Login">
                  <span data-feather="file"></span>
                  <img src="https://img.icons8.com/nolan/50/000000/login-rounded-right.png">
                  Login
                </a>
              </li>
              
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span></span>
             
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <img src="https://img.icons8.com/nolan/50/000000/dashboard.png"> Dashboard <span data-feather="file-text"></span>
                  
                  
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Weather">
                  <span data-feather="file-text"></span>
                  <img src="https://img.icons8.com/nolan/64/000000/partly-cloudy-day.png">
                  Weather
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Weather">
                  <span data-feather="file-text"></span>
                  <img src="https://img.icons8.com/nolan/64/000000/clock.png">
                  Day/Hour
                </a>
              </li>
              
            </ul>
          </div>
        </nav>
      </div>
      </div>
     <div class="sidenav">

       <div class="col"><highcharts :options="chart2Options"></highcharts>
       <highcharts :options="chart9Options"></highcharts>
      
       </div>
    </div>
<div class="container">
  <div class="row">
    <div class="col"><highcharts :options="chartOptions"></highcharts></div>
    <div class="col"><highcharts :options="chaOptions"></highcharts></div>
    <div class="col"><highcharts :options="cha1Options"></highcharts></div>
    <div class="w-100">
      
    <div class="col"><highcharts :options="charOptions" class="svg"></highcharts></div>
    <!-- <div class="col"><highcharts :options="chart9Options" class="svg"></highcharts></div></div> -->
    <div class="col"> <highcharts :options="options" class="svg"></highcharts></div>
    <div ></div>
    </div>
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
     chart9Options:{
       chart: {
        type: 'pie'
    },

   

    title: {
        text: 'Desktop screen readers'
    },

    subtitle: {
        text: 'Click on point to visit official website'
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                connectorColor: Highcharts.getOptions().colors[0],
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            point: {
                events: {
                    click: function () {
                        window.location.href = this.website;
                    }
                }
            },
            cursor: 'pointer'
        }
    },

    series: [{
        name: 'Percentage usage',
        borderColor: Highcharts.getOptions().colors[0],
        data: [{
            name: 'JAWS',
            y: 30.2,
            website: 'https://www.freedomscientific.com/Products/Blindness/JAWS',
            color: 'url(#highcharts-default-pattern-0)',
            accessibility: {
                description: 'This is the most used desktop screen reader'
            }
        }, {
            name: 'ZoomText',
            y: 22.2,
            website: 'http://www.zoomtext.com/products/zoomtext-magnifierreader',
            color: 'url(#highcharts-default-pattern-1)'
        }, {
            name: 'Window-Eyes',
            y: 20.7,
            website: 'http://www.gwmicro.com/window-eyes',
            color: 'url(#highcharts-default-pattern-2)'
        }, {
            name: 'NVDA',
            y: 14.6,
            website: 'https://www.nvaccess.org',
            color: 'url(#highcharts-default-pattern-4)'
        }, {
            name: 'VoiceOver',
            y: 7.6,
            website: 'http://www.apple.com/accessibility/osx/voiceover',
            color: 'url(#highcharts-default-pattern-3)'
        }, {
            name: 'System Access To Go',
            y: 1.5,
            website: 'https://www.satogo.com',
            color: 'url(#highcharts-default-pattern-7)'
        }, {
            name: 'ChromeVox',
            y: 0.3,
            website: 'http://www.chromevox.com',
            color: 'url(#highcharts-default-pattern-6)'
        }, {
            name: 'Other',
            y: 2.9,
            website: 'http://www.disabled-world.com/assistivedevices/computer/screen-readers.php',
            color: 'url(#highcharts-default-pattern-5)'
        }]
    }]


     },
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
    chart2Options: {
        chart: {
    type: 'line',
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
          type: "line"
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
       cha1Options:{   
       
        
         chart: {
        type: 'spline'
    },

    accessibility: {
        description: 'Most commonly used desktop screen readers from January 2009 to July 2015 as reported in the Webaim Survey. JAWS remains the most used screen reader, but is steadily declining. ZoomText and WindowEyes are both displaying large growth from 2014 to 2015.'
    },

    legend: {
        symbolWidth: 40
    },

    title: {
        text: 'Desktop screen readers from 2009 to 2015'
    },

    subtitle: {
        text: 'Click on point to visit official website'
    },

    yAxis: {
        title: {
            text: 'Percentage usage'
        }
    },

    xAxis: {
        title: {
            text: 'Time'
        },
        accessibility: {
            description: 'Time from January 2009 to July 2015'
        },
        categories: ['January 2009', 'December 2010', 'May 2012', 'January 2014', 'July 2015']
    },

    tooltip: {
        split: true
    },

    plotOptions: {
        series: {
            point: {
                events: {
                    click: function () {
                        window.location.href = this.series.options.website;
                    }
                }
            },
            cursor: 'pointer'
        }
    },

    series: [
        {
            name: 'JAWS',
            data: [74, 69.6, 63.7, 63.9, 43.7],
            website: 'https://www.freedomscientific.com/Products/Blindness/JAWS'
        }, {
            name: 'NVDA',
            data: [8, 34.8, 43.0, 51.2, 41.4],
            website: 'https://www.nvaccess.org',
            dashStyle: 'Dot'
        }, {
            name: 'VoiceOver',
            data: [6, 20.2, 30.7, 36.8, 30.9],
            website: 'http://www.apple.com/accessibility/osx/voiceover',
            dashStyle: 'ShortDot',
            color: Highcharts.getOptions().colors[7]
        }, {
            name: 'Window-Eyes',
            data: [23, 19.0, 20.7, 13.9, 29.6],
            website: 'http://www.gwmicro.com/window-eyes',
            dashStyle: 'Dash',
            color: Highcharts.getOptions().colors[0]
        }, {
            name: 'ZoomText',
            data: [0, 6.1, 6.8, 5.3, 27.5],
            website: 'http://www.zoomtext.com/products/zoomtext-magnifierreader',
            dashStyle: 'ShortDashDot',
            color: Highcharts.getOptions().colors[8]
        }, {
            name: 'System Access To Go',
            data: [0, 16.2, 22.1, 26.2, 6.9],
            website: 'https://www.satogo.com',
            dashStyle: 'ShortDash',
            color: Highcharts.getOptions().colors[1]
        }, {
            name: 'ChromeVox',
            data: [0, 0, 2.8, 4.8, 2.8],
            website: 'http://www.chromevox.com',
            dashStyle: 'DotDash',
            color: Highcharts.getOptions().colors[4]
        }, {
            name: 'Other',
            data: [0, 7.4, 5.9, 9.3, 6.5],
            website: 'http://www.disabled-world.com/assistivedevices/computer/screen-readers.php',
            dashStyle: 'LongDash',
            color: Highcharts.getOptions().colors[7]
        }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    itemWidth: 150
                }
            }
        }]
    }
    
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
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 30;
    left: 1500px;
    background-image: linear-gradient(white);;
    overflow-x: hidden;
    padding-top: 20px;
    margin-left: -130px;

  }
  .row{
    margin-right: 40px;
    margin-left: -90px;
    border-width: 100px;
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
background-color: #47475c;
  }
  .svg{
    margin-top: 9px;
  }
  #container {
    max-width: 400px;
    height: 400px;
    margin: 1em auto;
}
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  width:100px;
  
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
    
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}
#sid{
  width: 200px;
    height: 978px;
    padding-top: 0px;

}
#button-style{
  margin-right: 2560px;
  margin-left: 0;
  
}


</style>