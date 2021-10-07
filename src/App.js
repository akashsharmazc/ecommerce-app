import {React,useState,useEffect} from 'react';
import './App.css';
import Card from "./Components/Cards"
function App() {
  const [loading,setloading]=useState(false);
  const [search,setsearch]=useState("");
  const [fruits,setfruits]=useState(false);
  const [vegetables,setvegetables]=useState(false);

  const [data,setdata]=useState([{ 
    
    "name":"Potato", 
    
    "id":1, 
    
    "price":30, 
    
    "available":1, 
    
    "vendor":"Himachal Pvt Ltd", 
    
    "category":"Vegtables" ,
    "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    "link":"data:image/jpeg;base64,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",
    "quantity":0
    
    }, 
    
    { 
    
    "name":"Banana", 
    
    "id":2, 
    
    "price":50, 
    
    "available":1, 
    
    "category":"Fruits",
    
    "vendor": "Organic farms",
    
    "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    ,"link":"https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg",
    "quantity":0
    
    
    }, 
    
    { 
    
    "name":"Drumsticks", 
    
    "id":3, 
    
    "price":20, 
    
    "available":0, 
    
    "category":"Vegetables", 
    
    "vendor":"Mallikarjuna farms" ,
    "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    ,"link":"https://specialtyproduce.com/sppics/11503.png",
    "quantity":0
    
    }, 
    
    { 
    
    "name":"Orange", 
    
    "id":4, 
    
    "price":25, 
    
    "available":1, 
    
    "vendor":"Nagpur farms", 
    
    "category":"Fruits"  ,
    "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    ,"link":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREhUREhIVFhUXFRYXFhcVFRUVGhUVFRgYFxUXGBUYHSggGBolHRgYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGysmHyItLS0uLS0tLS0tLS0tKy0tLS0yLS0tLS0rLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQBAgUGB//EADQQAAIBAgMGBQIGAQUAAAAAAAABAgMRBCExBRJBUWFxgZGhsfAG0RMiQsHh8WIHIzJykv/EABoBAQACAwEAAAAAAAAAAAAAAAACAwQFBgH/xAAtEQEAAgIBAwEGBQUAAAAAAAAAAQIDEQQSITEFIkFRcYGxE2GRwfAUMjNC4f/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAGLgZBRx204UtXd8lb15HLl9URs7Qz/wCy+xhZvUONhtNb37x85+y6nHyXjdYeiB5qj9U3edGVuakv3sX6P1BQlk5OL/yX7q57j9Q42SdVvH2+6VuLmr5r+/2dYEVHERnnGSfZpkplxMT3hjz2AAegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGwFzEpWNKlRJNt2S1Z57aGPdV7qyh79/sYXO5+PiU3bvM+I+P/FuHDbLPbwv4rbMVlBb3Xh4czkYzH1JK8n4LTyRFpktTScb6nI8r1DkcjfVbUfCO0fz5tri4+OnucSpiJtucXJSi7JWjuy43s076lelgsXUrKVecXFRyjbR87WyeunM70ob0klovSxmq873KK8q9KdFYiIWWwxa25mVOc/w1mr837ZcEkVp1FJ5HQxMU1c5coW7XK8c7nc+WVj1pOqkk7xenJ5+B0MJt2vD9TkuUvzeuvqU4pGJxLcXLyY59mZgtSl+1o29XgfqWnKyqLcb46x89Ud2Mk81ofLalQu7O23Uw7ye9HjBvLw5M6Dh+r2nVc36tdn9OjW8f6PowKezNpU8RDfg+6esXyaLh0FbRaNx4am1ZrOpAAevAAAAAAAAAAAAAAAAAAAAAAAAGGatmWczbeL3Ibq1l6R4v9irkZ64MU5LeISx0m9orDn7Tx34j3Y/8E/8A01xKZpA3RwOfNfPknJee8t1WkUjpg3Q1kb2NZ6FcwltDDUxUjxNtDFWZCfCfvRMq1ad+BYsRzkV7lbCs8jM5/c2miGo8rk47rIV6rKlWVydO6IMQv3M3F2nSSXZe054eaqQefFPSS5M+o7Nx0K9ONSDyfDinxT6o+Ozlqd/6M21+BVUJN7lR2f8AjLO0vZduxv8A07kzSei3iWu53H669UeYfTQAb9pAAAAAAAAAAAAAAAAAAAAAADBhgayZ5PaOIdSbfC9l2R6HalXdpy6/l88jys/nkjnPX886rij5z+zY8CnmzdP4iVL2IYu+vUlRzcM6zc1kzLNZHsow0lHkaNWNzEiErIVp5eZo1YmkufAhqafMiqVsK9RkE3w4e5JWWWZXm8+xZSFsK7duxWq6+RZqW17lWpy+dDMxvUFZIipVbSv1WvzQ3rS4cyFOzVuZnYp0hZ9i+ncZ+LQhK6bS3Xbmv4sdM8Z/p3iPyOk+W96vXraSPZnVYL9eOJc5np0ZJgABcpAAAAAAAAAAAAAAAAAAANWbGrA5W3ZflS638v7POyR6Hbbf5bdfdHAkl/Hc5D1qd8ifo2/C/wAcEMuxLH7EcVb0N4ey9TTwybJUhL5wNpQ4cvmglfJPlx6lutdlW0LRol/BvNNGrKZhbCGcufh3IpSyzV8yefnkVJyys3x9CMraoK61Xco1W3ZF6osrcsynX5k8a6qvL0K1TNlmos7cCCt0MqiSrPp84kO7na9u5JLIxFXytdmZRCXqPoiqo4iml+qM1mv02ss+6R9KR8t+mG1iKb3v1QXDRuWS62Z9ROk4E7xtFz41kifyZBgyZrCAAAAAAAAAAAAAAAAAAANWbGrA5e2lktOWZwqizztyPSbVp3h2aOBVjny+fPM5b1nHP42/k2fEt7GkFjeOXhlZmrRvGb9Ld0aKI0zJSSqJ5tcOf7Gsp8rq5qp9dPmov1JTbaMVayNPc2l0NJaMrlZDSX9lWqtF8bLMn7FetwfEitqik9F0y+xVq/x+5Ym8/AgqPj0+MsrC2qjUy9iKdvnqWKyz+aFeqs8jKpCSrOJiC6ZWu+qzytyy0JWumeZJSjZXa8tb3t5aGbjQs7H03D/fp56TWVr5O1n36n0xHgPo+jvV0+EU2uqSdr9m/U9+jouBGsbRc+d5NfkyjIBmsIAAAAAAAAAAAAAAAAAAAwzIAhxFPei480edxEbN/Pmp6ZnG2th7PeSyeT7mp9WwdePrj3Mri31bplyWjBmb+e5hs5G0NpAYuGa3IPdMPkayMo11Ipw0lr2IKjyfkTzIJsLKq743IKjyuTSIZaF1YXQq1Vn0IZLw/osyzuV5a+3QyqJIUk+H9E0He2aWjaXd++XkR7vLgyejDelGK45W0z4d2ZmKN9ld3r/oihaM6j1bUe2Sbz8vI9SpnK2fBU4RguCz6viXI1Dp8NOikVc3nv13my4pGyZXjIliy5SkBhGQAAAAAAAAAAAAAAAAAAAwyKtTUk09GTGrR5MRMakjs8xi8O4Np9+6KrZ6jG4ZVItPwfJnm8TRcG01b5w5o5H1PgTht1V/tltuPmjJGp8omaNmWzRmmlmRDDZhg0lI8SiCTRBUkSSlwIKj9j2FlYQyfqQVXwRJUkQy1MisLohpUzIJE8mVpSMind6zH59zubBw6T/Elr+np1OFQalLPT3PQ4Sob7g8bXt2+jV8zP8A6V+rv06pbpzOXQkXqLNvDUWhfpyLEGVKRZgTVp0bGsTYAAAAAAAAAAAAAAAAAAAAAAw0U8bhI1FZ+D4oumGiGTHF6zW0dkq2ms7h4/G4WVN56cHw/gquR7LEYdSVmro89jtktO8H4P7nLc30i9J6sXePg23H5VbdreXMlIgc+JtWpzjrForSqGnthvWfajTYVjfhJOfzQhnM0nUIp1iVcUrYqxKRG5lfF4+FNXlNLx/ZZs5VXbO9lSpym+bTivuzNxcXJfxBa9KeZdTE10lduyXF5HJnjXUdoXtz59jWGy61dp1X2iskvDj4ndwOxLcDc8bg1p3t3lgZuVNu1e0ItnUT0GEgZwuzGuB1sPgbG0rDW2tDFCJ0KMTNLClunQLYY9pZpRLMEYhTJYxJq5ZRsAAAAAAAAAAAAAAAAAAAAAAAAAAI500yQHkxsUa2Bi+Bz8RsGlLWKO60auJVbDWfcurmvXxLydb6Mw8tY+RVl/p/hW7tPzPa7o3CP4Ffgn/VZPi8dS+gsLHSJfo/S1COkT0W6Z3SUYoRnPafe5FPYlNcCeGzoLgdDdM7pKKQhOSZVI4SK4EsaK5E1jNiWkepGoI2UTaxk90iwkZAPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z",
    "quantity":0
    
    } 
    ]);
    const [filteredData,setfilteredData]=useState([]);
    //handles Quantity Selection
    const handleQuantitySelect=(name,value)=>{
      let newData=[...data];
      let idx=[...newData].findIndex(x => x.name ===name);
      newData[idx]["quantity"]=value;
      setdata(newData);
    }
    //handles Search
    const handleSearch=(fruit,vegetable,searchValue="")=>{
      setloading(true);
      debugger;
      let filterData=data;
      if(vegetable===true && fruit===false)
      {
        filterData=data.filter((item)=>item.category==="Vegetables");
      }
      else if(fruit===true && vegetable===false)
      {
        filterData=data.filter((item)=>item.category==="Fruits");
      }
      else if(fruit===true && vegetable===true)
      {
        filterData=data.filter((item)=>item.category==="Fruits" || item.category==="Vegetables");
      }
      else{
        filterData=data;
      }
      filterData=filterData.filter((item)=>item.name.includes(search));
      setTimeout(() => {
        setloading(false);
        setfilteredData(filterData);

      }, 2000);
    }
    useEffect(() => {
   let filterData=data.filter((item)=>item.name.includes(search));
   setfilteredData(filterData);
    }, [])
  return (
    <div className="App">
     <div className="container-div">
       <div className="side-div">
<div className="category-heading">Category</div>
<div style={{width:'max-content'}}>
  <input type="checkbox" id="scales" name="vegetables" checked={vegetables} onChange={(e)=>{setvegetables(e.target.checked)
  handleSearch(fruits,e.target.checked,search);
  }} />
  <label for="vegetables">Vegetables</label>
  </div>
  <div style={{width:'max-content'}}>
  <input type="checkbox" id="scales" name="Fruits" checked={fruits} onChange={(e)=>{
    setfruits(e.target.checked)
    handleSearch(e.target.checked,vegetables,search);
    }} />
  <label for="Fruits">Fruits</label>
</div>
       </div>
   
   <div className="product-listing-div">
         <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingBottom: 20,
    borderBottom: 'solid 1px #e0e0e0'}}>
         <div style={{  width: '70%'}}>
				<input class="input-field" type="text" placeholder="Search" onChange={(e)=>setsearch(e.target.value)} />
			</div>
			<div>
				<button type="submit" onClick={()=>handleSearch(fruits,vegetables,search)} class="btn-primary">Search</button>
			</div>
         </div>
         {loading===false?   
         <div style={{marginTop: 20}}>
       {filteredData.map(item=>{
         let idx=data.findIndex(x => x.name ===item.name);
         return(
           <Card
           {...item}
           value={data[`${idx}`].quantity}
           key={item.name}
           onChange={(e)=>{
           handleQuantitySelect(e.target.name,parseInt(e.target.value))
           }}
           />
        
         )
       })}
       </div>:<div class="showbox">
  <div class="loader">
    <svg class="circular" viewBox="25 25 50 50">
      <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterLimit="10" />
    </svg>
  </div>
</div>} 
       </div>
    </div>
    </div>
  );
}

export default App;
