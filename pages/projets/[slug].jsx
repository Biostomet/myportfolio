import { createClient } from "contentful";
import React from "react";
import Layout from "../../components/layout/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// 1 - connexion au contentful
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// 2 - Generates all slugs of my projet in contentful
export async function getStaticPaths() {
  // 1 - récupère la date une fois que la promesse success
  const response = await client.getEntries({ content_type: "projets" });

  // 2 - Get all slugs
  const slugs = response.items.map((slug) => {
    return {
      params: {
        slug: slug.fields.slug,
      },
    };
  });
  // 3 - renvoie tout les slugs
  return {
    paths: slugs,
    fallback: false, // can also be true or 'blocking'
  };
}

// 3 - Récupere la data du show //
/////////////////////////////////
export async function getStaticProps({ params }) {
  const res = await client.getEntries({
    content_type: "projets",
    "fields.slug": params.slug,
  });

  const projet = res.items;
  return {
    // Passed to the page component as props
    props: {
      projet: projet[0],
    },
  };
}

export default function show({ projet }) {
  const { title, description, role, skills, images, featuredImage } =
    projet.fields;
  console.log(projet.fields);
  return (
    <Layout
      title={title}
      metaContent={`Le projet ${title} est un projet fait avec...`}
      image={`http:${featuredImage.fields.file.url}`}
    >
      <div className="flex flex-col items-center justify-center gap-20 mx-20">
        <div className="">
          <p className="text-2xl font-bold uppercase text-blue-500">{title}</p>
          <div className="">{documentToReactComponents(description)}</div>
          <p className="font-semibold">
            Rôle :
            {role.map((role) => (
              <span className="font-normal" key={role}>
                {role}
              </span>
            ))}
          </p>
          <p className="font-semibold">
            Stack :<span className="font-normal"> {skills}</span>
          </p>
        </div>
        <div className="flex flex-col shadow-2xl  w-full">
          {images.map((image, index) => (
            <img
              src={image.fields.file.url}
              key={index}
              alt={`Nassim Segura portfolio ${title}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
