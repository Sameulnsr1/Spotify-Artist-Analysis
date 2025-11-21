# Artist Performance Analytics Dashboard

**Layout Plan & Implementation Guide**

A professional React dashboard for visualizing Spotify artist analytics using Vite, Tailwind CSS, and Nivo charts.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Project Stack](#project-stack)
- [Layout Pattern](#layout-pattern)
- [Header Section](#header-section)
- [Metrics Section](#metrics-section)
- [Chart Sections](#chart-sections)
- [Footer Section](#footer-section)
- [Responsive Design](#responsive-design)
- [Visual Hierarchy](#visual-hierarchy)
- [Implementation Checklist](#implementation-checklist)
- [Technical Notes](#technical-notes)

---

## 🎯 Overview

This document outlines the complete structure for a professional artist analytics dashboard following **Pattern 1: Classic Executive Dashboard** with a **Split Header (Option C)** design optimized for Spotify artist data visualization.

### Complete Page Structure

1. **Split Header** (Title left, Form right - Option C)
2. **Two Equal-Width Metric Cards** (50/50 split)
3. **TrackGraph Card** (Full width, white background, padded)
4. **AlbumGraph Card** (Full width, white background, padded)
5. **Footer** (Simple attribution)

---

## 🛠️ Project Stack

| Technology        | Version | Purpose       |
| ----------------- | ------- | ------------- |
| React             | 19.1.1  | UI Framework  |
| Vite              | 7.1.2   | Build Tool    |
| Tailwind CSS      | 4.1.14  | Styling       |
| @nivo/bar         | 0.99.0  | Bar Charts    |
| @nivo/scatterplot | 0.99.0  | Scatter Plots |

**No TypeScript** - JavaScript only

---

## 🎨 Layout Pattern

### Visual Layout Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Artist Performance Analytics       [Enter Spotify ID...] [Submit] │
│  Comprehensive overview of          └─────────────────────────────┘ │
│  catalog performance                    Combined form unit          │
│                                         (~400-500px total width)    │
└─────────────────────────────────────────────────────────────────────┘
          ↑                                              ↑
    Left-aligned                                  Right-aligned
    Title + Subtitle                              Form controls


┌──────────────────────────────────┬──────────────────────────────────┐
│                                  │                                  │
│    📊 Total Tracks               │    📀 Total Albums               │
│                                  │                                  │
│    Total Tracks                  │    Total Albums                  │
│    288                           │    24                            │
│                                  │                                  │
│    [White card background]       │    [White card background]       │
│    [Subtle shadow]               │    [Subtle shadow]               │
│    [1.5rem padding]              │    [1.5rem padding]              │
│    [Rounded corners]             │    [Rounded corners]             │
│                                  │                                  │
│    (Exactly 50% width)           │    (Exactly 50% width)           │
│                                  │                                  │
└──────────────────────────────────┴──────────────────────────────────┘
        ↑──────────── 1.5rem gap ────────────↑


┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                         Tracks Per Album                            │
│                                                                     │
│    ┌───────────────────────────────────────────────────────────┐   │
│    │                                                           │   │
│    │                                                           │   │
│    │              [Bar Chart - Nivo]                          │   │
│    │              [700px height]                              │   │
│    │                                                           │   │
│    │                                                           │   │
│    │                                                           │   │
│    └───────────────────────────────────────────────────────────┘   │
│                                                                     │
│    [White card background, shadow, padding, rounded]                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                      Album Release Timeline                         │
│                                                                     │
│    ┌───────────────────────────────────────────────────────────┐   │
│    │                                                           │   │
│    │                                                           │   │
│    │              [Scatter Plot - Nivo]                       │   │
│    │              [700px height]                              │   │
│    │                                                           │   │
│    │                                                           │   │
│    │                                                           │   │
│    └───────────────────────────────────────────────────────────┘   │
│                                                                     │
│    [White card background, shadow, padding, rounded]                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────┐
│  Sam Nasir                                                          │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Header Section

### Layout Structure

**Split Design with Flexbox:**

- Layout: Flexbox with `space-between` (pushes left and right content apart)
- Vertical Alignment: Both sections centered relative to each other
- Background: White or `bg-slate-50`
- Border: Bottom border (1px solid `gray-200`) for separation
- Padding: Horizontal `2rem` (32px), Vertical `1.5rem` (24px)

### Header Layout Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│  [Padding: 2rem horizontal, 1.5rem vertical]                        │
│  [Background: white or bg-slate-50]                                 │
│  [Border-bottom: 1px solid gray-200]                                │
│                                                                     │
│  ┌─ LEFT SECTION ─────────────┐  ┌─ RIGHT SECTION ──────────────┐ │
│  │                             │  │                               │ │
│  │  Artist Performance         │  │  ┌──────────────┬─────────┐  │ │
│  │  Analytics                  │  │  │ Input Field  │ Submit  │  │ │
│  │  [text-4xl, font-bold]      │  │  │ [flexible]   │ [fixed] │  │ │
│  │                             │  │  └──────────────┴─────────┘  │ │
│  │  Comprehensive overview     │  │  Combined: 400-500px width   │ │
│  │  of catalog performance     │  │  Height: 2.5-3rem (40-48px)  │ │
│  │  [text-lg, text-gray-600]   │  │                               │ │
│  │                             │  │                               │ │
│  └─────────────────────────────┘  └───────────────────────────────┘ │
│   Vertical alignment: center       Vertical alignment: center      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Left Section (Title Area)

**Main Title:** "Artist Performance Analytics"

- Font size: `text-4xl` (2.25rem / 36px)
- Font weight: `font-bold`
- Color: `text-slate-900`

**Subtitle:** "Comprehensive overview of catalog performance"

- Font size: `text-lg` (1.125rem / 18px)
- Color: `text-slate-600`

### Right Section (Form Controls - Option C)

**Combined Form Unit:**

- Total width: 400-500px
- Height: 2.5-3rem (40-48px)
- Gap between input and button: `0.75rem` (12px)

**Input Field:**

- Placeholder: "Enter Spotify Artist ID"
- Width: Flexible (grows to fill available space)
- Border: `border border-gray-300`
- Border radius: `rounded-lg`
- Padding: `px-4 py-2`
- Focus state: `focus:outline-none focus:ring-2 focus:ring-blue-500`
- Placeholder color: `placeholder:text-gray-400`

**Submit Button:**

- Text: "Submit"
- Width: Fixed (80-120px)
- Background: `bg-blue-600 hover:bg-blue-700`
- Text color: `text-white`
- Font weight: `font-medium`
- Padding: `px-6 py-2`
- Border radius: `rounded-lg`
- Transition: `transition-colors`

---

## 📊 Metrics Section

### Container Properties

- **Layout:** CSS Grid with 2 columns (`grid grid-cols-2`)
- **Gap:** `gap-6` (1.5rem / 24px) between cards
- **Margin from header:** `mb-8` (2rem / 32px)
- **Responsive:** `grid-cols-1 md:grid-cols-2` (1 col mobile, 2 cols tablet+)

### Individual Card Specifications

**Dimensions:**

- Width: Exactly 50% of container (minus half the gap)
- Minimum height: 120-150px (for consistency)

**Styling:**

- Background: `bg-white`
- Shadow: `shadow-sm` (subtle depth)
- Border radius: `rounded-lg` (0.5rem)
- Padding: `p-6` (1.5rem / 24px all sides)

### Card Content Structure

Each card contains two text elements stacked vertically:

**Label (Top):**

- Text: "Total Tracks" or "Total Albums"
- Font size: `text-sm` (0.875rem / 14px)
- Font weight: `font-medium`
- Color: `text-gray-500`
- Margin bottom: `mb-2` (0.5rem / 8px)

**Number (Bottom):**

- Font size: `text-4xl` (2.25rem / 36px)
- Font weight: `font-bold`
- Color: `text-gray-900`

### Card Layout Diagram

```
┌────────────────────────────┬──────────────────────────┐
│  Padding: 1.5rem          │  Padding: 1.5rem         │
│  Background: white         │  Background: white       │
│  Shadow: sm                │  Shadow: sm              │
│                           │                          │
│  Total Tracks             │  Total Albums            │
│  [text-sm, gray-500]      │  [text-sm, gray-500]     │
│                           │                          │
│  288                      │  24                      │
│  [text-4xl, bold]         │  [text-4xl, bold]        │
│                           │                          │
└────────────────────────────┴──────────────────────────┘
      50% width                    50% width
          ↑──── 1.5rem gap ────↑
```

---

## 📈 Chart Sections

Both **TrackGraph** and **AlbumGraph** follow the same card container pattern.

### Card Container Properties

- Background: `bg-white`
- Shadow: `shadow-sm` (subtle depth)
- Border radius: `rounded-lg` (0.5rem)
- Padding: `p-6` (1.5rem / 24px all sides)
- Margin between sections: `mb-8` (2rem / 32px)

### Chart 1: TrackGraph (Bar Chart)

**Component:** `ResponsiveBar` from @nivo/bar

**Properties:**

- Title: "Tracks Per Album"
- Height: `700px` (fixed)
- Width: 100% of card interior
- Data Source: `tracksPerAlbum` from `useSpotifyContext`
- Current Styling: Gray bars (#9ca3af), rotated x-axis labels (-90°)

### Chart 2: AlbumGraph (Scatter Plot)

**Component:** `ResponsiveScatterPlot` from @nivo/scatterplot

**Properties:**

- Title: "Album Release Timeline"
- Height: `700px` (fixed)
- Width: 100% of card interior
- Data Source: `albumRelease` from `useSpotifyContext`
- X-Axis: Year (2000-2025)
- Y-Axis: Month (1-12, labeled as Jan-Dec)
- Current Styling: Gray nodes (#9ca3af), custom tooltip

### Chart Card Structure Diagram

```
┌───────────────────────────────────────────────────┐
│  Padding: 1.5rem                                  │
│  Background: white                                │
│  Shadow: sm                                       │
│  Border-radius: 0.5rem                            │
│                                                   │
│  ┌─ Optional Title ───────────────────────────┐  │
│  │  Tracks Per Album / Album Release Timeline │  │
│  │  [text-xl, font-semibold]                  │  │
│  └────────────────────────────────────────────┘  │
│                                                   │
│  ┌────────────────────────────────────────────┐  │
│  │                                            │  │
│  │                                            │  │
│  │      [Nivo Chart Component]                │  │
│  │      Height: 700px                         │  │
│  │      Width: 100% of interior               │  │
│  │                                            │  │
│  │                                            │  │
│  └────────────────────────────────────────────┘  │
│                                                   │
└───────────────────────────────────────────────────┘
```

---

## 🔖 Footer Section

**Simple attribution footer at the bottom of the page.**

### Footer Properties

- Content: "Sam Nasir"
- Margin from last chart: `mt-12` (3rem / 48px)
- Padding: `p-6` (1.5rem / 24px)
- Text alignment: Center or left-aligned
- Font size: `text-sm` (0.875rem / 14px)
- Color: `text-gray-500`

---

## 📱 Responsive Design

The dashboard adapts to three primary breakpoints for optimal viewing across devices.

### Desktop (1024px and above)

- **Header:** Split layout maintained (title left, form right)
- **Metrics:** 2 columns (50/50 split)
- **Charts:** Full width within max-width container
- **Container:** `max-w-7xl` (1280px) centered with `mx-auto`

### Tablet (768px - 1023px)

- **Header:** Split layout maintained (slightly tighter)
- **Metrics:** 2 columns (50/50 split)
- **Charts:** Full width
- **Container:** Full width with padding

### Mobile (< 768px)

**Header:** Stacked layout

- Title and subtitle on top (full width)
- Input field below title (full width or nearly full)
- Submit button below input or side-by-side

**Metrics:** Single column (`grid-cols-1`)

- Each card takes 100% width
- Stacked vertically

**Charts:** Full width

- Nivo charts are responsive by default

**Spacing:** Reduced padding throughout for screen space optimization

### Key Tailwind Responsive Classes

```css
/* Grid */
grid-cols-1 md:grid-cols-2

/* Flexbox */
flex-col md:flex-row

/* Spacing */
px-4 md:px-8

/* Container */
max-w-7xl mx-auto
```

### Mobile Layout Diagram

```
┌──────────────────────────────────┐
│  Artist Performance Analytics    │
│  Comprehensive overview...       │
├──────────────────────────────────┤
│  [Input Field................]   │
│  [Submit Button..............]   │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│  Total Tracks                    │
│  288                             │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│  Total Albums                    │
│  24                              │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│  [Chart 1 - Full Width]          │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│  [Chart 2 - Full Width]          │
└──────────────────────────────────┘
```

---

## 🎨 Visual Hierarchy

### Visual Weight (Largest to Smallest)

1. **Page Title** - `text-4xl` (2.25rem / 36px), `font-bold`
2. **Metric Numbers** - `text-4xl` (2.25rem / 36px), `font-bold`
3. **Charts** - Large visual elements, 700px height
4. **Subtitle** - `text-lg` (1.125rem / 18px), gray
5. **Metric Labels** - `text-sm` (0.875rem / 14px), gray
6. **Form Controls** - Medium size, standard height
7. **Footer** - `text-sm` (0.875rem / 14px), gray

### Spacing Scale

| Spacing Value  | Tailwind Class    | Usage                   |
| -------------- | ----------------- | ----------------------- |
| 3rem (48px)    | `mt-12` / `mb-12` | Large section breaks    |
| 2rem (32px)    | `mt-8` / `mb-8`   | Between major sections  |
| 1.5rem (24px)  | `p-6` / `gap-6`   | Card padding, grid gaps |
| 1rem (16px)    | `mt-4` / `mb-4`   | Between related items   |
| 0.75rem (12px) | `gap-3`           | Input/button spacing    |
| 0.5rem (8px)   | `mb-2`            | Label to number spacing |

### Color Palette

| Element          | Color                          | Tailwind Class                                 |
| ---------------- | ------------------------------ | ---------------------------------------------- |
| Page Background  | Gradient slate-50 to slate-100 | `bg-gradient-to-br from-slate-50 to-slate-100` |
| Card Backgrounds | White                          | `bg-white`                                     |
| Primary Text     | Dark gray                      | `text-gray-900` / `text-slate-900`             |
| Secondary Text   | Medium gray                    | `text-gray-600` / `text-slate-600`             |
| Tertiary Text    | Light gray                     | `text-gray-500`                                |
| Primary Button   | Blue                           | `bg-blue-600 hover:bg-blue-700`                |
| Chart Elements   | Gray                           | `#9ca3af` (currently used)                     |
| Borders          | Light gray                     | `border-gray-300` / `border-slate-200`         |

---

## ✅ Implementation Checklist

### Phase 1: Structure (HTML/JSX Layout)

- [ ] Create split header with flexbox (`space-between`)
- [ ] Add form element with input + submit button (Option C)
- [ ] Wrap `TotalTracks` and `TotalAlbums` in card containers
- [ ] Create grid container for metrics (`grid-cols-2`)
- [ ] Wrap `TrackGraph` in card container with padding
- [ ] Wrap `AlbumGraph` in card container with padding
- [ ] Add footer element
- [ ] Test layout structure without styling

### Phase 2: Styling (Tailwind Classes)

- [ ] Add white backgrounds to all cards (`bg-white`)
- [ ] Add subtle shadows (`shadow-sm`)
- [ ] Add rounded corners to cards (`rounded-lg`)
- [ ] Style page background gradient
- [ ] Apply padding to all cards (`p-6`)
- [ ] Style metric labels (`text-sm`, `text-gray-500`, `font-medium`)
- [ ] Style metric numbers (`text-4xl`, `font-bold`, `text-gray-900`)
- [ ] Style header title (`text-4xl`, `font-bold`)
- [ ] Style header subtitle (`text-lg`, `text-gray-600`)
- [ ] Style input field (border, `rounded-lg`, focus states)
- [ ] Style submit button (`bg-blue-600`, hover states, `rounded-lg`)
- [ ] Add proper spacing between sections (`mb-8`)
- [ ] Add grid gap between metric cards (`gap-6`)

### Phase 3: Responsive Behavior

- [ ] Test layout on mobile viewport (< 768px)
- [ ] Add responsive grid classes (`grid-cols-1 md:grid-cols-2`)
- [ ] Test header stacking on mobile (`flex-col md:flex-row`)
- [ ] Adjust padding for mobile (`px-4 md:px-8`)
- [ ] Test on tablet viewport (768px - 1023px)
- [ ] Test on desktop viewport (1024px+)
- [ ] Add max-width container (`max-w-7xl mx-auto`)

### Phase 4: Interactivity (Future Implementation)

- [ ] Add form submission handler
- [ ] Connect input to artist ID state
- [ ] Implement loading states
- [ ] Add error handling for invalid IDs
- [ ] Add validation before API calls
- [ ] Implement success feedback
- [ ] Add smooth transitions for data updates

---

## 🔧 Technical Notes

### Current Components Status

| Component           | Status      | Notes                                      |
| ------------------- | ----------- | ------------------------------------------ |
| `TotalTracks`       | ✓ Built     | Needs card wrapper styling                 |
| `TotalAlbums`       | ✓ Built     | Needs card wrapper styling                 |
| `TrackGraph`        | ✓ Built     | Bar chart with Nivo, needs card wrapper    |
| `AlbumGraph`        | ✓ Built     | Scatter plot with Nivo, needs card wrapper |
| `useSpotifyContext` | ✓ Built     | Provides all necessary data                |
| Header Form         | ✗ Not built | Needs implementation                       |

### State Management Considerations

When implementing the artist ID submission feature, consider:

- **Where will the input value live?** (Local state in header vs. Context)
- **How to trigger re-fetch** in `useSpotifyAlbum` when ID changes?
- **What loading state indicators** to show (skeleton, spinner, etc.)?
- **How to handle errors** (invalid ID, API failures, rate limits)?
- **Whether to clear current data** immediately or wait for new data?

### Accessibility Recommendations

- Use semantic HTML elements (`header`, `main`, `section`, `article`, `footer`)
- Ensure form has proper labels (can use `aria-label` if visual label not desired)
- Add focus states to all interactive elements
- Provide loading state announcements for screen readers
- Ensure sufficient color contrast (WCAG AA minimum)
- Test keyboard navigation (tab order should be logical)

---

## 🎯 Key Design Principles

**Clarity:** Clear visual hierarchy guides user attention from title → metrics → detailed charts

**Balance:** Equal-width metric cards create visual symmetry and imply equal importance

**Consistency:** Uniform spacing, shadows, and border radius throughout

**Professionalism:** White cards on gradient background, subtle shadows, generous padding

**Responsiveness:** Thoughtful adaptation from desktop to mobile viewports

**Scalability:** Structure accommodates future additions (more metrics, filters, comparisons)

---

## 🚀 Next Steps

1. Implement the structural layout (Phase 1 of checklist)
2. Apply Tailwind styling to match specifications (Phase 2)
3. Test responsive behavior across breakpoints (Phase 3)
4. Plan state management for artist ID submission (Phase 4)
5. Enhance with loading states and error handling
6. Consider additional features (date filters, export, etc.)

---

## 📝 Notes

This layout plan provides a comprehensive blueprint for implementing a professional artist analytics dashboard. The design prioritizes clarity, scannability, and professional aesthetics while maintaining flexibility for future enhancements.

**Created for:** Sam Nasir  
**Project:** Artist Performance Analytics (React 19 + Vite + Tailwind CSS)  
**Pattern:** Classic Executive Dashboard with Split Header (Option C)
