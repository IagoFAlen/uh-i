import { HeaderLayout } from "@/layout/Header";
import { LayoutContent } from "@/styles/pages/layout";
import { MatchingErrors, RegisterButtonWrapper, RegisterForm, RegisterHeadingLabelWrapper, RegisterInputWrapper, RegisterLabel, RegisterLabelsWrapper, RegisterTitleLabelWrapper } from "@/styles/pages/register";
import { Box, Button, Heading, Input, Text } from "@bertiare-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoCreateOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { MdOutlineDriveFileRenameOutline, MdOutlineMail, MdOutlinePassword } from "react-icons/md";
import { z } from 'zod'

const formSchema = z.object({
    email: z.string().email('Invalid e-mail address').min(1, 'E-mail is required'),
    name: z.string().min(1, 'Name is required'),
    username: z.string().min(1, 'Username is required'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters long')
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

type FormDataTypes = z.infer<typeof formSchema>

export default function Register() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormDataTypes>({
        resolver: zodResolver(formSchema),
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
                                <RegisterInputWrapper>
                                    <Input placeholder="Type your e-mail" fit="100%" type="text" id="email" {...register('email')} color={errors.email ? "danger" : ''} />
                                    {errors.email &&
                                        (
                                            <>
                                                <MatchingErrors>
                                                    <Text size="xsmall" color="danger">{errors.email.message}</Text>
                                                </MatchingErrors>
                                            </>
                                        )
                                    }
                                </RegisterInputWrapper>
                            </RegisterLabel>
                            <RegisterLabel htmlFor="name">
                                <RegisterHeadingLabelWrapper>
                                    <MdOutlineDriveFileRenameOutline size={iconSize} />
                                    <Heading size="minimum">Name</Heading>
                                </RegisterHeadingLabelWrapper>
                                <RegisterInputWrapper>
                                    <Input placeholder="Type your name" fit="100%" type="text" id="name" {...register('name')} color={errors.name && "danger"} />
                                    {errors.name &&
                                        (
                                            <>
                                                <MatchingErrors>
                                                    <Text size="xsmall" color="danger">{errors.name.message}</Text>
                                                </MatchingErrors>
                                            </>
                                        )
                                    }
                                </RegisterInputWrapper>
                            </RegisterLabel>
                            <RegisterLabel htmlFor="username">
                                <RegisterHeadingLabelWrapper>
                                    <LuUser size={iconSize} />
                                    <Heading size="minimum">Username</Heading>
                                </RegisterHeadingLabelWrapper>
                                <RegisterInputWrapper>
                                    <Input placeholder="Type your username" fit="100%" type="text" id="username" {...register('username')} color={errors.username && "danger"} />
                                    {errors.username &&
                                        (
                                            <>
                                                <MatchingErrors>
                                                    <Text size="xsmall" color="danger">{errors.username.message}</Text>
                                                </MatchingErrors>
                                            </>
                                        )
                                    }
                                </RegisterInputWrapper>
                            </RegisterLabel>
                            <RegisterLabel htmlFor="password">
                                <RegisterHeadingLabelWrapper>
                                    <MdOutlinePassword size={iconSize} />
                                    <Heading size="minimum">Password</Heading>
                                </RegisterHeadingLabelWrapper>
                                <RegisterInputWrapper>
                                    <Input placeholder="Type your password" fit="100%" type="password" id="password" {...register('password')} color={errors.password && "danger"} />
                                    {errors.password &&
                                        (
                                            <>
                                                <MatchingErrors>
                                                    <Text size="xsmall" color="danger">{errors.password.message}</Text>
                                                </MatchingErrors>
                                            </>
                                        )
                                    }
                                </RegisterInputWrapper>
                            </RegisterLabel>
                            <RegisterLabel htmlFor="confirm-password">
                                <RegisterHeadingLabelWrapper>
                                    <MdOutlinePassword size={iconSize} />
                                    <Heading size="minimum">Confirm password</Heading>
                                </RegisterHeadingLabelWrapper>
                                <RegisterInputWrapper>
                                    <Input placeholder="Type your password again" fit="100%" type="password" id="confirm-password" {...register('confirmPassword')} />
                                    {errors.confirmPassword &&
                                        (
                                            <>
                                                <MatchingErrors>
                                                    <Text size="xsmall" color="danger">{errors.confirmPassword.message}</Text>
                                                </MatchingErrors>
                                            </>
                                        )
                                    }
                                </RegisterInputWrapper>
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