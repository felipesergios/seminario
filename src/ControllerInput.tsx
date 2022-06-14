import * as React from "react"
import {
  Text,
  Input,
} from "@chakra-ui/react"

export default function ControllerInput() {
    const [value, setValue] = React.useState('')
    const handleChange = (event:any) => setValue(event.target.value)
  
    return (
      <>
        <Text mb='8px'>Value: {value}</Text>
        <Input
          value={value}
          onChange={handleChange}
          placeholder='Here is a sample placeholder'
          size='sm'
        />
      </>
    )
  }
