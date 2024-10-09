import { Dialog } from "@/layout/Dialog";
import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { EditUserInfo, EditUserInfoContainer } from "@/styles/pages/user";
import { IoPencil } from "react-icons/io5";
import { OptionsProps } from "../Options/types";
import { Avatar, Button, Heading, Input, Text } from "@bertiare-ui/react";
import { AccountDetailsButtonWrapper, AccountDetailsDialogContainer, AccountDetailsLabel } from "@/styles/pages/dialog/changeaccountdetailschange";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MatchingErrors, OptionHeadingLabelWrapper, OptionInputWrapper } from "@/styles/pages/form";
import { LuUser } from "react-icons/lu";
import { MdOutlineDriveFileRenameOutline, MdOutlineLocationOn } from "react-icons/md";

const formSchema = z.object({
    username: z.string(),
    name: z.string().min(1, 'Name is required'),
    location: z.string().min(3, 'Location is required'), 
})

type FormDataTypes = z.infer<typeof formSchema>

export function AccountDetailsChange(props: OptionsProps){
    const { register, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm<FormDataTypes>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
    })

    async function handleChangeAccountDetails(data: FormDataTypes){
        try{
            // Call API over here
            console.log('Change Account Details call', data)
        }catch(error){
            console.error(error)
        }
    }

    const iconSize = 14

    return(
        <>
            <SettingOptionDialogWrapper>
                <EditUserInfoContainer onClick={() => props.handleDialogToggle('isAccountDetailsOpen', props.isDialogOpen)}>
                    <EditUserInfo>
                        <IoPencil />
                    </EditUserInfo>
                </EditUserInfoContainer>

                <Dialog isOpen={props.isDialogOpen} close={() => props.handleDialogToggle('isAccountDetailsOpen', props.isDialogOpen)}>
                    <AccountDetailsDialogContainer onSubmit={ handleSubmit(handleChangeAccountDetails) } action="">
                        <Avatar size="xxlarge" src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg"/>
                        <Heading size="small">Dealenc</Heading>
                        <AccountDetailsLabel>
                            <OptionHeadingLabelWrapper>
                                <LuUser size={iconSize} />
                                <Heading size="minimum">Username</Heading>
                            </OptionHeadingLabelWrapper>
                            <OptionInputWrapper>
                                <Input value="@Dealenc" fit="100%" {...register('username')} color="success" weight="bold"/>
                                { errors.username && (
                                        <>
                                            <MatchingErrors>
                                                <Text size="xsmall" color="danger">{ errors.username.message }</Text>
                                            </MatchingErrors>
                                        </>
                                    )
                                }
                            </OptionInputWrapper>
                        </AccountDetailsLabel>

                        <AccountDetailsLabel>
                            <OptionHeadingLabelWrapper>
                                <MdOutlineDriveFileRenameOutline size={iconSize} />
                                <Heading size="minimum">Name</Heading>
                            </OptionHeadingLabelWrapper>
                            <OptionInputWrapper>
                                <Input placeholder="Dealenc" fit="100%" {...register('name')} color={ errors.name && "danger" || isValid && "success" }/>
                                { errors.name && (
                                        <>
                                            <MatchingErrors>
                                                <Text size="xsmall" color="danger">{ errors.name.message }</Text>
                                            </MatchingErrors>
                                        </>
                                    )
                                }
                            </OptionInputWrapper>
                        </AccountDetailsLabel>

                        <AccountDetailsLabel>
                            <OptionHeadingLabelWrapper>
                                <MdOutlineLocationOn size={iconSize} />
                                <Heading size="minimum">Location</Heading>
                            </OptionHeadingLabelWrapper>
                            <OptionInputWrapper>
                                <Input placeholder="Brazil" fit="100%" {...register('location')} color={ errors.location && "danger" || isValid && "success" }/>
                                { errors.location && (
                                        <>
                                            <MatchingErrors>
                                                <Text size="xsmall" color="danger">{ errors.location.message }</Text>
                                            </MatchingErrors>
                                        </>
                                    )
                                }
                            </OptionInputWrapper>
                        </AccountDetailsLabel>
                        <AccountDetailsButtonWrapper>
                            <Button variant="default" fit="100%">Confirm</Button>
                        </AccountDetailsButtonWrapper>
                    </AccountDetailsDialogContainer>
                </Dialog>
            </SettingOptionDialogWrapper>
        </>
    )
}