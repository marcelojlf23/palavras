import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../pages/Home";

const Drawer = createDrawerNavigator();

function Routes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator> 
    )
}

export default Routes;