import { useCallback, useState } from "react";

export interface UseBooleanProps {
    value: boolean;
    onTrue: () => void;
    onFalse: () => void;
    onToggle: () => void;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useBoolean(defaultValue?: boolean): UseBooleanProps {
    const [value, setValue] = useState(!!defaultValue);

    const onTrue = useCallback(() => {
        setValue(true);
    }, []);

    const onFalse = useCallback(() => {
        setValue(false);
    }, []);

    const onToggle = useCallback(() => {
        setValue((previous) => !previous);
    }, [])

    return {
        value,
        onTrue,
        onFalse,
        onToggle,
        setValue,
    }
}