// screens/ListScreen.js
import React, {useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {fetchApiData} from '../../redux/actions';

const ListScreen = ({fetchApiData, apiData, loading, error}) => {
  useEffect(() => {
    fetchApiData();
  }, []);
  // console.log(apiData);
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1, padding: 16}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
          backgroundColor: '#7fffd4',
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 18}}>Api Data</Text>
      </View>
      <FlatList
        data={apiData.entries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View
            style={{
              marginBottom: 16,
              borderRadius: 10,
              borderWidth: 1,
              padding: 10,
            }}>
            <Text>Category:{item.Category}</Text>
            <Text>Description:{item.Description}</Text>
            <Text>Link:{item.Link}</Text>
          </View>
        )}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  apiData: state.api.data,
  loading: state.api.loading,
  error: state.api.error,
});

export default connect(mapStateToProps, {fetchApiData})(ListScreen);
