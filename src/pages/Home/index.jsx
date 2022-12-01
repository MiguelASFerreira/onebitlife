import React from "react";
import { useNavigation } from "@react-navigation/native";

import { ScrollView, Text, View, StyleSheet } from "react-native";

import LifeStatus from "../../components/common/LifeStatus";

export default function Home() {
    const navigation = useNavigation();

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