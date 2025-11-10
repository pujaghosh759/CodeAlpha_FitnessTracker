import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveActivity = async (activity) => {
  try {
    const storedActivities = await AsyncStorage.getItem('activities');
    const activities = storedActivities ? JSON.parse(storedActivities) : [];
    activities.push(activity);
    await AsyncStorage.setItem('activities', JSON.stringify(activities));
  } catch (error) {
    console.log('Error saving activity:', error);
  }
};

export const getActivities = async () => {
  try {
    const storedActivities = await AsyncStorage.getItem('activities');
    return storedActivities ? JSON.parse(storedActivities) : [];
  } catch (error) {
    console.log('Error fetching activities:', error);
    return [];
  }
};