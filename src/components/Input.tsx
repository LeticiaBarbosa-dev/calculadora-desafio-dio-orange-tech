interface InputProps {
    value: string;
}
export function Input({value}: InputProps) {
    return (
        <div className="w-[100%] h-[75px] bg-[#08354c] flex items-center justify-center text-2xl">
            <input disabled value={value} className="w-[100%] h-[75px] bg-[#08354c] border-0 flex flex-col items-end py-0 px-[10px] text-2xl text-white" />
        </div>
    );
}