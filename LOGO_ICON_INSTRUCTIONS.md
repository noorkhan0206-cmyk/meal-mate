# MealMate Logo & App Icon Instructions

## 🎨 Logo Design

Your MealMate logo features:
- **Text**: "Mealmate." in bold font
- **Icon**: Fork and spoon in a rounded square
- **Colors**: Yellow to Blue gradient (#FFC107 → #5DADE2 → #2196F3)

## ✅ Implemented

### 1. Splash Screen Logo
The splash screen now displays:
- Custom SVG logo with fork & spoon icon
- Yellow-blue gradient background
- "Mealmate." text in gradient blue color
- Animated fade-in and scale effect

**Location**: `src/screens/SplashScreen.tsx`
**Component**: `src/components/MealMateLogo.tsx`

## 📱 App Icon Creation

To create the app icon with the yellow-blue gradient, follow these steps:

### Option 1: Using Online Tools (Easiest)

1. **Go to**: https://www.appicon.co/ or https://icon.kitchen/
2. **Design your icon**:
   - Background: Yellow to Blue gradient (#FFC107 → #2196F3)
   - Icon: Fork and spoon symbol (white)
   - Shape: Rounded square
3. **Generate** all required sizes
4. **Download** the icon pack
5. **Replace** the files in `src/assets/images/`:
   - `icon.png` (1024x1024)
   - `adaptive-icon.png` (1024x1024 for Android)
   - `favicon.png` (48x48 for web)
   - `splash-icon.png` (for splash screen)

### Option 2: Using Design Software

#### Figma/Sketch/Adobe Illustrator:
1. Create a 1024x1024 canvas
2. Add rounded rectangle (corner radius: 200px)
3. Apply gradient:
   - Start: #FFC107 (yellow) at top-left
   - End: #2196F3 (blue) at bottom-right
4. Add fork and spoon icons in white
5. Export as PNG at these sizes:
   - **iOS**: 1024x1024 (icon.png)
   - **Android**: 1024x1024 (adaptive-icon.png)
   - **Web**: 48x48 (favicon.png)

### Option 3: Using the SVG Component

The `MealMateLogo` component can be rendered at any size:

```tsx
import MealMateLogo from './src/components/MealMateLogo';

// Use in your app
<MealMateLogo size={100} showText={false} />
```

## 🎨 Color Palette

```
Yellow: #FFC107
Teal:   #5DADE2  
Blue:   #2196F3
White:  #FFFFFF (for icon symbols)
```

## 📐 Icon Specifications

### iOS
- **Size**: 1024x1024 px
- **Format**: PNG (no transparency)
- **Location**: `src/assets/images/icon.png`

### Android
- **Size**: 1024x1024 px
- **Format**: PNG
- **Background**: Set in app.json (currently white)
- **Location**: `src/assets/images/adaptive-icon.png`

### Web
- **Size**: 48x48 px (or 192x192 for PWA)
- **Format**: PNG
- **Location**: `src/assets/images/favicon.png`

## 🚀 Quick Setup

1. Create your icon using one of the methods above
2. Save the files to `src/assets/images/`
3. Update `app.json` if needed:
   ```json
   "android": {
     "adaptiveIcon": {
       "foregroundImage": "src/assets/images/adaptive-icon.png",
       "backgroundColor": "#FFC107"  // Yellow background
     }
   }
   ```
4. Run `expo prebuild` to regenerate native projects
5. Test on device/simulator

## 🎯 Current Implementation

The logo is currently implemented as:
- **SVG Component**: `src/components/MealMateLogo.tsx`
- **Gradient**: Yellow (#FFC107) → Blue (#2196F3)
- **Icon**: Fork and spoon in white
- **Background**: Rounded square with gradient fill

## 📝 Notes

- The logo component uses `react-native-svg` for vector graphics
- Gradient is applied via SVG LinearGradient
- Text uses blue color (#5DADE2) as fallback
- For true gradient text, install `@react-native-masked-view/masked-view`

## 🔄 To Update

If you want to change the logo:
1. Edit `src/components/MealMateLogo.tsx`
2. Modify the SVG paths for different icon shapes
3. Update gradient colors in the `LinearGradient` definition
4. Regenerate app icons using the new design
