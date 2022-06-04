import {
  Header,
  Footer,
  SEO,
  FeaturedArticle,
  Article,
  Newsletter,
} from "../components";

import axios from "axios";

export default function Home({ data }) {
  const featuredArticleName = "raycast-vehicle-engine",
    featuredArticle = () => {
      for (let i = 0; i < data.files.length; i++) {
        if (data.files[i].file == featuredArticleName) return i;
      }
    };
  return (
    <div className="">
      <SEO title="Blogs / Jaagrav" />
      <Header />
      <div className="px-8 md:px-32">
        <div className="max-w-screen-xl mx-auto">
          <div className="md:grid md:grid-cols-2 gap-6 w-full">
            <div>
              <div className="sticky top-20">
                <FeaturedArticle
                  slug={data.files[featuredArticle()].file}
                  {...data.files[featuredArticle()].fileData}
                />
                <Newsletter />
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              {data.files.map(({ file, fileData }, index) => (
                <>
                  {index != featuredArticle() && (
                    <Article slug={file} {...fileData} />
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { data } = await axios.get(`http://localhost:3000/api/get-blog-data`);

  return {
    props: {
      data,
    },
  };
}
