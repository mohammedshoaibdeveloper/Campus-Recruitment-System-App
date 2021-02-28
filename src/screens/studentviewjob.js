import React, { useState } from 'react';
import { Alert, View, StyleSheet, Image, ScrollView,TouchableOpacity,Modal,TouchableHighlight } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
// import { Container, Text } from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body } from 'native-base';
function studentviewjob(props) {


  const [modalVisible, setModalVisible] = useState(false);

  const ConfirmDonate = () => {
   Alert.alert('Successfully Donate Blood to Mohammed Shoaib');
 }

  return (




    <View style={styles.container}>

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 10 }}>
        <Text style={styles.heading} >THERE ARE {" "}</Text>
        <View style={styles.circle1} >
          <Text style={{ color: 'white' }}> 3</Text>
        </View><Text style={styles.heading} >

         JOBS HERE
</Text>
      </View>
      <ScrollView>
      <Content style={styles.card}>
          <Card >
            <CardItem>
             
                <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Android Developer Ionic Framework</Text>
                
                </View>
               
            </CardItem>
            <View style={styles.underline}>
            </View>

            <CardItem>
              <Body>
                <View style={{ flexDirection: 'row', width: '100%' }}>

                  <Text  note style={{  width: '32%', color: 'black' }}>
                    Criteria :
               </Text>
                  <Text style={{ width: '68%', marginLeft: 5, fontSize: 14, color: 'black', fontWeight: 'bold' }}>
                   65%
               </Text>
                </View>
                <View style={{ flexDirection: 'row', width: '100%' }}>

                  <Text  note style={{  width: '32%', color: 'black' }}>
                    Requirements :
                 </Text>
                  <Text style={{ width: '68%', marginLeft: 2, fontSize: 14, color: 'black', fontWeight: 'bold' }}>
                    Graduate
                 </Text>
                </View>
                <View style={{ flexDirection: 'row', width: '100%' }}>

                  <Text note note style={{  width: '32%', color: 'black' }}>
                    Description :
                   </Text>
                  <Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying
                   </Text>
                </View>
              </Body>
            </CardItem>
            <CardItem>
                
            <Button style={styles.buttondonate}  onPress={()=>props.navigation.navigate("viewjobdetails")}>

<Text style={{ color: 'white', fontWeight: 'bold' }}>View Details</Text>
</Button>
              
            </CardItem>
            <CardItem>
                
                <Button style={styles.buttondonate}  onPress={() => {
                        setModalVisible(true);
                       
                      }}>
    
    <Text style={{ color: 'white', fontWeight: 'bold' }}>Apply</Text>
    </Button>
                  
                </CardItem>
          </Card>
        </Content>
        <Content style={styles.card}>
          <Card >
            <CardItem>
             
                <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mobile App Developer</Text>
                
                </View>
               
            </CardItem>
            <View style={styles.underline}>
            </View>

            <CardItem>
              <Body>
                <View style={{ flexDirection: 'row', width: '100%' }}>

                  <Text  note style={{  width: '32%', color: 'black' }}>
                    Criteria :
               </Text>
                  <Text style={{ width: '68%', marginLeft: 5, fontSize: 14, color: 'black', fontWeight: 'bold' }}>
                   65%
               </Text>
                </View>
                <View style={{ flexDirection: 'row', width: '100%' }}>

                  <Text  note style={{  width: '32%', color: 'black' }}>
                    Requirements :
                 </Text>
                  <Text style={{ width: '68%', marginLeft: 2, fontSize: 14, color: 'black', fontWeight: 'bold' }}>
                    Graduate
                 </Text>
                </View>
                <View style={{ flexDirection: 'row', width: '100%' }}>

                  <Text note note style={{  width: '32%', color: 'black' }}>
                    Description :
                   </Text>
                  <Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying
                   </Text>
                </View>
              </Body>
            </CardItem>
            <CardItem>
            <Button style={styles.buttondonate}  onPress={()=>props.navigation.navigate("adminviewdetails")}>

<Text style={{ color: 'white', fontWeight: 'bold' }}>ALready Apply</Text>
</Button>
              
            </CardItem>
          </Card>
        </Content>
        <Content style={styles.card}>
          <Card >
            <CardItem>
             
                <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Python Devloper</Text>
                
                </View>
               
            </CardItem>
            <View style={styles.underline}>
            </View>

            <CardItem>
              <Body>
                <View style={{ flexDirection: 'row', width: '100%' }}>

                  <Text  note style={{  width: '32%', color: 'black' }}>
                    Criteria :
               </Text>
                  <Text style={{ width: '68%', marginLeft: 5, fontSize: 14, color: 'black', fontWeight: 'bold' }}>
                   65%
               </Text>
                </View>
                <View style={{ flexDirection: 'row', width: '100%' }}>

                  <Text  note style={{  width: '32%', color: 'black' }}>
                    Requirements :
                 </Text>
                  <Text style={{ width: '68%', marginLeft: 2, fontSize: 14, color: 'black', fontWeight: 'bold' }}>
                    Graduate
                 </Text>
                </View>
                <View style={{ flexDirection: 'row', width: '100%' }}>

                  <Text note note style={{  width: '32%', color: 'black' }}>
                    Description :
                   </Text>
                  <Text style={{ width: '68%', fontSize: 14, color: 'black', fontWeight: 'bold' }}>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying
                   </Text>
                </View>
              </Body>
            </CardItem>

            <CardItem>
            <Button style={styles.buttondonate}  onPress={()=>props.navigation.navigate("adminviewdetails")}>

<Text style={{ color: 'white', fontWeight: 'bold' }}>Apply</Text>
</Button>
              
            </CardItem>
          </Card>
        </Content>
     


      

      
      </ScrollView>

      
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>

              <Text style={styles.modalText}> <Text style={styles.modalText}>That's very generous! Are Your want to Confirm to Apply Job</Text></Text>

             
              <View style={styles.modalB}>

                <Button style={styles.modalbutton} onPress={() => {

                  ConfirmDonate()
                  setModalVisible(!modalVisible)
                }}
                ><Text style={{color:'white',fontWeight:'bold',fontSize:20}}>CONFIRM</Text></Button>
              </View>

              <TouchableHighlight

                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={{ fontSize: 15, color: 'black', marginTop: 10 }} onPress={() => {

                  setModalVisible(!modalVisible)
                }}>
                  No, I will Apply later</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>


      </View>



     



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
    backgroundColor: '#8EC043',
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
    backgroundColor: '#8EC043',
    letterSpacing: 1.5,
    alignItems:'center',
    justifyContent:'center'

  },
  modalB: {
    justifyContent: 'center',

  }





});

export default studentviewjob
