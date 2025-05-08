import { Text, View, ActivityIndicator, Image, Alert } from 'react-native';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import logo from '../assets/fotoCell.png'
import '../../global.css'
import axios from 'axios';
import { useState } from 'react';

function Home() {
    const [cep, setCep] = useState(null)
    const [texto, setTexto] = useState('')
    const [loading, setLoading] = useState(false)

    function handleCEP() {
        setLoading(true)
        const url = `https://viacep.com.br/ws/${texto}/json/`
        axios.get(url)
            .then((r) => {
                const { bairro, logradouro, localidade } = r.data
                setCep({
                    bairro: String(bairro),
                    rua: String(logradouro),
                    cidade: String(localidade)
                })
                console.log(r.data)
                setLoading(false)
            })
            .catch(() => {
                setCep(null)
                Alert.alert("Cep inválido.")
                setLoading(false)
            })
            .finally(() => {
                console.log('Requisição finalizada!')
                setLoading(false)
            })
    }

    return (
        <View className="flex flex-1 items-center justify-center">
            <Image source={logo} className='w-[100%] h-[40%]' />
            <Text className="mb-6 text-4xl font-bold">Busca CEP</Text>
            <Input placeholder='informe o cep' onChangeText={(e) => setTexto(e)} />
            {!loading ? (
                <Button tittle="Buscar" onPress={() => handleCEP()} />
            ) : (
                <ActivityIndicator animating={loading} />
            )}
            {cep && cep.bairro !== "undefined" && (
                <View className="w-full items-center justify-center mt-4">
                    <Text className="text-2xl mt-6 bg-orange-400 p-4 rounded-lg text-white font-bold">{`Bairro: ${cep.bairro}\nRua: ${cep.rua}\nCidade: ${cep.cidade}`}</Text>
                    <Button tittle="Limpar" onPress={() => setCep(null)} className="bg-gray-600 p-3.5 w-[50%] rounded-lg mt-4" />
                </View>
            )}
        </View>
    )
}

export default Home