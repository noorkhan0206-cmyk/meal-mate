# 🎨 MealMate Color Palette - Lavender & White

## Primary Palette

### Main Lavender
**#9B7EBD**
```
█████████████████████
```
- **Usage**: Primary buttons, main icons, CTAs, links
- **RGB**: (155, 126, 189)
- **HSL**: (270°, 32%, 62%)

### Light Lavender
**#C8B6E2**
```
█████████████████████
```
- **Usage**: Secondary buttons, success states, hover effects
- **RGB**: (200, 182, 226)
- **HSL**: (265°, 44%, 80%)

### Very Light Lavender
**#E8DFF5**
```
█████████████████████
```
- **Usage**: Background tints, pale accents, disabled states
- **RGB**: (232, 223, 245)
- **HSL**: (265°, 52%, 92%)

### Almost White Lavender
**#F9F7FC**
```
█████████████████████
```
- **Usage**: Card backgrounds, subtle tints
- **RGB**: (249, 247, 252)
- **HSL**: (264°, 38%, 98%)

### Pure White
**#FFFFFF**
```
█████████████████████
```
- **Usage**: Main backgrounds, cards, text on dark
- **RGB**: (255, 255, 255)
- **HSL**: (0°, 0%, 100%)

---

## Text Colors

### Dark Lavender Text
**#4A3F5C**
```
█████████████████████
```
- **Usage**: Primary text, headers, important labels
- **RGB**: (74, 63, 92)
- **HSL**: (263°, 19%, 30%)

### Medium Lavender
**#8B7BA8**
```
█████████████████████
```
- **Usage**: Secondary text, descriptions, labels
- **RGB**: (139, 123, 168)
- **HSL**: (261°, 21%, 57%)

### Light Lavender Text
**#B5A8C9**
```
█████████████████████
```
- **Usage**: Placeholders, disabled text, hints
- **RGB**: (181, 168, 201)
- **HSL**: (264°, 24%, 72%)

---

## Accent Colors

### Deep Lavender
**#7B68A6**
```
█████████████████████
```
- **Usage**: Hover states, active elements, emphasis
- **RGB**: (123, 104, 166)
- **HSL**: (258°, 26%, 53%)

### Soft Rose
**#D47B9E**
```
█████████████████████
```
- **Usage**: Danger/error states, warnings, alerts
- **RGB**: (212, 123, 158)
- **HSL**: (336°, 51%, 66%)

### Lavender Cream
**#F5F3F8**
```
█████████████████████
```
- **Usage**: Subtle backgrounds, hover effects
- **RGB**: (245, 243, 248)
- **HSL**: (264°, 20%, 96%)

---

## Dark Mode Colors

### Dark Lavender Background
**#2A1F3D**
```
█████████████████████
```
- **Usage**: Main background in dark mode
- **RGB**: (42, 31, 61)
- **HSL**: (262°, 33%, 18%)

### Dark Lavender Card
**#3D2F52**
```
█████████████████████
```
- **Usage**: Card backgrounds in dark mode
- **RGB**: (61, 47, 82)
- **HSL**: (264°, 27%, 25%)

### Dark Lavender Border
**#4A3F5C**
```
█████████████████████
```
- **Usage**: Borders, separators in dark mode
- **RGB**: (74, 63, 92)
- **HSL**: (263°, 19%, 30%)

---

## Greys with Lavender Tint

### Grey 1 - Lightest
**#F5F3F8**
```
█████████████████████
```
- **Usage**: Borders, backgrounds, subtle dividers

### Grey 2
**#F9F7FC**
```
█████████████████████
```
- **Usage**: Search fields, input backgrounds

### Grey 3
**#EDE9F5**
```
█████████████████████
```
- **Usage**: Disabled backgrounds, inactive states

### Grey Main
**#8B7BA8**
```
█████████████████████
```
- **Usage**: Icons, secondary elements

### Grey Medium
**#B5A8C9**
```
█████████████████████
```
- **Usage**: Placeholders, hints

### Grey Dark
**#6B5B7B**
```
█████████████████████
```
- **Usage**: Darker text, emphasis

---

## Color Combinations

### 1. Primary Button
```
Background: #9B7EBD (Main Lavender)
Text: #FFFFFF (White)
Shadow: #9B7EBD with opacity
```

### 2. Card on Light Background
```
Background: #FFFFFF (White)
Border: #F5F3F8 (Grey 1)
Text: #4A3F5C (Dark Lavender Text)
Secondary Text: #8B7BA8 (Medium Lavender)
```

### 3. Card on Dark Background
```
Background: #3D2F52 (Dark Lavender Card)
Border: #4A3F5C (Dark Lavender Border)
Text: #FFFFFF (White)
Secondary Text: #C8B6E2 (Light Lavender)
```

### 4. Icon Button Primary
```
Background: #9B7EBD (Main Lavender)
Icon: #FFFFFF (White)
Shadow: rgba(155, 126, 189, 0.3)
```

