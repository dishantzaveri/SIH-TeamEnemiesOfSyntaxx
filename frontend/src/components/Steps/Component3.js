import  React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, Stepper } from '@mui/material';
import { MdAlignHorizontalCenter, MdFormatAlignJustify, MdLteMobiledata } from 'react-icons/md';
import Button from '@mui/material/node/Button';
import Component3 from './Component3';
import { usePostGstMutation } from '../../features/gst/gstAPISlice';
import axios from 'axios';
import { useSelector } from 'react-redux';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from 'react-router-dom';

const GST = ({ gst }) => {
  const [data, setData] = useState(["div"]);
  function removeGst() {
		const curr = [...data];
		curr.pop();
		setData(curr);
	}
  
  console.log(gst);
  return (
    <div className='flex items-center justify-center'>
      <div className="bg-white w-full py-2 px-3 shadow-lg">
        <div className="flex justify-between">
          <div>
            <h1
              className="text-lg font-bold mt-2"
            >Name: {gst.legalNameOfBusiness}
            </h1>
            <h1 className="mt-[5px]">GST IN : {gst.gstin}</h1>
          </div>
          <button onClick={() => removeGst()}
									class=" bg-purple-gray-500 hover:bg-purple-gray-600 text-white font-bold py-2 px-4 rounded m-5 "><CancelIcon /></button>
        </div>    
      </div>
    </div>
  );
};

export default function FormPropsTextFields() {
  const navigate = useNavigate();
  const [input, setInput] = useState('')
  const [startups, setStartups] = useState([])
  const {token} = useSelector(state => state.auth)
  const [postGst] = usePostGstMutation()
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
  // const postGst = () => {
  //   let config = {
  //     method: 'post',
  //     url: 'https://vismayvora.pythonanywhere.com/account/gstverify/',
  //     headers: { 
  //       'Authorization': 'Token ' + token
  //     },
  //     data: {
  //       gstnumber: input
  //     }
  //   };
  //   console.log(config)
  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //       setStartups(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
  
  const submit = async () => {
    var formdata = new FormData();
    formdata.append("gstnumber", input);
    try {
      const data = await postGst(formdata).unwrap();
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getStartups()
  }, []);
  
  return (
    <div className='w-full'>
      <div className="bg-purple-gray-100 px-6 py-8 rounded shadow-md text-black w-full" >
        <h1 className='text-2xl font-semibold uppercase mb-4'>gst</h1>
        <input className='px-3 py-2' placeholder='Enter GST Number' value={input} onChange={e => setInput(e.target.value)} type="text" />
        <button className='px-3 py-2 bg-purple-gray-700' onClick={() => submit()}>add</button>
        <div className="w-full flex flex-col gap-4 mt-4">
          {startups!==[] && startups.map((gst) => (
            <GST gst={gst} />
          ))}
        </div>
      </div>
    </div>
  );
}

