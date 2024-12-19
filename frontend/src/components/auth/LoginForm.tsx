'use client'

import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { useState } from "react";
import Logo from "../shared/Logo";
import CampoEmail from "../shared/CampoEmail";
import CampoSenha from "../shared/CampoSenha";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center px-10 py-5 rounded-md bg-zinc-900 select-none">
      <Logo width={150} height={150} />

      <span className="font-bold">Entre com sua conta</span>

      <div className="flex flex-col w-full gap-2 mt-4">
        <CampoEmail value={email} onChangeText={setEmail} ladoIcone="right" />

        <CampoSenha id="password" texto="Senha" mostrarIconeSenha value={password} onChangeText={setPassword} />

        <Link href='novaSenha' className="text-xs text-zinc-500 ml-auto">Esqueceu sua senha?</Link>

        <button className="bg-green-600 rounded-md text-sm py-2 font-bold hover:bg-green-500 hover:text-white" onClick={handleLogin}>Login</button>

        <div className="flex items-center justify-center my-2">
          <div className="border-t border-zinc-800 w-full"></div>
          <span className="mx-2 text-sm text-zinc-400">ou</span>
          <div className="border-t border-zinc-800 w-full"></div>
        </div>

        <div className="flex flex-col gap-1 justify-center items-center">
          <button className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center text-white">
            <IconBrandGoogleFilled />
          </button>

          <div className="flex gap-1 text-sm mt-2">
            <span className="text-zinc-300">Ainda não possui uma conta?</span>

            <Link href='cadastro' className="text-green-500">Cadastre-se <span className="underline">aqui</span></Link>
          </div>

          <span className="text-xs text-zinc-500">
            ou faça login pelo Google clicando no G acima.
          </span>
        </div>
      </div>
    </div>
  );
}