import axios from 'axios'
import { useEffect, useState } from 'react'
import { usePostGstMutation } from '../features/gst/gstAPISlice'

const keys = ['Legal Name of Business', 'Trade Name', 'GSTIN/UIN Number', 'GSTIN / UIN Status', 'Registration Date', 'Constitution of Business', 'Taxpayer Type', 'Date of Cancellation', 'Nature of Business Activities', 'Recipient of Goods or Services', 'Warehouse / Depot', 'State Jurisdiction', 'State Code', 'Centre Jurisdiction', 'Centre Code']

const data = {
  "data": "Legal Name of Business SUZLON ENERGY LTD\nTrade Name SUZLON ENERGY LIMITED UNIT I\nGSTIN/UIN Number 37AADCS0472N2Z0\nGSTIN / UIN Status Active\nRegistration Date 01/07/2017\nConstitution of Business Public Limited Company\nTaxpayer Type Regular\nDate of Cancellation\nNature of Business Activities Factory / Manufacturing\nOffice / Sale Office\nRecipient of Goods or Services\nWarehouse / Depot\nRegistration Date 01/07/2017\nState Jurisdiction ANANTHAPUR-II\nState Code AP002\nCentre Jurisdiction ANANTAPUR - 2 RANGE\nCentre Code YL0202\nAddress Branch No : Sy no 153,150,152,125,154\nBranch Name : Ipperu village\nLocation : Anantapur\nStreet : Kuderu mandal\nDistrict : Anantapur\nState : Andhra Pradesh\nPincode : 515711"
}

const Gst = () => {
  const [input, setInput] = useState('')
  const [getGst] = usePostGstMutation()
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

  const data = {
    aadhaar_linked: "Yes",
    centerJurisdiction: "Commissionerate - PUNE - I,Division - DIVISION-II PIMPRI,Range - RANGE-V ,(Jurisdictional Office)",
    constitutionOfBusiness: "Public Limited Company",
    dateOfRegistration: "01/07/2017",
    gstin: "27AAACT2727Q1ZW",
    gstnStatus: "Active",
    id: 12,
    is_verified: true,
    legalNameOfBusiness: "TATA MOTORS LIMITED",
    natureOfBusinessActivity: "Factory / Manufacturing",
    principalPlaceOfBusinessAddress: "TATA MOTORS LIMITED, Nigadi Bhosari Road, PIMPRI, Pune, Maharashtra, 411018",
    stateJurisdiction: "State - Maharashtra,Zone - Pune,Division - PUNE-LTU-2,Charge - PUNE_LTU_524",
    taxpayerType: "Regular",
    tradeName: "TATA MOTORS LIMITED"
  }

  const submit = async () => {
    // console.log(getFilterData(data))
    // let x = new FormData();
    // x.append('gstnumber', '27AAICS1406R3ZV');
    
    // var config = {
    //   method: 'post',
    //   url: 'https://gst-verify-api.herokuapp.com/api/gstverify',
    //   data : data
    // };
    // axios(config)
    //   .then((response) => {
    //     console.log(getFilterData(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Token 8ee14cbf8c09c0baeae939b60041b703ed240e82");
    // myHeaders.append("Cookie", "csrftoken=ONSFu7hzHlkazVZWCUFueznNNNq0ZUfY; sessionid=c8y0u0442udrp7etn5nkneeunl1pst68");

    var formdata = new FormData();
    formdata.append("gstnumber", input);

    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: formdata,
    //   redirect: 'follow'
    // };

    // fetch("http://vismayvora.pythonanywhere.com/account/gstverify/", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    try {
      const data = await getGst(formdata).unwrap()
      // const x = getFilterData(data)
      setInput('')
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} type="text" />
      <button onClick={() => submit()}>submit</button>
    </div>
  )
}

export default Gst