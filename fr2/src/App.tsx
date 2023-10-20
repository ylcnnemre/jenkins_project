import React, { useEffect, useState } from 'react'
import axios from "axios"
const App = () => {

  useEffect(() => {
    getData()
  }, [])

  const [data, setData] = useState<{ name: string, age: number }[]>([])

  function getData() {
    axios.get("/api").then(val => {
      setData(val.data.map((item: any) => ({ name: item.name, age: item.age })))
    }).catch(err => {
      console.log(err.message)
    })
  }
  function addData() {
    axios.get("/api/add").then(val => {
      getData()
    })
  }

  return (
    <div>
      <button onClick={() => addData()}>
        ekle
      </button>
      <button onClick={() => {
        axios.get("/api/delete").then(val => {
          getData()
        })
      }}  >
        delet
      </button>
      <table border={1}>
        <tr>
          <th>
            Name
          </th>
          <td>
            Age
          </td>
        </tr>
        {
          data.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.age}
                </td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default App