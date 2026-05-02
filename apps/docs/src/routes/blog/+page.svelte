<script lang="ts">
	import { resolve } from '$app/paths';
	import { blogPosts } from '$lib/content/blog';
</script>

<svelte:head>
	<title>Blog | PARA</title>
	<meta name="description" content="News, updates, and insights from the PARA team." />
</svelte:head>

<div class="site-blog">
	<section class="blog-header">
		<div class="container">
			<h1 class="blog-title">Blog</h1>
			<p class="blog-description">News, updates, and insights from the PARA team.</p>
		</div>
	</section>

	<section class="blog-posts">
		<div class="container">
			<div class="blog-grid">
				{#each blogPosts as post (post.slug)}
					<article class="blog-card">
						<a href={resolve(`/blog/${post.slug}`)} class="blog-card-link">
							<time class="blog-date">{post.date}</time>
							<h2 class="blog-post-title">{post.title}</h2>
							<p class="blog-excerpt">{post.description}</p>
							{#if post.author}
								<p class="blog-author">By {post.author}</p>
							{/if}
						</a>
					</article>
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	.site-blog {
		padding-top: 2rem;
		padding-bottom: 4rem;
	}

	.blog-header {
		padding-bottom: 3rem;
		padding-top: 1rem;
	}

	.blog-title {
		font-size: 2.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: #ffffff;
	}

	.blog-description {
		font-size: 1.125rem;
		color: #a3a3a3;
		max-width: 600px;
	}

	.blog-posts {
		padding-bottom: 2rem;
	}

	.blog-grid {
		display: grid;
		gap: 1.5rem;
	}

	.blog-card {
		display: block;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 0.5rem;
		padding: 1.5rem;
		transition: all 0.2s ease;
		background: rgba(255, 255, 255, 0.02);
	}

	.blog-card:hover {
		border-color: rgba(255, 255, 255, 0.2);
		background: rgba(255, 255, 255, 0.05);
	}

	.blog-card-link {
		text-decoration: none;
		color: inherit;
		display: block;
	}

	.blog-date {
		font-size: 0.875rem;
		color: #858585;
		display: block;
		margin-bottom: 0.5rem;
	}

	.blog-post-title {
		font-size: 1.375rem;
		font-weight: 600;
		margin-bottom: 0.75rem;
		color: #ffffff;
		transition: color 0.2s ease;
	}

	.blog-card:hover .blog-post-title {
		color: #2ac6ff;
	}

	.blog-excerpt {
		font-size: 1rem;
		color: #a3a3a3;
		margin-bottom: 1rem;
		line-height: 1.5;
	}

	.blog-author {
		font-size: 0.875rem;
		color: #858585;
	}

	.container {
		width: min(var(--ps-max-width-docs), calc(100% - 2rem));
		margin: 0 auto;
	}
</style>
