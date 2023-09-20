import {StyleSheet, ScrollView} from 'react-native';
import {View, Text, Colors} from 'react-native-ui-lib';
import LocationSection from '../components/locationSection';
import SearchSection from '../components/searchSection';
import FlatListHorizontal from '../components/flatListHorizontal';
import SpecialOfferToday from '../components/specialOfferToday';
const Dashboard = () => {
  return (
    <ScrollView>
      <View style={styles.mainSectionStyle}>
        <View style={styles.headerSectionStyle}>
          <LocationSection />
          <View style={styles.breakComponent25} />
          <SearchSection />
          <View style={styles.breakComponent25} />
          <FlatListHorizontal />
        </View>
        <View style={styles.middleSectionStyle}>
          <SpecialOfferToday />
        </View>
        <View style={styles.footerSectionStyle}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainSectionStyle: {
    height: 900,
    backgroundColor: Colors.grey60,
  },
  headerSectionStyle: {
    paddingTop: 75,
    height: '35%',
    backgroundColor: Colors.grey70,
    marginBottom: 10,
    borderBottomLeftRadius: 35,
  },
  middleSectionStyle: {
    height: '30%',
    backgroundColor: Colors.grey70,
    marginBottom: 10,
    borderBottomLeftRadius: 35,
  },
  footerSectionStyle: {
    height: 800,
    backgroundColor: Colors.grey70,
  },
  breakComponent25: {
    marginBottom: 15,
  },
});

export default Dashboard;
