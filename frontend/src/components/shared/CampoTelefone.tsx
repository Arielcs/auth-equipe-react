import { useState } from "react";

export interface CampoTelefoneProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onChangeText?: (s: string) => void
    outerClassName?: string
}

export default function CampoTelefone(props: CampoTelefoneProps) {
    const [codigoPais, setCodigoPais] = useState('+55');

    const paises = [
        { nome: "Brasil", codigo: "+55", bandeira: "🇧🇷" },
        { nome: "EUA", codigo: "+1", bandeira: "🇺🇸" },
        { nome: "Portugal", codigo: "+351", bandeira: "🇵🇹" },
        { nome: "Argentina", codigo: "+54", bandeira: "🇦🇷" },
    ];

    const formatarTelefone = (valor: string) => {
        const numeroLimpo = valor.replace(/\D/g, "").slice(0, 11);

        if (numeroLimpo.length <= 2) {
            return `(${numeroLimpo}`;
        } else if (numeroLimpo.length <= 7) {
            return `(${numeroLimpo.slice(0, 2)}) ${numeroLimpo.slice(2)}`;
        } else {
            return `(${numeroLimpo.slice(0, 2)}) ${numeroLimpo.slice(2, 7)}-${numeroLimpo.slice(7)}`;
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value;
        const telefoneFormatado = formatarTelefone(valor);

        props.onChangeText?.(telefoneFormatado);

        props.onChange?.(e);
    };

    return (
        <div className={`flex items-center bg-black rounded-md border border-white/10 text-white ${props.outerClassName}`}>
            <div className="flex items-center px-2">
                <select
                    value={codigoPais}
                    onChange={(e) => setCodigoPais(e.target.value)}
                    className="bg-transparent text-md cursor-pointer"
                >
                    {paises.map((pais) => (
                        <option key={pais.codigo} value={pais.codigo} className="text-black">
                            {pais.bandeira}
                        </option>
                    ))}
                </select>
            </div>

            <input
                type="tel"
                id="telefone"
                name="telefone"
                className="p-2 flex-1 bg-transparent text-white text-md"
                value={props.value}
                maxLength={15}
                onChange={handleChange}
            />
        </div>
    );
}