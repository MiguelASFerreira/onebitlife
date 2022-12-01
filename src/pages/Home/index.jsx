import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { ScrollView, Text, View, StyleSheet } from "react-native";

import LifeStatus from "../../components/common/LifeStatus";
import StatusBar from "../../components/Home/StatusBar";
import CreateHabit from "../../components/Home/CreateHabit";

export default function Home() {
    const navigation = useNavigation();
    const [mindHabit, setMindHabit] = useState();
    const [moneyHabit, setMoneyHabit] = useState();
    const [bodyHabit, setBodyHabit] = useState();
    const [funHabit, setFunHabit] = useState();

    function handleNavExplanation() {
        navigation.navigate("AppExplanation")
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.dailyChecks}>
                        ❤️ 20 dias - ✅ 80 checks
                    </Text>
                    <LifeStatus />
                    <StatusBar />
                    <CreateHabit habitArea="Mente" borderColor="#90b7f3"/>
                </View>
                <Text 
                    style={styles.explanationText} 
                    onPress={() => {
                        handleNavExplanation() ;
                    }}>
                        Ver solicitação novamente
                </Text>
            </ScrollView>
        </View>

    )
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
    }
})