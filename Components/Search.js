import {StyleSheet, TextInput, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {elevation} from "./common/styles";
import {useState} from "react";


export default function Search({setTerm}){
    const [input, setInput]= useState('');
    const handleEndEditing = ()=> {
        if (!input) return;
        setTerm(input);
        setInput('')
    }
    return(
        <View style={[styles.container, styles.elevation]}>
            <FontAwesome name='search' size={25} />
            <TextInput
                style={styles.input}
                placeholder={'Restaurants ,food'}
                value={input}
                onChangeText={(text)=>setInput(text)}
                onEndEditing={handleEndEditing}
            />
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flexDirection:"row",
        marginTop:5,
        marginHorizontal:25,
        backgroundColor:'white',
        borderRadius:40,
        padding:15,
    },
    elevation,
    input:{
        marginLeft:10,
        fontSize:20,
    }
})
