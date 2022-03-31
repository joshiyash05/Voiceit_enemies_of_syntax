import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const HeaderComponent = () => {
  return (
    <View style={styles.headerComponent}>
      <View style={styles.headerInfo}>
        <View>
          <Text style={styles.helloText}>Hello,</Text>
          <Text style={styles.helloBottomText}>Hope you have a nice day</Text>
        </View>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3-b6hE_5K-l4bv_gBuFtF5zWoPEhSkLsuw&usqp=CAU',
          }}
          style={{
            width: 70,
            height: 70,
            borderRadius: 50,
          }}
        />
      </View>
      <View
        style={{
          marginTop: 25,
        }}>
        <ImageBackground
          source={{
            uri: 'https://www.culturalsurvival.org/sites/default/files/styles/max_1300x1300/public/media/istock_000049650124_full.jpg?itok=Nb0pkCAM',
          }}
          style={{
            width: Dimensions.get('screen').width / 1.2,
            height: 200,
          }}
          imageStyle={{
            borderRadius: 20,
          }}>
          <View style={{justifyContent: 'center', margin: 15, paddingTop: 30}}>
            <Text style={{fontSize: 25, color: 'black'}}>Your Disability,</Text>
            <Text style={{fontSize: 20, color: 'black'}}>
              Is your Opportunity
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  headerComponent: {
    marginTop: 20,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  headerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  helloText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  helloBottomText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
});
