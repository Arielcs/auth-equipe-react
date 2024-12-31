import { IconSignature } from "@tabler/icons-react";

export interface CampoNomeProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onChangeText?: (s: string) => void
    ladoIcone: string
}

export default function CampoNome(props: CampoNomeProps) {
    return (
        <div className="flex flex-col gap-1 relative">
            <label htmlFor="nome" className="text-xs text-zinc-300">Nome</label>
            <input
                type="text"
                id="nome"
                name="nome"
                autoComplete="username"
                className={`p-2 ${props.ladoIcone ? 'pl-10' : ''} bg-black rounded-md border border-white/10 text-sm text-white`}
                onChange={(e) => {
                    props.onChange?.(e)
                    props.onChangeText?.(e.target.value)
                }}
            />
            <IconSignature className={`absolute ${props.ladoIcone}-3 top-7 text-zinc-400`} size={20} />
        </div>
    );
}