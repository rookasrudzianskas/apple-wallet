//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Card from "@/components/card";

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
  return (
    <View>
      {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            index={index}
            // scrollY={scrollY}
            // activeCardIndex={activeCardIndex}
          />
        ))}
    </View>
  );
};

export default CardList;
