# Design Guide - Smart Governance Portal

## Color Palette

### Primary Colors
```css
Primary Blue: #1a8ea1
Primary Dark: #167585
Primary Light: #4da7b6
```

### Secondary Colors
```css
Secondary Green: #66bb6a
Secondary Dark: #4caf50
Secondary Light: #81c784
```

### Status Colors
```css
High Priority (Danger): #f44336
Medium Priority (Warning): #ffc107
Low Priority (Success): #4caf50
```

### Neutral Colors
```css
Background: #fafafa (neutral-50)
Card Background: #ffffff (white)
Text Primary: #212121 (neutral-900)
Text Secondary: #757575 (neutral-600)
Border: #e0e0e0 (neutral-300)
```

## Typography Scale

| Element | Size | Weight | Line Height | Font Family |
|---------|------|--------|-------------|-------------|
| Display | 3rem (48px) | 700 | 1.2 | Poppins |
| Title | 2rem (32px) | 600 | 1.3 | Poppins |
| Subtitle | 1.5rem (24px) | 500 | 1.4 | Poppins |
| Body Large | 1.125rem (18px) | 400 | 1.6 | Inter |
| Body | 1rem (16px) | 400 | 1.5 | Inter |
| Body Small | 0.875rem (14px) | 400 | 1.4 | Inter |

## Component Specifications

### Buttons
- **Padding**: 12px 24px (py-3 px-6)
- **Border Radius**: 12px
- **Shadow**: Soft (0 2px 8px rgba(0,0,0,0.08))
- **Hover Shadow**: Medium (0 4px 16px rgba(0,0,0,0.12))
- **Transition**: 200ms

### Cards
- **Padding**: 24px (p-6)
- **Border Radius**: 16px
- **Shadow**: Soft
- **Background**: White
- **Hover**: Shadow increases to medium

### Badges
- **Padding**: 4px 12px (py-1 px-3)
- **Border Radius**: 9999px (rounded-full)
- **Border**: 1px solid matching color
- **Font Size**: 0.875rem (14px)
- **Font Weight**: 500

### Input Fields
- **Padding**: 12px 16px (py-3 px-4)
- **Border Radius**: 12px
- **Border**: 1px solid neutral-300
- **Focus Ring**: 2px solid primary-400
- **Font Size**: 1rem (16px)

### Priority Colors

#### High Priority (Red)
- Background: `bg-danger-100` (#ffebee)
- Text: `text-danger-700` (#c62828)
- Border: `border-danger-300` (#e57373)

#### Medium Priority (Amber)
- Background: `bg-warning-100` (#fff8e1)
- Text: `text-warning-700` (#ffa000)
- Border: `border-warning-300` (#ffd54f)

#### Low Priority (Green)
- Background: `bg-secondary-100` (#c8e6c9)
- Text: `text-secondary-700` (#2e7d32)
- Border: `border-secondary-300` (#a5d6a7)

## Spacing System

Uses Tailwind's default spacing scale:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

## Icon Guidelines

- **Size**: Standard 20px (h-5 w-5) for inline icons
- **Large Icons**: 48px (h-12 w-12) for feature highlights
- **Color**: Inherit from parent or use semantic colors
- **Library**: Lucide React

## Layout Patterns

### Container
- **Max Width**: 1280px (max-w-7xl)
- **Padding**: 16px mobile, 24px tablet, 32px desktop
- **Center**: Margin auto

### Grid Systems
- **1 Column**: Mobile (< 640px)
- **2 Columns**: Tablet (640px - 1024px)
- **3-4 Columns**: Desktop (> 1024px)

### Card Grids
- **Gap**: 24px (gap-6)
- **Responsive**: Auto-fit with min-width constraints

## Emergency Highlighting

Emergency reports use:
- **Border**: 4px solid danger-500 (left border)
- **Background**: danger-50 tint
- **Badge**: Always "High Priority" in red
- **Icon**: AlertTriangle in danger-500
- **Priority**: Auto-set to high

## AI Elements

### AI Detection Badge
- Shows 🤖 emoji prefix
- Label: "AI Detected: [Issue Type] – [Priority]"
- Example: "AI Detected: Flood Emergency – High Priority"

### Confidence Score
- Progress bar showing percentage
- Color: Primary blue
- Range: 0-100%
- Display: Below AI label

## Animation Guidelines

### Transitions
- **Duration**: 200ms for most interactions
- **Easing**: Default ease-in-out
- **Properties**: All (all)

### Loading States
- **Spinner**: Rotate animation
- **Pulse**: For active states
- **Progress Bar**: Width animation (500ms)

### Hover Effects
- **Shadow**: Increase from soft to medium
- **Color**: Slight darken on background
- **Scale**: None (for accessibility)

## Accessibility Standards

- **Minimum Touch Target**: 44x44px
- **Color Contrast**: WCAG AA compliant (4.5:1 minimum)
- **Focus Indicators**: 2px ring in primary color
- **Text Size**: Minimum 16px for body text
- **Interactive Elements**: Clear hover and focus states

## Mobile Considerations

- **Touch-Friendly**: Large tap targets
- **Form Inputs**: Full width on mobile
- **Navigation**: Collapsible menu
- **Images**: Responsive sizing
- **Typography**: Scales appropriately

## Government Branding

- **Logo**: Shield icon in primary blue
- **Header**: White background with subtle shadow
- **Footer**: Dark neutral (neutral-800) background
- **Professional Tone**: Clean, trustworthy, authoritative
- **No Cartoonish Elements**: Serious but approachable

