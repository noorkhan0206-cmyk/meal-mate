### Project Template: Component-Driven Architecture Guide (React Native + Expo)

This repository is a production-ready template designed to teach and enforce clean code, component-driven architecture, and scalable project structure for React Native (Expo) apps.

It includes:

- Native Stack + Bottom Tabs navigation
- Atomic UI layers (atoms, molecules, UI)
- Typed Redux store scaffolding (actions, selectors, types)
- Centralized themes (colors, fonts, icons, utils)
- Shared hooks, services, and utilities
- Example assets and bootstrapping

Use this guide to build full-fledged apps with consistency across teams and student projects.

---

## Quick Start

1. Install dependencies

```sh
npx expo install
```

2. Start the dev server

```sh
npx expo start
```

3. Run on simulator/device

```sh
npm run ios
# or
npm run android
```

---

## High-Level Architecture

```
src/
  App.tsx                       # App root composition
  WithSplashScreen.tsx          # Splash wrapper
  navigation/                   # App navigators
  screens/                      # Screen modules (feature-level)
  components/                   # Reusable UI (atoms, molecules, ui)
  hooks/                        # Reusable logic hooks
  services/                     # IO/services (e.g., storage, network)
  store/                        # Redux store (actions, selectors, types)
  theme/                        # Design system: colors, fonts, icons, utils
  interfaces/                   # Cross-cutting interfaces (e.g., error)
  assets/                       # Images/fonts
```

- **Separation of concerns**: UI, state, navigation, theme, and services live in clear domains.
- **Component-driven**: Build small, reusable components (atoms → molecules → screens).
- **Type-safety**: Prefer explicit types and selector functions over ad-hoc state access.
- **Testability**: Logic in hooks/services is easy to unit test; UI remains declarative.

---

## Screen Module Conventions

Each screen is a self-contained module with its own folder. The folder name, screen component name, and navigator route name should match.

- Folder name: `LoginScreen`
- Component name: `LoginScreen`
- Route name: `LoginScreen`
- Files required in each screen folder:
  - `index.tsx`: The screen component (UI + composition only)
  - `logic.ts`: Screen-specific logic hooks and handlers
  - `style.ts`: Styles using your theme (no inline styles in `index.tsx`)
  - `types.ts`: Component props, local types, and constants

Although the template currently shows flat files under `src/screens` (e.g., `Explore.tsx`, `Home.tsx`), students must organize new screens using the folder pattern below.

### Example: Login Screen Structure

```
src/screens/LoginScreen/
  index.tsx
  logic.ts
  style.ts
  types.ts
```

#### index.tsx (UI and composition only)

```tsx
import React from 'react';
import { View } from 'react-native';
import { useLoginLogic } from './logic';
import { styles } from './style';
import { LoginScreenProps } from './types';
import { Button } from '../../components/molecules/Button';
import { CustomTextInput } from '../../components/atoms/CustomTextInput';

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  const { email, password, isSubmitting, setEmail, setPassword, submit } =
    useLoginLogic();

  return (
    <View style={styles.container}>
      <CustomTextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <CustomTextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Login" onPress={submit} loading={isSubmitting} />
    </View>
  );
};
```

#### logic.ts (state and handlers)

```ts
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth/actions';

export function useLoginLogic() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = useCallback(async () => {
    if (!email || !password) return;
    setIsSubmitting(true);
    try {
      await dispatch(authActions.loginRequest({ email, password }));
    } finally {
      setIsSubmitting(false);
    }
  }, [dispatch, email, password]);

  return { email, password, isSubmitting, setEmail, setPassword, submit };
}
```

#### style.ts (no inline styles in index.tsx)

```ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    gap: 12,
  },
});
```

#### types.ts

```ts
export type LoginScreenProps = Record<string, never>;
```

### Screen Rules

- Folder, component, and route names must be identical (e.g., `LoginScreen`).
- `index.tsx` must only orchestrate UI; put logic in `logic.ts` and styles in `style.ts`.
- Avoid inline styles; prefer `StyleSheet` objects and theme variables.
- Define props and constants in `types.ts` for clarity and reusability.
- Keep side-effects isolated (use hooks/services), never inside render directly.

