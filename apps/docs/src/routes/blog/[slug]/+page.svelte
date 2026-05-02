<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const { post } = data;
</script>

<svelte:head>
	<title>{post.title} | Blog | PARA</title>
	<meta name="description" content={post.description} />
</svelte:head>

<div class="site-blog-post">
	<article class="blog-post-container">
		<div class="container blog-post-header">
			<a href={resolve('/blog')} class="back-link">← Back to blog</a>
			<h1 class="post-title">{post.title}</h1>
			<div class="post-meta">
				<time class="post-date">{post.date}</time>
				{#if post.author}
					<span class="post-author">By {post.author}</span>
				{/if}
			</div>
		</div>

		<div class="container blog-post-content">
			<p class="post-description">{post.description}</p>
			<p class="post-notice">
				<em>
					This is a brief overview. For the full article and more details, visit the AT Protocol
					blog.
				</em>
			</p>
		</div>
	</article>
</div>

<style>
	.site-blog-post {
		padding-top: 2rem;
		padding-bottom: 4rem;
	}

	.blog-post-container {
		max-width: 800px;
		margin: 0 auto;
	}

	.container {
		width: min(var(--ps-max-width-docs), calc(100% - 2rem));
		margin: 0 auto;
	}

	.blog-post-header {
		margin-bottom: 2rem;
	}

	.back-link {
		display: inline-block;
		margin-bottom: 1.5rem;
		color: #2ac6ff;
		text-decoration: none;
		font-size: 0.95rem;
		transition: color 0.2s ease;
	}

	.back-link:hover {
		color: #ffffff;
	}

	.post-title {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: #ffffff;
		line-height: 1.3;
	}

	.post-meta {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		font-size: 0.95rem;
		color: #858585;
	}

	.post-date {
		display: block;
	}

	.post-author {
		display: block;
	}

	.blog-post-content {
		padding-top: 1.5rem;
	}

	.post-description {
		font-size: 1.125rem;
		line-height: 1.8;
		color: #e5e5e5;
		margin-bottom: 2rem;
	}

	.post-notice {
		padding: 1rem;
		background: rgba(255, 255, 255, 0.05);
		border-left: 3px solid #2ac6ff;
		border-radius: 0.25rem;
		color: #a3a3a3;
		font-size: 0.95rem;
	}

	.post-notice em {
		color: #c5c5c5;
	}
</style>
