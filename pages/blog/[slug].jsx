import React from "react";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";

const Doc = ({ frontMatter: { title }, mdxSource }) => {
  return (
    <div className="">
      <h1>{title}</h1>
      <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
    </div>
  );
};

export default Doc;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("docs"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("docs", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};
