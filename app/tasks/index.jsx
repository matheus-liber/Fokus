import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../../components/FokusButton";
import { IconPlus } from "../../components/Icons";
import TaskItem from "../../components/TaskItem";

export default function Tasks () {
    return (
        <View style={styles.container} >
            <View style = {styles.wrapper}>
                <Text style={styles.text}>
                    Lista de tarefas:
                </Text>
                <View style={styles.inner}>
                <TaskItem 
                    completed
                    text = "Estudar React"
                />
                <TaskItem 
                    text = "Estudar React Native"
                />
                </View>
                <FokusButton 
                    title="Adicionar nova tarefa"
                    icon={<IconPlus outline/>}
                    outline
                    onPress={() => router.navigate('/add-task')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#021123',
        alignItems: 'center'
        
    },
    wrapper: {
        gap: 40,
        width: '90%'
    },
    text: {
        textAlign: 'center',
        color: "#FFF",
        fontSize: 26
    },
    inner: {
        gap: 8
    }
})