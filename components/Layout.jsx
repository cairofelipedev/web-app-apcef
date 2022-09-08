import Link from "next/link";
import Image from "next/image";
import SocialIcon from "@/components/social-icons";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";
const Layout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <header className="flex items-center justify-between border-b-4 border-t-4 border-b-orange-apcef border-t-blue-apcef sm:block sm:border-none">
        <div className="hidden bg-orange-apcef pt-1 sm:block ">
          <div className="mx-auto flex max-w-6xl justify-between">
            <div className="flex justify-between">
              <SocialIcon kind="brazil" href="#" size="5" />
              <h1 className="text-sm text-white">Outras apcefs</h1>
            </div>
            <div className="mb-2 flex space-x-4">
              <SocialIcon kind="youtube" href="#" size="5" />
              <SocialIcon kind="insta" href="#" size="5" />
              <SocialIcon kind="whats" href="#" size="5" />
              <SocialIcon kind="facebook" href="#" size="5" />
              <h1 className="text-sm font-bold text-white">Entrar</h1>
            </div>
          </div>
        </div>
        <div className="flex max-w-6xl justify-between px-2 pt-4 sm:mx-auto">
          <Link href="/">
            <div className="mb-1 flex items-center">
              <div className="mr-3">
                <Image
                  src="/logo.png"
                  alt="APCEF/PI - LOGO"
                  width="50px"
                  height="50px"
                  className="h-48 w-48 rounded-full"
                />
              </div>
              <div className="mb-4 h-6 text-2xl font-bold text-blue-apcef">
                APCEF/PI
              </div>
            </div>
          </Link>
          <div className="flex justify-between space-x-3">
            <div className="relative hidden max-w-lg sm:block">
              <input
                aria-label="Pesquise no site"
                type="text"
                placeholder="Pesquise no site"
                className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900"
              />
              <svg
                className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between sm:bg-blue-apcef">
          <div className="container mx-auto hidden max-w-6xl py-3 sm:block">
            <Link href="/">
              <button>
                <span className="mr-2 text-white">HOME</span>
              </button>
            </Link>
            <div className="group inline-block">
              <button className="inline-flex items-center rounded py-2 px-4">
                <span className="mr-1 text-white">QUEM SOMOS</span>
                <svg
                  className="h-4 w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="absolute z-10 hidden rounded pt-3 bg-white shadow-md shadow-gray-300 group-hover:block">
                <li>
                  <Link href="/quem-somos">
                    <button className="inline-flex items-center rounded py-2 px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="#E96708"
                        className="bi bi-chevron-right font-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                      <h1 className="ml-2 mr-5 text-sm text-gray-900">
                        MISSÃO, VISSÃO, VALORES
                      </h1>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/diretoria">
                    <button className="inline-flex items-center rounded py-2 px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="#E96708"
                        className="bi bi-chevron-right font-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                      <h1 className="ml-2 mr-5 text-sm text-gray-900">
                        DIRETORIA
                      </h1>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/sedes">
                    <button className="inline-flex items-center rounded py-2 px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="#E96708"
                        className="bi bi-chevron-right font-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                      <h1 className="ml-2 mr-5 text-sm text-gray-900">SEDES</h1>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="group inline-block">
              <button className="inline-flex items-center rounded py-2 px-4">
                <span className="mr-3 text-white">ESPORTES</span>
                <svg
                  className="h-4 w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="absolute z-10 hidden rounded bg-white pt-1 shadow-md shadow-gray-300 group-hover:block">
                <li>
                  <button className="inline-flex items-center rounded py-2 px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#E96708"
                      className="bi bi-chevron-right font-bold"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <Link href="/esportes">
                      <h1 className="text-gray-900 ml-2 mr-5 text-sm">
                        TODAS AS MODALIDADES
                      </h1>
                    </Link>
                  </button>
                </li>
                <li>
                  <button className="inline-flex items-center rounded py-2 px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#E96708"
                      className="bi bi-chevron-right font-bold"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <Link href="/esportes/natacao">
                      <h1 className="ml-2 mr-5 text-sm text-gray-900">
                        NATAÇÃO
                      </h1>
                    </Link>
                  </button>
                </li>
                <li>
                  <button className="inline-flex items-center rounded py-2 px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#E96708"
                      className="bi bi-chevron-right font-bold"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <Link href="/esportes/hidroginastica">
                      <h1 className="ml-2 mr-5 text-sm text-gray-900">
                      HIDROGINÁSTICA
                      </h1>
                    </Link>
                  </button>
                </li>
                <li>
                  <button className="inline-flex items-center rounded py-2 px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#E96708"
                      className="bi bi-chevron-right font-bold"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <Link href="/esportes/muay-thai-kung-fu-boxe-mma">
                      <h1 className="ml-2 mr-5 text-sm text-gray-900">
                      MUAY THAI, KUNG FU, BOXE, MMA
                      </h1>
                    </Link>
                  </button>
                </li>
                <li>
                  <button className="inline-flex items-center rounded py-2 px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#E96708"
                      className="bi bi-chevron-right font-bold"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <Link href="/esportes/plano-de-emagrecimento">
                      <h1 className="ml-2 mr-5 text-sm text-gray-900">
                      PLANO DE EMAGRECIMENTO
                      </h1>
                    </Link>
                  </button>
                </li>
                <li>
                  <button className="inline-flex items-center rounded py-2 px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#E96708"
                      className="bi bi-chevron-right font-bold"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <Link href="/esportes/futebol">
                      <h1 className="ml-2 mr-5 text-sm text-gray-900">
                      FUTEBOL
                      </h1>
                    </Link>
                  </button>
                </li>
                <li>
                  <button className="inline-flex items-center rounded py-2 px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#E96708"
                      className="bi bi-chevron-right font-bold"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <Link href="/esportes/modalidades-ctfit">
                      <h1 className="ml-2 mr-5 text-sm text-gray-900">
                      MODALIDADES CTFIT
                      </h1>
                    </Link>
                  </button>
                </li>
                <li>
                  <button className="inline-flex items-center rounded py-2 px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#E96708"
                      className="bi bi-chevron-right font-bold"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <Link href="/esportes/academia-eugenio-fortes">
                      <h1 className="ml-2 mr-5 text-sm text-gray-900">
                      ACADEMIA EUGÊNIO FORTES
                      </h1>
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
            <Link href="/sedes" className="p-1 font-medium uppercase sm:p-4">
              <button>
                <span className="mr-6 text-white">CONHEÇA NOSSAS SEDES</span>
              </button>
            </Link>
            <Link href="/noticias" className="uppercasesm:p-4 p-1 font-medium">
              <button>
                <span className="mr-4 text-white">NOTÍCIAS</span>
              </button>
            </Link>
            <Link
              href="/nossos-espacos"
              className="uppercasesm:p-4 p-1 font-medium"
            >
              <button>
                <span className="mr-4 text-white">FAÇA SEU EVENTO AQUI</span>
              </button>
            </Link>
            <Link href="/" className="uppercasesm:p-4 p-1 font-medium">
              <button>
                <span className="mr-4 text-white">FENAE</span>
              </button>
            </Link>
            <div className="group inline-block">
              <button className="inline-flex items-center rounded-md bg-orange-apcef py-2 px-4 font-bold text-white dark:border-gray-800">
                ASSOCIE-SE
                <svg
                  className="h-4 w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="absolute z-10 hidden rounded bg-white pt-1 shadow-md shadow-gray-300 group-hover:block dark:bg-gray-800">
                <li>
                  <Link href="/associe-se">
                    <button className="inline-flex items-center rounded py-2 px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="#E96708"
                        className="bi bi-chevron-right font-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                      <h1 className="ml-2 mr-5 text-sm">EMPREGADO CAIXA</h1>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/associe-se">
                    <button className="inline-flex items-center rounded py-2 px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="#E96708"
                        className="bi bi-chevron-right font-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                      <h1 className="ml-2 mr-5 text-sm">CONTRIBUITE</h1>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
