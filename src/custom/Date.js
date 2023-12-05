import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
const Date = (props) => {
  return (
    <View>
      <DateTimePicker
      display='spinner'
      />
    </View>
  )
}

export default Date

const styles = StyleSheet.create({
    mainContainer:{
        width:"50%",
        height:20,
        flexDirection:"row",
        backgroundColor:"grey",
        marginLeft:45,
        marginTop:10

    }
})