import React from 'react';
import { View, Text, ShadowPropsTypesIOS } from 'react-native';

export default function ResultadoDesconto(props){
    return(
        <View>
            <Text>{props.resultado}</Text>
            <Text>{props.mensagem}</Text>
        </View>
    );
}
