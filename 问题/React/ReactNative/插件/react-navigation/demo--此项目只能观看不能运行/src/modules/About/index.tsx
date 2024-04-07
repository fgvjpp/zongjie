import * as React from 'react';
import {Button, StyleSheet, View} from 'react-native';

function About({navigation}: any) {
  return (
    <View style={styles.root}>
      <Button
        title="点击跳转About2"
        onPress={() => navigation.navigate('About2')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default About;
