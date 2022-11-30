import React from "react";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LifeStatus from "../../components/common/LifeStatus";
import DefaultButton from "../../components/common/DefaultButton";

export default function Start() {
    const handleNewAppExplanation = () => {
        console.log("TESTANDO O CLIQUE");
    }
    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{alignItems: "center"}}>
                    <Image 
                        source={require("../../assets/icons/logo3.png")}
                        style={styles.logo} 
                    />
                    <LifeStatus />
                    <Text style={styles.description}>
                        Vamos transformar a sua vida {"\n"} em jogo, buscando sempre {"\n"}{" "} o melhor nível.
                    </Text>
                    <DefaultButton 
                        buttonText={"Continuar"}
                        handlePress={handleNewAppExplanation}
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
    logo: {
        width: 300,
        height: 60,
        marginTop: 60,
        marginBotton: 20,
    },
    description: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 60,
    }
})
