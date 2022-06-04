import { Header, Footer, SEO } from "../../components";

import { useRouter } from "next/router";

import axios from "axios";

import { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark as dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Blog(props) {
  console.log(props);
  return (
    <div>
      <SEO title={`${props?.data?.file?.data?.title} / Blogs / Jaagrav`} />
      <Header isCollapsible={true} />
      <div className="px-8 md:px-32">
        <div className="md:mt-8 relative z-10 max-w-screen-xl mx-auto ">
          <div className="text-white text-6xl leading-[4.5rem]">
            {props?.data?.file?.data?.title}
          </div>
          <div className="text-white text-2xl mt-2 opacity-75">
            {props?.data?.file?.data?.publishedOn} •{" "}
            {props?.data?.file?.data?.readingTime} read
          </div>
        </div>
      </div>
      <div
        className="max-w-screen-xl mx-auto my-6 h-[60vh] w-full relative z-10 bg-center bg-no-repeat bg-cover md:rounded-[1.5rem]"
        style={{
          backgroundImage: `url(./assets/blogs-media/${props?.article}/thumbnail.png)`,
        }}
      ></div>
      <div className="px-8 md:px-32">
        <div className="md:mt-8 relative z-10 max-w-screen-lg mx-auto text-white markdown">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={dark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {props?.data?.file?.content}
          </ReactMarkdown>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { article } = params;

  const { data } = await axios.post(`http://localhost:3000/api/get-blog`, {
    article,
  });

  return {
    props: {
      data,
      article,
    },
  };
}
