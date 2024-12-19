'use client'

import { useState } from "react";
import CampoEmail from "../shared/CampoEmail";
import Link from "next/link";

export default function NovaSenhaForm() {
    const [email, setEmail] = useState('');

    const handleNovaSenha = () => {
        console.log(email);
    };

    return (
        <div className="flex flex-col items-center justify-center p-10 rounded-md bg-zinc-900 select-none w-[420px] gap-3">

            <span className="font-bold">Solicitar troca de senha</span>

            <div className="flex flex-col w-full gap-4">
                <CampoEmail value={email} onChangeText={setEmail} ladoIcone="right" />

                <button className="bg-green-600 rounded-md text-sm py-2 font-bold hover:bg-green-500 hover:text-white" onClick={handleNovaSenha}>Enviar</button>
                <Link href='login' className="flex justify-center bg-red-600 rounded-md text-sm py-2 font-bold hover:bg-red-500 hover:text-white">Cancelar</Link>
            </div>
        </div>
    );
}