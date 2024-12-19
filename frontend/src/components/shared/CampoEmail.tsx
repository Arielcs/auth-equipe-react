
import { IconMail } from "@tabler/icons-react";

export interface CampoEmailProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onChangeText?: (s: string) => void
    ladoIcone: string
    iverterIcone?: boolean
}

export default function CampoEmail(props: CampoEmailProps) {
    return (
        <div className="flex flex-col gap-1 relative">
            <label htmlFor="email" className="text-xs text-zinc-300">Email</label>

            <input
                type="email"
                id="email"
                name="email"
                className={`p-2 ${props.iverterIcone ? 'pl-10' : ''} bg-black rounded-md border border-white/10 text-sm text-white`}
                onChange={(e) => {
                    props.onChange?.(e)
                    props.onChangeText?.(e.target.value)
                }}
            />
            
            <IconMail className={`absolute ${props.ladoIcone}-3 top-7 text-zinc-400`} size={20} />
        </div>
    );
}