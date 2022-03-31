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

const VisuallyImpaired = ({ navigation }) => {
  return (
    <View style={{ paddingHorizontal: 5 }}>

      <TouchableOpacity
        style={styles.options}
        onPress={() => navigation.navigate('Object Detection')}>
        <Image
          source={{
            uri: 'https://1.cms.s81c.com/sites/default/files/2021-07/wstt-overview.png',
          }}
          style={{
            width: '100%',
            height: 100,
          }}
        />
        <Text style={styles.optionsTitle}>Object Detection</Text>
        <Text style={styles.optionsDesc}>
          This feature will detect the object shown via camera and speak it loud
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default VisuallyImpaired;

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
