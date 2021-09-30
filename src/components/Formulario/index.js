import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ResultadoDesconto from './ResultadoDesconto';

export default function Formulario() {
    
    const [valor,setValor] = useState(null)
    const [percDesc,setPercDesc] = useState(null)
    const [mensagemDesc,setMensagemDesc] = useState("preencha o valor do produto e o desconto")
    const [desconto,setDesconto] = useState(null)
    const [textoBotao,setTextoBotao] = useState("Calcular Desconto")

    function calculaDesconto() {
        return setDesconto((valor - valor * percDesc / 100).toFixed(2))
    }

    function validaDesconto(){
        if(valor != null && percDesc != null){
            calculaDesconto()
            setMensagemDesc("Valor do produto com desconto:")
            setTextoBotao("Calcular Novamente")
            setValor(null)
            setPercDesc(null)
            return
        }
        setDesconto(null)
        setTextoBotao("Calcula Desconto")
        setMensagemDesc("preencha o valor do produto e o desconto")
    }

    return(
        <View>
            <View>
                <Text>Valor do Produto</Text>
                <TextInput
                    onChangeText={setValor}
                    value={valor}
                    placeholder="Ex. 417.50"
                    keyboardType="numeric"
                ></TextInput>
                <Text>Percentual de Desconto</Text>
                <TextInput
                    onChangeText={setPercDesc}
                    value={percDesc}
                    placeholder="Ex. 20"
                    keyboardType="numeric"
                ></TextInput>
                <Button 
                    onPress={validaDesconto}
                    title={textoBotao} 
                />
            </View>
            <ResultadoDesconto 
                mensagem={mensagemDesc} 
                resultado={desconto} 
            />
        </View>
    );
}