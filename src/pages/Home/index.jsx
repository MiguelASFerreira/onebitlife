import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { ScrollView, Text, View, StyleSheet } from "react-native";

import LifeStatus from "../../components/common/LifeStatus";
import StatusBar from "../../components/Home/StatusBar";
import CreateHabit from "../../components/Home/CreateHabit";
import EditHabit from "../../components/Home/EditHabit";

import ChangeNavigationService from "../../Services/ChangeNavigationService";

export default function Home({ route }) {
  const navigation = useNavigation();

  const [mindHabit, setMindHabit] = useState();
  const [moneyHabit, setMoneyHabit] = useState();
  const [bodyHabit, setBodyHabit] = useState();
  const [funHabit, setFunHabit] = useState();
  
  const [robotDaysLife, setRobotDaysLife] = useState();

  const today = new Date();

  function handleNavExplanation() {
    navigation.navigate("AppExplanation");
  }

  useEffect(() => {
    ChangeNavigationService.checkShowHome(1)
    .then((showHome) => {
      const formDate = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
      const checkDays =
        new Date(formDate) - new Date(showHome.appStartData) + 1;
	    setRobotDaysLife(checkDays.toString().padStart(2, "0"));
    })
      .catch((err) => console.log(err));
  }, [route.params]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.dailyChecks}>
          ❤️ {robotDaysLife} {robotDaysLife === "01" ? "dia" : "dias"} - ✅ 80 Checks
          </Text>

          <LifeStatus />
          <StatusBar />

          {mindHabit ? (
            <EditHabit
              habit={mindHabit?.habitName}
              frequency={`${mindHabit?.habitTime} - ${mindHabit?.habitFrequency}`}
              habitArea={mindHabit?.habitArea}
              checkColor="#90b7f3"
            />
          ) : (
            <CreateHabit habitArea="Mente" borderColor="#90b7f3" />
          )}

          {moneyHabit ? (
            <EditHabit
              habit={moneyHabit?.habitName}
              frequency={`${moneyHabit?.habitTime} - ${moneyHabit?.habitFrequency}`}
              habitArea={moneyHabit?.habitArea}
              checkColor="#85BB65"
            />
          ) : (
            <CreateHabit habitArea="Financeiro" borderColor="#85BB65" />
          )}

          {bodyHabit ? (
            <EditHabit
              habit={bodyHabit?.habitName}
              frequency={`${bodyHabit?.habitTime} - ${bodyHabit?.habitFrequency}`}
              habitArea={bodyHabit?.habitArea}
              checkColor="#FF0044"
            />
          ) : (
            <CreateHabit habitArea="Corpo" borderColor="#FF0044" />
          )}

          {funHabit ? (
            <EditHabit
              habit={funHabit?.habitName}
              frequency={`${funHabit?.habitTime} - ${funHabit?.habitFrequency}`}
              habitArea={funHabit?.habitArea}
              checkColor="#FE7F23"
            />
          ) : (
            <CreateHabit habitArea="Humor" borderColor="#FE7F23" />
          )}
        </View>
        <Text
          style={styles.explanationText}
          onPress={() => {
            handleNavExplanation();
          }}
        >
          Ver explicações novamente
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  dailyChecks: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginTop: 40,
  },
  explanationText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 25,
  },
});
