import { Button } from 'react-native'

interface ButtonProps {
    text: string
    onClick: () => void
    color?: string
}

export default function StyledButton(
    { text, onClick, color }: ButtonProps) {
    return (
        <Button onPress={onClick} title={text} color={color} />
    )
}