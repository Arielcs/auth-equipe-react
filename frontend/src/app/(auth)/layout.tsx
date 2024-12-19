import PaginaAutenticacao from "@/components/template/PaginaAutenticacao";

export default function Cadastro({children}: {children: React.ReactNode}) {
  return (
    <PaginaAutenticacao>
        {children}
    </PaginaAutenticacao>
  );
}
