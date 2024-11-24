const supportedSources = ['LOCAL_DB', 'LOCAL_JSON', 'MONGO_DB'];
let source = 'LOCAL_JSON'; // TODO: this will need to come from the environment variables or project configuration
// Data source configuration
let DATASOURCE_CONFIG = {
  HEADERS: {
    contentType: 'application/json',
  },
};

const _verifySource = () => {
  // Make sure we have a source and it is valid;
  if (!source) {
    console.error(
      `[ERR] [8989d25f-52da-4da3-ad79-e98fc9acf8f3] No Source Value.
      \tExpected: ["${supportedSources.join('", "')}"]`
    );
    return false;
  } else {
    if (supportedSources.indexOf(source) === -1) {
      console.error(
        `[ERR] [360c2209-7ac9-422b-bcd8-edcb1765cfec] Invalid source value.
        \tRecieved: ${source}
        \tExpected: ["${supportedSources.join('", "')}"]`
      );
      return false;
    } else {
      return true;
    }
  }
};

// from https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper
export function client(endpoint, { body, ...customConfig } = {}) {
  if (!_verifySource()) {
    console.log('[ERR] [2e1c24c1-9c81-46e4-89a0-767025fa4b34] Invalid Source');
    return;
  }
  const headers = { 'Content-Type': 'application/json' };
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  return window.fetch(`${endpoint}`, config).then(async (response) => {
    if (response.ok) {
      return await response.json();
    } else {
      const errorMessage = await response.text();
      return Promise.reject(new Error(errorMessage));
    }
  });
}