---

## Component-Driven Architecture (Atoms, Molecules, UI)

Shared components live under `src/components` and are categorized by reusability and complexity.

```
src/components/
  atoms/            # Smallest, reusable UI primitives
  molecules/        # Composed components from atoms
  ui/               # Platform-specific or app-level UI helpers
```

### Atoms

Examples: `CustomTextInput`, `Icon`, `Loading`, `WebViewPopover`, `ZoomableImage`, `ScrollViewWithViewAboveKeyboard`.

Rules:

- Single responsibility; no knowledge of business logic.
- Controlled via explicit props; type all props in `types.ts`.
- Each atom may have `index.tsx`, `ui.tsx` (if split UI), `logic.ts`, `style.ts`, `types.ts`, and `helpers.ts`.

### Molecules

Examples: `Button`, `Modal`, `BottomSheetPopup`, `Header`, `ErrorModal`, `ImageFilePicker`, `SelectDropdown`, `Switch`, `ThemeButton`.

Rules:

- Compose 2+ atoms; expose a minimal, typed API.
- Keep state minimal; delegate complex logic to hooks in `logic.ts`.
- Co-locate styles in `style.ts`; avoid inline styling.

### UI

Examples: `IconSymbol.tsx`, `TabBarBackground.tsx` (and iOS variants).

Rules:

- App-level styling utilities, platform decorations, or wrappers used by navigation.
- Keep pure and presentational; no business logic.

### Component Naming and Files

- Folder, component, and export names should match (e.g., `Button`).
- Prefer `index.tsx` as the main export file; co-locate `style.ts`, `logic.ts`, `types.ts`.
- Add `subcomponents/` inside a molecule when it contains internal parts (e.g., `ButtonLoading`).

---

## Redux Store Structure

Store files live under `src/store` with one folder per domain (e.g., `auth`).

```
src/store/
  index.ts                 # Root store setup (configureStore)
  types.d.ts               # Global store-related type declarations
  utils.ts                 # Store utilities (e.g., typed hooks)
  auth/
    actions.ts             # Action creators / thunks
    index.ts               # Reducer (and slice if using RTK)
    selectors.ts           # Selector functions
    type.ts                # Domain types
```

Recommended patterns:

- Use Redux Toolkit (RTK) patterns in `index.ts` for domain reducers and actions (if present); otherwise keep traditional reducer + actions style consistent.
- Define action creators in `actions.ts` (plain or thunks/sagas, depending on your middleware).
- Access state only through `selectors.ts` to centralize state shape knowledge.
- Export domain-specific types from `type.ts` and reuse across screens/components.

Example usage in a screen logic file:

```ts
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth/actions';
import { selectIsAuthenticated } from '../../store/auth/selectors';

const dispatch = useDispatch();
const isAuthed = useSelector(selectIsAuthenticated);

dispatch(authActions.loginRequest({ email, password }));
```

Typed hooks:

- Add typed versions of `useDispatch`/`useSelector` in `src/store/utils.ts` and reuse them app-wide.

---

## Navigation

Navigator setup lives in `src/navigation/index.tsx` and is bootstrapped from `src/App.tsx`.

Rules:

- Each screen must be registered with a matching route name (e.g., `LoginScreen`).
- Organize stacks and tabs per feature; avoid deeply nested navigators without need.
- Screen options (titles, headers) stay in navigation layer, not inside screen components.

---

## Theming and Design System

Design tokens and theming live under `src/theme`.

- `colors.ts`: Color palette and semantic tokens
- `fonts.ts`: Font families, sizes, weights
- `icons.ts`: Icon registry/config
- `types.ts`: Theme types
- `utils.ts`: Helpers to access theme values
- `themeContext.tsx`: Theme provider + hooks

Rules:

- Never hardcode colors/fonts in components; import from theme.
- Keep all global visual constants in `src/theme` and reference them in styles.

