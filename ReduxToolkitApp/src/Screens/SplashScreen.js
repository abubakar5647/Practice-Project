import {useNavigation} from '@react-navigation/native';
import {Image, View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Onboarding
        onSkip={() => navigation.navigate('Order')}
        onDone={() => navigation.navigate('Home')}
        pages={[
          {
            backgroundColor: 'red',
            image: <Image source={require('../images/zinger.png')} />,
            title: 'Special Zinger',
            subtitle: 'Special taste for you',
          },
          {
            backgroundColor: 'yellow',
            image: <Image source={require('../images/double.png')} />,
            title: 'Tower Burger',
            subtitle: 'Good Food for healt',
          },
          {
            backgroundColor: 'green',
            image: <Image source={require('../images/simple.png')} />,
            title: 'Zinger',
            subtitle: 'Taste You need',
          },
        ]}
      />
    </View>
  );
};

export default SplashScreen;
