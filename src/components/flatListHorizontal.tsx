import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

const FlatListHorizontal = (props?: any) => {
  const dataSample = [
    {
      image: 'https://picsum.photos/200',
      title: 'Title 1',
    },
    {
      image: 'https://picsum.photos/200',
      title: 'Title 2',
    },
    {
      image: 'https://picsum.photos/200',
      title: 'Title 3',
    },
    {
      image: 'https://picsum.photos/200',
      title: 'Title 4',
    },
    {
      image: 'https://picsum.photos/200/300',
      title: 'Title 5',
    },
    {
      image: 'https://picsum.photos/200/300',
      title: 'Title 6',
    },
  ];
  const renderItem = item => {
    return (
      <View style={styles.itemStyle}>
        <View>
          <Image
            style={[styles.itemImageStyle, {width: 60, height: 60}]}
            source={{uri: item.image}}
          />
        </View>
        <View style={styles.breakComponent25} />
        <View>
          <Text>{item.title}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.itemSectionStyle}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={dataSample}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    height: 90,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImageStyle: {
    borderRadius: 15,
  },
  itemSectionStyle: {
    paddingLeft: 15,
    borderRadius: 15,
  },
  breakComponent25: {
    marginBottom: 15,
  },
});

export default FlatListHorizontal;
