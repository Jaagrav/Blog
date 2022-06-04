import {
  Header,
  SEO,
  FeaturedArticle,
  Article,
  Newsletter,
} from "../components";

export default function Home() {
  return (
    <div className="">
      <SEO title="Blogs / Jaagrav" />
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="sticky top-20">
              <FeaturedArticle />
              <Newsletter />
            </div>
          </div>
          <div className="">
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
        </div>
      </div>
    </div>
  );
}
