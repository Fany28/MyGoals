import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({itemData, OnDeleteItem, id}){

    function deleteGoalHandler(){
        OnDeleteItem(id)
        console.log('Delete Goal handler')
    }


    return(
        <Pressable onPress={deleteGoalHandler}>
            <View style={style.goalsItem}>
                <text style={StyleSheet.goalsText}>itemData.item</text>
            </View>
        </Pressable>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalsItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#8576FF',
        color: 'white'
    },
    goalText: {
        color: 'white'
    }
})