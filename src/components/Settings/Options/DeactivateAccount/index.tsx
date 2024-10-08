import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { OptionsProps } from "../types";
import { SettingOption } from "../../SettingOption";
import { Dialog } from "@/layout/Dialog";
import { LiaUserSlashSolid } from "react-icons/lia";
import { DangerActionWarning, DeactivateAccountContainer, DeactivateAccountLabel, DeactivateAccountOptions, DestructiveActionConfirmation } from "@/styles/pages/dialog/deactivateaccount";
import { Button, Heading, Input, Text } from "@bertiare-ui/react";
import { TypeOf, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MatchingErrors, OptionHeadingLabelWrapper, OptionInputWrapper } from "@/styles/pages/form";
import { MdOutlinePassword } from "react-icons/md";

const formSchema = z.object({
    password: z.string().min(1, 'Password is required')
})

type FormDataTypes = z.infer<typeof formSchema>

export function DeactivateAccount(props: OptionsProps){
    const { register, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm<FormDataTypes>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
    })

    async function handleDeactivateAccount(data: FormDataTypes){
        try{
            console.log('Deactivate Account call', data)

        }catch(error){

        }
    }
    
    const iconSize = 14

    return(
        <>
            <SettingOptionDialogWrapper>
                <SettingOption title="Deactivate account" color="danger" onClick={() => props.handleDialogToggle('isDeactivateAccountOpen', props.isDialogOpen)}>
                    <LiaUserSlashSolid size={props.size} />                                
                </SettingOption>
                <Dialog isOpen={ props.isDialogOpen } close={() => props.handleDialogToggle('isDeactivateAccountOpen', props.isDialogOpen )}>
                    <DeactivateAccountContainer onSubmit={ handleSubmit(handleDeactivateAccount) } action="">
                        <DangerActionWarning color="danger" >
                            <LiaUserSlashSolid size={ props.dialogIconSize }/>
                            <Heading size="small">Deactivate account</Heading>
                            <Text>Hi, seems you're requesting a destructive action, be careful! After <strong>30 days</strong> your account will be deleted.</Text>
                        </DangerActionWarning>
                        <DeactivateAccountLabel>
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
                        </DeactivateAccountLabel>
                        <DestructiveActionConfirmation>
                            <Text weight="bold">Are you sure you want to deactivate your account?</Text>
                            <DeactivateAccountOptions>
                                <Button variant="danger" type="button" fit="100%" onClick={() => props.handleDialogToggle('isDeactivateAccountOpen', props.isDialogOpen)} >Discard</Button>
                                <Button variant="default" type="submit" fit="100%">Confirm</Button>
                            </DeactivateAccountOptions>
                        </DestructiveActionConfirmation>
                    </DeactivateAccountContainer>
                </Dialog>
            </SettingOptionDialogWrapper>
        </>
    )
}