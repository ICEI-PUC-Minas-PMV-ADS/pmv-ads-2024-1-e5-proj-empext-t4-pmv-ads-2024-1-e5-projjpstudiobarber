import {AirbnbRating } from 'react-native-elements';

<AirbnbRating
  count={5}
  reviews={["Muito Ruim", "Ruim", "Medio", "Bom", "Muito Bom"]}
  defaultRating={5}
  size={20}
onFinishRating={rating => console.log(rating)}
/>
