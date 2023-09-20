import {Image, StyleSheet, TextInput} from 'react-native';
import {View, Colors} from 'react-native-ui-lib';

const SearchSection = () => {
  return (
    <View style={styles.searchSectionStyle}>
      <View style={styles.searchInputSectionStyle}>
        <TextInput placeholder="Search" />
      </View>
      <View style={styles.searchAvatarSectionStyle}>
        <Image
          style={{
            width: undefined,
            height: undefined,
            flex: 1,
            borderRadius: 60,
          }}
          source={{uri: 'https://picsum.photos/200'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSectionStyle: {
    flexDirection: 'row',
    paddingLeft: 15,
  },
  searchInputSectionStyle: {
    height: 50,
    width: '75%',
    borderRadius: 20,
    backgroundColor: Colors.grey60,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey60,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  searchAvatarSectionStyle: {
    height: 55,
    width: 55,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: Colors.grey60,
    backgroundColor: Colors.grey60,

    marginLeft: 15,
  },
});

export default SearchSection;
