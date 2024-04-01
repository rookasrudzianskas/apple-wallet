//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, useWindowDimensions} from 'react-native';
import Animated, {clamp, useAnimatedReaction, useSharedValue} from 'react-native-reanimated';
import {Gesture, GestureDetector} from "react-native-gesture-handler";

const Card = ({ card, index, scrollY, activeCardIndex }) => {
  const [cardHeight, setCardHeight] = useState(0);
  const translateY = useSharedValue(0);

  const { height: screenHeight } = useWindowDimensions();

  useAnimatedReaction(
    () => scrollY.value,
    (current) => {
      translateY.value = clamp(-current, -index * cardHeight, 0);
    }
  );

  const tap = Gesture.Tap().onEnd(() => {
    if (activeCardIndex.value === null) {
      activeCardIndex.value = index;
    } else {
      activeCardIndex.value = null;
    }
  });

  return (
    <GestureDetector gesture={tap}>
      <View style={styles.container}>
      <Animated.Image
          source={card}
          onLayout={(event) =>
            setCardHeight(event.nativeEvent.layout.height + 10)
          }
          style={[styles.image, { transform: [{ translateY }] }]}
      />
     </View>
    </GestureDetector>
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
