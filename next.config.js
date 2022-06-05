/** @type {import('next').NextConfig} */
const nextConfig = {
  // eactStrictMode: true,
  rewrites: async () => {
    return [{
      source: '/api/:path*',
      destination: 'http://localhost:3333/:path*',    
    }]
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/intro',
        permanent: true,
      },
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

/**
 * setInterval(() => {
  fetch('http://localhost:3000/api/order/timeTrigger', {
    method: 'GET',
  })
    .then((res) => {
      res.json().then((res) => {
        const { count } = res;
        console.log(
          `[TIME_TRIGGER][주문만료처리] ${count} 건의 주문이 만료처리됨`
        );
      });
    })
    .catch((err) => {
      console.log('[ERROR][주문만료처리] ', err);
    });
}, 1000 * 60);
 */

module.exports = nextConfig;
