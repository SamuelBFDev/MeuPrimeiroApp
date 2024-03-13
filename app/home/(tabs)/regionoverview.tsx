// RegionOverview.tsx

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit'; // Actual LineChart component
import MapView from 'react-native-maps'; // Actual MapView component


const region = {
    latitude: -14.2350, // latitude for South America
    longitude: -51.9253, // longitude for South America
    latitudeDelta: 10.0,
    longitudeDelta: 10.0,
  };

const RegionOverview: React.FC = () => {
  // Sample data (replace with actual data)
  const regionData = {
    regionName: 'South America',
    gdpPerCapita: 12000,
    literacyRate: 85,
    lifeExpectancy: 75,
    educationIndex: 0.78,
    gdpGrowth: [3.13, 1.89, 2.45, 2.78, 2.32, 2.95, 2.71, 2.88, 2.63, 2.79, 2.54],
    literacyRateHistory: [92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82],
    lifeExpectancyHistory: [74, 74.5, 75, 75.5, 76, 76.5, 77, 77.5, 78, 78.5, 79],
    educationIndexHistory: [0.75, 0.76, 0.77, 0.78, 0.79, 0.8, 0.81, 0.82, 0.83, 0.84, 0.85],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Region Overview: {regionData.regionName}</Text>
      <MapView style={styles.map} region={region} />
      <View style={styles.dataContainer}>
        <Text>GDP per Capita: ${regionData.gdpPerCapita}</Text>
        <Text>Literacy Rate: {regionData.literacyRate}%</Text>
        <Text>Life Expectancy: {regionData.lifeExpectancy} years</Text>
        <Text>Education Index: {regionData.educationIndex}</Text>
        {/* Add more relevant data here if you desire so */}
      </View>
      <LineChart
        data={{
          labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
          datasets: [
            {
              data: regionData.gdpGrowth,
            },
          ],
        }}
        width={300}
        height={200}
        yAxisSuffix="%"
        chartConfig={{
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  map: {
    height: 200,
    marginBottom: 16,
  },
  dataContainer: {
    marginVertical: 16,
  },
});

export default RegionOverview;