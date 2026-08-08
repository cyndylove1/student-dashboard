# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```


## Product Improvement Challenge

If this product were to be used by 50,000 students, I would make the following improvements:

### 1. Connect the dashboard to a backend API

**Why it matters:**  
The current dashboard uses frontend/mock data. I would connect the frontend to a REST API so that student information can be fetched dynamically from the backend. This would allow each student to see their own courses, assignments, attendance, GPA, and other relevant information.

**How I would implement it:**  
I would integrate the frontend with a REST API and fetch the authenticated student's information after login. I would use Axios for API communication and React Query for managing server-side data, including loading and error states.

**Trade-off:**  
This introduces a dependency on the backend and requires handling API errors, loading states, and network failures. However, it would make the dashboard dynamic and suitable for real users.


### 2. Add student registration and email verification

**Why it matters:**  
I would add a sign-up flow so students can create individual accounts. After registration, students would verify their email before being allowed to log in. This would allow the application to associate each student's courses, assignments, attendance, and other information with their account.

**How I would implement it:**  
I would create a sign-up page, email verification flow, authentication API, and protected dashboard routes. After successful registration, a verification email would be sent to the student. Once verified, the student would be able to log in and access their personalized dashboard.

**Trade-off:**  
This adds complexity because it requires authentication, email verification, protected routes, and secure session management. However, it provides a more secure and personalized experience.

---

### 3. Add a homepage/landing page

**Why it matters:**  
I would add a homepage that explains what the platform is, who it is for, and what students can do with it. This gives new users context before they sign up or log in.

**How I would implement it:**  
The homepage would include an introduction to the platform, its key features, benefits to students, information about how it works, and clear sign-up and login calls-to-action.

**Trade-off:**  
This adds another page that needs to be designed and maintained, but it would improve onboarding and help new users understand the purpose of the platform before accessing the dashboard.