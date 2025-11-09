import React, { useState, useEffect, useCallback } from 'react';
import Card from './Card';
import Button from './Button';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [expandedPosts, setExpandedPosts] = useState(new Set());

  const creativeContent = [
    {
      id: 1,
      title: "The Art of Modern Web Development",
      body: "Discover the fascinating world of modern web development! From responsive design to interactive user experiences, we're creating digital spaces that inspire and engage. Learn how React and other cutting-edge technologies are shaping the future of the web.",
      category: "Technology"
    },
    {
      id: 2,
      title: "Building Your First React Application",
      body: "Ready to dive into React? Start your journey with component-based architecture, state management, and the virtual DOM. This comprehensive guide will help you create your first React application with confidence and style.",
      category: "Tutorial"
    },
    {
      id: 3,
      title: "Mastering CSS Grid and Flexbox",
      body: "Transform your layouts with the power of CSS Grid and Flexbox! Learn how to create responsive, dynamic designs that look great on any device. Perfect for both beginners and experienced developers looking to enhance their styling skills.",
      category: "Design"
    },
    {
      id: 4,
      title: "The Power of Custom Hooks in React",
      body: "Unlock the full potential of React with custom hooks! Learn how to create reusable logic, manage state effectively, and write cleaner, more maintainable code. Discover patterns and practices that will level up your React development.",
      category: "Development"
    },
    {
      id: 5,
      title: "Responsive Design Best Practices",
      body: "Create seamless experiences across all devices with responsive design best practices. From mobile-first approaches to advanced media queries, learn how to build websites that adapt beautifully to any screen size.",
      category: "Design"
    },
    {
      id: 6,
      title: "State Management in Modern Web Apps",
      body: "Explore different approaches to state management in React applications. From Context API to Redux, understand when and how to use each solution effectively. Master the art of managing complex application states.",
      category: "Architecture"
    },
    {
      id: 7,
      title: "Optimizing React Performance",
      body: "Speed up your React applications with proven optimization techniques. Learn about memo, useMemo, useCallback, and other performance tools. Discover how to identify and fix common performance bottlenecks.",
      category: "Performance"
    },
    {
      id: 8,
      title: "Creating Accessible Web Applications",
      body: "Make your web applications accessible to everyone! Learn about ARIA attributes, keyboard navigation, and semantic HTML. Discover how to create inclusive experiences that work for all users.",
      category: "Accessibility"
    },
    {
      id: 9,
      title: "Testing React Components",
      body: "Build reliable React applications with comprehensive testing strategies. Learn about unit testing, integration testing, and end-to-end testing. Master the art of writing meaningful tests that catch bugs before they reach production.",
      category: "Testing"
    },
    {
      id: 10,
      title: "Modern JavaScript Features",
      body: "Explore the latest JavaScript features and how they improve your code. From async/await to optional chaining, learn how modern JavaScript makes development more efficient and enjoyable.",
      category: "JavaScript"
    },
    {
      id: 11,
      title: "Building a Theme System",
      body: "Create dynamic theme systems that support both light and dark modes. Learn about CSS variables, context management, and smooth transitions. Make your applications visually appealing in any theme.",
      category: "Design"
    },
    {
      id: 12,
      title: "API Integration Best Practices",
      body: "Master the art of integrating APIs in your React applications. Learn about error handling, loading states, and data caching. Create robust applications that handle network requests gracefully.",
      category: "Integration"
    },
    {
      id: 13,
      title: "Animation in React Applications",
      body: "Add life to your applications with smooth animations! Learn about CSS transitions, React Spring, and Framer Motion. Create engaging user experiences with thoughtful animation design.",
      category: "Animation"
    },
    {
      id: 14,
      title: "Form Handling in React",
      body: "Build user-friendly forms with React! Learn about form validation, error handling, and state management. Create forms that provide excellent user experience and proper data validation.",
      category: "Forms"
    },
    {
      id: 15,
      title: "React Router Deep Dive",
      body: "Navigate through your applications with React Router. Learn about route configuration, nested routes, and protected routes. Create seamless navigation experiences in your single-page applications.",
      category: "Routing"
    }
  ];

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const startIndex = (page - 1) * 9;
      const endIndex = startIndex + 9;
      const newPosts = creativeContent.slice(startIndex, endIndex);
      
      setPosts(prevPosts => [...prevPosts, ...newPosts]);
      setHasMore(endIndex < creativeContent.length);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredPosts(posts);
      return;
    }
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [posts, searchTerm]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1);
    }
  };

  // expanded posts for Read More functionality
  const [expandedIds, setExpandedIds] = useState([]);
  const toggleExpand = (id) => {
    setExpandedIds(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));
  };

  if (error) {
    return (
      <div className="text-center text-red-600 dark:text-red-400 p-4">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 p-4 shadow-md rounded-lg mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                     transition-colors duration-200"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {error && (
        <div className="rounded-lg bg-red-100 dark:bg-red-900 p-4 text-center">
          <p className="text-red-600 dark:text-red-200">{error}</p>
          <Button
            variant="primary"
            onClick={() => {
              setError(null);
              fetchPosts();
            }}
            className="mt-2"
          >
            Try Again
          </Button>
        </div>
      )}

      {!error && (
        <>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                title={post.title}
                className="h-full flex flex-col transform hover:scale-102 transition-transform duration-200"
              >
                <div className="flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                      {
                        'Technology': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
                        'Tutorial': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
                        'Design': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
                        'Development': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
                        'Architecture': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
                        'Performance': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
                        'Accessibility': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
                        'Testing': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
                        'JavaScript': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
                        'Integration': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
                        'Animation': 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
                        'Forms': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
                        'Routing': 'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200',
                      }[post.category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                  <p className={`text-gray-600 dark:text-gray-300 mb-4 ${expandedPosts.has(post.id) ? '' : 'line-clamp-4'}`}>
                    {post.body}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Article #{post.id}
                    </span>
                    <button
                      onClick={() => {
                        const newExpanded = new Set(expandedPosts);
                        if (newExpanded.has(post.id)) {
                          newExpanded.delete(post.id);
                        } else {
                          newExpanded.add(post.id);
                        }
                        setExpandedPosts(newExpanded);
                      }}
                      aria-expanded={expandedPosts.has(post.id)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-200 w-full md:w-auto text-center md:text-left"
                    >
                      {expandedPosts.has(post.id) ? 'Show Less ←' : 'Read More →'}
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && !loading && (
            <div className="text-center p-8">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No posts found matching your search.
              </p>
            </div>
          )}

          {loading && (
            <div className="text-center p-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Loading more posts...</p>
            </div>
          )}

          {!loading && hasMore && filteredPosts.length > 0 && (
            <div className="text-center p-4">
              <Button
                onClick={loadMore}
                variant="secondary"
                className="transform hover:scale-105 transition-transform duration-200"
              >
                Load More Posts
              </Button>
            </div>
          )}

          {!loading && !hasMore && posts.length > 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400 p-4">
              You've reached the end! No more posts to load.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default PostList;