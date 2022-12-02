import React from "react";
import * as eva from "@eva-design/eva";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

import GeneralRoutes from "./src/navigation/stack/GeneralRoutes";

export default function App() {
  return (
    <>
      <NativeBaseProvider>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer>
            <GeneralRoutes />
          </NavigationContainer>
        </ApplicationProvider>
      </NativeBaseProvider>
    </>
  );
}
