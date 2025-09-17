# 🎯 Project Notes – Sheryians Coding School  

---

## 📌 Topics Covered  

### 🔹 Basics of Event Handling  
Event handling is used to make apps **interactive**.  
- Handles user actions like **clicks, typing, form submit, etc.**  
- Example handlers: `onClick`, `onChange`, `onSubmit`.  

---

### 🎨 Tailwind CSS Basics  
Tailwind makes styling **faster** with **utility-first classes**.  
- Instead of writing CSS, we directly add classes.  
- Example:  

```html
<div class="flex p-4 bg-blue-500 text-white rounded-lg">
  Hello Tailwind
</div>

---

### 📝 📝 Form Handling & Two-Way Binding

Forms are used to collect user input.

Form Handling: Helps manage and control input values.

Two-Way Binding: Data flows both ways – from UI → State and from State → UI. 

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
     │  Re-render  │
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

---


## 🌐 API Integration with Axios  

APIs are like **🍽️ waiters in a restaurant** –  
➡️ You (Frontend) tell the waiter what you want.  
➡️ The waiter (API) asks the chef (Backend).  
➡️ The chef prepares the food (Data).  
➡️ The waiter delivers it back to you.  

---

Think of an API like a waiter 🍽️ –
It takes your request from the customer (frontend) to the chef (backend) and brings back the food (data).

Using Lorem Picsum
 for fake image API.

using lorum picsum for fake api
axios is a tool which help in CALLING the API

Using USE-EFFECT => is used to run the function inside it again and again 

it is also used for life cycle of the element (like element is for how much time like element when will be mounted and when it will be unmounted)

---


### ⚡ How We Used It  
- Used **[Lorem Picsum](https://picsum.photos/)** to fetch random images 📸  
- Used **Axios** for easy API calls 🔄  
- Managed with **React Hooks (`useState`, `useEffect`)**  

---

### 🛠️ Code Example  

```jsx
// Fetching data using Axios
const [data, setData] = useState([]);

const getData = async () => {
  const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=5');
  setData(response.data);
};

// Runs once when component mounts
useEffect(() => {
  getData();
}, []);
