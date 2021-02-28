import React, { useState, useEffect } from 'react';
import { Alert, View, StyleSheet, ScrollView, Image, Picker,Container, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';





function postjob(props) {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [requirements, setrequirements] = useState("");
  const [responsibities, setresponsibities] = useState("");

  const [range, setrange] = useState("");
  const [criteria, setcriteria] = useState("");


  const save_data = () => {

    let user = {

        title, desc, requirements, responsibities,range,criteria
    }

  }


 






  return (



    <View style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom:'25%'}}>

        <View style={styles.container}>
          <View >
            

            <View>



            </View>

            <View style={styles.inputfield}>
              <TextInput
                style={styles.input}

                value={title} onChangeText={(title) => settitle(title)} placeholder=" Job Title" />


              <TextInput
                style={styles.input}

                placeholder="Job Description" value={desc} onChangeText={(desc) => setdesc(desc)} />

              <TextInput
                style={styles.input}

                placeholder="Job Requirements" value={requirements} onChangeText={(requirements) => setrequirements(requirements)} />


               


             
              <TextInput
                style={styles.input}

                placeholder="Key Responsibities" value={responsibities} onChangeText={(responsibities) => setresponsibities(responsibities)} />
                  <TextInput
                style={styles.input}

                placeholder="Salary Range" value={range} onChangeText={(range) => setrange(range)} />

            <TextInput
                style={styles.input}

                placeholder="Criteria (only Percentage)" value={criteria} onChangeText={(criteria) => setcriteria(criteria)} />
          


          


            </View>


          </View>

        </View>


      </ScrollView>

      <Button style={styles.signin} mode="contained" onPress={save_data}><Text style={{ letterSpacing: 2.5, color: 'white', fontWeight: 'bold' }}>SAVE</Text></Button>
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
    backgroundColor: '#242424',
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



export default postjob
