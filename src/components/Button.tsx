interface ButtonProps {
    label: string;
    onClick?: () => void;
}

export function Button({label, onClick}: ButtonProps) {
    return (
        <button onClick={onClick} className="p-5 border-[1px] border-[#CDCDCD] bg-[#3e3e3e] text-white text-2xl font-bold flex-1 hover:opacity-60 dark:text-white dark:bg-[#dbdbdb]">
            {label}
        </button>
    )
}