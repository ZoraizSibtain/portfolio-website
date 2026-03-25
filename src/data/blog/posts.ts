export interface BlogSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'blockquote' | 'list';
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-ai-qa-pipeline',
    title: 'Building an AI-Powered QA Pipeline That Actually Works',
    excerpt:
      'How I reduced root-cause analysis time by 60% by replacing manual test triaging with an LLM-driven diagnostic loop.',
    date: 'Mar 10, 2026',
    readTime: '8 min read',
    category: 'Engineering',
    tags: ['AI', 'QA', 'LangChain', 'Automation'],
    content: [
      {
        type: 'paragraph',
        text: 'Manual QA triaging is a tax on engineering velocity. When I joined True Security Consultant Limited, senior analysts were spending upward of 90 minutes per incident just reconstructing what happened before they could even begin diagnosing why. That number bothered me the moment I saw it.',
      },
      {
        type: 'heading',
        text: 'The Problem With Traditional Pipelines',
      },
      {
        type: 'paragraph',
        text: 'Most test pipelines are designed to tell you what failed, not why. The result is a handoff problem: automated systems produce data, humans interpret it, and the gap between those two steps is where hours disappear. We had hundreds of test runs per week, each producing logs, screenshots, and stack traces that someone had to manually correlate.',
      },
      {
        type: 'blockquote',
        text: 'The goal was never to replace human judgment. It was to eliminate the undifferentiated heavy lifting that preceded it.',
      },
      {
        type: 'heading',
        text: 'Designing the Diagnostic Loop',
      },
      {
        type: 'paragraph',
        text: 'The architecture I settled on treats each test failure as a document retrieval problem. LangChain chains pull the relevant log fragments, stack traces, and recent code diffs into a context window, and a structured prompt extracts a ranked list of probable causes with supporting evidence.',
      },
      {
        type: 'subheading',
        text: 'Key Components',
      },
      {
        type: 'list',
        items: [
          'Log chunking with sliding-window overlap to preserve stack trace continuity',
          'A vector store index of resolved past incidents for few-shot retrieval',
          'A structured output schema forcing the LLM to cite specific log lines',
          'A confidence threshold below which the system escalates to a human reviewer',
        ],
      },
      {
        type: 'paragraph',
        text: 'The confidence threshold was the most important design decision. Without it, the system would produce plausible-sounding but wrong diagnoses silently. With it, the team knew exactly when to trust the output and when to dig deeper.',
      },
      {
        type: 'heading',
        text: 'Results',
      },
      {
        type: 'paragraph',
        text: 'After six weeks in production, root-cause analysis time dropped by 60%. More importantly, the quality of the diagnoses as rated by the analysts using them, was higher than the manual baseline on incidents involving known failure patterns. On novel failures, the system correctly escalated 94% of the time.',
      },
      {
        type: 'paragraph',
        text: 'The biggest surprise: junior analysts were the biggest beneficiaries. The LLM output gave them a structured starting point they could verify rather than a blank slate they had to fill from scratch.',
      },
      {
        type: 'heading',
        text: 'What I Would Do Differently',
      },
      {
        type: 'paragraph',
        text: "I underestimated the cost of maintaining the prompt. As the codebase evolved, failure patterns changed, and the prompt needed regular updates to stay accurate. Next time I would build a feedback loop directly into the UI. One click to mark a diagnosis as correct or incorrect and use that signal to drive automated prompt refinement.",
      },
    ],
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
