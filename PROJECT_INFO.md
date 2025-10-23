# AI Marketplace Web App

A modern, Amazon-style AI marketplace frontend built with React and Tailwind CSS.

## Features

- **Left Sidebar Navigation**: Easy access to Tools, AI Tools, Categories, Subscriptions, Partners, Featured sections, and more
- **Hero Banner**: Prominent bundle subscription offer with 20% savings
- **Partner Exclusive Section**: Highlighted early access offers from partners
- **Featured Independent Grips**: Grid display of AI apps with colorful icons
- **Featured Independent Apps**: Showcase for coder projects and applications
- **Search Functionality**: Global search bar in the header
- **Modern UI**: Clean design with orange accent colors, rounded corners, and smooth transitions

## Tech Stack

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Create React App** - Build tooling

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx          # Left navigation sidebar
│   ├── Header.jsx           # Top header with search
│   ├── HeroBanner.jsx       # Bundle subscription banner
│   ├── PartnerExclusive.jsx # Partner offers section
│   ├── FeaturedGrips.jsx    # Grid of AI apps
│   └── FeaturedApps.jsx     # Featured coder projects
├── App.js                   # Main app component
└── index.css                # Global styles with Tailwind

## Color Palette

- **Primary Orange**: #f97316 (with shades from 50-900)
- **Background**: #f9fafb (gray-50)
- **Text**: Gray scale for hierarchy
- **Accents**: Gradient combinations for visual interest

## Components Overview

### Sidebar
- Fixed left navigation
- Icon-based menu items
- Active state highlighting
- Scrollable for long menus

### Header
- Sticky top position
- Search bar with icon
- Notification bell with badge
- User profile icon

### HeroBanner
- Gradient background (orange)
- Large, bold typography
- Mock dashboard preview
- Carousel indicators

### PartnerExclusive
- Partner logos
- Call-to-action button
- Clean card layout

### FeaturedGrips
- 6-column grid (responsive)
- Colorful app icons
- Hover effects
- Category labels

### FeaturedApps
- 3-column grid (responsive)
- Large preview cards
- Coder profiles and dashboard previews
- Overlay text on images

## Customization

To customize colors, edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color scale
      },
    },
  },
}
```

## Future Enhancements

- Add React Router for navigation
- Implement real API integration
- Add filtering and sorting
- User authentication
- Shopping cart functionality
- Responsive mobile menu
- Dark mode support
