import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class ToDo extends Component {
  state = {
    isEditing: false
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello I'm To Do</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
