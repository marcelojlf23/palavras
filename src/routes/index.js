import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import HomeScreen from "../pages";

const Drawer = createDrawerNavigator();

function Routes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator> 
    )
}