# 🎨 MealMate Component Library

## Overview
A comprehensive, reusable component library for the MealMate app following clean code principles and best practices.

---

## 📦 Shared Components

### 1. **IconButton**
Reusable icon button with variants.

**Props:**
- `iconName`: Icon name from Ionicons
- `onPress`: Click handler
- `size`: Icon size (default: 24)
- `color`: Icon color
- `backgroundColor`: Button background
- `variant`: 'default' | 'primary' | 'danger'

**Usage:**
```tsx
<IconButton
  iconName="heart"
  onPress={handlePress}
  variant="primary"
/>
```

**Used in:**
- All screen headers
- Navigation bars
- Action buttons

---

### 2. **Card**
Container component with shadow and rounded corners.

**Props:**
- `children`: React nodes
- `backgroundColor`: Card background (default: '#FFFFFF')
- `padding`: Inner padding (default: 22)
- `borderRadius`: Corner radius (default: 20)

**Usage:**
```tsx
<Card backgroundColor={colors.card} padding={20}>
  <Text>Content</Text>
</Card>
```

**Used in:**
- Settings screen
- Welcome screen features
- Meal cards

---

### 3. **ScreenHeader**
Standardized header with back button and action icons.

**Props:**
- `onBackPress`: Back button handler
- `actions`: Array of header actions
- `backgroundColor`: Header background
- `showBack`: Show/hide back button
- `leftComponent`: Custom left component

**Usage:**
```tsx
<ScreenHeader
  onBackPress={goBack}
  actions={[
    { iconName: 'settings', onPress: handleSettings, variant: 'primary' }
  ]}
  backgroundColor={colors.card}
/>
```

**Used in:**
- Settings
- AddNewMeal
- FavoriteScreen
- WeeklyPlanner

---

### 4. **PrimaryButton**
Main action button with icon support.

**Props:**
- `label`: Button text
- `onPress`: Click handler
- `iconName`: Optional icon
- `backgroundColor`: Button color (default: '#5DADE2')
- `disabled`: Disable state
- `fullWidth`: Full width button

**Usage:**
```tsx
<PrimaryButton
  label="Save Meal"
  iconName="checkmark"
  onPress={handleSave}
  fullWidth
/>
```

**Used in:**
- Welcome screen
- Settings
- AddNewMeal
- All forms

---

### 5. **PageTitle**
Page title with optional icon and subtitle.

**Props:**
- `title`: Main title text
- `subtitle`: Optional subtitle
- `iconName`: Optional icon
- `iconColor`: Icon color
- `titleColor`: Title text color
- `subtitleColor`: Subtitle text color

**Usage:**
```tsx
<PageTitle
  title="Settings"
  subtitle="Customize your experience"
  iconName="settings-outline"
  titleColor={colors.text}
/>
```

**Used in:**
- All main screens
- Section headers

---

### 6. **FeatureCard**
Feature showcase card with icon.

**Props:**
- `title`: Feature title
- `description`: Feature description
- `iconName`: Icon name
- `iconColor`: Icon color
- `iconLibrary`: 'Ionicons' | 'MaterialCommunityIcons'
- `width`: Card width

**Usage:**
```tsx
<FeatureCard
  title="Weekly Planner"
  description="Organize your meals"
  iconName="calendar-outline"
  iconColor="#5DADE2"
/>
```

**Used in:**
- Welcome screen
- Feature showcases

---

### 7. **SettingItem**
Setting row with switch toggle.

**Props:**
- `title`: Setting name
- `description`: Setting description
- `iconName`: Icon name
- `value`: Switch state
- `onValueChange`: Toggle handler
- `titleColor`: Title color
- `descriptionColor`: Description color

**Usage:**
```tsx
<SettingItem
  title="Dark Mode"
  description="Toggle dark theme"
  iconName="moon-outline"
  value={isDark}
  onValueChange={toggleTheme}
/>
```

