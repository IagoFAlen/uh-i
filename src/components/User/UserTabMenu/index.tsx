import { UserTab, UserTabMenu } from "@/styles/pages/user";
import { Heading } from "@bertiare-ui/react";
import { useState } from "react";

export function UserTabs(){
    const baseTabs = ['Uh-its', 'Interactions', 'Saves', 'Likes']
    const [ defaultFocus, setDefaultFocus ] = useState(true)
    const [ unfocusedTabs, setUnfocusedTabs ] = useState(baseTabs)

    function handleTabClick(tab: string){
        const filteredTabs = baseTabs.filter(tabs => tabs !== tab)
        setUnfocusedTabs(filteredTabs)
        setDefaultFocus(false)
    }

    function isUnfocusedTab(tab: string){
        return unfocusedTabs.includes(tab)
    }

    function focusTab(tab: string, defaultFocus?: boolean){
        if(!(isUnfocusedTab(tab)) || defaultFocus)
            return 'focus'

        return undefined
    }

    return(
        <>
            <UserTabMenu>
                <UserTab variant={focusTab('Uh-its', defaultFocus)} onClick={() => handleTabClick('Uh-its')}>
                    <Heading size="xxsmall">Uh-its</Heading>
                </UserTab>
                <UserTab variant={focusTab('Interactions')} onClick={() => handleTabClick('Interactions')}>
                    <Heading size="xxsmall">Interactions</Heading>
                </UserTab>
                <UserTab variant={focusTab('Saves')} onClick={() => handleTabClick('Saves')}>
                    <Heading size="xxsmall">Saves</Heading>
                </UserTab>
                <UserTab variant={focusTab('Likes')} onClick={() => handleTabClick('Likes')}>
                    <Heading size="xxsmall">Likes</Heading>
                </UserTab>
            </UserTabMenu>
        </>
    )
}