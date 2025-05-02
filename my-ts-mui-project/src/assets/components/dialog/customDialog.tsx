import { Box, Dialog, SxProps } from "@mui/material";

import { ReactNode } from "react";

import { useBoolean } from "../../../hooks/useBoolean";


interface customDialogProps {
    children?: ReactNode;
    trigger?: ReactNode;
    sx?: SxProps
}

export default function CustomDialog(props: customDialogProps) {
    const { children, sx, trigger } = props
    const openStatus = useBoolean();
    console.log('openStatus', openStatus)

    const handleOpen = () => {
        console.log('firing open')

        openStatus.onTrue()
    }

    const handleClose = () => {
        openStatus.onFalse()
    }
    console.log('openStatus.value', openStatus.value)

    return (
        <>
            <Box onClick={handleOpen} >
                {trigger}
            </Box>
            <Dialog
                open={openStatus.value}
                sx={sx}
                onClose={handleClose}
            >
                {children}
            </Dialog>
        </>
    )

}