'use client';

import { startTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import NewsCard from './NewsCard';
import {
  NEWS_CATEGORIES,
  NEWS_PAGE_SIZE,
  NEWS_SORT_OPTIONS,
  getNewsCategoryLabel,
  getNewsSortLabel,
  sortNewsPosts,
  type NewsCategory,
  type NewsPost,
  type NewsSort,
} from './news';

type CategoryFilter = 'all' | NewsCategory;
type SortFilter = NewsSort;

type NewsArchiveClientProps = {
  posts: NewsPost[]
}

function isCategoryFilter(value: string | null): value is CategoryFilter {
  return value === 'all' || NEWS_CATEGORIES.some((category) => category.value === value);
}

function isSortFilter(value: string | null): value is SortFilter {
  return NEWS_SORT_OPTIONS.some((option) => option.value === value);
}

function buildArchiveUrl(
  pathname: string,
  category: CategoryFilter,
  page: number,
  sort: SortFilter
): string {
  const params = new URLSearchParams();

  if (category !== 'all') {
    params.set('category', category);
  }

  if (sort !== 'latest') {
    params.set('sort', sort);
  }

  if (page > 1) {
    params.set('page', String(page));
  }

  const query = params.toString();
  return query ? `${pathname}?${query}` : pathname;
}

export default function NewsArchiveClient({ posts }: NewsArchiveClientProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const requestedCategory = searchParams.get('category');
  const activeCategory = isCategoryFilter(requestedCategory) ? requestedCategory : 'all';
  const requestedSort = searchParams.get('sort');
  const activeSort = isSortFilter(requestedSort) ? requestedSort : 'latest';
  const rawPage = Number(searchParams.get('page') || '1');

  const filteredPosts =
    activeCategory === 'all'
      ? posts
      : posts.filter((post) => post.category === activeCategory);
  const orderedPosts = sortNewsPosts(filteredPosts, activeSort);

  const totalPages = Math.max(1, Math.ceil(orderedPosts.length / NEWS_PAGE_SIZE));
  const currentPage = Number.isFinite(rawPage) && rawPage > 0 ? Math.min(rawPage, totalPages) : 1;
  const startIndex = (currentPage - 1) * NEWS_PAGE_SIZE;
  const visiblePosts = orderedPosts.slice(startIndex, startIndex + NEWS_PAGE_SIZE);
  const categoryCounts = NEWS_CATEGORIES.reduce<Record<string, number>>((acc, category) => {
    acc[category.value] =
      category.value === 'all'
        ? posts.length
        : posts.filter((post) => post.category === category.value).length;
    return acc;
  }, {});

  const activeCategoryLabel =
    activeCategory === 'all' ? 'wszystkie kategorie' : getNewsCategoryLabel(activeCategory);
  const activeSortLabel = getNewsSortLabel(activeSort);

  function navigate(category: CategoryFilter, page: number, sort = activeSort) {
    startTransition(() => {
      router.push(buildArchiveUrl(pathname, category, page, sort));
    });
  }

  return (
    <section id="archiwum" className="news-archive-section">
      <div className="news-archive-intro">
        <p>Filtruj wpisy po kategorii i ustaw kolejność, która jest dla Ciebie najwygodniejsza.</p>
      </div>
      <div className="news-toolbar">
        <div className="news-toolbar__group">
          <div className="news-filters" role="tablist" aria-label="Filtruj aktualności">
            {NEWS_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.value;
              return (
                <button
                  key={category.value}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`news-filter${isActive ? ' news-filter--active' : ''}`}
                  onClick={() => navigate(category.value, 1)}
                >
                  {category.label}
                  <span className="news-filter__count">{categoryCounts[category.value]}</span>
                </button>
              );
            })}
          </div>
        </div>
        <label className="news-sort-control">
          <span>Sortowanie</span>
          <select
            className="news-sort-select"
            aria-label="Sortuj aktualności"
            value={activeSort}
            onChange={(event) => navigate(activeCategory, 1, event.target.value as SortFilter)}
          >
            {NEWS_SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <p className="news-results-count">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'wpis' : 'wpisów'}.
          {' '}Kategoria: {activeCategoryLabel}. Kolejność: {activeSortLabel}.
        </p>
      </div>

      {visiblePosts.length ? (
        <div className="news-grid">
          {visiblePosts.map((post, index) => (
            <NewsCard
              key={post.id}
              post={post}
              priority={currentPage === 1 && index === 0}
            />
          ))}
        </div>
      ) : (
        <div className="news-empty-state">
          <p>Nie znaleźliśmy wpisów dla wybranej kategorii.</p>
        </div>
      )}

      {totalPages > 1 ? (
        <nav className="news-pagination" aria-label="Paginacja aktualności">
          <button
            type="button"
            className="btn-secondary"
            onClick={() => navigate(activeCategory, currentPage - 1, activeSort)}
            disabled={currentPage === 1}
          >
            Poprzednia
          </button>
          <div className="news-pagination__pages">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                type="button"
                className={`news-page-link${pageNumber === currentPage ? ' news-page-link--active' : ''}`}
                aria-current={pageNumber === currentPage ? 'page' : undefined}
                onClick={() => navigate(activeCategory, pageNumber, activeSort)}
              >
                {pageNumber}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => navigate(activeCategory, currentPage + 1, activeSort)}
            disabled={currentPage === totalPages}
          >
            Następna
          </button>
        </nav>
      ) : null}
    </section>
  );
}
