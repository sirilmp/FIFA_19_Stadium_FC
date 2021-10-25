import React from 'react'
import { Radar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { player } from '../slice/playerSlice';

function RadarChart() {

  const playerData = (useSelector(player))


  const RadarData = {
    labels: ['Heading Accuracy', 'Crossing', 'Finishing', 'Short Pass', 'Volleys','Overall'],
    datasets: [
      {
        label: playerData.name,
        borderColor: "rgb(255,0,104,1)",
        backgroundColor: "rgb(255,0,104,.3)",
        pointBorderWidth: 10,
        pointHoverBorderWidth: 8,
        pointBackgroundColor: "rgb(255,0,104)",
        pointBorderColor: "rgb(255,0,104,.5)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255,0,104,1)",
        data: [playerData.heading_acc, playerData.crossing, playerData.finishing, playerData.short_pass,playerData.volleys, playerData.overall]
      }
    ]
  };
  const RadarOptions = {
    scale: {
      ticks: {
        min: 10,
        max: 100,
        stepSize: 10,
        showLabelBackdrop: false,
        backdropColor: "rgb(255,0,104)"
      },
      angleLines: {
        color: "rgba(0,0,0)",
        lineWidth: 1
      },
      gridLines: {
        color: "rgba(0,0,0)",
        circular: false
      }
    }
  };



  return (
    <Radar data={RadarData} options={RadarOptions} />
  );
}

export default RadarChart
