import { StyleSheet } from "react-native";

export const estilos=StyleSheet.create({
    //Estilos del boton
    boton:{
        backgroundColor: '#B5B2B2',
        padding: 18, // Ajusta el padding para controlar el tamaño del botón
        borderRadius: 100,
        borderColor: '#B5B2B2',
        borderWidth: 2,
        flexBasis: '9%', // Establece el ancho para que haya 4 botones por fila
        margin: '1%', // Espaciado entre botones
        justifyContent: 'center',
        alignItems: 'center', // Centra el contenido del botón
        textAlignVertical:'center'
      },
      textoB:{
        color:'black',
        fontSize:30,
      },
      logoB:{
        height:35,
        width:35,
        marginRight:7
      },
    //Estilos de la caja
    boxContainer:{
        backgroundColor: '#E3DAC9',
        borderColor: '#E3DAC9',
        borderWidth: 2,
        borderRadius: 5,
        height: 70,
        margin: 15,
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 5,
        marginTop: 270, // Mueve el contenedor un poco más abajo
        
    },
    TextBox:{
        fontSize:55,
        color:'black',
    },
    //estilo de contenedor de los botones
    botonescontainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        
    },
    botonPorcentaje:{
      backgroundColor: 'black',
    },
    
})