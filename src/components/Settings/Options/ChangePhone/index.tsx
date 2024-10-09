import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { OptionsProps } from "../types";
import { SettingOption } from "../../SettingOption";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { Dialog } from "@/layout/Dialog";
import { ChangePhoneContainer, ChangePhoneLabel } from "@/styles/pages/dialog/changephone";
import { RiPhoneFill } from "react-icons/ri";
import { Button, Heading, Input, Text } from "@bertiare-ui/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MatchingErrors, OptionHeadingLabelWrapper, OptionInputWrapper } from "@/styles/pages/form";
import { LuSmartphone } from "react-icons/lu";

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)

const formSchema = z.object({
    phone: z.string().regex(phoneRegex, 'Invalid phone number'),
})

type FormDataTypes = z.infer<typeof formSchema>

export function ChangePhone(props: OptionsProps){
    const { register, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm<FormDataTypes>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
    })
    
    async function handleChangePhone(data: FormDataTypes){
        try{
            console.log('Change Phone call', data)
        }catch(error){
            console.error(error)
        }
    }

    const iconSize = 14

    return(
        <>
            <SettingOptionDialogWrapper>
                <SettingOption title="Change phone" onClick={() => props.handleDialogToggle('isChangePhoneOpen', props.isDialogOpen)}>
                    <MdOutlinePhoneEnabled size={props.size} />                                
                </SettingOption>
                <Dialog isOpen={ props.isDialogOpen } close={() => props.handleDialogToggle('isChangePhoneOpen', props.isDialogOpen )}>
                    <ChangePhoneContainer onSubmit={handleSubmit(handleChangePhone)} action="">
                        <RiPhoneFill size={ props.dialogIconSize }/>
                        <Heading size="small">Change phone</Heading>
                        <Text>Hi, seems you want to change your phone. You can do it over here:</Text>
                        <ChangePhoneLabel>
                            <OptionHeadingLabelWrapper>
                                <LuSmartphone size={iconSize} />
                                <Heading size="minimum">Phone</Heading>
                            </OptionHeadingLabelWrapper>
                            <OptionInputWrapper>
                                <Input placeholder="Type your new phone over here" type="tel" fit="100%" {...register('phone')} color={ errors.phone && "danger" || isValid && "success" } />
                                {errors.phone &&
                                    (
                                        <>
                                            <MatchingErrors>
                                                <Text size="xsmall" color="danger">{errors.phone.message}</Text>
                                            </MatchingErrors>
                                        </>
                                    )
                                }
                            </OptionInputWrapper>
                        </ChangePhoneLabel>
                        <Button variant="default" type="submit" fit="100%">Confirm</Button>
                    </ChangePhoneContainer>
                </Dialog>
            </SettingOptionDialogWrapper>
        </>
    )
}