
# Pravith Kumar J – AI/ML Portfolio

> A full-stack, interactive portfolio built with Next.js, TypeScript, and Tailwind CSS. Features advanced UI, a custom ChatBot, and modular architecture for easy expansion. Designed for professionals in AI/ML, software engineering, and data science.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Features](#features)
- [File-by-File Breakdown](#file-by-file-breakdown)
- [Customization Guide](#customization-guide)
- [Setup & Usage](#setup--usage)
- [Deployment](#deployment)
- [License](#license)

---

## Project Overview

This portfolio demonstrates:

- Personal branding and professional information
- Interactive Q&A ChatBot (AI-powered)
- Modern, animated UI/UX
- Responsive design for all devices
- Modular, scalable codebase

---

## Architecture

**Tech Stack:**
- Next.js 13+ (App Directory)
- TypeScript, C#
- Tailwind CSS (with custom gradients)
- React Icons
- Markdown rendering (for ChatBot answers)

**Structure:**
```
my-protfolio/
├── public/                # SVG assets
├── src/
│   └── app/
│       ├── bot-qa.json    # ChatBot Q&A pairs
│       ├── ChatBot.tsx    # ChatBot component
│       ├── favicon.ico
│       ├── globals.css    # Global styles
│       ├── layout.tsx     # App layout
│       └── page.tsx       # Main page (all sections)
├── package.json           # Scripts & dependencies
├── tsconfig.json          # TypeScript config
├── next.config.ts         # Next.js config
├── postcss.config.mjs     # PostCSS config
├── eslint.config.mjs      # ESLint config
└── README.md              # Documentation
```

---

## Features

- **Animated Multi-Section Homepage:**
	- Home, About, Skills, Experience, Projects, Publications, Contact
	- Advanced scroll-triggered animations and section highlighting
- **Custom ChatBot:**
	- Floating widget, instant answers about profile, skills (TypeScript, C#, etc.), projects, contact
	- Loads Q&A from `bot-qa.json`, supports markdown, links, lists
- **SVG Graphics:**
	- Custom icons for branding and sections
- **Global Styles:**
	- Tailwind CSS with custom gradients and palette
- **Accessibility & Performance:**
	- Responsive, fast, and SEO-friendly

---

## File-by-File Breakdown

### `src/app/page.tsx`
- Main entry point for the portfolio UI
- Imports icons for skills, contact, awards, etc.
- Defines all major sections (home, about, skills, experience, projects, publications, contact)
- Implements scroll-based section highlighting and timeline animations
- Integrates the ChatBot component

### `src/app/ChatBot.tsx`
- Floating chatbot widget
- Uses React state and hooks for open/close, message history, input
- Loads Q&A pairs from `bot-qa.json`
- Renders markdown answers with custom styles
- Handles user input and bot responses

### `src/app/bot-qa.json`
- Structured Q&A pairs for the ChatBot
- Covers: about, skills, experience, projects, education, publications, awards, certifications, contact, hobbies
- Answers use markdown for formatting, links, lists

### `src/app/layout.tsx`
- Root layout for the app
- Sets up global font (Inter) and smooth scrolling
- Wraps all pages in a consistent layout

### `src/app/globals.css`
- Global styles using Tailwind CSS
- Custom color palette and gradients for professional look
- Responsive design, typography, and utility classes

### `public/`
- SVG assets for icons and illustrations
- Used for branding and section visuals

### Config Files
- `next.config.ts`: Next.js configuration
- `tsconfig.json`: TypeScript settings
- `eslint.config.mjs`: Linting rules
- `postcss.config.mjs`: PostCSS plugins

---

## Customization Guide

- **Edit Main Content:**
	- Update `src/app/page.tsx` for sections, text, and layout
- **ChatBot Q&A:**
	- Add/edit Q&A pairs in `src/app/bot-qa.json`
- **SVG Assets:**
	- Replace or add icons in `public/`
- **Styling:**
	- Modify `src/app/globals.css` for colors, gradients, fonts
- **Metadata:**
	- Update `src/app/layout.tsx` for page title/description

---

## Setup & Usage

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation
```bash
git clone https://github.com/IamPravith/my-protfolio.git
cd my-protfolio
npm install # or yarn/pnpm/bun install
```

### Running Locally
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Visit [http://localhost:3000](http://localhost:3000)

### Scripts
- `dev` – Start development server
- `build` – Build for production
- `start` – Start production server
- `lint` – Run ESLint

---

## Deployment

Deploy on [Vercel](https://vercel.com/) or any platform supporting Next.js:
1. Push code to GitHub
2. Import repo into Vercel
3. Configure build settings (default: `npm run build`)
4. Set environment variables if needed
5. Deploy and share your live portfolio

See [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying)

---

## License

MIT License. See [LICENSE](./LICENSE) for details.
---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Customization](#customization)
- [Deployment](#deployment)
- [License](#license)

---

## Overview

This portfolio demonstrates:

- Personal branding and professional information
- Interactive chatbot (Q&A)
- Modern UI/UX with custom SVG assets
- Responsive design for all devices
- Fast performance using Next.js app directory

---

## Features

- **Next.js 13+ App Directory**: Uses the latest Next.js features for routing and layouts
- **TypeScript**: Type-safe codebase for reliability
- **Custom ChatBot**: Interactive Q&A powered by `bot-qa.json` and `ChatBot.tsx`
- **SVG Graphics**: Custom icons and illustrations in `public/`
- **Global Styles**: Centralized styling via `globals.css`
- **Optimized Fonts**: Uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for performance
- **Easy Customization**: Modular structure for quick updates

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org)
- **Languages**: TypeScript, C#
- **Styling**: CSS (with PostCSS)
- **Icons/Graphics**: SVG
- **Package Manager**: npm, yarn, pnpm, or bun

---

## Project Structure

```
my-protfolio/
├── public/                # Static assets (SVGs, icons)
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   └── app/
│       ├── bot-qa.json    # ChatBot Q&A data
│       ├── ChatBot.tsx    # ChatBot component
│       ├── favicon.ico
│       ├── globals.css    # Global styles
│       ├── layout.tsx     # App layout
│       └── page.tsx       # Main page
├── package.json           # Project metadata & scripts
├── tsconfig.json          # TypeScript config
├── next.config.ts         # Next.js config
├── postcss.config.mjs     # PostCSS config
├── eslint.config.mjs      # ESLint config
└── README.md              # Project documentation
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/IamPravith/my-protfolio.git
cd my-protfolio
npm install # or yarn install, pnpm install, bun install
```

### Running Locally

Start the development server:

```bash
npm run dev
# or

# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
- `lint` - Run ESLint

---

## Customization

- **Edit Content**: Update `src/app/page.tsx` for main content
- **ChatBot**: Modify `src/app/bot-qa.json` and `src/app/ChatBot.tsx`
- **Assets**: Replace or add SVGs in `public/`
- **Styles**: Edit `src/app/globals.css`

---

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform supporting Next.js:

1. Push your code to GitHub
2. Import your repo into Vercel
3. Configure build settings (default: `npm run build`)
4. Set environment variables if needed
5. Deploy and share your live portfolio

For more, see [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying)

---

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
