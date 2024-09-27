import { TabContainer } from "@/styles/pages/tab";
import { TabProps } from "./types";
import { Heading } from "@bertiare-ui/react";

export function Tab(props: TabProps){
    return(
        <>
            <TabContainer {...props}>
                {props.children}
                <Heading size={props.size}>{props.title}</Heading>
            </TabContainer>
        </>
    )
}