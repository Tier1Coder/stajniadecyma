'use client';
import {
  KeyboardEvent as ReactKeyboardEvent,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

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
  const [menuOpen, setMenuOpen] = useState(false);
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
    <header className="topbar">
      <div className="wrap" ref={menuRef}>
        <a href="/" className="brand">Stajnia Decyma</a>
        <nav className="menu" aria-label="Nawigacja główna">
          {menuLinks.map(link => (
            <a key={link.href} href={link.href}>{link.label}</a>
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
              onClick={() => closeMenu(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
