import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import React,{Component} from 'react'
import {size} from '../../util/ScreenUtil'

export default class TaskScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <TouchableOpacity sytle={styles.task_view}>
                        <Text>日计划</Text>
                    </TouchableOpacity>
                    <TouchableOpacity sytle={styles.task_view}>
                        <Text>周计划</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity sytle={styles.task_view}>
                        <Text>月计划</Text>
                    </TouchableOpacity>
                    <TouchableOpacity sytle={styles.task_view}>
                        <Text>年计划</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{

    },
    task_view:{
        width:size.width*0.3,
        height:size.height*0.35,
        borderWidth:1

    }

})

