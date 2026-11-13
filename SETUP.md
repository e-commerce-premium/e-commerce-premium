# Lumière - Premium E-Commerce Setup Guide

Découvrez l'univers de **Lumière** - votre boutique en ligne premium conçue avec soin.

## 🎨 Design Philosophy

- **Typographie**: Playfair Display (titres) + Inter (corps)
- **Palette**: Noir profond, or mat (#d4af37), gris anthracite
- **Effets**: Glassmorphism, dégradés subtils, parallaxe
- **Interactions**: Micro-animation fluides sur tous les éléments

## 🚀 Installation Rapide

```bash
cd e-commerce-premium
npm install
```

## 🔧 Configuration Requise

### 1. Variables d'environnement

Copiez `.env.example` vers `.env`:

```bash
cp .env.example .env
```

Puis ajoutez vos clés Stripe et autres variables.

### 2. Fonts (Déjà configurées)

Playfair Display et Inter sont déjà intégrés via Next.js fonts.

### 3. Images

Les placeholders `/_images/` doivent être remplacés par de vraies images éditoriales.

## 📦 Structure du Projet

```
e-commerce-premium/
├── src/
│   ├── components/
│   │   ├── ui/           # Composants base (Button, Card, etc.)
│   │   └── Navbar.tsx     # Navigation premium
│   ├── lib/
│   │   ├── types/        # TypeScript definitions
│   │   ├── utils.ts      # Utilitaires (formatPrice, etc.)
│   │   └── stripe.ts     # Stripe client
│   └── app/
├── app/
│   ├── globals.css       # Tailwind + custom styles
│   ├── layout.tsx        # Root layout avec Navbar
│   ├── page.tsx          # Page d'accueil éditoriale
│   ├── collections/page.tsx      # Catégories de produits
│   ├── products/[slug]/page.tsx # Détails produit
│   ├── cart/page.tsx     # Panier
│   └── checkout/page.tsx  # Checkout
```

## 🎯 Points Clés à Personnaliser

### Couleurs (src/app/globals.css)

```css
--color-matte-gold: #d4af37;    /* Or principal */
--color-bronze: #cd7f32;         /* Bronze secondaire */
--color-black: #0a0a0a;          /* Noir profond */
```

### Typographie (app/layout.tsx)

Déjà configuré avec Playfair Display et Inter.

### Stripe Setup

Installez Stripe dans le compte de développement.

## 📱 Responsive Design

Le site est entièrement responsive:
- Mobile-first approche
- Breakpoints adaptés aux mobiles, tablettes, desktop
- Nav mobile toggle inclus

## 🔍 Next.js Features

- App Router (Next.js 14)
- Server Components par défaut
- Image optimization intégrée
- Type-safe routes avec [slug] dynamic segments
