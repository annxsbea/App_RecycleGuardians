
// import slide1 from './slide1';
// import slide2 from './slide2';
// import slide3 from './slide3';
// import * as React from "react";
// import { Dimensions, Text, View, Image } from "react-native";
// import Animated, { useSharedValue } from "react-native-reanimated";
// import Carousel, {
//   ICarouselInstance,
//   Pagination,
// } from "react-native-reanimated-carousel";

// const data = [slide1, slide2, slide3];
// const width = Dimensions.get("window").width;

// const App: React.FC = () => {
//   const ref = React.useRef<ICarouselInstance>(null);
//   const progress = useSharedValue<number>(0);

//   const onPressPagination = (index: number) => {
//     ref.current?.scrollTo({
//       count: index - progress.value,
//       animated: true,
//     });
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <Carousel
//         ref={ref}
//         width={width}
//         height={width / 2}
//         data={data}
//         onProgressChange={progress}
//         renderItem={({ item }) => (
//           <Animated.View
//             style={{
//               flex: 1,
//               justifyContent: "center",
//             }}
//           >
//             <Image
//               source={item}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 resizeMode: "contain",
//               }}
//             />
//           </Animated.View>
//         )}
//       />

//       <Pagination.Basic
//         progress={progress}
//         data={data}
//         dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
//         containerStyle={{ gap: 5, marginTop: 10 }}
//         onPress={onPressPagination}
//       />
//     </View>
//   );
// };

// export default App;