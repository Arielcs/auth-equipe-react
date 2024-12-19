import { IconEye, IconEyeOff, IconLock } from '@tabler/icons-react'
import { useState } from 'react'

export interface CampoSenhaProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string
    texto: string
    onChangeText?: (s: string) => void
    mostrarIconeCadeado?: boolean
    mostrarIconeSenha?: boolean
}

export default function CampoSenha(props: CampoSenhaProps) {
    const [mostrarSenha, setMostrarSenha] = useState(false)

    const togglePasswordVisibility = () => {
        setMostrarSenha(prevState => !prevState);
    };

    return (
        <div className="flex flex-col gap-1 relative">
            <label htmlFor={props.id} className="text-xs text-zinc-300">{props.texto}</label>
            <input
                type={mostrarSenha ? "text" : "password"}
                id={props.id}
                name={props.id}
                className={`p-2 ${props.mostrarIconeCadeado ? 'pl-10' : ''} bg-black rounded-md border border-white/10 text-sm text-white`}
                onChange={(e) => {
                    props.onChange?.(e)
                    props.onChangeText?.(e.target.value)
                }}
            />

            {props.mostrarIconeCadeado ? (
                <IconLock className={`absolute left-3 top-7 text-zinc-400`} size={20} />
            ) :
                null
            }


            {props.mostrarIconeSenha && (
                mostrarSenha ? (
                    <IconEyeOff
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-7 text-zinc-700 cursor-pointer"
                        size={20}
                    />
                ) : (
                    <IconEye
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-7 text-zinc-700 cursor-pointer"
                        size={20}
                    />
                )
            )}
        </div>
    )
}