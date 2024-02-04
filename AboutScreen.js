import {View ,Text} from 'react-native';
import {StylesSheet} from './Style/StylesSheet';

function AboutScreen(){
    return(
        <View style={StylesSheet.container}>
            <Text style={StylesSheet.bgText}>This is about screen</Text>
        </View>
    );
}

export default AboutScreen;