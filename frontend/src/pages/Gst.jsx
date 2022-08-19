import axios from 'axios'
import { useEffect, useState } from 'react'
import { useGetGstMutation } from '../features/gst/gstAPISlice'

const keys = ['Legal Name of Business', 'Trade Name', 'GSTIN/UIN Number', 'GSTIN / UIN Status', 'Registration Date', 'Constitution of Business', 'Taxpayer Type', 'Date of Cancellation', 'Nature of Business Activities', 'Recipient of Goods or Services', 'Warehouse / Depot', 'State Jurisdiction', 'State Code', 'Centre Jurisdiction', 'Centre Code']

const data = {
  "data": "Legal Name of Business SUZLON ENERGY LTD\nTrade Name SUZLON ENERGY LIMITED UNIT I\nGSTIN/UIN Number 37AADCS0472N2Z0\nGSTIN / UIN Status Active\nRegistration Date 01/07/2017\nConstitution of Business Public Limited Company\nTaxpayer Type Regular\nDate of Cancellation\nNature of Business Activities Factory / Manufacturing\nOffice / Sale Office\nRecipient of Goods or Services\nWarehouse / Depot\nRegistration Date 01/07/2017\nState Jurisdiction ANANTHAPUR-II\nState Code AP002\nCentre Jurisdiction ANANTAPUR - 2 RANGE\nCentre Code YL0202\nAddress Branch No : Sy no 153,150,152,125,154\nBranch Name : Ipperu village\nLocation : Anantapur\nStreet : Kuderu mandal\nDistrict : Anantapur\nState : Andhra Pradesh\nPincode : 515711"
}

const Gst = () => {
  const [input, setInput] = useState('')
  const [getGst] = useGetGstMutation()

  const getFilterData = (data) => {
    let x = data.data.split('\n')
    console.log(x)
    var add = false
    var value = {key: null, value: null}
    x = x.map(item => {
      if (item.includes('Registration Date') && add) {
        add = false
        return value
      }
      if (add) {
        value.value = [...value.value, item]
        return null
      } else if (!item.includes('Nature of Business Activities')) {
        if(item.includes(':')) {
          if (item.includes('Address Branch No')) {
            let y = item.split(' : ')
            let key = y[0].split('Address ')
            return value =  {
              key: key[1],
              value: y[1] ? y[1] : null
            }
          } else {
            let y = item.split(' : ')
            return value =  {
              key: y[0],
              value: y[1] ? y[1] : null
            }
          }
        } else {
          keys.forEach(key => {
            if(item.includes(key)) {
              let l = key.split(' ')
              let y = item.split(l[l.length - 1] + ' ')
              value =  {
                key: key,
                value: y[1] ? y[1] : null
              }
            }
          })
          return value
        }
      }
      if (item.includes('Nature of Business Activities')) {
        value =  {
          key: 'Nature of Business Activities',
          value: []
        }
        let l = 'Nature of Business Activities'.split(' ')
        let y = item.split(l[l.length - 1] + ' ')
        value.value = [...value.value, y[1]]
        add = true
        return null
      }
    })
    x = x.filter(item => item !== null)
    return x
  }

  const getData = async () => {
    // console.log(getFilterData(data))
    var data = new FormData();
    data.append('gstkey', '27AAICS1406R3ZV');
    var config = {
      method: 'post',
      url: 'https://gst-verify-api.herokuapp.com/api/gstverify',
      data : data
    };
    axios(config)
      .then((response) => {
        console.log(getFilterData(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    // try {
    //   const data = await getGst({gstkey: '37AADCS0472N2Z0'}).unwrap()
    //   const x = getFilterData(data)
    //   setInput('')
    //   console.log(x)
    // } catch (error) {
    //   console.log(error)
    // }
  }

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} type="text" />
      <button onClick={() => getData()}>submit</button>
    </div>
  )
}

export default Gst