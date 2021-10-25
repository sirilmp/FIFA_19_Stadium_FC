
export const RadarData = {
    labels: ['Crossing','Finishing','Heading Accuracy','Short Pass'],
    datasets: [
      {
        backgroundColor: "rgba(34, 202, 236, .2)",
        borderColor: "rgba(34, 102, 219)",
        pointBackgroundColor: "rgba(34, 202, 236, 1)",
        poingBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 202, 236, 1)",
        // data: [playerData.crossing,playerData.finishing,playerData.heading_acc,playerData.short_pass]
      }
    ]
  };
  export const RadarOptions = {
    scale: {
      ticks: {
        min: 10,
        max: 100,
        stepSize: 10,
        showLabelBackdrop: false,
        backdropColor: "rgba(203, 197, 11, 1)"
      },
      angleLines: {
        color: "rgba(255, 255, 255, .3)",
        lineWidth: 1
      },
      gridLines: {
        color: "rgba(255, 255, 255, .3)",
        circular: false
      }
    }
  };
  