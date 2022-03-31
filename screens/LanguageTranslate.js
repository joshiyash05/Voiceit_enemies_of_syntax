import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
const LanguageTranslate = () => {
  const [language, setLanguage] = useState('en');
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const translateData = () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', '');

    var formdata = new FormData();
    formdata.append('lang', language);
    formdata.append('txt', text);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch('https://dishant.pythonanywhere.com/language', requestOptions)
      .then(response => response.text())
      .then(result => {
        setTranslatedText(result);
      })
      .catch(error => console.log('error', error));
  };

  return (
    <View
      style={{
        backgroundColor: '#F6FFA4',
      }}>
      <View
        style={{
          elevation: 5,
          marginBottom: 20,
          width: '100%',
          height: 250,
          borderRadius: 30,
        }}>
        <Image
          source={{
            uri: 'https://www.betranslated.com/wp-content/uploads/2019/12/Maintain-second-language-as-a-translator.jpg',
          }}
          style={{
            width: '100%',
            height: 250,
            borderRadius: 30,
          }}
        />
      </View>
      <View
        style={{
          padding: 20,
        }}>
        <Text
          style={{
            fontSize: 25,
          }}>
          Language Translator
        </Text>
        <TextInput
          placeholder="Enter Text"
          value={text}
          onChangeText={text => setText(text)}
        />
        <Picker
          style={{
            marginVertical: 10,
          }}
          selectedValue={language}
          onValueChange={itemValue => setLanguage(itemValue)}>
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Gujarati" value="gu" />
          <Picker.Item label="Hindi" value="hi" />
          <Picker.Item label="Malayalam" value="ml" />
          <Picker.Item label="Marathi" value="mr" />
          <Picker.Item label="Tamil" value="ta" />
          <Picker.Item label="Urdu" value="ur" />
        </Picker>
        <Text style={{fontSize: 20}}>{translatedText}</Text>
        <Button onPress={() => translateData()} title="Translate" />
      </View>
    </View>
  );
};

export default LanguageTranslate;

const styles = StyleSheet.create({});
