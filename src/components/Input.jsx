import { TextInput } from "react-native"
export const Input = ({ ...rest }) => {
    return (
        <TextInput className="w-[80%] rounded-lg border-2 border-[#121214] p-4 mb-4" {...rest} />
    )
}