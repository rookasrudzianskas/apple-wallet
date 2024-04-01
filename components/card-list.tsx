//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, useWindowDimensions} from 'react-native';
import Card from "@/components/card";
import {Gesture, GestureDetector} from "react-native-gesture-handler";
import {cancelAnimation, clamp, useSharedValue, withClamp, withDecay} from "react-native-reanimated";

const cards = [
  require('../assets/cards/Card 1.png'),
  require('../assets/cards/Card 2.png'),
  require('../assets/cards/Card 3.png'),
  require('../assets/cards/Card 4.png'),
  require('../assets/cards/Card 5.png'),
  require('../assets/cards/Card 6.png'),
  require('../assets/cards/Card 7.png'),
  require('../assets/cards/Card 8.png'),
  require('../assets/cards/Card 9.png'),
];

const CardList = () => {
  const [listHeight, setListHeight] = useState(0);
  const { height: screenHeight } = useWindowDimensions();

  const activeCardIndex = useSharedValue(null);

  const scrollY = useSharedValue(0);
  const maxScrollY = listHeight - screenHeight + 70;

  const pan = Gesture.Pan()
    .onBegin(() => {
      cancelAnimation(scrollY);
    })
    .onChange((event) => {
      scrollY.value = clamp(scrollY.value - event.changeY, 0, maxScrollY);
    })
    .onEnd((event) => {
      scrollY.value = withClamp(
        { min: 0, max: maxScrollY },
        withDecay({ velocity: -event.velocityY })
      );
    });

  return (
    <GestureDetector gesture={pan}>
      <View
       style={{ padding: 10 }}
        onLayout={(event) => setListHeight(event.nativeEvent.layout.height)}
      >
        {cards.map((card, index) => (
            <Card
              key={index}
              card={card}
              index={index}
              scrollY={scrollY}
              activeCardIndex={activeCardIndex}
            />
          ))}
      </View>
    </GestureDetector>
  );
};

export default CardList;
