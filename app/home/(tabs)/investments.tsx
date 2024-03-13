// InvestmentOpportunities.tsx

import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const InvestmentOpportunities: React.FC = () => {
  // Sample investment data (replace with actual data)
  const investmentRegions = [
    { name: 'Asia', attractiveness: 'High', industries: ['Tech', 'Manufacturing'] },
    { name: 'Africa', attractiveness: 'Medium', industries: ['Agriculture', 'Tourism'] },
    // ... other regions
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Investment Opportunities</Text>
      <FlatList
        data={investmentRegions}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.regionCard}>
              <Text>{item.name}</Text>
              <Text>Attractiveness: {item.attractiveness}</Text>
              <Text>Industries: {item.industries.join(', ')}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
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
  regionCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    marginBottom: 8,
  },
});

export default InvestmentOpportunities;