import { HeaderLayout } from "@/layout/Header";
import { MatchingErrors, OptionInputWrapper } from "@/styles/pages/form";
import { LayoutContent } from "@/styles/pages/layout";
import { RegisterButtonWrapper, RegisterForm, RegisterHeadingLabelWrapper, RegisterLabel, RegisterLabelsWrapper, RegisterTitleLabelWrapper } from "@/styles/pages/register";
import { Box, Button, Heading, Input, Text } from "@bertiare-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoCreateOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { MdOutlineDriveFileRenameOutline, MdOutlineMail, MdOutlinePassword } from "react-icons/md";
import { isValid, z } from 'zod'

const formSchema = z.object({
    email: z.string().email('Invalid e-mail address').min(1, 'E-mail is required'),
    name: z.string().min(1, 'Name is required'),
    username: z.string().min(1, 'Username is required'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters long')
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

type FormDataTypes = z.infer<typeof formSchema>

export default function Register() {
    const { register, handleSubmit, formState: { errors, isSubmitting, isValid }, reset } = useForm<FormDataTypes>({
        resolver: zodResolver(formSchema),
        mode: "onChange"
    })


    async function handleSignUp(data: FormDataTypes) {
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
                        <Heading size="medium" decoration="highlight">Sign-Up</Heading>
                        <IoCreateOutline size={sectionSize} />
                    </RegisterTitleLabelWrapper>
                    <RegisterForm onSubmit={handleSubmit(handleSignUp)} action="">
                        <RegisterLabelsWrapper>
                            <RegisterLabel htmlFor="email">
                                <RegisterHeadingLabelWrapper>
                                    <MdOutlineMail size={iconSize} />
                                    <Heading size="minimum">E-mail</Heading>
                                </RegisterHeadingLabelWrapper>
                                <OptionInputWrapper>
                                    <Input placeholder="Type your e-mail" fit="100%" type="text" id="email" {...register('email')} color={ errors.email ? "danger" : isValid ? "success" : undefined } />
                                    {errors.email &&
                                        (
                                            <>
                                                <MatchingErrors>
                                                    <Text size="xsmall" color="danger">{errors.email.message}</Text>
                                                </MatchingErrors>
                                            </>
                                        )
                                    }
                                </OptionInputWrapper>
                            </RegisterLabel>
                            <RegisterLabel htmlFor="name">
                                <RegisterHeadingLabelWrapper>
                                    <MdOutlineDriveFileRenameOutline size={iconSize} />
                                    <Heading size="minimum">Name</Heading>
                                </RegisterHeadingLabelWrapper>
                                <OptionInputWrapper>
                                    <Input placeholder="Type your name" fit="100%" type="text" id="name" {...register('name')} color={ errors.name && "danger" || isValid && "success" } />
                                    {errors.name &&
                                        (
                                            <>
                                                <MatchingErrors>
                                                    <Text size="xsmall" color="danger">{errors.name.message}</Text>
                                                </MatchingErrors>
                                            </>
                                        )
                                    }
                                </OptionInputWrapper>
                            </RegisterLabel>
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
                                    <Input placeholder="Type your password" fit="100%" type="password" id="password" {...register('password')} color={ errors.password && "danger" || isValid && "success" } />
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
                            <RegisterLabel htmlFor="confirm-password">
                                <RegisterHeadingLabelWrapper>
                                    <MdOutlinePassword size={iconSize} />
                                    <Heading size="minimum">Confirm password</Heading>
                                </RegisterHeadingLabelWrapper>
                                <OptionInputWrapper>
                                    <Input placeholder="Type your password again" fit="100%" type="password" id="confirm-password" {...register('confirmPassword')} color={ errors.confirmPassword && "danger" || isValid && "success" } />
                                    {errors.confirmPassword &&
                                        (
                                            <>
                                                <MatchingErrors>
                                                    <Text size="xsmall" color="danger">{errors.confirmPassword.message}</Text>
                                                </MatchingErrors>
                                            </>
                                        )
                                    }
                                </OptionInputWrapper>
                            </RegisterLabel>
                        </RegisterLabelsWrapper>
                        <RegisterButtonWrapper>
                            <Button variant="default" fit="100%" type="submit" disabled={isSubmitting}>Register</Button>
                        </RegisterButtonWrapper>
                    </RegisterForm>
                </Box>
            </LayoutContent>
        </>
    )
}