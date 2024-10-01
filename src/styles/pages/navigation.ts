import Link from "next/link";
import { styled } from "..";

export const Navigate = styled(Link, {
    all: 'unset',

    variants: {
        variant: {
            fit: {
                width: '100%',
            }
        }
    }
})