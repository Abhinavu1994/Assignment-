import {View, Text, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import DemographicChart from '../../../Charts/DemographicChart';
import {ScrollView} from 'react-native-gesture-handler';

export default function Insight() {
  const chartData = [25, 45, 60, 30, 75, 40, 90, 20, 55, 70, 45, 80];
  const [selectedMonth, setSelectedMonth] = useState('January');

  const [percentageData, setPercentageData] = useState([52.4, 0, 47.6]);
  const [tooltipIndex, setTooltipIndex] = useState(null);

  const handleSliceClick = index => {
    setTooltipIndex(index);
  };

  const handleBarClick = index => {
    // When a bar is clicked, you can display the percentage value for that week.
    const selectedPercentage = chartData[index];
    alert(`Week ${index + 1}: ${selectedPercentage}%`);
  };
  return (
    <View>
      <View
        style={{
          //   backgroundColor: 'red',
          //   flexDirection: 'row',
          justifyContent: 'center',
          //   paddingHorizontal: 16,
          margin: 10,
          borderRadius: 15,
          borderWidth: 0.5,
          borderColor: 'gray',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>
            Demographics
          </Text>
          <Picker
            selectedValue={selectedMonth}
            onValueChange={itemValue => setSelectedMonth(itemValue)}
            style={{width: 150}}>
            <Picker.Item label="January" value="January" />
            <Picker.Item label="February" value="February" />
            {/* Add more months as needed */}
          </Picker>
        </View>

        {/* <TouchableOpacity onPress={() => handleBarClick(0)}> */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <DemographicChart data={chartData} />
          {/* <View>
            <Text>Profile Section</Text>
            <PieChartComponent
              data={percentageData}
              onSliceClick={handleSliceClick}
            />
            {tooltipIndex !== null && (
              <Text>
                Tooltip: {percentageData[tooltipIndex]}% ({tooltipIndex})
              </Text>
            )}
          </View> */}
        </ScrollView>
        {/* </TouchableOpacity> */}
      </View>
    </View>
  );
}
