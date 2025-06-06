import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';

const Stack = createStackNavigator();

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
const SearchTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchList"
        component={VideoList}
        options={{
            title: 'Youtube Search',
            headerStyle: {
            backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
        }}
        />
      <Stack.Screen name="Detail" component={VideoDetail} options={{ headerTitleStyle: {display: 'none'} }} />
    </Stack.Navigator>
  );
}

export default SearchTab;