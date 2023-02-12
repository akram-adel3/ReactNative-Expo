import Header from "../Components/Header";
import Search from "../Components/Search";
import Categories from "../Components/Categories";
import {StatusBar} from "expo-status-bar";
import Restaurants from "../Components/Restaurants";
import {StyleSheet, View} from "react-native";
import {useState} from "react";

export default function  HomeScreen (){
    const [term , setTerm]= useState('Burger')
    const commonCategories= [
        {
            name:'Burger',
            imageUrl:require('../AnotherAssets/Image/burger.png')
        },
        {
            name:'Pizza',
            imageUrl:require('../AnotherAssets/Image/pizza.png')
        },
        {
            name:'Dessert',
            imageUrl:require('../AnotherAssets/Image/cake.png')
        },
        {
            name:'Drinks',
            imageUrl:require('../AnotherAssets/Image/smoothies.png')
        },
        {
            name:'Steak',
            imageUrl:require('../AnotherAssets/Image/steak.png')
        },
        {
            name:'Pasta',
            imageUrl:require('../AnotherAssets/Image/pasta.png')
        },

    ]
    return (
        <View style={styles.container}>
            <Header/>
            <Search setTerm={setTerm}/>
            <Categories categories={commonCategories}  setTerm={setTerm} term={term}/>
            <StatusBar style="auto" />
            <Restaurants term={term}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: "rgb (253,253,253)",
        flex: 1
    }
});
