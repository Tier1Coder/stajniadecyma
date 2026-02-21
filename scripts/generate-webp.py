#!/usr/bin/env python3
from __future__ import annotations

import argparse
from pathlib import Path
from typing import Iterable

try:
    from PIL import Image, ImageOps
except ImportError as exc:  # pragma: no cover - dependency guard
    print("WEBP ERROR: Pillow (PIL) is required. Install with: pip install pillow")
    raise SystemExit(1) from exc


ROOT = Path(__file__).resolve().parent.parent
PUBLIC_DIR = ROOT / "public"
SUPPORTED_EXT = {".jpg", ".jpeg", ".png"}


def to_webp_path(image_path: Path) -> Path:
    return image_path.with_suffix(".webp")


def normalize_candidates(input_paths: Iterable[str]) -> list[Path]:
    if input_paths:
        candidates: list[Path] = []
        for raw in input_paths:
            p = Path(raw)
            if not p.is_absolute():
                p = ROOT / p
            candidates.append(p.resolve())
        return candidates
    return [p.resolve() for p in PUBLIC_DIR.rglob("*") if p.is_file()]


def should_convert(src: Path, dst: Path, force: bool) -> bool:
    if force:
        return True
    if not dst.exists():
        return True
    return src.stat().st_mtime > dst.stat().st_mtime


def convert_to_webp(src: Path, dst: Path, quality: int) -> None:
    with Image.open(src) as img:
        img = ImageOps.exif_transpose(img)
        if img.mode not in ("RGB", "RGBA", "L", "LA"):
            img = img.convert("RGBA" if "A" in img.getbands() else "RGB")
        dst.parent.mkdir(parents=True, exist_ok=True)
        img.save(dst, format="WEBP", quality=quality, method=6)


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate .webp versions for images in public/")
    parser.add_argument("paths", nargs="*", help="Optional list of image files to convert")
    parser.add_argument("--quality", type=int, default=82, help="WebP quality (default: 82)")
    parser.add_argument("--force", action="store_true", help="Regenerate even if output is newer")
    parser.add_argument("--quiet", action="store_true", help="Suppress per-file logs")
    args = parser.parse_args()

    scanned = 0
    converted = 0
    skipped = 0
    errors = 0

    for path in normalize_candidates(args.paths):
        scanned += 1
        if not path.exists() or not path.is_file():
            skipped += 1
            continue
        if path.suffix.lower() not in SUPPORTED_EXT:
            skipped += 1
            continue
        if PUBLIC_DIR not in path.parents:
            skipped += 1
            continue

        target = to_webp_path(path)
        if not should_convert(path, target, args.force):
            skipped += 1
            continue

        try:
            convert_to_webp(path, target, args.quality)
            converted += 1
            if not args.quiet:
                print(f"WEBP: {path.relative_to(ROOT)} -> {target.relative_to(ROOT)}")
        except Exception as exc:  # pragma: no cover - defensive logging
            errors += 1
            print(f"WEBP ERROR: {path.relative_to(ROOT)}: {exc}")

    if not args.quiet:
        print(
            f"WEBP summary: scanned={scanned}, converted={converted}, "
            f"skipped={skipped}, errors={errors}"
        )

    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
