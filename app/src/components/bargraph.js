
import React from 'react';
 
import { View, StyleSheet, Text, Dimensions } from 'react-native';
 
import { BarChart } from "react-native-chart-kit";
 
export default function BarGraph() {
 
  return (
 
    <View style={styles.MainContainer}>
 
      <BarChart
        data={{
          labels: [  "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          
       ],
          datasets: [{ data: [  82,
            62,
            92,
            87,
            62,
            122,] }],
        }}
        width={Dimensions.get('window').width - 30}
        height={230}
        yAxisLabel={'$ - '}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#458336',
          backgroundGradientTo: '#458336',
          decimalPlaces: 2,
          color: (opacity = 255) => '#ECEFF1',
          style: {
            borderRadius: 12, padding: 10
          },
        }}
      />
 
      <Text style={{ fontSize: 28, textAlign: 'center' }}>Company count per month</Text>
 
    </View>
  );
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
 
});