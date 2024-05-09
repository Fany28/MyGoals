import { useState } from 'react'
import { StyleSheet,View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [goals, setGoals] =useState([])


  function handleAddGoal(enteredGoalText) {
    //console.log(enteredGoalText)
    //console.log('Hello you')
    setGoals(() => [...goals, {text: enteredGoalText, key: Math.random(). toString()}])
    console.log(goals)
  }

  function handleDeleteGoal(id){
    console.log('DELETE')
    const deleteGoal = goals.filter((goal) => {return goal.key !== id})
  }


  return (
    <View style={styles.container}>

    <GoalInput
    onAddGoal={handleAddGoal}
    />
    <View style={styles.goalsConatiner}>
      <FlatList
      data={goals}
      renderItem={ (itemData) => {
        return(
          <GoalItem
          itemData={itemData}
          onDeleteItem={handleDeleteGoal}
          />
        )
      }}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  goalsConatiner: {
    flex: 5
  },
});
