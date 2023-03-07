import {
    Container,
    Message
} from "./styles";

type Props = {
    message: string;
}

export function ListEmpety({ message }: Props) {
    return (
        <Container>
            <Message>
            {message}
            </Message>
        </Container>
    )
}