import {Text,StyleSheet,TouchableOpacity,View} from 'react-native'
import React,{Component,PropTypes} from 'react'
import {size,px3dp} from '../util/ScreenUtil'

export default class _Button extends Component {
    static propType = {
        text: PropTypes.string,
        onPress:PropTypes.func,
        addstyle_bt:View.propTypes.style,
        addstyle_text:View.propTypes.style
    };
    render(){
        const {addstyle_bt,addstyle_text} = this.props;
        return(
            <TouchableOpacity style={[styles.button,addstyle_bt]} onPress={this.props.onPress}>
                <Text style={[styles.text,addstyle_text]}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        borderWidth:px3dp(1),
        borderColor:'#d7c4bb',


        alignItems:'center',
        marginTop:px3dp(100),
        justifyContent:'center'
    },
    text:{

    }
});