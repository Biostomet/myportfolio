import { createClient } from "contentful";
import Layout from "../components/layout/Layout";
import SectionAbout from "../components/SectionAbout";
import SectionCompetences from "../components/SectionCompetences";
import SectionReseau from "../components/SectionReseau";
import SectionShow from "../components/SectionShow";
import styles from "../styles/Home.module.css";

export default function Home({ projets }) {
  // console.log(projets);
  return (
    <Layout
      title="Acceuil"
      metaContent="Bienvenue sur le portfolio de Nassim Segura. Je suis développeur web junior javascript. Je travaille avec react et je souhaite également utiliser node. "
    >
      <div className={styles.container}>
        <div className="flex flex-col justify-center items-center mb-24">
          <h1 className="uppercase font-bold text-4xl mt-24">
            développeur web full-stack
          </h1>
          <img
            className="w-[50%]"
            src="img/undraw_Programmer_re_owql.png"
            alt=""
          />
        </div>
        <SectionAbout />
        <SectionCompetences />
        <SectionShow projets={projets} />
        <SectionReseau />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // 1 - connexion au contentful
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
  // 2 - récupère la date une fois que la promesse success
  const response = await client.getEntries({
    content_type: "projets",
    limit: 4,
    order: "sys.createdAt",
  });
  // console.log(response);
  // 3 - on envoie la data dans les props de la page
  return {
    props: {
      projets: response.items,
    }, // will be passed to the page component as props
  };
}
