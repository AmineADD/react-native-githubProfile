import { StyleSheet} from 'react-native';


export default StyleSheet.create({ 
  container:{ 
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    marginTop:"100px"
  },
  logo:{ 
    marginBottom:"20px",
    width: 70,
    height:70,
  },
  input:{ 
    height:"32px",
    textAlign:"center",
    border :"1px solid"
  }, 
  row:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    gap:"8px"
  } 
});