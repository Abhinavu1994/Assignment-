import React from 'react';
import {View} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

const DemographicChart = ({data}) => {
  const barColor = 'blue';
  return (
    <View>
      <BarChart
        data={{
          labels: [
            'Week 1',
            'Week 2',
            'Week 3',
            'Week 4',
            'Week 5',
            'Week 6',
            'Week 7',
            'Week 8',
            'Week 9',
            'Week 10',
            'Week 11',
            'Week 12',
          ],
          datasets: [
            {
              data: data, // Replace 'data' with your actual data array
            },
          ],
        }}
        showBarTops={false}
        showValuesOnTopOfBars={true}
        width={800}
        height={300}
        yAxisLabel="%"
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          barPercentage: 0.7,
          height: 5000,
          barRadius: 5,
          fillShadowGradient: `rgba(1, 122, 205, 1)`,
          fillShadowGradientOpacity: 1,
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
          style: {
            borderRadius: 20,
            marginBottom: 10,
            // fontFamily: 'Bogle-Regular',
          },
          propsForBackgroundLines: {
            strokeWidth: 1,
            stroke: '#e3e3e3',
            strokeDasharray: '0',
          },
        }}
      />
    </View>
  );
};

export default DemographicChart;
