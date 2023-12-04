// 100-weak.js

// Create a WeakMap to track the number of times queryAPI is called for each endpoint
const weakMap = new WeakMap();

/**
 * Throws an error when the number of queries for an endpoint is >= 5.
 * @param {Object} endpoint - The endpoint object with properties protocol and name.
 * @throws {Error} - Throws an error if the number of queries is >= 5.
 */
function checkEndpointLoad (endpoint) {
  const queryCount = weakMap.get(endpoint) || 0;

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}

/**
 * Performs an API query and tracks the number of times it's called for each endpoint.
 * @param {Object} endpoint - The endpoint object with properties protocol and name.
 */
function queryAPI (endpoint) {
  // Check and update the query count for the endpoint
  checkEndpointLoad(endpoint);
  weakMap.set(endpoint, (weakMap.get(endpoint) || 0) + 1);

  // Perform the API query (implementation not provided in this example)
  // ...

  console.log(weakMap.get(endpoint));
}

export { weakMap, queryAPI };
