import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style={styles.text}>Top Lefttttt</Text>
        </View>
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.center}>
          <Text style={styles.textCenter}>Center</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
          <Text style={styles.textBottom}>Bottom Right</Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2fefe'
  },
  containerTop: {
    flex: 1
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    color: '#4aa2c8'
  },
  textBottom: {
    fontSize: 20,
    color: 'white',
    textAlign: 'right',
    marginRight: 20
  },
  top: {
    marginTop: 80,
    marginHorizontal: 50,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#ffffff'
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    width: 130,
    height: 130,
    backgroundColor: '#2cff56',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  textCenter: {
    color: 'blue',
    fontSize: 20
  },
  containerBottom: {
    flex: 1
  },
  bottom: {
    backgroundColor: '#56abbf',
    marginTop: 120,
    paddingVertical: 10,
    marginHorizontal: 30,
    borderRadius: 30
  }
})
