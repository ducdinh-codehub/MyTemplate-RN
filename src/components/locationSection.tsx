import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native-ui-lib';

const LocationSection = () => {
  return (
    <View style={styles.contentStyle}>
      <View style={styles.iconSectionStyle}>
        <Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>
          ^
        </Text>
      </View>
      <View style={styles.locationSectionStyle}>
        <Text style={styles.textStyle}>Ngõ 59 Mễ Trì, Hà Nội</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentStyle: {
    flexDirection: 'row',
    paddingLeft: 15,
  },
  iconSectionStyle: {
    height: 25,
    width: 25,
    borderRadius: 60,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  locationSectionStyle: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
  },
});
export default LocationSection;
