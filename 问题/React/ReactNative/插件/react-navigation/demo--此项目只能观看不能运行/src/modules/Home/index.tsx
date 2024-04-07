import * as React from 'react';
import {Button, StyleSheet, View} from 'react-native';

function Home({navigation}: any) {
  return (
    <View style={styles.root}>
      <Button
        title="点击跳转Test"
        onPress={() => navigation.navigate('Test')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default Home;
