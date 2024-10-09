import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { OptionsProps } from "../types";
import { SettingOption } from "../../SettingOption";
import { MdLockOutline, MdOutlinePassword } from "react-icons/md";
import { Dialog } from "@/layout/Dialog";
import { Button, Heading, Input, Text } from "@bertiare-ui/react";
import { RiLockPasswordFill } from "react-icons/ri";
import { ChangePasswordContainer, ChangePasswordLabel } from "@/styles/pages/dialog/changepassword";
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MatchingErrors, OptionHeadingLabelWrapper, OptionInputWrapper } from "@/styles/pages/form";

const formSchema = z.object({
    password: z.string().min(1, 'Password is required'),
    newPassword: z.string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
    confirmNewPassword: z.string().min(1, 'Password confirmation is required'),

}).refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
})

type FormDataTypes = z.infer<typeof formSchema>
export function ChangePassword(props: OptionsProps){
    const { register, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm<FormDataTypes>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
    })

    async function handleChangePassword(data: FormDataTypes){
        try{
            // Call API here
            console.log('ChangePassword call', data)
        }catch(error) {
            console.log(error)
        }
    }

    const dialogSize = 48
    const iconSize = 14
    
    return(
        <>
            <SettingOptionDialogWrapper>
                <SettingOption title="Change password" onClick={() => props.handleDialogToggle('isChangePasswordOpen', props.isDialogOpen)}>
                    <MdLockOutline size={props.size} />                                
                </SettingOption>
                <Dialog isOpen={ props.isDialogOpen } close={() => props.handleDialogToggle('isChangePasswordOpen', props.isDialogOpen )} >
                    <ChangePasswordContainer  onSubmit={ handleSubmit(handleChangePassword) } action="">
                        <RiLockPasswordFill size={dialogSize}/>
                        <Heading size="small">Change password</Heading>
                        <Text>Hi, seems you want to change your password. You can do it here:</Text>
                        <ChangePasswordLabel>
                            <OptionHeadingLabelWrapper>
                                <MdOutlinePassword size={iconSize} />
                                <Heading size="minimum">Password</Heading>
                            </OptionHeadingLabelWrapper>
                            <OptionInputWrapper>
                                <Input placeholder="Type your password" type="password" fit="100%" {...register('password')} color={ errors.password && "danger" || isValid && "success" }/>
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
                        </ChangePasswordLabel>
                        <ChangePasswordLabel>
                        <OptionHeadingLabelWrapper>
                                <MdOutlinePassword size={iconSize} />
                                <Heading size="minimum">New password</Heading>
                            </OptionHeadingLabelWrapper>
                            <OptionInputWrapper>
                                <Input placeholder="Type new password" type="password" fit="100%" {...register('newPassword')} color={ errors.newPassword && "danger" || isValid && "success" }/>
                                {errors.newPassword &&
                                    (
                                        <>
                                            <MatchingErrors>
                                                <Text size="xsmall" color="danger">{errors.newPassword.message}</Text>
                                            </MatchingErrors>
                                        </>
                                    )
                                }
                            </OptionInputWrapper>
                        </ChangePasswordLabel>
                        <ChangePasswordLabel>
                            <OptionHeadingLabelWrapper>
                                <MdOutlinePassword size={iconSize} />
                                <Heading size="minimum">Confirm new password</Heading>
                            </OptionHeadingLabelWrapper>
                            <OptionInputWrapper>
                                <Input placeholder="Type new password again" type="password" fit="100%" {...register('confirmNewPassword')} color={ errors.confirmNewPassword && "danger" || isValid && "success" }/>
                                {errors.confirmNewPassword &&
                                    (
                                        <>
                                            <MatchingErrors>
                                                <Text size="xsmall" color="danger">{errors.confirmNewPassword.message}</Text>
                                            </MatchingErrors>
                                        </>
                                    )
                                }
                            </OptionInputWrapper>
                        </ChangePasswordLabel>
                        <Button variant="default" type="submit" fit="100%" disabled={isSubmitting}>Confirm</Button>
                    </ChangePasswordContainer>
                </Dialog>
            </SettingOptionDialogWrapper>
        </>
    )
}