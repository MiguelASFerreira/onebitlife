import React, { useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import DefaultButton from "../../components/common/DefaultButton";
import ExplanationCard from "../../components/explanation/explanationCard";
import ChangeNavigationService from "../../Services/ChangeNavigationService";

export default function AppExplanation() {
  const navigation = useNavigation();
  const [showHome, setShowHome] = useState("false");
  const startDate = new Date();
  const month = `${startDate.getMonth() + 1}`.padStart(2, "0");
  const day = `${startDate.getDate()}`.padStart(2, "0");
  const appStartData = `${startDate.getFullYear()}-${month}-${day}`;

  function handleNavHome() {
    navigation.navigate("Home");
  }

  function handleSetShowHome() {
    if (showHome !== "true") {
      ChangeNavigationService.setShowHome({ showHome: "true", appStartData })
        .then(() => console.log(`Sucesso! ${showHome} ${appStartData}`))
        .catch((err) => console.log(err));
      setShowHome("true");

      handleNavHome();
    }

    handleNavHome();
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>
            {"  "}Antes, deixe {"\n"} eu te explicar...
          </Text>
          <ExplanationCard />
          <Text style={styles.descriptionCta}>
            Pronto(a) para subir de nível na vida?
          </Text>
          <Text style={styles.description}>
            Na próxima tela você pode escolher {"\n"} seus 4 hábitos de forma
            individual.
          </Text>
          <DefaultButton
            buttonText={"Continuar"}
            handlePress={handleSetShowHome}
            width={250}
            height={50}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    alignItems: "center",
    marginVertical: 40,
  },
  descriptionCta: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 30,
  },
  description: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
  },
});
