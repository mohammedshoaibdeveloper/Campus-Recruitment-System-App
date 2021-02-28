import React, { useState, useEffect } from 'react';
import { Alert, View, StyleSheet, ScrollView, Image, Picker,Container, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';





function studentsignup(props) {
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [conatact, setconatact] = useState("");

  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");


  const save_data = () => {

    let user = {

      name, address, city, conatact,Password,Password2
    }

  }


 




  const [selectedValue, setSelectedValue] = useState("");

  return (



    <View style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom:'25%'}}>

        <View style={styles.container}>
          <View >
            <View style={styles.Heading}>
            <Image
            style = {{width:250,height:100}}
            source={require('../images/CampusLogo.png')}/>
            
            </View>
            <Text style={{ alignSelf: "center", fontSize: 20, paddingTop: 15, fontWeight: '100', padding: 40, color: '#8EC043', fontFamily: 'sans-serif', letterSpacing: 4.5, textAlign: 'center', marginLeft: 15 }}>You SLogan Goes Here</Text>

            <View>



            </View>

            <View style={styles.inputfield}>
              <TextInput
                style={styles.input}

                value={name} onChangeText={(name) => setname(name)} placeholder=" Full Name" />


              <TextInput
                style={styles.input}

                placeholder="Date of Birth" value={address} onChangeText={(address) => setaddress(address)} />

              <TextInput
                style={styles.input}

                placeholder="Email" value={city} onChangeText={(city) => setcity(city)} />


                <TextInput
                  style={styles.input}

                  placeholder="Contact" keyboardType='numeric' value={conatact} onChangeText={(conatact) => setconatact(conatact)} />

<View style={styles.picker1}>
                <Picker
                style={{color:'black'}}
                  selectedValue={selectedValue}


                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="Select Gender" value="" />
                  <Picker.Item  label="Male" value="Male" />
                  <Picker.Item  label="Female" value="Female" />
                </Picker>
                  </View>

             
              <TextInput
                style={styles.input}

                placeholder="Password" value={Password} onChangeText={(Password) => setPassword(Password)} />

            <TextInput
                style={styles.input}

                placeholder="Confirm Password" value={Password2} onChangeText={(Password2) => setPassword2(Password2)} />
          


          


            </View>


          </View>

        </View>


      </ScrollView>

      <Button style={styles.signin} mode="contained" onPress={()=>props.navigation.navigate("studentlogin")}><Text style={{ letterSpacing: 2.5, color: 'white', fontWeight: 'bold' }}>CREATE AN ACCOUNT</Text></Button>
    </View>




  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,


  },


  signin: {
    width: 300,
    height: 54,
    padding: 20,

    borderRadius: 10,
    marginLeft: 30,
    backgroundColor: '#8EC043',
    position: 'absolute',
    bottom: 10,
    elevation:3,
    justifyContent:'center'




  },
  inputfield: {

    margin: 22,
    // marginTop:2,




  },
  input: {

    padding: 5,
    marginBottom: 20,
    backgroundColor: 'transparent',
    fontWeight:'bold'





  },

  Heading: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    alignItems: 'flex-end'
  },
  picker1: {

    height: 54,
    marginTop:10,
    width: 320,
    marginBottom: 20,

    borderBottomColor:'lightgrey',
    borderBottomWidth:2,




  },
  picker2: {

    height: 54,
    marginTop:10,
    width: 320,
    marginBottom: 20,
    borderBottomColor:'lightgrey',
    borderBottomWidth:2

  }



});



export default studentsignup
