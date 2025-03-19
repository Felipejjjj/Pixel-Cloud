import Link from 'next/link';

export default function header(){
    return (
        <header className="bg-black">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <div className="flex-1 md:flex md:items-center md:gap-12">
                <h1>PIXEL CLOUD</h1>
                </div>

                <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Global" className="hidden md:block">
                    <ul className="flex items-center gap-6 text-sm">
                    <li>
                        {/* <a className="text-white-500 transition hover:text-gray-500/75" href="#games"> Jogos </a> */}
                        <Link href="/">
                            <p className="text-white-500 transition hover:text-gray-500/75">Home</p>
                        </Link>
                    </li>
                    <li>
                        {/* <a className="text-white-500 transition hover:text-gray-500/75" href="#noticias"> Notícias </a> */}
                        <Link href="/login">
                            <p className="text-white-500 transition hover:text-gray-500/75">Login</p>
                        </Link>
                    </li>
                    <li>
                        {/* <a className="text-white-500 transition hover:text-gray-500/75" href="#noticias"> Notícias </a> */}
                        <Link href="/perfil">
                            <p className="text-white-500 transition hover:text-gray-500/75">Perfil</p>
                        </Link>
                    </li>
                    </ul>
                </nav>

                <div className="flex items-center gap-4" id="header_link">
                    <div className="sm:flex sm:gap-4">
                    {/* elemento dinâmico para botão de login/página de usuário */}
                    {/* {user} */}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </header>
    )
}