import React,{useState,useEffect} from 'react';
import {Alert,View ,StyleSheet,Image,ScrollView,Container, Text} from 'react-native';
import { TextInput,Button } from 'react-native-paper';



function studentprofile(props){
    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [conatact, setconatact] = useState("");







  
    const save_data = () => {

        let user = {
    
          name, address, city, conatact
        }
    
      }



    return(




          <View style={styles.container}>

            <ScrollView contentContainerStyle={{paddingBottom:'25%'}}>

              <View style={styles.container}>




        <View style={styles.inputfield}>
                       
        <TextInput
                style={styles.input}

                value={name} onChangeText={(name) => setname(name)} placeholder=" Full Name" />


              <TextInput
                style={styles.input}

                placeholder="Gender" value={address} onChangeText={(address) => setaddress(address)} />

              <TextInput
                style={styles.input}

                placeholder="Date of Birth" value={city} onChangeText={(city) => setcity(city)} />
                 <TextInput
                style={styles.input}

                placeholder="Email" value={city} onChangeText={(city) => setcity(city)} />


                <TextInput
                  style={styles.input}

                  placeholder="Contact" keyboardType='numeric' value={conatact} onChangeText={(conatact) => setconatact(conatact)} />


          </View>
                </View>

            </ScrollView>

            <Button style={styles.signin} mode="contained" onPress={save_data}><Text style={{ letterSpacing: 2.5, color: 'white', fontWeight: 'bold' }} >EDIT PROFILE</Text></Button>

    </View>




  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',


  },

  
  input: {

    padding: 5,
    marginBottom: 20,
    backgroundColor: 'transparent',
    fontWeight:'bold',
    fontSize:20,






  },
  inputfield: {

    margin: 22,
    marginTop:15





  },

    signin: {
      width: 300,
      height: 54,
      padding: 10,

      borderRadius: 10,
      marginLeft: 30,
    backgroundColor:'#242424',
      position: 'absolute',
      bottom: 20,
      elevation:3



    }





});






export default studentprofile
