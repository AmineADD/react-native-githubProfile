import { StyleSheet} from 'react-native';


export const globalStyles = (isDarkMode) =>  StyleSheet.create({ 
  container:{
    display:"flex",
    flexDirection:"column",
    padding:"5%",
    height:"100%",
    backgroundColor: isDarkMode ? "#272727" : "#fff", 
  },
  text:{
      color: isDarkMode ? "#fff" : "#272727"
  },
  border:{ 
    borderColor : isDarkMode ?  "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"
  } 
});