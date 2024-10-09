import { HeaderLayout } from "@/layout/Header";
import { MatchingErrors, OptionInputWrapper } from "@/styles/pages/form";
import { LayoutContent } from "@/styles/pages/layout";
import { RegisterButtonWrapper, RegisterForm, RegisterHeadingLabelWrapper, RegisterLabel, RegisterLabelsWrapper, RegisterTitleLabelWrapper } from "@/styles/pages/register";
import { Box, Button, Heading, Input, Text } from "@bertiare-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoCreateOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { MdOutlinePassword } from "react-icons/md";
import { z } from 'zod'



const formSchema = z.object({
    username: z.string().min(1, 'Username is required'),
    password: z.string()
        .min(1, 'Password is required')
})

type FormDataTypes = z.infer<typeof formSchema>

export default function Login() {
    const { register, handleSubmit, formState: { errors, isSubmitting, isValid }, reset } = useForm<FormDataTypes>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
    })


    async function handleSignIn(data: FormDataTypes) {
        try {
            console.log('Form submitted successfully', data)
            // Call API over here
        } catch (error) {
            console.error(error)
        }
        reset
    }

    const sectionSize = 32
    const iconSize = 14
    return (
        <>
            <HeaderLayout />
            <LayoutContent>
                <Box fit="40rem">
                    <RegisterTitleLabelWrapper>
                        <Heading size="medium" decoration="highlight">Sign-In</Heading>
                        <IoCreateOutline size={sectionSize} />
                    </RegisterTitleLabelWrapper>
                    <RegisterForm onSubmit={handleSubmit(handleSignIn)} action="">
                        <RegisterLabelsWrapper>
                            <RegisterLabel htmlFor="username">
                                <RegisterHeadingLabelWrapper>
                                    <LuUser size={iconSize} />
                                    <Heading size="minimum">Username</Heading>
                                </RegisterHeadingLabelWrapper>
                                <OptionInputWrapper>
                                    <Input placeholder="Type your username" fit="100%" type="text" id="username" {...register('username')} color={errors.username && "danger" || isValid && "success" } />
                                    {errors.username &&
                                        (
                                            <>
                                                <MatchingErrors>
                                                    <Text size="xsmall" color="danger">{errors.username.message}</Text>
                                                </MatchingErrors>
                                            </>
                                        )
                                    }
                                </OptionInputWrapper>
                            </RegisterLabel>
                            <RegisterLabel htmlFor="password">
                                <RegisterHeadingLabelWrapper>
                                    <MdOutlinePassword size={iconSize} />
                                    <Heading size="minimum">Password</Heading>
                                </RegisterHeadingLabelWrapper>
                                <OptionInputWrapper>
                                    <Input placeholder="Type your password" fit="100%" type="password" id="password" {...register('password')} color={errors.password && "danger" || isValid && "success" } />
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
                            </RegisterLabel>
                        </RegisterLabelsWrapper>
                        <RegisterButtonWrapper>
                            <Button variant="default" fit="100%" type="submit" disabled={isSubmitting}>Login</Button>
                        </RegisterButtonWrapper>
                    </RegisterForm>
                </Box>
            </LayoutContent>
        </>
    )
}