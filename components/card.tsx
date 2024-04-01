//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const Card = ({card}) => {
  return (
    <View>
      <Image
          source={card}
          // onLayout={(event) =>
          //   setCardHeight(event.nativeEvent.layout.height + 10)
          // }
          style={[styles.image]}
        />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    shadowColor: '#B387DF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 7 / 4,
    marginVertical: 5,
  },
});
