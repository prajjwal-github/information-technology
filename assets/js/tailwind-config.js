/* ==========================================================================
   TAILWIND COLOUR PALETTE
   Same PCCOE colours as the Computer Department site, so you can write
   Tailwind classes like  bg-navy  text-gold  border-cerulean  in any page.
   This file must load right after the Tailwind CDN script.
   ========================================================================== */
tailwind.config = {
  corePlugins: {
    container: false // the header & footer use their own .container class
  },
  theme: {
    extend: {
      colors: {
        'navy-darkest': '#073860',
        navy: '#035a91',
        'navy-royal': '#0277bd',
        cerulean: '#0284c7',
        'sky-tint': '#e0f2fe',
        'sky-wash': '#f0f8ff',
        gold: '#f59e0b',
        'gold-bright': '#fbbf24',
        flame: '#ea580c',
        'gold-dark': '#b45309',
        'gold-soft': '#fef3c7',
        ink: '#0f172a',
        body: '#334155',
        muted: '#64748b',
        line: '#e2e8f0',
        page: '#f8fafc'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif']
      },
      boxShadow: {
        card: '0 8px 20px -3px rgba(3, 90, 145, 0.11), 0 3px 6px -2px rgba(3, 90, 145, 0.05)',
        lift: '0 20px 32px -4px rgba(3, 90, 145, 0.18), 0 8px 12px -6px rgba(3, 90, 145, 0.08)'
      }
    }
  }
};
