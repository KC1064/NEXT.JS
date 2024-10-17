# Learning Next.js

<details>
<summary>Day-01</summary>

## What is NEXT.JS

Next.js is an **open-source web development framework** for building React-based applications with **server-side rendering (SSR)** and **static site generation (SSG)**, making it SEO-friendly and performant.


## Types of Websites with Next.js

1. **Pure Static:**
   - Fast and SEO-friendly  
   - Harder to manage for dynamic content  

2. **Single Page Application (SPA):**  
   - Fast, dynamic UI  
   - Poor SEO due to slower initial page loads  

3. **Server-Side Rendered (SSR):**  
   - Fast page loads, dynamic UI, and great SEO  

4. **Static Site Generation (SSG):**  
   - Pre-generated static files  
   - Extremely fast and SEO-friendly  



## Key Features of Next.js

1. **File-Based Routing** – Create routes using the folder and file structure.  
2. **API Routes** – Build APIs within the Next.js app without needing a separate backend.  
3. **React Server Components** – Combine SSR with React's modern rendering features.  
4. **Data Fetching** – Support for `getStaticProps`, `getServerSideProps`, and `getStaticPaths`.  
5. **Environment Variables** – Securely manage sensitive keys and configurations.  
6. **Customizable `<Head>` tags** – Dynamically set meta tags and page titles.  
7. **Image Optimization** – Automatically optimize images for faster loads.  
8. **Automatic Code Splitting** – Only load what’s required on each page.  
9. **TypeScript Support** – Build safer apps with TypeScript.  
10. **CSS and Tailwind CSS Support** – Native integration for modern styling.  
11. **Fast Refresh** – Instant feedback during development.  



## Important Concepts

- **Buzzwords in Next.js:**  
  - Server-Side Rendering (SSR)  
  - SEO-Friendly  
  - Built-in Routing / Folder-Based Routing  

- **Nested Routing:**  
  - Organize routes hierarchically for complex applications.  

- **Custom 404 Pages:**  
  - Define a unique 404 page for handling invalid routes.  

- **Layout Components:**  
  - Shared UI elements (like headers and footers) can be defined using layout files.  


## Naming Conventions in Next.js

1. **Pages Directory:**  
   - All files inside the `app/` folder become routes.  
     Example: `app/page.js` becomes `home`, `app/about/page.js` becomes `about` and `app/login/page.js` becomes `/login`.  

2. **Dynamic Routes:**  
   - Use square brackets `[ ]` to create dynamic routes.  
     Example: `app/product/[id].js` maps to `/product/:id`.  

3. **API Routes:**  
   - Defined inside `app/api/` to handle backend logic.  
     Example: `app/api/hello.js` becomes `/api/hello`.  

4. **Custom 404 Page:**  
   - A `not-found.js` file inside the `app/` folder will serve as the Not Found page.  


## File Structure

```plaintext
app/
├── page.js            // Home Page
├── about/
│   └── page.js        // About Page
├── login/
│   └── page.js        // Login Page
├── not-found.js       // Custom 404 Page
├── layout.js          // Layout Component
└── public/fonts/      // Custom Fonts
```


## Code Snippets

### **Home Page (`page.js`):**

```javascript
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Hello I am The Homepage</h1>
      <div className="w-max gap-4 flex mt-2">
        <Link href="/">
          <button className="h-max w-max px-2 py-1 bg-blue-500 rounded-lg">Home</button>
        </Link>
        <Link href="about">
          <button className="h-max w-max px-2 py-1 bg-blue-500 rounded-lg">About</button>
        </Link>
        <Link href="login">
          <button className="h-max w-max px-2 py-1 bg-blue-500 rounded-lg">Login</button>
        </Link>
      </div>
    </div>
  );
}
```

---

### **About Page (`about/page.js`):**

```javascript
import Link from "next/link";

export default function About() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Hello I am The About page</h1>
      <div className="w-max gap-4 flex mt-2">
        <Link href="/">
          <button className="h-max w-max px-2 py-1 bg-blue-500 rounded-lg">Home</button>
        </Link>
        <Link href="about">
          <button className="h-max w-max px-2 py-1 bg-blue-500 rounded-lg">Login</button>
        </Link>
        <Link href="login">
          <button className="h-max w-max px-2 py-1 bg-blue-500 rounded-lg">About</button>
        </Link>
      </div>
    </div>
  );
}
```

---

### **Login Page (`login/page.js`):**

```javascript
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Hello I am The Login page</h1>
      <div className="w-max gap-4 flex mt-2">
        <Link href="/">
          <button className="h-max w-max px-2 py-1 bg-blue-500 rounded-lg">Home</button>
        </Link>
        <Link href="about">
          <button className="h-max w-max px-2 py-1 bg-blue-500 rounded-lg">Login</button>
        </Link>
        <Link href="login">
          <button className="h-max w-max px-2 py-1 bg-blue-500 rounded-lg">About</button>
        </Link>
      </div>
    </div>
  );
}
```

---

### **Custom Layout (`layout.js`):**

```javascript
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex items-center justify-center flex-col h-screen`}
      >
        <h1>Saying Hello from Layout.js</h1>
        <br />
        <h1>{children}</h1>
      </body>
    </html>
  );
}
```

---

## Set Up Next.js Project

```bash
npx create-next-app@latest
```

</details>
<details>
<summary>Day-02</summary>
</details>
