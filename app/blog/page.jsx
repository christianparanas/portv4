import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Page from "components/Page";

// Mock blog posts for when no docs exist
const mockPosts = [
  {
    frontMatter: {
      title: "Building Scalable Web Applications with React",
      description: "Learn the best practices for building large-scale React applications that are maintainable and performant.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
    },
    slug: "building-scalable-react-apps",
  },
  {
    frontMatter: {
      title: "Getting Started with TypeScript in 2024",
      description: "A comprehensive guide to TypeScript for JavaScript developers looking to level up their skills.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "TypeScript",
    },
    slug: "getting-started-typescript",
  },
  {
    frontMatter: {
      title: "Modern CSS Techniques You Should Know",
      description: "Explore the latest CSS features including container queries, cascade layers, and more.",
      date: "2024-01-05",
      readTime: "5 min read",
      category: "CSS",
    },
    slug: "modern-css-techniques",
  },
  {
    frontMatter: {
      title: "API Design Best Practices",
      description: "How to design RESTful APIs that are intuitive, scalable, and easy to maintain.",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Backend",
    },
    slug: "api-design-best-practices",
  },
];

export default async function Blog() {
  let docs = [];
  
  try {
    const docsPath = path.join(process.cwd(), "docs");
    if (fs.existsSync(docsPath)) {
      const files = fs.readdirSync(docsPath);
      docs = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(path.join(docsPath, filename), "utf-8");
        const { data: frontMatter } = matter(markdownWithMeta);
        return { frontMatter, slug: filename.split(".")[0] };
      });
    }
  } catch (error) {
    console.log("No docs folder found, using mock data");
  }

  const posts = docs.length > 0 ? docs : mockPosts;

  return (
    <Page>
      <main className="pt-6 sm:pt-8 mt-12 sm:mt-16 md:mt-20">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white">Blog</h1>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400">Thoughts, tutorials & insights</p>
            </div>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Writing about web development, software engineering, and the things I learn along the way.
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-[#18232c] border border-gray-200 dark:border-[#203042] shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">{posts.length}</div>
              <div className="text-xs text-gray-500 dark:text-slate-400">Articles</div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {posts.map((doc, key) => (
            <article
              key={key}
              className="group relative rounded-xl sm:rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] p-4 sm:p-5 md:p-6 shadow-md dark:shadow-none hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Category badge */}
              {doc.frontMatter.category && (
                <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium mb-3">
                  {doc.frontMatter.category}
                </div>
              )}

              <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                {doc.frontMatter.title}
              </h2>
              
              <p className="text-sm text-gray-600 dark:text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                {doc.frontMatter.description}
              </p>

              {/* Meta info */}
              <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-slate-500 mb-4">
                {doc.frontMatter.date && (
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {doc.frontMatter.date}
                  </span>
                )}
                {doc.frontMatter.readTime && (
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {doc.frontMatter.readTime}
                  </span>
                )}
              </div>

              <Link 
                href={`/blog/${doc.slug}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:gap-2 transition-all duration-200"
              >
                Read article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </article>
          ))}
        </div>

        {/* Empty state */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 dark:bg-[#18232c] flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No posts yet</h3>
            <p className="text-gray-500 dark:text-slate-400">Blog posts will appear here once they're published.</p>
          </div>
        )}
      </main>
    </Page>
  );
}

export const metadata = {
  title: "Blog | Christian Paranas",
};
