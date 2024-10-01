import { WriteHeadingWrapper, WriteLabel } from "@/styles/pages/write";
import { Heading, Input, TextArea } from "@bertiare-ui/react";
import { useState } from "react";

export function Task(){

    const [ inputValue, setInputValue ] = useState("")
    const [ textAreaValue, setTextAreaValue ] = useState("")

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>){
        setInputValue(event.target.value)
    }

    function handleTextAreaChange(event: React.ChangeEvent<HTMLTextAreaElement>){
        setTextAreaValue(event.target.value)
    }

    console.log('Input:', inputValue)
    console.log('TextArea: ', textAreaValue)
    return(
        <>
            <WriteLabel>
                <WriteHeadingWrapper>
                    <Heading size="minimum">Title</Heading>
                </WriteHeadingWrapper>
                <Input fit="100%" placeholder="Write your heading title here" onChange={handleInputChange} value={inputValue} />
            </WriteLabel>
            <WriteLabel>
                <WriteHeadingWrapper>
                    <Heading size="minimum">Content</Heading>
                </WriteHeadingWrapper>
                <TextArea fit="100%" placeholder="Write your content description here" onChange={handleTextAreaChange} value={textAreaValue} />
            </WriteLabel>
        </>
    )
}