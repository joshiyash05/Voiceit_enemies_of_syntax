import {
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';

const Deaf = ({ navigation }) => {
    return (
        <View style={{ paddingHorizontal: 5, backgroundColor: '#FFFFFF' }}>
            <ScrollView>
                <TouchableOpacity
                    style={styles.options}
                    onPress={() => navigation.navigate('TextToSpeech')}>
                    <Image
                        source={{
                            uri: 'https://1.cms.s81c.com/sites/default/files/2021-07/watson-tts-overview_0.png',
                        }}
                        style={{
                            width: '100%',
                            height: 100,
                        }}
                    />
                    <Text style={styles.optionsTitle}>Text To Speech</Text>
                    <Text style={styles.optionsDesc}>
                        This feature will convert the text given by the user into speech
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.options}
                    onPress={() => navigation.navigate('SpeechToText')}>
                    <Image
                        source={{
                            uri: 'https://1.cms.s81c.com/sites/default/files/2021-07/wstt-overview.png',
                        }}
                        style={{
                            width: '100%',
                            height: 100,
                        }}
                    />
                    <Text style={styles.optionsTitle}>Speech To Text</Text>
                    <Text style={styles.optionsDesc}>
                        This feature will convert the speech given by the user into text
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.options}
                // onPress={() => navigation.navigate('')}
                >
                    <Image
                        source={{
                            uri: 'https://1.cms.s81c.com/sites/default/files/2021-07/wstt-overview.png',
                        }}
                        style={{
                            width: '100%',
                            height: 100,
                        }}
                    />
                    <Text style={styles.optionsTitle}>Sign Detection</Text>
                    <Text style={styles.optionsDesc}>
                        This feature will convert detect the sign of the user
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
};

export default Deaf;

const styles = StyleSheet.create({
    options: {
        padding: 10,
        backgroundColor: '#3BCBFF',
        elevation: 3,
        height: 250,
        marginTop: 20,
        marginHorizontal: 10,
    },
    optionsTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: 'black',
        marginTop: 20,
    },
    optionsDesc: {
        fontSize: 18,
        lineHeight: 20,
        marginTop: 15,
    },
});