**Used in:**
- Settings screen
- Preference screens

---

### 8. **InfoRow**
Information display row (label + value).

**Props:**
- `label`: Label text
- `value`: Value text
- `labelColor`: Label color
- `valueColor`: Value color

**Usage:**
```tsx
<InfoRow
  label="Version:"
  value="1.0.0"
  labelColor={colors.text}
/>
```

**Used in:**
- Settings (About section)
- Info displays

---

### 9. **Divider**
Horizontal divider line.

**Props:**
- `color`: Line color (default: '#f0f0f0')
- `height`: Line height (default: 1)
- `marginVertical`: Vertical margin (default: 16)

**Usage:**
```tsx
<Divider color={colors.border} />
```

**Used in:**
- Settings
- List separators
- Section dividers

---

### 10. **InputField**
Text input with label and validation.

**Props:**
- `label`: Input label
- `value`: Input value
- `onChangeText`: Change handler
- `required`: Required field indicator
- `helperText`: Helper text below input
- `error`: Error message
- All TextInput props

**Usage:**
```tsx
<InputField
  label="Meal Name"
  value={mealName}
  onChangeText={setMealName}
  required
  helperText="Enter a descriptive name"
  error={errors.mealName}
/>
```

**Used in:**
- AddNewMeal
- All forms

---

### 11. **MealCard**
Meal display card with image and favorite button.

**Props:**
- `name`: Meal name
- `image`: Image URL
- `isFavorite`: Favorite state
- `onPress`: Card click handler
- `onFavoritePress`: Favorite button handler
- `backgroundColor`: Card background
- `textColor`: Text color

**Usage:**
```tsx
<MealCard
  name="Spaghetti Carbonara"
  image="https://..."
  isFavorite={true}
  onPress={handleMealPress}
  onFavoritePress={toggleFavorite}
/>
```

**Used in:**
- FavoriteScreen
- Meal lists
- Recipe displays

---

## 🎣 Custom Hooks

### 1. **useScreenNavigation**
Centralized navigation hook.

**Returns:**
- `goBack()`
- `navigateToWeeklyPlanner()`
- `navigateToAddMeal()`
- `navigateToFavorites()`
- `navigateToSettings()`
- `navigateToWelcome()`
- `navigateToHome()`

**Usage:**
```tsx
const { navigateToSettings, goBack } = useScreenNavigation();
```

---

### 2. **useCommonStyles**
Theme-aware colors and styles.

**Returns:**
- `isDark`: Dark mode state
- `theme`: Theme object
- `colors`: Color palette object

**Usage:**
```tsx
const { isDark, colors } = useCommonStyles();
```

---

### 3. **useWeeklyPlannerNavigation**
Weekly planner specific navigation.

**Returns:**
- Navigation functions
- Alert handlers

---

### 4. **useWeeklyPlannerStyles**
Weekly planner dynamic styles.

**Returns:**
- `isDark`: Dark mode state
- `dynamicStyles`: Theme-based styles

---

## 🎨 Color System

### Light Theme
```typescript
{
  background: '#FFF5F7',
  card: '#FFFFFF',
  text: '#2C3E50',
  textSecondary: '#7F8C8D',
  border: '#f0f0f0',
  primary: '#5DADE2',
  success: '#48C9B0',
  danger: '#FF5C58',
  warning: '#FFB6C1',
}
```

### Dark Theme
```typescript
{
  background: '#1A1A2E',
  card: '#16213E',
  text: '#FFFFFF',
  textSecondary: '#BDC3C7',
  border: '#2C3E50',
  primary: '#5DADE2',
  success: '#48C9B0',
  danger: '#FF5C58',
  warning: '#FFB6C1',
}
```

---

## 📁 File Structure

