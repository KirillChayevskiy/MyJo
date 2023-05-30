import React, {useEffect, useState} from 'react';
import {Alert, FlatList, SafeAreaView} from 'react-native';
import {ApiCard, CardType} from '../../types/apis';
import {Card} from '../../components/Card';
import addCard from '../../../api/addCard';
import {fetchCards} from '../../../api/fetchCards';

const TaskScreen = () => {
  const [filteredTasks, setFilteredTasks] = useState<ApiCard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCards();

        const filtered = response.filter(item => item.type === CardType.TASKS);
        setFilteredTasks(filtered);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    const intervalId = setInterval(fetchData, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleCardPress = (item: ApiCard) => {
    Alert.alert(item.name, item.description ?? '');
    addCard(item);
  };

  return (
    <SafeAreaView>
      <FlatList
        data={filteredTasks}
        keyExtractor={item => item.card_id.toString()}
        renderItem={({item}) => (
          <Card card={item} onCardPress={() => handleCardPress(item)} />
        )}
      />
    </SafeAreaView>
  );
};

export default TaskScreen;
