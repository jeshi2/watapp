import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import welcomeImage from '@/assets/images/welcome.png';
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const Page = () => {

    const openLink = () => {
        Linking.openURL('https://galaxies.dev');
    };

    return (
        <View style={styles.container}>
            <Image source={welcomeImage} style={styles.welcome} />
            <Text style={styles.headline}>Welcome to WatApp</Text>
            <Text style={styles.description}>
                Read our{' '}
                <Text style={styles.link} onPress={openLink}>
                    Privacy Policy
                </Text>
                . {'Tap "Agree & Continue" to accept the '}
                <Text style={styles.link} onPress={openLink}>
                    Terms of Service
                </Text>
                .
            </Text>
            <Link href={"/otp"} replace asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Agree & Continue</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    welcome: {
        width: '100%',
        height: 300,
        marginBottom: 80,
    },
    headline: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    description: {
        fontSize: 14,
        marginBottom: 80,
        textAlign: 'center',
        color: Colors.gray,
    },
    link: {
        color: Colors.primary
    },
    button: {
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: Colors.primary,
        fontSize: 22,
        fontWeight: 'bold',
    },
})

export default Page