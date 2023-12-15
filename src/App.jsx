import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  const arr=[
    {"name":"iphone12" ,"price":200},
    {"name":"iphone13" ,"price":300},
    {"name":"iphone14" ,"price":400}
  ]

  return (
   <div>
    <h1>
      {arr.map((item)=>{
       return  <ProductCard product={item}/>
      })}
    </h1>
   </div>
  )
}

export default App
