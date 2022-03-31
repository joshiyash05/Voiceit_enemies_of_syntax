import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Tts from 'react-native-tts';
const TextToSpeech = ({ navigation }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    Tts.setDefaultRate(0.6);
    Tts.setDefaultPitch(1.5);
  });
  const handleVoice = () => {
    Tts.speak(text);
  };
  return (
    <View style={styles.texttospeech} >
      <TextInput
        placeholder="Enter Text"
        value={text}
        onChangeText={text => setText(text)}
        style={styles.input}
      />
      <Button title="Speak" onPress={handleVoice} />
    </View>
  );
};

export default TextToSpeech;

const styles = StyleSheet.create({
  texttospeech: {
    padding: 20,
    backgroundColor: '#FFFFFF'
  },
  input: {
    height: 100,
    fontSize: 20,
  }
})