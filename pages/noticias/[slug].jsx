import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
import Image from "next/image";
import Footer from "@/components/Footer";
import ReactMarkdown from "react-markdown";

export default function SingleNews({ news }) {
  const router = useRouter();
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 pt-4">
        <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
          {news.titulo}
        </h1>
        <h2 className="title-font text-md mb-1">{news.subtitulo}</h2>
        <div className="mb-8 mt-4 rounded-xl p-2 shadow-md shadow-blue-200">
          <div className="mr-3 flex justify-center p-4">
            <div className="h-60 md:w-1/2 w-full scale-100">
              <Image
                src={news.image ? news.image.url : "/logo.png"}
                layout="fill"
                className="rounded"
              />
            </div>
          </div>
          <div>
            <h2 className="title-font text-md mb-1 p-5">
              <ReactMarkdown escapeHtml={false}>{news.descricao}</ReactMarkdown>
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/noticias/`);
  const news = await res.json();
  const paths = news.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/noticias?slug=${slug}`);
  const singleNews = await res.json();
  return {
    props: {
      news: singleNews[0],
    },
    revalidate: 1,
  };
}
