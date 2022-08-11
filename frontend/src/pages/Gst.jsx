import { useEffect, useState } from 'react'
import { useGetGstMutation } from '../features/gst/gstAPISlice'

const keys = ['Legal Name of Business', 'Trade Name', 'GSTIN/UIN Number', 'GSTIN / UIN Status', 'Registration Date', 'Constitution of Business', 'Taxpayer Type', 'Date of Cancellation', 'Nature of Business Activities Factory / Manufacturing', 'Office / Sale', 'Recipient of Goods or Services', 'Warehouse / Depot', 'State Jurisdiction', 'State Code', 'Centre Jurisdiction', 'Centre Code']

const Gst = () => {
  const [input, setInput] = useState('')
  const [getGst] = useGetGstMutation()

  const getFilterData = (data) => {
    let x = data.data.split('\n')
    x = new Set(x)
    x = [...x]
    x = x.map(item => {
      if(item.includes(':')) {
        let y = item.split(' : ')
        return {
          key: y[0],
          value: y[1]
        }
      } else {
        let value = {key: null, value: null}
        keys.forEach(key => {
          if(item.includes(key)) {
            let l = key.split(' ')
            let y = item.split(l[l.length - 1] + ' ')
            value =  {
              key: key,
              value: y[1]
            }
          }
        })
        return value
      }
    })
    return x
  }

  const getData = async () => {
    try {
      const data = await getGst({gstkey: '37AADCS0472N2Z0'}).unwrap()
      const x = getFilterData(data)
      setInput('')
      console.log(x)
    } catch (error) {
      console.log(error)
    }
  }

  
  
  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} type="text" />
      <button onClick={() => getData()}>submit</button>
    </div>
  )
}

export default Gst