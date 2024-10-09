import { HeaderLayout } from "@/layout/Header";
import { LayoutContent } from "@/styles/pages/layout";
import { RegisterButtonWrapper, RegisterForm, RegisterHeadingLabelWrapper, RegisterLabel, RegisterTitleLabelWrapper } from "@/styles/pages/register";
import { Box, Button, Heading, Input } from "@bertiare-ui/react";
import { IoCreateOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { MdOutlineDriveFileRenameOutline, MdOutlineMail, MdOutlinePassword } from "react-icons/md";

export default function Register(){
    const sectionSize = 32
    const iconSize = 14
    return(
        <>
            <HeaderLayout />
            <LayoutContent>
                <Box fit="40rem">
                    <RegisterTitleLabelWrapper>
                        <IoCreateOutline size={sectionSize}/>
                        <Heading size="medium" decoration="highlight">Sign-Up</Heading>
                    </RegisterTitleLabelWrapper>
                    <RegisterForm>
                        <RegisterLabel>
                            <RegisterHeadingLabelWrapper>
                                <MdOutlineMail size={iconSize}/>
                                <Heading size="minimum">E-mail</Heading>
                            </RegisterHeadingLabelWrapper>
                                <Input placeholder="Type your e-mail" fit="100%"/>
                        </RegisterLabel>
                        <RegisterLabel>
                            <RegisterHeadingLabelWrapper>
                                <MdOutlineDriveFileRenameOutline size={iconSize}/>
                                <Heading size="minimum">Name</Heading>
                            </RegisterHeadingLabelWrapper>
                                <Input placeholder="Type your name" fit="100%"/>
                        </RegisterLabel>
                        <RegisterLabel>
                            <RegisterHeadingLabelWrapper>
                                <LuUser size={iconSize}/>
                                <Heading size="minimum">Username</Heading>
                            </RegisterHeadingLabelWrapper>
                                <Input placeholder="Type your username" fit="100%"/>
                        </RegisterLabel>
                        <RegisterLabel>
                            <RegisterHeadingLabelWrapper>
                                <MdOutlinePassword size={iconSize}/>
                                <Heading size="minimum">Password</Heading>
                            </RegisterHeadingLabelWrapper>
                                <Input placeholder="Type your password" fit="100%"/>
                        </RegisterLabel>
                        <RegisterLabel>
                            <RegisterHeadingLabelWrapper>
                                <MdOutlinePassword size={iconSize}/>
                                <Heading size="minimum">Confirm password</Heading>
                            </RegisterHeadingLabelWrapper>
                                <Input placeholder="Type your password again" fit="100%"/>
                        </RegisterLabel>
                        <RegisterButtonWrapper>
                            <Button variant="default" fit="100%">Register</Button>
                        </RegisterButtonWrapper>
                    </RegisterForm>
                </Box>
            </LayoutContent>
        </>
    )
}