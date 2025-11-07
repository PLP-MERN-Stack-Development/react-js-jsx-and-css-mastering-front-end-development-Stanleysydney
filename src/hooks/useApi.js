import { useState, useEffect } from 'react';

export const useApi = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async (pageNum) => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${url.includes('?') ? '&' : '?'}_page=${pageNum}&_limit=10`, options);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      
      if (pageNum === 1) {
        setData(jsonData);
      } else {
        setData(prevData => [...prevData, ...jsonData]);
      }

      setHasMore(jsonData.length === 10);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [url, page]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1);
    }
  };

  return {
    data,
    loading,
    error,
    hasMore,
    loadMore,
  };
};

export const useSearch = (initialData = [], searchTerm = '') => {
  const [filteredData, setFilteredData] = useState(initialData);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredData(initialData);
      return;
    }

    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = initialData.filter(item => 
      Object.values(item).some(value => 
        value.toString().toLowerCase().includes(lowercasedTerm)
      )
    );

    setFilteredData(filtered);
  }, [initialData, searchTerm]);

  return filteredData;
};