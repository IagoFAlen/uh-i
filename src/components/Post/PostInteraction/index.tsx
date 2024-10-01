import { PostInteractionsProps } from "./types";
import { Interaction, PostInteractions } from "@/styles/pages/postinteraction";
import { Text } from "@bertiare-ui/react";
import { FaRegHeart, FaRegComment, FaRegBookmark, FaRegShareSquare } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

export function PostInteraction(props: PostInteractionsProps){
    return(
        <>
            <PostInteractions>
                <Interaction>
                    <FaRegHeart />
                    <Text>34.545</Text>
                </Interaction>
                <Interaction>
                    <FaRegComment />
                    <Text>444</Text>
                </Interaction>
                <Interaction>
                    <FaRegBookmark />
                </Interaction>
                <Interaction>
                    <IoShareSocialOutline />
                </Interaction>
            </PostInteractions>
        </>
    )
}