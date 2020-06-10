// import React from 'react';
// import { Link } from "react-router-dom";

// import { Layout, Menu, Breadcrumb, Button } from 'antd';
// import firebase from 'firebase/app';
// import 'firebase/database'; 


// const { Header, Content, Footer } = Layout;

// const HomeView = (props) => {
//     const handleSignOut = () => {
    
//         /* TODO: sign out user here */
//         firebase.auth().signOut();
//         console.log('logged out!')
//       }

//       function testUser () {
//         console.log("you've reached function testUser!")

//         firebase.auth().onAuthStateChanged(function(user) {
//           if (user) {
//             // User is signed in.
//             console.log('signed in')
//             // var userTesting = firebase.auth().currentUser;
//             // console.log(userTesting.uid);
//             console.log('user id is ' + user.uid)
//           } else {
//             // No user is signed in.
//             console.log('not signed in')
    
//           }
//         });
    
//       }



//     return (
//         <div>
//             <h1 style={{ color: 'blue', fontSize: '50px', textAlign: "center"}}>Home Page ;D </h1>

//             <div style={{display:'flex', justifyContent: 'center'}}>
//                     <Link to ="/login">
//                     <Button className="bar-button" type="primary" a rel="noopener noreferrer" href="/HomePageView" style={{
//                             fontSize:'2vmin',
                        
//                             size:'large', 
                    
//                             textAlign:'center'}} >Sign in </Button>
//                     </Link>
//                     <Button onClick={handleSignOut}> Logout test </Button>
//                     <Button onClick={testUser}> Testing user auth! </Button>
//              </div>
//         </div>
//         // mountNode,
//         )
//     }

//     export default HomeView;
