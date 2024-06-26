
import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from './ThemeContext';

const SettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <SafeAreaView style={isDarkMode ? styles.darkContainer : styles.container}>
      <View style={styles.header}>
        <Text style={isDarkMode ? styles.darkText : styles.text}>Settings</Text>
      </View>

      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={isDarkMode ? styles.darkOptionText : styles.optionText}>Language</Text>   
          <Image source={require("./assets/arrow.jpg")} style={styles.arrow} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={isDarkMode ? styles.darkOptionText : styles.optionText}>My Profile</Text>   
          <Image source={require("./assets/arrow.jpg")} style={styles.arrow} />       
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={isDarkMode ? styles.darkOptionText : styles.optionText}>Contact Us</Text>   
          <Image source={require("./assets/arrow.jpg")} style={styles.arrow} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={isDarkMode ? styles.darkOptionText : styles.optionText}>Change Password</Text>   
          <Image source={require("./assets/arrow.jpg")} style={styles.arrow} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={isDarkMode ? styles.darkOptionText : styles.optionText}>Privacy Policy</Text>   
          <Image source={require("./assets/arrow.jpg")} style={styles.arrow} />
        </TouchableOpacity>
        <View style={styles.settingOption}>
          <Text style={isDarkMode ? styles.darkOptionText : styles.optionText}>Theme</Text>
          <Switch
            trackColor={{ false: "#949494", true: "#37FD12" }}
            thumbColor={isDarkMode ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleTheme}
            value={isDarkMode}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#333',
  },
  header: {
    marginTop: 30,
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: '500',
    color: '#000',
  },
  darkText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#fff',
  },
  settingsContainer: {
    marginTop: 30,
  },
  settingOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    paddingBottom: 15,
    paddingHorizontal: 2,
    marginLeft: 30,
    marginRight: 30,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  darkOptionText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#fff',
  },
  arrow: {
    width: 25,
    height: 20,
  },
});
