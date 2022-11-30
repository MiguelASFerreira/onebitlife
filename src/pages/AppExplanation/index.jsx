import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import DefaultButton from "../../components/common/DefaultButton";

export default function AppExplanation() {
    function handleSetShowHome() {
        console.log("Proxima Página");
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.title}>
                        Antes, deixe {"\n"} eu te explicar...
                    </Text>
                    <Text style={styles.descriptionCta}>
                        Pronto(a) para subir de nível na vida?
                    </Text>
                    <Text style={styles.description}>
                        Na próxima tela você pode escolher {"\n"} seus 4 hábitos de forma individual.
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
    )
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
})