import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Settings</Text>
      </View>

    <View style={styles.settingsContainer}>

    <TouchableOpacity style={{
    marginTop:70,
    paddingBottom: 15,
  borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth}}>
      <Text style={{  marginLeft:30, fontSize:16}}>Language</Text>   
    </TouchableOpacity>
    </View>

    <TouchableOpacity style={{
    marginTop:30,
    paddingBottom: 15,
  borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth}}>
      <Text style={{  marginLeft:30, fontSize:16}}>My Profile</Text>   
    </TouchableOpacity>

    
    <TouchableOpacity style={{
    marginTop:30,
    paddingBottom: 15,
  borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth}}>
      <Text style={{  marginLeft:30, fontSize:16}}>Contact Us</Text>   
    </TouchableOpacity>


    <TouchableOpacity style={{
    marginTop:30,
    paddingBottom: 15,
  borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth}}>
      <Text style={{  marginLeft:30, fontSize:16}}>Change Password</Text>   
    </TouchableOpacity>
 
    
    <TouchableOpacity style={{
    marginTop:30,
    paddingBottom: 15,
  borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth}}>
      <Text style={{  marginLeft:30, fontSize:16}}>Privacy Policy</Text>   
    </TouchableOpacity>
    
  


    </SafeAreaView>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  header: {
    marginTop: 30, 
    alignItems: 'center', 
  },
  text: {
    fontSize: 22, 
    fontWeight: '500',
  },

  settingsContainer:{
    flexDirection:""
  }
});
