import { TagsContainer } from "@/styles/pages/tags";
import { Tag } from "@bertiare-ui/react";

export function Tags() {
    return(
        <>
            <TagsContainer>
                <Tag title="cybersec" size="small" weight="bold" />
                <Tag title="programming" size="small" weight="bold" />
                <Tag title="pentesting" size="small" weight="bold" />
                <Tag title="study" size="small" weight="bold" />
            </TagsContainer>
        </>
    )
}