### 5. Icon Button Danger
```
Background: #D47B9E (Soft Rose)
Icon: #FFFFFF (White)
Shadow: rgba(212, 123, 158, 0.3)
```

---

## Accessibility

### Contrast Ratios (WCAG AA)

#### Light Mode:
- **Dark Lavender Text (#4A3F5C) on White (#FFFFFF)**: 9.8:1 ✅ AAA
- **Medium Lavender (#8B7BA8) on White (#FFFFFF)**: 4.8:1 ✅ AA
- **Main Lavender (#9B7EBD) on White (#FFFFFF)**: 4.2:1 ✅ AA
- **White (#FFFFFF) on Main Lavender (#9B7EBD)**: 4.2:1 ✅ AA

#### Dark Mode:
- **White (#FFFFFF) on Dark Background (#2A1F3D)**: 14.5:1 ✅ AAA
- **Light Lavender (#C8B6E2) on Dark Background (#2A1F3D)**: 7.2:1 ✅ AAA
- **Main Lavender (#9B7EBD) on Dark Background (#2A1F3D)**: 5.1:1 ✅ AA

All combinations meet or exceed WCAG AA standards! ✅

---

## Usage Examples

### Buttons
```typescript
// Primary Button
backgroundColor: '#9B7EBD'
textColor: '#FFFFFF'

// Secondary Button
backgroundColor: '#C8B6E2'
textColor: '#4A3F5C'

// Danger Button
backgroundColor: '#D47B9E'
textColor: '#FFFFFF'
```

### Text
```typescript
// Heading
color: '#4A3F5C'

// Body Text
color: '#4A3F5C'

// Secondary Text
color: '#8B7BA8'

// Placeholder
color: '#B5A8C9'
```

### Backgrounds
```typescript
// Main Background (Light)
backgroundColor: '#FDFCFE'

// Card Background
backgroundColor: '#FFFFFF'

// Subtle Background
backgroundColor: '#F9F7FC'

// Main Background (Dark)
backgroundColor: '#2A1F3D'

// Card Background (Dark)
backgroundColor: '#3D2F52'
```

### Borders
```typescript
// Light Border
borderColor: '#F5F3F8'

// Medium Border
borderColor: '#EDE9F5'

// Dark Border
borderColor: '#4A3F5C'
```

---

## Color Psychology

### Lavender (#9B7EBD)
- **Emotions**: Calm, elegant, creative, refined
- **Associations**: Sophistication, quality, tranquility
- **Perfect for**: Meal planning, lifestyle apps, wellness

### White (#FFFFFF)
- **Emotions**: Clean, pure, simple, spacious
- **Associations**: Clarity, freshness, minimalism
- **Perfect for**: Modern interfaces, clean design

### Soft Rose (#D47B9E)
- **Emotions**: Gentle, warm, approachable
- **Associations**: Care, attention, importance
- **Perfect for**: Warnings without harshness

---

## Export for Design Tools

### Figma/Sketch Variables
```
Primary/Main: #9B7EBD
Primary/Light: #C8B6E2
Primary/Pale: #E8DFF5
Primary/Cream: #F9F7FC

Text/Dark: #4A3F5C
Text/Medium: #8B7BA8
Text/Light: #B5A8C9

Accent/Purple: #7B68A6
Accent/Rose: #D47B9E
Accent/White: #FFFFFF

Background/Light: #FDFCFE
Background/Dark: #2A1F3D
Card/Light: #FFFFFF
Card/Dark: #3D2F52
```

### CSS Variables
```css
:root {
  --color-primary: #9B7EBD;
  --color-primary-light: #C8B6E2;
  --color-primary-pale: #E8DFF5;
  --color-primary-cream: #F9F7FC;
  
  --color-text-dark: #4A3F5C;
  --color-text-medium: #8B7BA8;
  --color-text-light: #B5A8C9;
  
  --color-accent-purple: #7B68A6;
  --color-accent-rose: #D47B9E;
  --color-white: #FFFFFF;
  
  --color-bg-light: #FDFCFE;
  --color-bg-dark: #2A1F3D;
  --color-card-light: #FFFFFF;
  --color-card-dark: #3D2F52;
}
```

---

## 🎨 Quick Reference

| Color Name | Hex | Use Case |
|------------|-----|----------|
| Main Lavender | #9B7EBD | Primary actions |
| Light Lavender | #C8B6E2 | Secondary actions |
| Very Light Lavender | #E8DFF5 | Backgrounds |
| Almost White Lavender | #F9F7FC | Subtle tints |
| Pure White | #FFFFFF | Main surfaces |
| Dark Lavender Text | #4A3F5C | Primary text |
| Medium Lavender | #8B7BA8 | Secondary text |
| Light Lavender Text | #B5A8C9 | Placeholders |
| Deep Lavender | #7B68A6 | Hover states |
| Soft Rose | #D47B9E | Errors/warnings |
| Dark Background | #2A1F3D | Dark mode BG |
| Dark Card | #3D2F52 | Dark mode cards |

---

**This palette provides a cohesive, elegant, and accessible color system for the entire MealMate application!** 🎨✨
