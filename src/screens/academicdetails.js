import React, { useState, useEffect } from 'react';
import { Alert, View, StyleSheet, ScrollView, Image, Picker, Container, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';





function academicdetails(props) {
    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [conatact, setconatact] = useState("");

    const [Password, setPassword] = useState("");
    const [Password2, setPassword2] = useState("");


    const save_data = () => {

        let user = {

            name, address, city, conatact, Password, Password2
        }

    }







    const [selectedValue, setSelectedValue] = useState("");

    return (



        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: '25%' }}>

                <View style={styles.container}>
                    <View >



                        <View>



                        </View>

                        <View style={styles.inputfield}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 15 }}>Secondary</Text>
                            <TextInput
                                style={styles.input}

                                value={name} onChangeText={(name) => setname(name)} placeholder=" Percentage" />


                            <TextInput
                                style={styles.input}

                                placeholder="Year of Passing" value={address} onChangeText={(address) => setaddress(address)} />

                            <TextInput
                                style={styles.input}

                                placeholder="Board" value={city} onChangeText={(city) => setcity(city)} />

                            <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 15 }}>Higher Secondary</Text>

                            <TextInput
                                style={styles.input}

                                value={name} onChangeText={(name) => setname(name)} placeholder=" Percentage" />


                            <TextInput
                                style={styles.input}

                                placeholder="Year of Passing" value={address} onChangeText={(address) => setaddress(address)} />

                            <TextInput
                                style={styles.input}

                                placeholder="Board" value={city} onChangeText={(city) => setcity(city)} />




                            <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 15 }}>Graduation</Text>

                            <TextInput
                                style={styles.input}

                                value={name} onChangeText={(name) => setname(name)} placeholder=" Course Name" />


                            <TextInput
                                style={styles.input}

                                placeholder="University" value={address} onChangeText={(address) => setaddress(address)} />

                            <TextInput
                                style={styles.input}

                                placeholder="Semester 1" value={city} onChangeText={(city) => setcity(city)} />

                            <TextInput
                                style={styles.input}

                                placeholder="Date of Passing" value={city} onChangeText={(city) => setcity(city)} />
                            <TextInput
                                style={styles.input}

                                placeholder="Semester 2" value={city} onChangeText={(city) => setcity(city)} />

                            <TextInput
                                style={styles.input}

                                placeholder="Date of Passing" value={city} onChangeText={(city) => setcity(city)} />
                            <TextInput
                                style={styles.input}

                                placeholder="Semester 3" value={city} onChangeText={(city) => setcity(city)} />

                            <TextInput
                                style={styles.input}

                                placeholder="Date of Passing" value={city} onChangeText={(city) => setcity(city)} />
                            <TextInput
                                style={styles.input}

                                placeholder="Semester 4" value={city} onChangeText={(city) => setcity(city)} />

                            <TextInput
                                style={styles.input}

                                placeholder="Date of Passing" value={city} onChangeText={(city) => setcity(city)} />
                            <TextInput
                                style={styles.input}

                                placeholder="Semester 5" value={city} onChangeText={(city) => setcity(city)} />

                            <TextInput
                                style={styles.input}

                                placeholder="Date of Passing" value={city} onChangeText={(city) => setcity(city)} />
                            <TextInput
                                style={styles.input}

                                placeholder="Semester 6" value={city} onChangeText={(city) => setcity(city)} />

                            <TextInput
                                style={styles.input}

                                placeholder="Date of Passing" value={city} onChangeText={(city) => setcity(city)} />
                            <TextInput
                                style={styles.input}

                                placeholder="Semester 7" value={city} onChangeText={(city) => setcity(city)} />

                            <TextInput
                                style={styles.input}

                                placeholder="Date of Passing" value={city} onChangeText={(city) => setcity(city)} />
                            <TextInput
                                style={styles.input}

                                placeholder="Semester 8" value={city} onChangeText={(city) => setcity(city)} />

                            <TextInput
                                style={styles.input}

                                placeholder="Date of Passing" value={city} onChangeText={(city) => setcity(city)} />





                        </View>


                    </View>

                </View>


            </ScrollView>

            <Button style={styles.signin} mode="contained" onPress={() => props.navigation.navigate("studentlogin")}><Text style={{ letterSpacing: 2.5, color: 'white', fontWeight: 'bold' }}>CREATE AN ACCOUNT</Text></Button>
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
        elevation: 3,
        justifyContent: 'center'




    },
    inputfield: {

        margin: 22,
        // marginTop:2,




    },
    input: {

        padding: 5,
        marginBottom: 20,
        backgroundColor: 'transparent',
        fontWeight: 'bold'





    },

    Heading: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        alignItems: 'flex-end'
    },
    picker1: {

        height: 54,
        marginTop: 10,
        width: 320,
        marginBottom: 20,

        borderBottomColor: 'lightgrey',
        borderBottomWidth: 2,




    },
    picker2: {

        height: 54,
        marginTop: 10,
        width: 320,
        marginBottom: 20,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 2

    }



});



export default academicdetails
