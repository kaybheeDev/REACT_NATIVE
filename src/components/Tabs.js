import React from 'react'
import CurrentWeather from '../components/screens/CurrentWeather'
import UpcomingWeather from '../components/screens/UpcomingWeather'
import UrbanCity from '../components/screens/UrbanCity'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'


const Tab = createBottomTabNavigator()

const Tabs = ( {weather}) => {
    return (
        <Tab.Navigator 
            screenOptions = {{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey',
                tabBarStyle: {
                    backgroundColor: 'lightblue'
                },
                headerStyle: {
                    backgroundColor: 'lightblue'
                },
                headerTitleStyle: {
                    fontWeight:'bold',
                    fontSize: 25,
                    color: 'tomato'
                }
            }}>
            <Tab.Screen
                name = {'Current'} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <Feather
                            name = {'droplet'} 
                            size = {25} 
                            color = {focused ? 'tomato' : 'black'} 
                        />
                    )
                }}
            >
                {() => <CurrentWeather weatherData = { weather.list[0]}/>}
            </Tab.Screen>
            <Tab.Screen 
                name = {'Upcoming'} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <Feather 
                            name = {'clock'} 
                            size = {25} 
                            color = {focused ? 'tomato': 'black'} 
                        />
                    )
                }} 
            >
                {() => <UpcomingWeather weatherData = {weather.list}/>}
            </Tab.Screen>
            <Tab.Screen 
                name = {'City'}
                options = {{
                    tabBarIcon: ({ focused }) => (
                        <Feather 
                            name = {'home'} 
                            size={ 25} 
                            color = {focused ? 'tomato': 'black'} 
                        />
                    )
                }}
            >
                {() => <UrbanCity weatherData= {weather.city}/>}
                </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs
