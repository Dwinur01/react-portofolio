import { Link } from "react-router-dom"
import Button from "../components/Button"
import Profile from "./Profile"
import { useState } from "react"

const Dashboard = () => {
  const [count,setcount] = useState(1)
  console.log(count)
  return (
    <>
      <div>Dashboard</div>
      
      
      <div>
        <Button style={{
          color: 'red'
        }}>
          Hitung 1
        </Button>
        
        <Button style={{
          color: 'blue'
        }}>
          Hitung 2
        </Button>
        <Button style={{
          color: 'green'
        }}>
          Hitung 3
        </Button>
      </div>

      <div>
        <Link to='/profile'>
          link ke halaman Profile
        </Link>
      </div>
      {
        Array(3).fill(null).fill.map((_,key)=>(
          <photo index={key+1} key={key+1}/>
        ))
      }
<Button style={{
          color: 'green'
        }}>
          onClick={() =>{
            setcount(count-1)
          console.log(count);
          }}
        previous
        </Button>
<Button style={{
          color: 'green'
        }}>
          onClick={() =>{
            setcount(count+1)
          console.log(count);
          }}
        Next
        </Button>
    </>
  )
}

export default Dashboard