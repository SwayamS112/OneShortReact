# 🎯 Project Notes – Sheryians Coding School  

Welcome to my learning journey 🚀.  
This repo contains **React concepts, Tailwind styling, API integration, and state management techniques** I practiced while building projects.  

##🚀 Tech Stack

Frontend: React.js, Tailwind CSS

State Management: React Hooks, Context API

API Calls: Axios

Routing: React Router
---

## 📌 Topics Covered  

### 🔹 Basics of Event Handling  
Event handling makes apps **interactive**.  
- React provides special props like `onClick`, `onChange`, `onSubmit`.  
- Helps respond to user actions (clicks, typing, form submissions).  

### 🛠️ Code Example  
✅ Example:  
```jsx
<button onClick={() => alert("Button Clicked!")}>Click Me</button>

---

### 🎨 Tailwind CSS Basics  
Tailwind makes styling **faster** with **utility-first classes**.  
- Instead of writing CSS, we directly add classes.  

### 🛠️ Code Example    

```html
<div class="flex p-4 bg-blue-500 text-white rounded-lg">
  Hello Tailwind
</div>
```

---

### 📝 📝 Form Handling & Two-Way Binding

Forms are used to collect user input.

Form Handling: Helps manage and control input values.

Two-Way Binding: Data flows both ways – from UI → State and from State → UI. 

UI Input  ⟶  State  ⟶  Re-render
   ↑                         ↓
   └──────────────Back────────┘

### 🛠️ Code Example  
✅ Example:

```jsx
const [name, setName] = useState("");

<input 
  type="text" 
  value={name} 
  onChange={(e) => setName(e.target.value)} 
/>
<p>Hello, {name}</p>
```
---

### 📦 Prop Drilling & Mapping  
- **Prop Drilling:** Passing data down through multiple components.  
- **Using `.map()`:** Loop through data and pass props to multiple cards/components.  

[ App Component ]
        │
        ▼
[ Parent ] ---> passes props ---> [ Child ] ---> passes props ---> [ Grandchild ]

### 🛠️ Code Example  
```jsx
{users.map((user) => (
  <Card 
  key={user.id} 
  name={user.name}
  age={user.age} />
))}
```
---


## 🌐 API Integration with Axios

APIs act like 🍽️ waiters in a restaurant:

Frontend (you) orders food.

API (waiter) passes order to backend (chef).

Backend prepares data (food).

API delivers response back to you.

Axios → Library for API calls.

useEffect → Runs code on mount/unmount (React lifecycle).

Lorem Picsum → Used for random image API.

---

Think of an API like a waiter 🍽️ –
It takes your request from the customer (frontend) to the chef (backend) and brings back the food (data).

Using Lorem Picsum
 for fake image API.

using lorum picsum for fake api
axios is a tool which help in CALLING the API

Using USE-EFFECT => is used to run the function inside it again and again 

it is also used for life cycle of the element (like element is for how much time like element when will be mounted and when it will be unmounted)

### 🛠️ Code Example  
✅ Example:
```jsx
const [data, setData] = useState([]);

const getData = async () => {
  const res = await axios.get("https://picsum.photos/v2/list?page=2&limit=5");
  setData(res.data);
};

useEffect(() => {
  getData();
}, []);
```
---


### ⚡ How We Used It  
- Used **[Lorem Picsum](https://picsum.photos/)** to fetch random images 📸  
- Used **Axios** for easy API calls 🔄  
- Managed with **React Hooks (`useState`, `useEffect`)**  

---

## 🛣️ React Routes

 due to react routes i have made app.jsx and app2.jsx and due to routing i have made a route "/" for app.jsx file to learn 

### 🛠️ Code Example  
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

## 🌍 Context API -> used to centralised the data 

The Context API is used for centralized state management.

Avoids prop drilling by sharing data globally.

Great for user data, themes, authentication, etc.

The Context API is a feature in React that allows you to share data across components without passing props manually at every level (avoiding “prop drilling”).

const UserContext = createContext();

```jsx
<UserContext.Provider value={user}>
  <Navbar />
  <Profile />
</UserContext.Provider>
```