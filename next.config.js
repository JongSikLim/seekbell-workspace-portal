/** @type {import('next').NextConfig} */
const nextConfig = {
  eactStrictMode: true,
  redirects: async () => {
    console.log(this);
    return [
      {
        source: '/todaylunch',
        destination: '/login',
        permanent: true,
        has: [
          {
            type: 'cookie',
            key: 'authorized',
            value: 'true',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
