
import { useState, useEffect, useRef } from "react";
import {  View, FlatList, Image, Dimensions } from "react-native";
import Animated, {Layout, FadeInLeft, FadeOutRight}from "react-native-reanimated";
import Slide1 from "./slide1";
import Slide2 from "./slide2";
import Slide3 from "./slide3";

const DATA = [
  {
    image: require('../../assets/slide1.png'),
  },
  {
    image: require('../../assets/slide2.png'),
  },
  {
    image: require('../../assets/slide3.png'),
  },
];

export default function Carrossel() {
 const [activeBanner, setActiveBanner] = useState<number>(0);
 const FlatlistRef = useRef<FlatList>(null);

 const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems[0] !== undefined) {
      setActiveBanner(viewableItems[0]?.index);
    }
  };

 const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 80,
      },
      onViewableItemsChanged,
    },
  ]);
  useEffect(() => {
    if (activeBanner === DATA.length - 1) {
      const timeId = setTimeout(() => {
        FlatlistRef.current?.scrollToIndex({
          index: 0,
          animated: true,
        });
        setActiveBanner(0);
      }, 3000);
      return () => clearTimeout(timeId);
    }
    const timeId = setTimeout(() => {
      FlatlistRef.current?.scrollToIndex({
        index: activeBanner + 1,
        animated: true,
      });
      setActiveBanner((old) => old + 1);
    }, 3000);
    return () => clearTimeout(timeId);
  }, [activeBanner]);

    return (
        <View style={{ alignItems: 'center' }}>
        
       <FlatList
       ref={FlatlistRef}
       data={DATA}
       renderItem={({ item, index }) => (
            <View
             style={{
             width: Dimensions.get('screen').width * 0.8,
             alignItems: 'center',
             height: 180,
             borderRadius: 30,
             marginHorizontal: 40,}}
             > 
             <Image
                source={item.image}
                style={{
                width: '100%',
                height: '100%',
                alignSelf: 'center',
                borderRadius: 30,
                }}
                resizeMode='contain'
           />
            </View>

        )} 
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        horizontal
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}/>


<FlatList
        data={DATA}
        renderItem={({ item, index }) => (
          <Animated.View
            layout={Layout}
            entering={FadeInLeft}
            exiting={FadeOutRight}
            style={{
              width: activeBanner === index ? 12 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: activeBanner === index ? 'black' : 'gray',
              marginHorizontal: 2,
            }}
          />
        )}
        style={{
          paddingTop: 20,
          alignSelf: 'center',
          bottom: 10,
        }}
        scrollEnabled={false}
        horizontal
        keyExtractor={(item, index) => String(index)}
      />
      </View>
    );
}