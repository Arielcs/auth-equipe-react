'use client'

import { useState } from "react";
import CampoEmail from "../shared/CampoEmail";
import CampoNome from "../shared/CampoNome";
import CampoSenha from "../shared/CampoSenha";
import Link from "next/link";
import CampoTelefone from "../shared/CampoTelefone";

export default function CadastroForm() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleCadastro = () => {
        console.log(nome, email, password, confirmPassword, telefone);
    };

    return (
        <div className="flex flex-col items-center justify-center p-10 rounded-md bg-zinc-900 select-none w-[420px]">

            <span className="font-bold">Cadastrar</span>

            <div className="flex flex-col w-full gap-4 mt-4">
                <CampoNome ladoIcone="left" onChangeText={setNome} value={nome} onChange={(e) => setNome(e.target.value)} />

                <CampoEmail value={email} onChangeText={setEmail} ladoIcone="left" iverterIcone />

                <CampoSenha id="password" texto="Senha" mostrarIconeSenha mostrarIconeCadeado value={password} onChangeText={setPassword} />

                <CampoSenha id="confirmPassword" texto="Confirme a senha" mostrarIconeCadeado value={confirmPassword} onChangeText={setConfirmPassword} />

                <CampoTelefone value={telefone} onChangeText={setTelefone} outerClassName="mt-4" />

                <button className="bg-green-600 rounded-md text-sm py-2 font-bold hover:bg-green-500 hover:text-white mt-4" onClick={handleCadastro}>Cadastrar-se</button>

                <div className="flex flex-col gap-1 justify-center items-center">
                    <div className="flex gap-1 text-sm mt-2">
                        <span className="text-zinc-400">Já possui conta?</span>

                        <Link href='login' className="text-green-500">Faça login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}