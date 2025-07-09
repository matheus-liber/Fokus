import { Pressable, StyleSheet, Text } from "react-native"

export const ActionButton = ({ active, onPress, display }) => {
    return (
        <Pressable 
              style={ active ? styles.contextButtonTextActice : null}
              onPress={onPress}
            >
            <Text style={styles.contextButtonText}>
              {display}
            </Text>
          </Pressable>
    )
}

const styles = StyleSheet.create({
  contextButtonTextActice: {
    backgroundColor: '#144480',
    borderRadius: 8
  },
  contextButtonText: {
    fontSize: 12.5,
    color: '#FFF',
    padding: 8
  }
})