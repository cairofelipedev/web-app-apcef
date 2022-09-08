import ReactMarkdown from "react-markdown";
export default function AboutItem({ about }) {
  return (
    <>
      <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
        {about.nome}
      </h1>
      <p className="text-lg leading-7 text-justify">
        <ReactMarkdown>{about.texto}</ReactMarkdown>
      </p>
    </>
  );
}
