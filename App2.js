import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AddActivity from './components/AddActivity';
import Dashboard from './components/Dashboard';

export default function App() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => setRefresh(!refresh);

  return (
    <ScrollView>
      <AddActivity onAdd={handleRefresh} />
      <Dashboard key={refresh} />
    </ScrollView>
  );
}