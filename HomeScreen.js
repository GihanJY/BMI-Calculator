import {View, Text, Button} from 'react-native';
import { StylesSheet } from './Style/StylesSheet';

function HomeScreen(props){
    //console.log(props);
    return(
        <View>
            <Button 
            title='Healthy' 
            onPress={() => props.navigation.navigate("Healthy")}/>

            <Button 
            title='About' 
            onPress={() => props.navigation.navigate("About")}/>

            <Text>This is home screen.</Text>
        </View>
    );
}

export default HomeScreen;