import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();
import { HomeScreen } from "../screens/HomeScreen";
import { DetailsScreen } from "../screens/DetailsScreen";
import React from "react";
export default function AppNavigator() {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
    );
}