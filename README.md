# 📝 React Todo App — Dual Approach

A Todo application built with **React + TypeScript** that demonstrates two different architectural approaches to solving the same problem. Built as a learning project to understand state management patterns in React.

---

## 🚀 Live Demo

> Run locally — see setup instructions below.

---

## 📁 Project Structure

```
src/
├── App.tsx
├── components/
│   ├── Todo.tsx          # Approach 1 — useRef DOM manipulation
│   └── SirContext/
│       ├── ContextTodo.tsx   # Approach 2 — Context API + useState
│       ├── TodoContext.ts    # Shared context, types, and provider
│       ├── TodoForm.tsx      # Add todo form
│       └── TodoItem.tsx      # Individual todo item
```

---

## 🧠 Two Approaches Explained

### Approach 1 — `Todo.tsx` (useRef + Direct DOM)

Manages todo interactions by directly manipulating DOM elements using `useRef`. No external state libraries — just React hooks and refs.

**Key concepts used:**
- `useRef` to access and mutate DOM nodes directly
- `contentEditable` for inline editing
- Direct style manipulation for completed state
- `useState` for input and list management

```tsx
const handlecomplete =(idx:number)=>{
    const completed = !isChecked
       setIsChecking(completed)
       const h1ref = ref.current[idx];
     if (completed) {
        
        h1ref!.style.textDecoration = 'line-through';
        h1ref!.style.color = 'gray'; 
      } else {
        h1ref!.style.color='white';
        h1ref!.style.textDecoration = 'none';
      }
  }
```

**Tradeoff:** Simple and fast to write, but harder to scale. State lives in the DOM, not in React — making it harder to sync, persist, or test.

---

### Approach 2 — `ContextTodo.tsx` (Context API + localStorage)

A fully React-controlled approach using Context API to share state across components without prop drilling.

**Key concepts used:**
- `createContext` + `useContext` for global state
- `useEffect` for reading/writing to `localStorage`
- Typed context with TypeScript interfaces
- Componentized structure (`TodoForm`, `TodoItem`)

```tsx
const TodoContext = createContext<TodoContextType | null>(null);

// Effect 1: Load from localStorage on mount
useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos") || "[]");
  if (todos.length > 0) setTodos(todos);
}, []);

// Effect 2: Save to localStorage on every change
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```

**Tradeoff:** More boilerplate, but scalable, testable, and data persists on refresh.

---

## ⚙️ Tech Stack

| Tech | Purpose |
|------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Remix Icons | Icon library |
| localStorage | Data persistence (Approach 2) |

---

## 🛠️ Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/snowwhi/ToDo-typeScript.git

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## ✨ Features

- ✅ Add todos by pressing `Enter`
- ✅ Mark todos as complete (strike-through)
- ✅ Edit todos inline
- ✅ Delete todos
- ✅ Persist todos in localStorage (Approach 2)
- ✅ Fully typed with TypeScript

---

## 📚 What I Learned

- The difference between **DOM-driven** and **state-driven** UI
- How **Context API** solves prop drilling in component trees
- Why `useEffect` is used for side effects like localStorage
- How to type React events, refs, and context with TypeScript
- The importance of `import type` with `verbatimModuleSyntax`

---

## 🙌 Acknowledgements

Built as a self-learning project while exploring React + TypeScript patterns.

## Live Demo
   https://to-do-type-script-rdgw.vercel.app/