---

## Hooks, Services, and Utilities

### Hooks (`src/hooks`)

Provided examples: `useFonts`, `useTheme`, `useThemeStyles`, `useGetTheme`, `useKeyboard`.

Rules:

- Hooks encapsulate reusable logic; they must be pure and testable.
- Keep IO and side effects inside services; hooks orchestrate them.

### Services (`src/services`)

Provided example: `localAsyncStorage` with typed wrappers over AsyncStorage.

Rules:

- One folder per service; export a typed API from `index.tsx`.
- No UI imports in services. Services are platform/IO boundaries.

### Utilities (`src/store/utils.ts`, plus future `src/utils`)

- Shared helpers that do not belong to a single domain.
- Keep pure and side-effect free.

---

## Error Handling

- Use `interfaces/error.ts` for cross-cutting error shapes.
- Provide graceful fallbacks using components like `ErrorFallback` and `ErrorModal`.
- Avoid throwing raw errors to UI; map to user-friendly messages at the boundary.

---

## Naming, Style, and Clean Code Rules

- File/folder names are PascalCase for components/screens (`LoginScreen`, `Button`).
- Hooks are camelCase prefixed with `use` (`useLoginLogic`, `useThemeStyles`).
- Types and interfaces live in `types.ts` co-located with their component/screen.
- Prefer composition over inheritance; keep functions short and descriptive.
- Do not nest more than 2–3 levels; prefer early returns.
- No inline business logic inside JSX; move to `logic.ts` or hooks.
- No inline styles in screen/component `index.tsx`; move to `style.ts`.
- Keep comments only for non-obvious rationale or constraints; avoid noise.

TypeScript:

- Type all public props and function signatures. Avoid `any`.
- Create domain types in `type.ts` and reuse across modules.

---

## Step-by-Step: Add a New Screen

1. Create folder `src/screens/ProfileScreen` with files: `index.tsx`, `logic.ts`, `style.ts`, `types.ts`.
2. Implement presentational UI in `index.tsx`; state/handlers in `logic.ts`; styles in `style.ts`; props in `types.ts`.
3. Register `ProfileScreen` in the navigator (`src/navigation/index.tsx`).
4. Reuse atoms/molecules from `src/components` where possible; create new ones if truly reusable.
5. If state is global, add a domain under `src/store` (e.g., `profile/`) with `index.ts`, `actions.ts`, `selectors.ts`, `type.ts`.
6. Keep IO in `src/services`; call from logic via hooks.
7. Use theme tokens from `src/theme` in `style.ts`.

---

## Step-by-Step: Add a New Component

1. Decide the level: atom or molecule.
2. Create a folder under `src/components/atoms` or `src/components/molecules` named after the component (e.g., `Tag`).
3. Add `index.tsx`, `style.ts`, `types.ts` and optionally `logic.ts`, `ui.tsx`, `helpers.ts`.
4. Keep the public API minimal and typed; prefer controlled inputs.
5. Add story/usage examples in screen `index.tsx` or separate playground.

---

## Developer Checklist (PR-Ready)

- Screen/component folder created with required files and matching names
- No inline styles; all styles in `style.ts` using theme tokens
- Logic moved out of JSX into `logic.ts` or hooks
- Props and domain types defined in `types.ts`; no `any`
- Redux changes include actions, reducer/slice, selectors, and types
- Navigation updated and titles/options set at navigator level
- Services used for IO; hooks orchestrate them; no UI in services
- Lint passes; code is formatted and easy to read

---

## Notes for Students

- Follow the folder/file conventions strictly. Consistency is more important than personal preference in team projects.
- Prefer reusing atoms/molecules before creating new ones. If you need a new primitive, add it as an atom.
- Keep functions small and focused. Extract logic early when components grow.
- If you are unsure where code belongs, ask: “Is this UI, logic, state, theme, or service?” and place accordingly.

---

## Useful References

- React Navigation: `https://reactnavigation.org/`
- Expo: `https://docs.expo.dev/`
