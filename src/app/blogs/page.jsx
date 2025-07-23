"use client";
import { useEffect, useState, useMemo } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import BlogCard from "@/components/BlogCard.jsx";
import BlogCardSkeleton from "@/components/BlogCardSkeleton"; // ✅ NEW
import bloghero from "@/assets/logo.png";
import Image from "next/image";
import Test from "@/components/Test";
import pfire from "@/assets/pfire.png";

const categories = [
  "All",
  "Company Registration",
  "Licenses & Permits",
  "Tax Compliance",
  "Labour Laws",
  "Contracts & Agreements",
];

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ NEW
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [filterType, setFilterType] = useState("Most Recent");
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  const router = useRouter();

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        if (data.success) {
          const formatted = data.blogs.map((blog) => ({
            id: blog._id,
            image: blog.image,
            category: blog.category,
            date: new Date(blog.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }),
            readTime: "5 mins read", // static for now
            title: blog.title,
            summary: blog.metaDescription,
            authorName: blog.author || "Unknown",
            authorImage: "/authors/default.jpg",
            timestamp: new Date(blog.createdAt).getTime(),
            views: blog.views || 0, // assuming 'views' exists
            slug: blog.urlSlug,
          }));
          setBlogs(formatted);
        }
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      } finally {
        setLoading(false); // ✅ Mark as loaded
      }
    };

    fetchBlogs();
  }, []);

  // Filter & sort blogs
  const filteredPosts = useMemo(() => {
    let filtered =
      selectedCategory === "All"
        ? blogs
        : blogs.filter((post) => post.category === selectedCategory);

    if (submittedSearch.trim() !== "") {
      const term = submittedSearch.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(term) ||
          post.summary.toLowerCase().includes(term) ||
          post.category?.toLowerCase().includes(term)
      );
    }

    if (filterType === "Most Viewed") {
      filtered = filtered.sort((a, b) => b.views - a.views);
    } else {
      filtered =
        sortBy === "Newest"
          ? filtered.sort((a, b) => b.timestamp - a.timestamp)
          : filtered.sort((a, b) => a.timestamp - b.timestamp);
    }

    return filtered;
  }, [blogs, selectedCategory, sortBy, submittedSearch, filterType]);

  return (
    <div className="overflow-hi dden bg-white re lative">
      <BlogHero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={() => setSubmittedSearch(searchTerm)}
      />

      <BlogHeader
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterType={filterType}
        setFilterType={setFilterType}
      />

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          // ✅ Render skeletons while loading
          [...Array(3)].map((_, index) => <BlogCardSkeleton key={index} />)
        ) : filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => router.push(`/blogs/${post.slug}`)}
              className="cursor-pointer"
            >
              <BlogCard {...post} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg py-12">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
};

// --------------------- Components ---------------------

const BlogHero = ({ searchTerm, setSearchTerm, onSearch }) => (
  <section className="relative flex justify-between w-full bg-gradient-to-br from-[#833DFA] via-[#] to-white text-zinc-800 overflow-hidden pt-16">
    <span className="md:text-[20vw] text-[25vw] main-p absolute -right-10">⤶</span>
    <span className="md:text-[20vw] text-[25vw] main-p absolute -left-10">ヅ</span>
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex  justify-between items-center gap-12 relative z-10">
      <div className="md:max-w-2xl ">
        <h1 className="text-3xl z-10 special-font relative  sm:text-4xl md:text-6xl font-bold text-center leading-tight mb-4">
          Strategies, Stories <br /> & Solutions for Modern{" "}
          <span className="-rotate-20 text-white px-4 shadow-2xl main-p-bg ">Businesses</span>
          <span className="md:text-9xl text-7xl animate-[spin_3s_linear_infinite] top-1/4 right-0 z-1 main-p  duration-100 absolute">
            ❋
          </span>
        </h1>

        {/* <Test /> */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch();
          }}
          className="flex flex-col  sm:flex-row w-full bg-white border-2 rounded-lg overflow-hidden mt-10"
        >
          <input
            type="text"
            placeholder="Search articles, tips & growth hacks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-black flex-1 px-4 py-3 text-sm outline-none"
          />
          <button
            type="submit"
            className="bg-[#833DFA] text-white px-4 py-3 text-sm font-medium hover:bg-[#9b3dfa]"
          >
            Search
          </button>
        </form>
      </div>
      {/* <Image src={bloghero} className="md:block hidden " alt="Lawfinity Blogs Image"/> */}
    </div>
  </section>
);

const BlogHeader = ({
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  filterType,
  setFilterType,
}) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12">
    <div className="mb-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex justify-between w-full">
          {/* <h1 className="text-3xl font-semibold mb-2">Blog</h1> */}
        </div>
      </div>
      {/* <p className="text-gray-600 max-w-2xl">
          Explore expert articles on registrations, licenses, tax compliance,
          and legal documentation tailored for Indian startups and businesses.
        </p> */}
    </div>
    {/* Category Filter */}
    {/* <div className="flex flex-wrap gap-3 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            selectedCategory === cat
              ? "bg-gray-900 text-white"
              : "text-gray-700 hover:text-black border border-gray-300"
          }`}
        >
          {cat}
        </button>
      ))}
    </div> */}
  </div>
);

export default Page;
