import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { getActivities } from '../utils/storage';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function Dashboard() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getActivities();
      setActivities(data);
    };
    fetchData();
  }, []);

  const caloriesData = activities.map(a => Number(a.calories));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Weekly Progress</Text>
      {activities.length > 0 ? (
        <LineChart
          data={{
            labels: activities.map((_, i) => `Day ${i + 1}`),
            datasets: [{ data: caloriesData }]
          }}
          width={screenWidth - 30}
          height={220}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#f5f5f5',
            backgroundGradientTo: '#f5f5f5',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(98, 0, 238, ${opacity})`,
            labelColor: () => '#000'
          }}
          style={{ marginVertical: 20, borderRadius: 16 }}
        />
      ) : (
        <Text>No activity logged yet.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});