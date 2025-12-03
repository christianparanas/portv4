import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import DocLayout from "components/docLayout/docLayout";
import CodeBlock from "components/codeBlock";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("docs"));
  return files.map((filename) => ({ slug: filename.replace(".mdx", "") }));
}

export default async function Doc({ params }) {
  const slug = params?.slug;
  if (!slug) {
    return null;
  }
  const markdownWithMeta = fs.readFileSync(path.join("docs", slug + ".mdx"), "utf-8");
  const { data: frontMatter, content } = matter(markdownWithMeta);
  return (
    <DocLayout title={frontMatter.title}>
      <MDXRemote source={content} components={{ CodeBlock }} />
    </DocLayout>
  );
}
export const metadata = {
  title: "Blog | Christian Paranas",
};
