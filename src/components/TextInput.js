import React from "react";
import { label } from "native-base";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Card } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Spacer from "./Spacer";

const Input = ({
  inputContainer,
  inputStyle,
  name,
  label,
  containerStyle,
  labelStyle,
  onSubmit,
  labelOne,
  labelTwo,
  // placeholder,
  ...rest
}) => {
  return (
    <View style={[Styles.container, containerStyle]}>
      {label ? (
        <Text style={[Styles.labelStyle, labelStyle]}>{label}</Text>
      ) : labelOne && labelTwo ? (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[Styles.labelStyle, labelStyle]}>{labelOne}</Text>
          <TouchableOpacity onPress={onSubmit}>
            <Text
              style={[Styles.labelStyle, { color: "#1B6ADF", fontSize: 12 }]}
            >
              {labelTwo}
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <Spacer height={20} />
      <Card style={[Styles.inputContainer, inputContainer]}>
        <TextInput
          {...rest}
          style={[Styles.inputStyle, inputStyle]}
          name={name}
          // placeholder={placeholder}
        />
      </Card>
    </View>
  );
};

export default Input;

const Styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: "100%",
    margin: 0,
    padding: 0,
  },
  inputStyle: {
    height: 45,
    paddingHorizontal: 17,
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3B3D3F",
  },
});
