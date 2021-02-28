import React,{useState} from 'react';
import {Alert,View ,StyleSheet,Image,TouchableOpacity,useEffect,Container, Text} from 'react-native';
import { TextInput,Button } from 'react-native-paper';




function studenthome(props){


  






    return(




          <View style={styles.container}>
            <View style={{position:'absolute',top:47}}>
              <View style={styles.Heading}>

              <Image
            style = {{width:250,height:100}}
            source={require('../images/CampusLogo.png')}/>
         
            </View>
            <Text style={{alignSelf:"center",fontSize:20,paddingTop:15,fontWeight:'bold',padding:40,color:'black',fontFamily: 'sans-serif',letterSpacing:0.5,textAlign:'center',marginLeft:15}}>Welcome Student</Text>

            <View>

            <Button style={styles.login} mode="contained"   title="LOGIN" onPress={()=>props.navigation.navigate("studentviewjob")}>VIEW JOBS</Button>
            <Button style={styles.login} mode="contained"   title="LOGIN" onPress={()=>props.navigation.navigate("mysubmitapp")}>MY APPLICATIONS</Button>
            <Button style={styles.login} mode="contained"   title="LOGIN" onPress={()=>props.navigation.navigate("myjobs")}>MY JOB</Button>

            <Button style={styles.login} mode="contained"   title="LOGIN" onPress={()=>props.navigation.navigate("academicdetails")}>ACADEMIC DETAILS</Button>
          <Button style={styles.login} mode="contained"   title="LOGIN" onPress={()=>props.navigation.navigate("studentprofile")}>MY PROFILE</Button>
          
        

          </View>
          </View>
         
      


    






    </View>




  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',


  },
  login: {
    width: 300,
    height: 54,
    padding: 10,
    marginTop: 20,
    borderRadius:10,
    marginLeft:30,
    backgroundColor:'#8EC043',
    elevation:10,




  },
  login1: {
    width: 300,
    height: 54,
    padding: 10,
    marginTop: 20,
    borderRadius:10,
    marginLeft:30,
    backgroundColor:'#8EC043',
    elevation:10,




  },
  login2: {
    width: 300,
    height: 54,
    padding: 10,
    marginTop: 20,
    borderRadius:10,
    marginLeft:30,
    backgroundColor:'#F49523',
    elevation:10,




  },
  Heading:{
    flexDirection:'row',
    justifyContent:'space-around',
    padding:10,
    alignItems:'flex-end',
    elevation:10,
  }



});

export default studenthome
