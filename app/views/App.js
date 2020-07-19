import React, { Component } from 'react';  
import { Platform, StyleSheet, View, Text,  Image } from 'react-native';  
import VideoRecorder from './VideoRecorder';
 export default class Myapp extends Component<{}>  
{  
   constructor(){  
     super();  
     this.state={  
     isVisible : true,  
    }  
  }  
   Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });  
  }  
   
  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  
    }, 5000);  
   }  
   
    render()  
    {  
        let Splash_Screen = (  
             <View style={styles.SplashScreen_RootView}>  
                 <View style={styles.SplashScreen_ChildView}>  
                       <Image source={require('../assets/Images/splash.jpg')}  
                    style={{width:'100%', height: '100%', resizeMode: 'contain'}} />  
                </View>  
             </View> )  
         return(  
             <View style = { styles.MainContainer }>  
             <VideoRecorder/>
                {/* <Text style={{textAlign: 'center', color:'blue'}}> Welcome to bharat Talkies - Dance , Sign , Act, Fun, Teach and Learn - One Platform One Nation </Text>   */}
                 {  
                  (this.state.isVisible === true) ? Splash_Screen : null  
                }  
            </View>  
              );  
    }  
}  
 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
    },  
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
        margin: 10,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#B6B6B4',  
        flex:1,  
    },  
});  