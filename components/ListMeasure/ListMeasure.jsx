import { ListMeasureStyles } from './ListMeasure.style';
import { DATA } from '../../constants';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const Item = ({ item, onClick }) => (
  <TouchableOpacity
    style={ListMeasureStyles.item}
    onPress={() => onClick(item.key)}
  >
    <Text style={ListMeasureStyles.title}>{item.title}</Text>
  </TouchableOpacity>
);

export const ListMeasure = ({ onClick }) => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Item item={item} onClick={onClick} />}
    />
  );
};
