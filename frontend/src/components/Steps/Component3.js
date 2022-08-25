import  React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { MdAlignHorizontalCenter, MdFormatAlignJustify, MdLteMobiledata } from 'react-icons/md';
import Button from '@mui/material/node/Button';
import Component3 from './Component3';
import { usePostGstMutation } from '../../features/gst/gstAPISlice';
import axios from 'axios';
import { useSelector } from 'react-redux';

const GST = ({ gst }) => {
  console.log(gst);
  return (
    <div>
      <div className="bg-white flex justify-between self-center max-w-[280px] bottom-[-40px] p-2 rounded-b-2xl shadow-lg">
        <div className="">
          <h1
            className="text-lg font-bold mt-2"
          >Name: {gst.legalNameOfBusiness}
          </h1>
          <h1 className="mt-[5px]">GST IN : {gst.gstin}</h1>
        </div>    
      </div>
    </div>
  );
};

export default function FormPropsTextFields() {
  const [input, setInput] = useState('')
  const [startups, setStartups] = useState([])
  const {token} = useSelector(state => state.auth)
  const [postGst, {isLoading: gstLoading}] = usePostGstMutation()
  const getStartups = () => {
    let config = {
      method: 'get',
      url: 'https://vismayvora.pythonanywhere.com/account/startup/',
      headers: { 
        'Authorization': 'Token ' + token
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setStartups(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  
  const submit = async () => {
    var formdata = new FormData();
    formdata.append("gstnumber", input);
    try {
      const data = await postGst(formdata).unwrap()
      // const x = getFilterData(data)
      setInput('')
      getStartups()
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getStartups()
  }, []);
  console.log(startups[0].id);
  
  
  return (
    <div className="bg-purple-gray-100 px-6 py-8 rounded shadow-md text-black w-full" >
      <h1 className='text-2xl font-semibold uppercase mb-4'>gst</h1>
      <input className='px-3 py-2' placeholder='Enter GST Number' value={input} onChange={e => setInput(e.target.value)} type="text" />
      <button className='px-3 py-2 bg-purple-gray-700' onClick={() => submit()}>add</button>
      <div className="data">
      {startups!==[] && startups.map((gst) => (
            <GST gst={gst} />
          ))}
      {/* <h3>Legal name of business : </h3> */}
</div>
    </div>
  );
}