```
src/
├── components/
│   ├── shared/
│   │   ├── IconButton.tsx
│   │   ├── Card.tsx
│   │   ├── ScreenHeader.tsx
│   │   ├── PrimaryButton.tsx
│   │   ├── PageTitle.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── SettingItem.tsx
│   │   ├── InfoRow.tsx
│   │   ├── Divider.tsx
│   │   ├── InputField.tsx
│   │   ├── MealCard.tsx
│   │   └── index.ts
│   └── WeeklyPlanner/
│       ├── Header.tsx
│       ├── TitleSection.tsx
│       ├── DayCard.tsx
│       ├── FloatingActionButton.tsx
│       └── index.ts
├── hooks/
│   ├── useScreenNavigation.ts
│   ├── useCommonStyles.ts
│   ├── useWeeklyPlannerNavigation.ts
│   └── useWeeklyPlannerStyles.ts
└── screens/
    ├── WelcomeScreen.refactored.tsx
    ├── Settings.refactored.tsx
    ├── WeeklyPlannerScreen.tsx (refactored)
    └── ...
```

---

## ✅ Benefits

### **Reusability**
- Components used across multiple screens
- Consistent UI/UX
- Less code duplication

### **Maintainability**
- Single source of truth
- Easy to update
- Clear component boundaries

### **Scalability**
- Easy to add new features
- Modular architecture
- Team-friendly

### **Type Safety**
- Full TypeScript support
- IntelliSense support
- Compile-time error checking

### **Theme Support**
- Dark/Light mode ready
- Consistent theming
- Easy color management

---

## 🚀 Usage Examples

### **Complete Screen Example**
```tsx
import React from 'react';
import { View, ScrollView } from 'react-native';
import {
  ScreenHeader,
  PageTitle,
  Card,
  PrimaryButton,
} from '../components/shared';
import { useScreenNavigation } from '../hooks/useScreenNavigation';
import { useCommonStyles } from '../hooks/useCommonStyles';

const MyScreen: React.FC = () => {
  const { goBack } = useScreenNavigation();
  const { colors } = useCommonStyles();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScreenHeader
        onBackPress={goBack}
        actions={[
          { iconName: 'settings', onPress: () => {} }
        ]}
      />
      
      <ScrollView>
        <PageTitle
          title="My Screen"
          subtitle="Description"
          titleColor={colors.text}
        />
        
        <Card backgroundColor={colors.card}>
          {/* Content */}
        </Card>
        
        <PrimaryButton
          label="Save"
          onPress={() => {}}
        />
      </ScrollView>
    </View>
  );
};
```

---

## 📊 Component Usage Matrix

| Component | Welcome | Settings | WeeklyPlanner | AddNewMeal | Favorites |
|-----------|---------|----------|---------------|------------|-----------|
| IconButton | ✅ | ✅ | ✅ | ✅ | ✅ |
| Card | ✅ | ✅ | ✅ | ❌ | ✅ |
| ScreenHeader | ❌ | ✅ | ✅ | ✅ | ✅ |
| PrimaryButton | ✅ | ✅ | ✅ | ✅ | ❌ |
| PageTitle | ❌ | ✅ | ✅ | ✅ | ✅ |
| FeatureCard | ✅ | ❌ | ❌ | ❌ | ❌ |
| SettingItem | ❌ | ✅ | ❌ | ❌ | ❌ |
| InputField | ❌ | ❌ | ❌ | ✅ | ❌ |
| MealCard | ❌ | ❌ | ❌ | ❌ | ✅ |

---

## 🎯 Next Steps

1. **Refactor remaining screens** using shared components
2. **Add unit tests** for each component
3. **Create Storybook** for component documentation
4. **Add accessibility** features (a11y)
5. **Performance optimization** with React.memo
6. **Add animations** with Reanimated

---

## 📝 Contributing

When creating new components:
1. Follow existing patterns
2. Add TypeScript interfaces
3. Include JSDoc comments
4. Make it reusable
5. Add to shared index
6. Update this documentation

---

This component library provides a solid foundation for building consistent, maintainable, and scalable React Native applications! 🚀
