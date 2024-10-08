import { StyleSheet } from 'react-native';

const getStyles = (darkMode) => {
  return StyleSheet.create({
    container: {
      marginTop: 30,
      flex: 1,
      backgroundColor: darkMode ? '#F28705' : '#000',
    },
    header: {
      marginTop: 10,
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#808080',
      backgroundColor: darkMode ? '#000' : '#F28705',
    },
    username: {
      fontFamily: 'serif',
      fontSize: 24,
      fontWeight: 'bold',
      color: darkMode ? '#fff' : '#333',
    },
    status: {
      fontSize: 16,
      color: darkMode ? '#fff' : '#666',
    },
    content: {
      padding: 20,
    },
    profileSection: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: darkMode ? '#fff' : '#fff',
    },
    button: {
      padding: 10,
      backgroundColor: darkMode ? '#fff' : '#000',
      borderRadius: 5,
      borderColor: darkMode ? '#000' : '#fff',
      borderWidth: 1,
      marginTop: 10,
    },
    buttonText: {
      fontSize: 16,
      color: darkMode ? '#000' : '#fff',
    },
    switch: {
      position: 'absolute',
      marginRight: 10,
      left: '90%',
    },
    footer: {
      padding: 20,
      borderTopWidth: 1,
      borderTopColor: '#808080',
      backgroundColor: darkMode ? '#F28705' : '#000',
    },
  });
};

export default getStyles;
export const avatarStyles = {
  container: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
};