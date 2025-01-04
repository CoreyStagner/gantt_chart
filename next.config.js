/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_LOCAL_MONGO_DB_URI:
      'mongodb+srv://coreystagnerllc:QNtHF0B8IINDxYnv@realm.cbjgs.mongodb.net/?retryWrites=true&w=majority&appName=realm',
    NEXT_LOCAL_MONGO_DB_DATABASE: 'realm',
    NEXT_LOCAL_MONGO_DB_ISSUES_COLLECTION: 'issues',
    NEXT_LOCAL_MONGO_DB_LOG_DATABASE: 'log',
    NEXT_LOCAL_MONGO_DB_LOG_COLLECTION_WARN: 'log',
    NEXT_LOCAL_AUTH_TYPE: 'dev',
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'http://localhost:3041',
          }, // replace this your actual origin
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,DELETE,PATCH,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
