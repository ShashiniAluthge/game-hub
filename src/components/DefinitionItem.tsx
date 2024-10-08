import { Box, Heading } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props{
    term:string,
    children:ReactNode | ReactNode[]
}

const DefinitionItem = ({term,children}:Props) => {
  return (
    <Box>
        <Heading marginY={5} fontSize={'medium'} color={'gray.600'}>{term}</Heading>
        <dd>{children}</dd>
    </Box>
  )
}

export default DefinitionItem