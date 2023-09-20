import {Image, StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import LinearGradient from 'react-native-linear-gradient';

const specialOfferToday = () => {
  return (
    <View style={styles.specialOfferSectionStyle}>
      <View style={styles.breakComponent25} />
      <View style={styles.titleSectionStyle}>
        <Text style={styles.titleStyle}>Today's Special Offer</Text>
        <Text style={{marginLeft: '30%'}}>{`View all`}</Text>
      </View>
      <View style={styles.breakComponent25} />
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.contentStyle}>
        <View style={styles.offerSectionStyle}>
          <View style={styles.contentCol1Style}>
            <Text style={styles.discountContentStyle}>Discount 25%</Text>
            <View style={styles.breakComponent25} />
            <Text style={styles.discountDescriptionStyle}>Summer campain</Text>
            <View style={styles.breakComponent25} />
            <Text style={styles.discountDateStyle}>To 19/9/2023</Text>
          </View>
          <View style={styles.contentCol2Style}>
            <Image
              style={{width: 120, height: 120, borderRadius: 10}}
              source={{uri: 'https://picsum.photos/200'}}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  specialOfferSectionStyle: {
    paddingLeft: 15,
  },
  titleSectionStyle: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  contentStyle: {
    height: '75%',
    width: '95%',
    borderRadius: 15,
  },
  breakComponent25: {
    marginBottom: 15,
  },
  offerSectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contentCol1Style: {
    alignItems: 'center',
    padding: 15,
  },
  contentCol2Style: {
    alignItems: 'center',
    padding: 15,
  },
  discountContentStyle: {
    color: 'white',
    fontSize: 17,
  },
  discountDescriptionStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  discountDateStyle: {
    color: 'white',
    fontSize: 12,
  },
});
export default specialOfferToday;
