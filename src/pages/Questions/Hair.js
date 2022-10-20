import { View, Text } from 'react-native';
import React from 'react';
import Radio from '../../components/Radio'

export default function Hair() {
  return (
    <View>
      <Text>Perguntas sobre cabelo</Text>
      <Radio options={['1','2','3']} onChangeSelected={(opt)=>alert(opt)}/>
    </View>
  )
}