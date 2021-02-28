import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from '../screens/home';
import adminlogin from '../screens/adminlogin';
import adminsignup from '../screens/adminsignup';
import postjob from '../screens/postjob';
import adminprofile from '../screens/adminprofile';
import adminhome from '../screens/adminhome';
import myjobs from '../screens/myjobs';
import viewstudent from '../screens/viewstudents';
import myapplication from '../screens/myapplication';
import adminviewdetails from '../screens/adminviewdetails';
import studentlogin from '../screens/studentlogin';
import studentsignup from '../screens/studentsignup';
import studenthome from '../screens/studenthome';
import studentviewjob from '../screens/studentviewjob';
import mysubmitapp from '../screens/mysubmitapp';
import viewjobdetails from '../screens/viewjobdetails';
import studentprofile from '../screens/studentprofile';
import academicdetails from '../screens/academicdetails';




const Stack = createStackNavigator();

function AppNavigation() {




  



  

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="home" options={{ headerShown: false }} component={home} />
      <Stack.Screen name="academicdetails" options={{ title: 'ACADEMIC DETAILS',headerTitleAlign:'center',headerStyle: { backgroundColor: 'white' },headerTitleStyle: { color: 'black' }, }}  component={academicdetails} />
      <Stack.Screen name="studentprofile" options={{ title: 'View Profile',headerTitleAlign:'center',headerStyle: { backgroundColor: 'white' },headerTitleStyle: { color: 'black' }, }}  component={studentprofile} />
      <Stack.Screen name="viewjobdetails" options={{ title: 'Job Details',headerTitleAlign:'center',headerStyle: { backgroundColor: 'white' },headerTitleStyle: { color: 'black' }, }}  component={viewjobdetails} />
      <Stack.Screen name="studentviewjob" options={{ title: 'JOBS',headerTitleAlign:'center',headerStyle: { backgroundColor: 'white' },headerTitleStyle: { color: 'black' }, }}  component={studentviewjob} />
      <Stack.Screen name="mysubmitapp" options={{ title: 'MY APPLICATIONS',headerTitleAlign:'center',headerStyle: { backgroundColor: 'white' },headerTitleStyle: { color: 'black' }, }}  component={mysubmitapp} />
      <Stack.Screen name="studenthome" options={{ headerShown: false }} component={studenthome} />
      <Stack.Screen name="studentsignup" options={{ headerShown: false }} component={studentsignup} />
        <Stack.Screen name="studentlogin" options={{ headerShown: false }} component={studentlogin} />

      <Stack.Screen name="adminviewdetails" options={{ title: 'Applications Details',headerTitleAlign:'center',headerStyle: { backgroundColor: 'white' },headerTitleStyle: { color: 'black' }, }}  component={adminviewdetails} />
      <Stack.Screen name="myapplication" options={{ title: 'Applications',headerTitleAlign:'center',headerStyle: { backgroundColor: 'white' },headerTitleStyle: { color: 'black' }, }}  component={myapplication} />
      <Stack.Screen name="viewstudent" options={{ title: 'View Students',headerTitleAlign:'center',headerStyle: { backgroundColor: 'white' },headerTitleStyle: { color: 'black' }, }}  component={viewstudent} />
      <Stack.Screen name="myjobs" options={{ title: 'My Jobs',headerTitleAlign:'center',headerStyle: { backgroundColor: 'white' },headerTitleStyle: { color: 'black' }, }}  component={myjobs} />
      
      <Stack.Screen name="adminsignup" options={{ headerShown: false }} component={adminsignup} />
        <Stack.Screen name="adminlogin" options={{ headerShown: false }} component={adminlogin} />
      <Stack.Screen name="adminhome" options={{ headerShown: false }} component={adminhome} />
      <Stack.Screen name="adminprofile" options={{ title: 'Admin Profile',headerTitleAlign:'center',headerStyle: { backgroundColor: 'white' },headerTitleStyle: { color: 'black' }, }}  component={adminprofile} />
      <Stack.Screen name="postjob" options={{ title: 'New Job',headerTitleAlign:'center',headerStyle: { backgroundColor: 'white' },headerTitleStyle: { color: 'black' }, }}  component={postjob} />

     

      
      
     

     



        







      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
