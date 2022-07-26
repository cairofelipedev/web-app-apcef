import Image from 'next/image'

export default function DirecaoItem({ deliberativo }) {
  return (
    <div className="mb-8 mt-4 flex h-28 items-center rounded-xl p-2 shadow-md shadow-blue-200">
      <div className="mr-3">
        <Image
          src={deliberativo.imagem ? deliberativo.imagem.url : '/logo.png'}
          alt="avatar"
          width="50px"
          height="50px"
          className="h-48 w-48 rounded-full"
        />
      </div>
      <div>
        <h1 className="title-font mb-1 text-lg font-medium">{deliberativo.nome}</h1>
        <h2 className="title-font text-md mb-3 font-medium text-gray-400">{deliberativo.cargo}</h2>
      </div>
    </div>
  )
}
