import React, { useState } from 'react';
import { Alert, View, StyleSheet, Image, ScrollView,TouchableOpacity,Modal,TouchableHighlight } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
// import { Container, Text } from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body } from 'native-base';
function myapplication(props) {


  const [modalVisible, setModalVisible] = useState(false);

  const ConfirmDonate = () => {
   Alert.alert('Successfully Donate Blood to Mohammed Shoaib');
 }

  return (




    <View style={styles.container}>

    
      <ScrollView>
        <Content style={styles.card}>
          <Card >
            <CardItem>
             
                <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>STUDENT DETAILS:</Text>
                
                </View>
               
            </CardItem>
            <View style={styles.underline}>
            </View>

            <CardItem>
              <Body>
                <View style={{ flexDirection: 'row', width: '100%' }}>

                  <Text  note style={{  width: '32%', color: 'black' }}>
                    Name :
               </Text>
                  <Text style={{ width: '68%', marginLeft: 5, fontSize: 14, color: 'black', fontWeight: 'bold' }}>
                   Mohammed Shoaib
               </Text>
                </View>
                <View style={{ flexDirection: 'row', width: '100%' }}>

                  <Text  note style={{  width: '32%', color: 'black' }}>
                    Gender :
                 </Text>
                  <Text style={{ width: '68%', marginLeft: 2, fontSize: 14, color: 'black', fontWeight: 'bold' }}>
                    Male
                 </Text>
                </View>
                <View style={{ flexDirection: 'row', width: '100%' }}>

                  <Text note note style={{  width: '32%', color: 'black' }}>
                   Date of Birth:
                   </Text>
                  <Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
                   2/28/2021
                   </Text>  
                   </View>
                   <View style={{ flexDirection: 'row', width: '100%' }}>
                     <Text note note style={{  width: '32%', color: 'black' }}>
                   Email:
                   </Text>
                  <Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
                   shoaibbilal101@gmail.com
                   </Text>
                   </View>
                   <View style={{ flexDirection: 'row', width: '100%' }}>
                   <Text note note style={{  width: '32%', color: 'black' }}>
                   Contact:
                   </Text>
                  <Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
                   +923142064894
                   </Text>

                </View>
                <View style={{ flexDirection: 'row', width: '100%' }}>

<Text note note style={{  width: '32%', color: 'black' }}>
SSC:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
75%
 </Text>  
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
   <Text note note style={{  width: '32%', color: 'black' }}>
 Passing Year:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
2018
 </Text>
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
 <Text note note style={{  width: '32%', color: 'black' }}>
 Board:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
 Board of Secondary Education karachi
 </Text>

</View>
<View style={{ flexDirection: 'row', width: '100%' }}>

<Text note note style={{  width: '32%', color: 'black' }}>
HSC:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
75%
 </Text>  
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
   <Text note note style={{  width: '32%', color: 'black' }}>
 Passing Year:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
2020
 </Text>
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
 <Text note note style={{  width: '32%', color: 'black' }}>
 Board:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
 Board of Intermediate Education karachi
 </Text>

</View>
<View style={{ flexDirection: 'row', width: '100%' }}>

<Text note note style={{  width: '32%', color: 'black' }}>
Graduation
 </Text>
  
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
   <Text note note style={{  width: '32%', color: 'black' }}>
 Course Name:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
Computer Science
 </Text>
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
 <Text note note style={{  width: '32%', color: 'black' }}>
 University:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
 Federal Urdu University of Arts & Science Technology
 </Text>

</View>
<View style={{ flexDirection: 'row', width: '100%' }}>

<Text note note style={{  width: '32%', color: 'black' }}>
Semester1
 </Text>
  
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
   <Text note note style={{  width: '32%', color: 'black' }}>
 Percent:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
70%
 </Text>
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
 <Text note note style={{  width: '32%', color: 'black' }}>
 Passing Year:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
 2/28/2021
 </Text>

</View>
<View style={{ flexDirection: 'row', width: '100%' }}>

<Text note note style={{  width: '32%', color: 'black' }}>
Semester2
 </Text>
  
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
   <Text note note style={{  width: '32%', color: 'black' }}>
 Percent:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
70%
 </Text>
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
 <Text note note style={{  width: '32%', color: 'black' }}>
 Passing Year:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
 2/28/2021
 </Text>

</View>
<View style={{ flexDirection: 'row', width: '100%' }}>

<Text note note style={{  width: '32%', color: 'black' }}>
Semester3
 </Text>
  
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
   <Text note note style={{  width: '32%', color: 'black' }}>
 Percent:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
70%
 </Text>
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
 <Text note note style={{  width: '32%', color: 'black' }}>
 Passing Year:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
 2/28/2021
 </Text>

</View>
<View style={{ flexDirection: 'row', width: '100%' }}>

<Text note note style={{  width: '32%', color: 'black' }}>
Semester4
 </Text>
  
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
   <Text note note style={{  width: '32%', color: 'black' }}>
 Percent:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
70%
 </Text>
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
 <Text note note style={{  width: '32%', color: 'black' }}>
 Passing Year:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
 2/28/2021
 </Text>

</View>
<View style={{ flexDirection: 'row', width: '100%' }}>

<Text note note style={{  width: '32%', color: 'black' }}>
Semester5
 </Text>
  
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
   <Text note note style={{  width: '32%', color: 'black' }}>
 Percent:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
70%
 </Text>
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
 <Text note note style={{  width: '32%', color: 'black' }}>
 Passing Year:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
 2/28/2021
 </Text>

</View>
<View style={{ flexDirection: 'row', width: '100%' }}>

<Text note note style={{  width: '32%', color: 'black' }}>
Semester6
 </Text>
  
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
   <Text note note style={{  width: '32%', color: 'black' }}>
 Percent:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
70%
 </Text>
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
 <Text note note style={{  width: '32%', color: 'black' }}>
 Passing Year:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
 2/28/2021
 </Text>

</View>
<View style={{ flexDirection: 'row', width: '100%' }}>

<Text note note style={{  width: '32%', color: 'black' }}>
Semester7
 </Text>
  
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
   <Text note note style={{  width: '32%', color: 'black' }}>
 Percent:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
70%
 </Text>
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
 <Text note note style={{  width: '32%', color: 'black' }}>
 Passing Year:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
 2/28/2021
 </Text>

</View>
<View style={{ flexDirection: 'row', width: '100%' }}>

<Text note note style={{  width: '32%', color: 'black' }}>
Semester8
 </Text>
  
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
   <Text note note style={{  width: '32%', color: 'black' }}>
 Percent:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
70%
 </Text>
 </View>
 <View style={{ flexDirection: 'row', width: '100%' }}>
 <Text note note style={{  width: '32%', color: 'black' }}>
 Passing Year:
 </Text>
<Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
 2/28/2021
 </Text>

</View>
              </Body>
            </CardItem>
            <CardItem>
            
              
            </CardItem>
          </Card>
        </Content>
      
     


      

      
      </ScrollView>



     



    </View>




  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',


  },
  heading: {
    color: 'black',
    textAlign: 'center',

    textAlignVertical: "center",

    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'sans-serif-medium',
    alignItems: 'center',
marginStart: 5
  },
  card: {
    // marginTop:30
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: "#E51433",
    alignItems: 'center',
    // margin: 5,
    justifyContent: 'center',
    elevation: 6


  },
  circle1: {
    width: 25,
    height: 25,
    borderRadius: 100 / 2,
    backgroundColor: "#E51433",
    alignItems: 'center',
    // margin: 5,
    justifyContent: 'center',
    elevation: 6,
    // marginTop: 20


  },

  bloodgroup: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 0,
    fontSize: 20
  },
  underline: {

    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginTop: 5,
    width: '90%',
    alignSelf: 'center',
    elevation: 2
  },
  buttondonate: {
    width: '100%',
    backgroundColor: '#242424',
    height: '100%',
    elevation: 5

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#c53ae8",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1.5
  },
  modalText1:{
    marginBottom: 15,
    textAlign: "center",

    fontSize: 16,
    // letterSpacing: 1.5


  },
  modalText2:{
    marginBottom: 15,
    textAlign: "center",

    fontSize: 16,
    // letterSpacing: 1.5


  },
  modalText3:{
    marginBottom: 15,
    textAlign: "center",
      fontWeight: 'bold',
    fontSize: 16,
    // letterSpacing: 1.5


  },
  modalbutton: {
    width: 230,
    height: 54,
    padding: 10,
    marginTop: 12,
    borderRadius: 10,
    // marginLeft: 30,
    backgroundColor: '#242424',
    letterSpacing: 1.5,
    alignItems:'center',
    justifyContent:'center'

  },
  modalB: {
    justifyContent: 'center',

  }





});

export default myapplication
