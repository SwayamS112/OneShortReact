# 🎯 Project Notes – Sheryians Coding School  

---

## 📌 Topics Covered  

### 🔹 Basics of Event Handling  
- Learn how to handle user interactions (clicks, inputs, etc.)  
- Example: `onClick`, `onChange`, etc.  


---

### 🎨 Tailwind CSS Basics  
- Quick styling with utility-first classes  
- Example: `flex`, `p-4`, `bg-blue-500`, etc.  

---

### 📝 Form Handling & Two-Way Binding  
- Managing user input in forms  
- **Two-Way Binding:**  
  Data flows **both ways** ➡️ from **UI to state** and from **state to UI**.  


     ┌─────────────┐
     │   UI Input  │
     └──────┬──────┘
            │
            ▼
     ┌─────────────┐
     │   State     │
     └──────┬──────┘
            │
            ▼
     ┌─────────────┐
     │   Rerender  │
     └─────────────┘


---

### 📦 Prop Drilling & Mapping  
- **Prop Drilling:** Passing data down through multiple components.  
- **Using `.map()`:** Loop through data and pass props to multiple cards/components.  

[ App Component ]
        │
        ▼
[ Parent ] ---> passes props ---> [ Child ] ---> passes props ---> [ Grandchild ]


```jsx
{users.map((user) => (
  <Card 
  key={user.id} 
  name={user.name}
  age={user.age} />
))}

