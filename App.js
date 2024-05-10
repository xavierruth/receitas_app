import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.tiny}
      source={{uri:'https://avatarfiles.alphacoders.com/239/239400.jpg'}}
      />

      <Text>Olá, Mari ♥</Text>
      <Text>Idade: 27</Text>
      <Text>Ocupação: Desenvolvedora de Software</Text>
      <Text>Experiência: 5 anos de experiência em 
        desenvolvimento web e móvel.</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF5FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tiny:{
    width: 90,
    height: 90,
    borderRadius: 90,
  },
});
