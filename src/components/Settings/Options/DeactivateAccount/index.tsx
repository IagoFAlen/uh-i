import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { OptionsProps } from "../types";
import { SettingOption } from "../../SettingOption";
import { Dialog } from "@/layout/Dialog";
import { LiaUserSlashSolid } from "react-icons/lia";
import { DangerActionWarning, DeactivateAccountContainer, DeactivateAccountHeadingWrapper, DeactivateAccountLabel, DeactivateAccountOptions, DestructiveActionConfirmation } from "@/styles/pages/dialog/deactivateaccount";
import { Button, Heading, Input, Text } from "@bertiare-ui/react";
import { TypeOf, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MatchingErrors, OptionInputWrapper } from "@/styles/pages/form";

const formSchema = z.object({
    password: z.string().min(1, 'Password is required')
})

type FormDataTypes = z.infer<typeof formSchema>

export function DeactivateAccount(props: OptionsProps){
    const { register, handleSubmit, formState: { errors, isSubmitting, isValid }, reset } = useForm<FormDataTypes>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
    })

    async function handleDeactivateAccount(data: FormDataTypes){
        try{
            console.log('Deactivate Account call', data)

        }catch(error){

        }
    }

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
                            <DeactivateAccountHeadingWrapper>
                                <Heading size="minimum">Confirm password</Heading>
                            </DeactivateAccountHeadingWrapper>
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
                                <Button variant="danger" type="button" fit="100%">Discard</Button>
                                <Button variant="default" type="submit" fit="100%">Confirm</Button>
                            </DeactivateAccountOptions>
                        </DestructiveActionConfirmation>
                    </DeactivateAccountContainer>
                </Dialog>
            </SettingOptionDialogWrapper>
        </>
    )
}