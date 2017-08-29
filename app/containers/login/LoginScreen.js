import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React,{Component} from 'react'
import _Button from '../../components/_Button'
import _TextInput from '../../components/_TextInput'
import {size,px3dp} from '../../util/ScreenUtil'

export default class LoginScreen extends Component {

    static navigationOptions = ({navigation})=>( {
        headerTitle:'登录',
        headerStyle:{
            backgroundColor:'#a4bdca',
            elevation:0
        },
        headerTitleStyle:{
            fontFamily:'方正兰亭黑简体 Regular',
            color:'#3a3330',
            alignSelf:'center',
        },
        headerLeft:(
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    source={require('../../../res/images/nav_back_nor.png')}
                    style={{
                        width:px3dp(96),
                        height:px3dp(96),
                        marginLeft:px3dp(50),
                    }}
                />
            </TouchableOpacity>
        ),
        headerRight:(
            <View style={{ width:px3dp(96),
                height:px3dp(96),
                marginRight:px3dp(50)}}/>
        )
    });

    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            reg_result:true,
        };
    }

    _regTest(event){
        const reg_phone = /^1\d{10}$/
        const reg_email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
        this.setState({
            reg_result:reg_phone.test(event.nativeEvent.text)|| reg_email.test(event.nativeEvent.text)
        })
    }

    _login(){
        // const params = this.state
        // post('http://192.168.3.32:3000/login',
        //     params,
        //     ()=>{
        //         ToastAndroid.show('成功登录',1)
        //         this.props.navigation.navigate('Home')
        //     },
        //     ()=>{
        //         ToastAndroid.show('登录失败,请重新输入',1)
        //     })
    };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Image style={styles.bg} source={require('../../../res/images/login_bg.png')}>
                    <View style={styles.wrap}>
                        <View style={styles.image_wrap}>
                            <Image source={require('../../../res/images/login_img_telenum.png')} styla={styles.image} />
                        </View>
                        <View style={styles.input_wrap}>
                            <_TextInput
                                onChangeText={(text)=>this.setState({
                                    username:text,
                                })}
                                onEndEditing={(event)=>{
                                    this._regTest(event)
                                }}
                                placeholder='手机号码/邮箱'
                                addstyle={{
                                    width:px3dp(530)
                                }}
                            />
                            <View style={styles.input_hr}/>
                            {
                                !this.state.reg_result
                                    ?<View style={styles.reg_test}>
                                        <Text style={[,styles.reg_warn]}>输入有误,请重新输入</Text>
                                    </View>
                                    :<View style={styles.reg_test}>
                                        <Text></Text>
                                    </View>
                            }
                        </View>
                    </View>

                    <View style={[styles.wrap,styles.wrap_add]}>
                        <View style={styles.image_wrap}>
                            <Image source={require('../../../res/images/login_img_password.png')} styla={[styles.image,]} />
                        </View>
                        <View style={styles.input_wrap}>
                            <_TextInput
                                secureTextEntry={true}
                                onChangeText={(text)=>this.setState({
                                    password:text,
                                })}
                                placeholder='密码'
                                addstyle={{
                                    width:px3dp(530),
                                }}
                            />
                            <View style={styles.input_hr}/>
                        </View>
                    </View>
                    <View>
                        <_Button text="登录" onPrss={()=>navigate('Tab')}
                                 addstyle_bt={{
                                     alignSelf:'center',
                                     backgroundColor:'#7292a4',
                                     width:px3dp(530),
                                     height:px3dp(110),
                                     marginLeft:px3dp(95),
                                     borderRadius:px3dp(20),
                                 }}
                                 addstyle_text={{
                                     color:'#ffffff'
                                 }}
                        />
                    </View>
                </Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    bg:{
        alignItems:'center',
        width:null,
        height:null,
        flex:1
    },
    wrap:{
        flexDirection:'row',
        marginTop:px3dp(276),
    },
    wrap_add:{
        marginTop:px3dp(200)
    },
    image_wrap:{
        paddingTop:px3dp(20)
    },
    iamge:{
        width:px3dp(64),
        height:px3dp(64)
    },
    input_wrap:{
        flexDirection:'column',
    },
    input_hr:{
        height:px3dp(6),
        width:px3dp(530),
        backgroundColor:'#456675'
    },
    textView:{
        justifyContent:'center',
        marginLeft:10
    },
    font:{
        color:'#080808'
    },
    reg_test:{
        paddingLeft:px3dp(10),
        width:px3dp(500),
        height:px3dp(10)
    },
    reg_warn:{
        color:'#f35757'
    },
});
