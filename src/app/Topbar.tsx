'use client';
import {
  KeyboardEvent as ReactKeyboardEvent,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { usePathname } from 'next/navigation';

const menuLinks = [
  { href: '/onas', label: 'O nas' },
  { href: '/aktualnosci', label: 'Aktualności' },
  { href: '/oferta', label: 'Oferta' },
  { href: '/konie', label: 'Nasze konie' },
  { href: '/regulamin', label: 'Regulamin' },
  { href: '/kontakt', label: 'Kontakt' },
];

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getFocusableElements(container: HTMLElement | null): HTMLElement[] {
  if (!container) return [];
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (el) => !el.hasAttribute('disabled') && el.tabIndex !== -1
  );
}

export default function Topbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const menuId = useId();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);

  const focusFirstMenuItem = useCallback(() => {
    const [first] = getFocusableElements(mobileMenuRef.current);
    first?.focus();
  }, []);

  const closeMenu = useCallback((restoreFocus = false) => {
    setMenuOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;

      setScrolled(scrollTop > 12);
      setScrollProgress(progress);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [pathname]);

  function isActiveLink(href: string): boolean {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (mobileMenuRef.current?.contains(target)) return;
      if (menuButtonRef.current?.contains(target)) return;
      closeMenu(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeMenu, menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    focusFirstMenuItem();

    function handleMenuKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu(true);
        return;
      }

      if (e.key !== 'Tab') return;

      const focusable = getFocusableElements(mobileMenuRef.current);
      if (!focusable.length) {
        e.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey) {
        if (active === first || !mobileMenuRef.current?.contains(active)) {
          e.preventDefault();
          last.focus();
        }
        return;
      }

      if (active === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleMenuKeydown);
    return () => document.removeEventListener('keydown', handleMenuKeydown);
  }, [closeMenu, focusFirstMenuItem, menuOpen]);

  function handleButtonKeyDown(e: ReactKeyboardEvent<HTMLButtonElement>) {
    if (e.key === 'Escape' && menuOpen) {
      e.preventDefault();
      closeMenu(true);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!menuOpen) {
        setMenuOpen(true);
        requestAnimationFrame(focusFirstMenuItem);
        return;
      }
      focusFirstMenuItem();
    }
  }

  function handleMobileMenuKeyDown(e: ReactKeyboardEvent<HTMLElement>) {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;

    const focusable = getFocusableElements(mobileMenuRef.current);
    if (!focusable.length) return;

    const active = document.activeElement as HTMLElement | null;
    const currentIndex = focusable.indexOf(active as HTMLElement);
    const startIndex = currentIndex >= 0 ? currentIndex : 0;
    const direction = e.key === 'ArrowDown' ? 1 : -1;
    const nextIndex = (startIndex + direction + focusable.length) % focusable.length;

    e.preventDefault();
    focusable[nextIndex]?.focus();
  }

  return (
    <header className={`topbar${scrolled ? ' topbar--scrolled' : ''}${menuOpen ? ' topbar--menu-open' : ''}`}>
      <div className="wrap" ref={menuRef}>
        <a href="/" className={`brand${pathname === '/' ? ' brand--active' : ''}`}>Stajnia Decyma</a>
        <nav className="menu" aria-label="Nawigacja główna">
          {menuLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={isActiveLink(link.href) ? 'is-active' : undefined}
              aria-current={isActiveLink(link.href) ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="menu-btn"
          ref={menuButtonRef}
          aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-controls={menuId}
          aria-expanded={menuOpen}
          aria-haspopup="true"
          onKeyDown={handleButtonKeyDown}
          onClick={() => setMenuOpen(v => !v)}
        >
          Menu
        </button>
        <nav
          id={menuId}
          ref={mobileMenuRef}
          className={`mobile-menu${menuOpen ? ' open' : ''}`}
          aria-label="Nawigacja mobilna"
          onKeyDown={handleMobileMenuKeyDown}
        >
          {menuLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={isActiveLink(link.href) ? 'is-active' : undefined}
              aria-current={isActiveLink(link.href) ? 'page' : undefined}
              onClick={() => closeMenu(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="topbar-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>
    </header>
  );
}
