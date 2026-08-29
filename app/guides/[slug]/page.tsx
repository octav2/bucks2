import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostLayout from '@/components/BlogPostLayout';
import { getAllBlogPosts, getAllBlogSlugs, getBlogPostBySlug } from '@/lib/blog';
import { businessDetails } from '@/lib/data';

export const dynamicParams = false;

export function generateStaticParams() {
    return getAllBlogSlugs().map((slug) => ({ slug }));
}

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = getBlogPostBySlug(params.slug);
    if (!post) return {};
    const { metaTitle, metaDescription, published } = post.frontmatter;
    const url = `${businessDetails.domain}/guides/${post.slug}`;
    return {
        title: { absolute: metaTitle },
        description: metaDescription,
        alternates: { canonical: url },
        openGraph: {
            title: metaTitle,
            description: metaDescription,
            url,
            siteName: businessDetails.name,
            locale: 'en_GB',
            type: 'article',
            publishedTime: published,
            images: ['/og-image.png'],
        },
        twitter: {
            card: 'summary_large_image',
            title: metaTitle,
            description: metaDescription,
            images: ['/og-image.png'],
        },
    };
}

export default function BlogPostPage({ params }: Props) {
    const post = getBlogPostBySlug(params.slug);
    if (!post) return notFound();

    const related = getAllBlogPosts()
        .filter((p) => p.slug !== params.slug)
        .slice(0, 2);

    return <BlogPostLayout post={post} related={related} />;
}