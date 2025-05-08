import { TouchableOpacity, Text } from "react-native"
export const Button = ({ tittle, ...rest }) => {
    return (
        <TouchableOpacity className="bg-orange-600 p-3.5 w-[80%] rounded-lg mb-2" {...rest}>
            <Text className="text-white text-lg text-center font-bold">{tittle}</Text>
        </TouchableOpacity>
    )
}