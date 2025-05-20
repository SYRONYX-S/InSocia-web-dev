/**
 * Helper utilities for various common functions
 */

// Format date to a readable string
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};

// Truncate text to a certain length with ellipsis
export const truncateText = (text, maxLength = 150) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

// Slugify a string for URLs
export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word characters
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

// Filter array by search query across multiple fields
export const filterByQuery = (items, query, fields = ['title', 'description']) => {
  if (!query) return items;
  
  const lowercaseQuery = query.toLowerCase();
  
  return items.filter(item => {
    return fields.some(field => {
      const value = item[field];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(lowercaseQuery);
      }
      return false;
    });
  });
};

// Group array items by a specific property
export const groupBy = (items, key) => {
  return items.reduce((result, item) => {
    const group = item[key];
    result[group] = result[group] || [];
    result[group].push(item);
    return result;
  }, {});
};

// Extract unique values from an array of objects for a given property
export const getUniqueValues = (items, property) => {
  return [...new Set(items.map(item => item[property]))];
};

// Shuffle an array (e.g., for randomizing items)
export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Create a range of numbers (useful for pagination)
export const range = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

// Debounce function for input handlers
export const debounce = (fn, delay) => {
  let timeoutId;
  return function(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}; 