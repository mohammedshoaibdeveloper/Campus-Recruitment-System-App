import React,{useState,useEffect} from 'react';
import {Alert,View , Text,StyleSheet,Image,ScrollView} from 'react-native';
import { TextInput,Button } from 'react-native-paper';



function adminlogin(props){

    const [Username,setUsername] = useState("");
    const [password,setPassword] = useState("");


    const save_data=()=>{



      let user = {

        Username,password
      }

      // console.log("user==>",user)

      var formdata = new FormData();

      formdata.append("Username", Username);
      formdata.append("Password", password);
      formdata.append("Sender_ID", "dCCqEA1dRbyN_9YmWCRDDD:APA91bGpyATcY7d-IH2ksllRzmWuOWk7fn1HsHD71kQWdaPiYxqHYCsbbqKdVL1pjoSf4wRtzzgoctlf0d6LXwNbC03b3f7g__tW2GSKaBIzdAvYpbXf-07bMYzCq5XWVfCxqppacAGL");
      formdata.append("Device_type", "android");
      formdata.append("latitude", "24.721");
      formdata.append("longitude", "24.721");

        // console.log("formdata=>",formdata)

        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };

        fetch("http://bloodbankapp.pythonanywhere.com/Login", requestOptions)
        .then(response => response.json()

        )
        .then(result => {
          // console.log("my result is", result)


          if (result.status == true) {
            const storeData = async () => {
              try {
                console.log("Going in Async Code");
                await AsyncStorage.setItem("userdata", JSON.stringify(result.data))
                // console.log(await AsyncStorage.getItem("userdata"))
                userdata = await AsyncStorage.getItem("userdata")
                console.log("userdata=>",userdata);

                props.set_data(userdata)


              } catch (error) {

              }
            };

            storeData()
            Alert.alert(result.message);
            props.navigation.navigate("Dashboard")
          }
          else {
            Alert.alert(result.message);
          }


        })
        .catch(error => console.log('error', error));




    }




    console.log("redux_data=>",props.userdata)






    return(




          <View style={styles.container}>

            <ScrollView>




            <View >
              <View style={styles.Heading}>
              <Image
            style = {{width:250,height:100}}
            source={require('../images/CampusLogo.png')}/>
    
            </View>
            <Text style={{alignSelf:"center",fontSize:20,paddingTop:15,fontWeight:'100',padding:40,color:'grey',fontFamily: 'sans-serif',letterSpacing:2.5,textAlign:'center',marginLeft:15}}>You SLogan Goes Here</Text>

            <View></View>

            <Text style={{alignSelf:"center",fontSize:25,fontWeight:'250',fontWeight:'bold',color:'#221E1F',letterSpacing:2.5}}>My Credentials Is:</Text>

            <View  style={styles.inputfield}>
                <TextInput
                style={styles.input}

                value={Username} onChangeText={(text)=>setUsername(text)} placeholder="Username"/ >


            <TextInput
            style={styles.input}

            secureTextEntry={true} placeholder="Password" value={password} onChangeText={(password)=>setPassword(password)}/>

        </View>

          </View>

            </ScrollView>

        <View style={styles.SIGNIN}>


        <Button style={styles.signin} mode="contained"title="LOGIN" onPress={()=>props.navigation.navigate("adminhome")}><Text style={{letterSpacing:8.5,color:'white',fontWeight:'bold'}}>SIGN IN</Text></Button>


        <View style={styles.reg}>
          <Text style={styles.account}>Don't Have an account?</Text>

          <Text style={styles.register} onPress={()=>props.navigation.navigate("adminsignup")}>Regiter Now</Text>


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
    marginTop: 10,
    borderRadius:10,
    marginLeft:30,
    color:'blue',
      elevation:10,



  },
  SIGNIN:{
      position:'absolute',
      bottom:20,
      width:'100%'

  },
  signin: {
    width: 300,
    height: 54,
    padding: 10,

    borderRadius:10,
    marginLeft:30,
    backgroundColor:'#221E1F',
    elevation:3,



  },

  inputfield:{

    margin:22,



  },
  input: {
    width: 320,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor:'transparent',
    fontWeight:'bold'





  },
  reg:{
    flexDirection:'row',

    marginTop:5,
    alignItems:'center',
    justifyContent:'center',
    width:'100%'




  },
  register:{
    color:'#E51433'

  },
  account:{
    color:'black'

  },
  Heading:{
    flexDirection:'row',
    justifyContent:'space-around',
    padding:10,
    alignItems:'flex-end'
  }


});







export default adminlogin
