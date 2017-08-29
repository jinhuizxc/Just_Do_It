import {View,Text,StyleSheet} from 'react-native'
import React,{Component} from 'react'
import {size} from '../../util/ScreenUtil'

export default class SigninScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>sign_in</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{

    }

})

