import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

// AI search & assistant crawlers we explicitly welcome — being listed by name
// (in addition to the '*' rule) signals intent and guards against any future
// default-deny, so the studio stays eligible for AI Overviews, ChatGPT search,
// Perplexity, Claude, and Apple Intelligence answers.
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'Applebot',
  'Applebot-Extended',
  'Amazonbot',
  'Bytespider',
  'CCBot',
  'cohere-ai',
  'Meta-ExternalAgent',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: 'https://www.xiangyueculturearts.com/sitemap.xml',
  };
}
