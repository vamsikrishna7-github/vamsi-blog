/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ===== Essential SEO & Performance Settings =====
  images: {
    domains: [
      '127.0.0.1', 
      'vamsikrishna.site', 
      'blog.vamsikrishna.site', 
      'vamsikrishna-site.onrender.com', 
      'res.cloudinary.com' // ✅ Added Cloudinary for remote images
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vamsikrishna-site.onrender.com',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/djzsfnsjj/**', // ✅ Ensures Cloudinary images are accessible
      },
    ],
    formats: ['image/avif', 'image/webp'], // Modern image formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Responsive breakpoints
    minimumCacheTTL: 60 * 60 * 24 * 7, // 1-week cache
    dangerouslyAllowSVG: false, // Disable SVG unless needed
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ===== Build & Lint Config =====
  eslint: {
    ignoreDuringBuilds: true, // Consider using a CI pipeline instead
  },
  typescript: {
    ignoreBuildErrors: false, // Keep false for production
  },

  // ===== Advanced Optimization =====
  compress: true, // Enable gzip compression
  productionBrowserSourceMaps: false, // Enable only for debugging

  // ===== Security Headers =====
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' }
        ],
      },
    ];
  },

  // ===== Redirects & Rewrites =====
  async redirects() {
    return [
      {
        source: '/old-blog/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },

  // ===== Webpack Optimizations =====
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    
    // Enable tree shaking
    config.optimization.usedExports = true;
    
    return config;
  },
};

export default nextConfig;
