import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { OptionsProps } from "../types";
import { SettingOption } from "../../SettingOption";
import { Dialog } from "@/layout/Dialog";
import { FaRegTrashCan } from "react-icons/fa6";
import { Button, Heading, Input, Text } from "@bertiare-ui/react";
import { DangerActionWarning, DeleteAccountContainer, DeleteAccountLabel, DeleteAccountOptions, DestructiveActionConfirmation } from "@/styles/pages/dialog/deleteaccount";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MatchingErrors, OptionHeadingLabelWrapper, OptionInputWrapper } from "@/styles/pages/form";
import { MdOutlinePassword } from "react-icons/md";

const formSchema = z.object({
    password: z.string().min(1, 'Password is required')
})

type FormDataTypes = z.infer<typeof formSchema>

export function DeleteAccount(props: OptionsProps){

    const { register, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm<FormDataTypes>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
    })

    async function handleDeleteAccount(data: FormDataTypes){
        try{
            console.log('Deactivate Account call', data)

        }catch(error){

        }
    }

    const iconSize = 14

    return(
        <>
            <SettingOptionDialogWrapper>
                <SettingOption title="Delete account" color="danger" onClick={() => props.handleDialogToggle('isDeleteAccountOpen', props.isDialogOpen)}>
                    <FaRegTrashCan size={props.size} />                                
                </SettingOption>
                <Dialog isOpen={ props.isDialogOpen } close={() => props.handleDialogToggle('isDeleteAccountOpen', props.isDialogOpen )}>
                <DeleteAccountContainer onSubmit={ handleSubmit(handleDeleteAccount) } action="">
                        <DangerActionWarning color="danger" >
                            <FaRegTrashCan size={ props.dialogIconSize }/>
                            <Heading size="small">Delete account</Heading>
                            <Text>Hi, seems you're requesting a destructive action, be careful! This action can't be undone.</Text>
                        </DangerActionWarning>
                        <DeleteAccountLabel>
                            <OptionHeadingLabelWrapper>
                                <MdOutlinePassword size={iconSize} />
                                <Heading size="minimum">Password</Heading>
                            </OptionHeadingLabelWrapper>
                            <OptionInputWrapper>
                                <Input placeholder="Type your password" type="password" fit="100%" {...register('password')} color={ errors.password && "danger" || isValid && "success" } />
                                {errors.password &&
                                    (
                                        <>
                                            <MatchingErrors>
                                                <Text size="xsmall" color="danger">{errors.password.message}</Text>
                                            </MatchingErrors>
                                        </>
                                    )
                                }
                            </OptionInputWrapper>
                        </DeleteAccountLabel>
                        <DestructiveActionConfirmation>
                            <Text weight="bold">Are you sure you want to delete your account?</Text>
                            <DeleteAccountOptions>
                                <Button variant="danger" type="button" fit="100%" onClick={() => props.handleDialogToggle('isDeleteAccountOpen', props.isDialogOpen)} >Discard</Button>
                                <Button variant="default" type="submit" fit="100%">Confirm</Button>
                            </DeleteAccountOptions>
                        </DestructiveActionConfirmation>
                    </DeleteAccountContainer>
                </Dialog>
            </SettingOptionDialogWrapper>
        </>
    )
}