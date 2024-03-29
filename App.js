import {  StyleSheet, Text,  View } from 'react-native';
import { Contador } from './componentes/Contador';
import { Calculadora } from './componentes/Calculadora';
import { Login } from './componentes/Login';

export default function App() {
  return (
    <View style={styles.container}>
  
      <Cuerpo/>

    
    </View>
  );
}
export const Encabezado=()=>{
  return(
    <View style={styles.encabezado}>
        <Text style={styles.texto}></Text>
        <Text style={styles.texto}>Calculadora</Text>
        <Text style={styles.texto}></Text>
    </View>
  )
}

export const Cuerpo=()=>{
  return(
    <View style={styles.cuerpo}>
        <Calculadora/>
    </View>
  )
}

export const Pie=()=>{
  //aqui podria tener varias operaciones sin problemas 
  return(
    <View style={styles.pie}>
    </View>
  )
}



export const Pie3=({op1, op2, op3,op4})=>{
  //aqui podria tener varias operaciones sin problemas 
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>{op1}</Text>
        <Text style={styles.texto}>{op2}</Text>
        <Text style={styles.texto}>{op3}</Text>
        <Text style={styles.texto}>{op4}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3DAC9',
    alignItems:'stretch',
    justifyContent: 'center',
  },
  texto:{
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  encabezado:{
    
    flex:1.5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#227edb'
  },
  cuerpo:{
    flex:8
  },
  pie:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor: '#a7d9f3',
  },
  
});