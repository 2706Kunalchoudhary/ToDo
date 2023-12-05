import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Date from '../custom/Date'
import DateTimePicker from '@react-native-community/datetimepicker';


const dummyData = [
    {
        id: 1,
        task: "Item1"
    },
    {
        id: 2,
        task: "Item2"
    },
]
const Todo = () => {
    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])
    const [showDate, setshowDate] = useState(false)
    const [date, setDate] = useState(new Date())
    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={styles.container1}>
                <Text style={styles.text2}>{item.title}</Text>
            </View>
        )
    }

    const handleAdd = () => {

        setTodoList([...todoList, { title: todo }])
    }

    const handleDate = () => {
        setshowDate(true)
    }
    const onChange = (selectedDate)=>{
        const currentDate =  selectedDate || date
        setDate(currentDate)
    }
    return (

        <View style={styles.mainContainer}>
            <TextInput style={styles.txtInp} placeholder='Add Task'
                value={todo}
                onChangeText={(txt) => {
                    setTodo(txt)
                    console.log(txt);
                }
                }
            />
            <View style={styles.container2}>
                <Text onPress={handleDate}>Select Date</Text>
            </View>
            {/* {
                showDate &&
                <DateTimePicker
                mode='date'
                    display='spinner'
                    value={date}
                    onChange={onChange}
                />
            } */}
            <TouchableOpacity style={styles.btn} onPress={handleAdd}>
                <Text style={styles.text1}>Add</Text>
            </TouchableOpacity>
            <FlatList
                data={todoList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    txtInp: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 30
    },
    btn: {
        width: "80%",
        height: 20,
        backgroundColor: "blue",
        alignSelf: "center",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    text1: {
        color: "#fff"
    },
    container1: {
        width: "80%",
        alignSelf: "center"
    },
    text2: {
        color: "#fff",
        backgroundColor: "grey",
        width: "80%",
        height: 30,
        marginTop: 20
    },
    container2: {
        width: "50%",
        height: 20,
        flexDirection: "row",
        backgroundColor: "grey",
        marginLeft: 45,
        marginTop: 10

    }
})