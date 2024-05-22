import React, { useEffect, useState } from "react"
import { View, Text, ActivityIndicator, StyleSheet } from "react-native"
import axios from "axios"

const DataFetchingComponent = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get("https://perenual.com/api/species-list?key=sk-uP4E65f243b96643e4567")
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.dataText}>{JSON.stringify(data, null, 2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  errorText: {
    color: "red",
    fontSize: 18
  },
  dataText: {
    fontSize: 16
  }
})

export default DataFetchingComponent
