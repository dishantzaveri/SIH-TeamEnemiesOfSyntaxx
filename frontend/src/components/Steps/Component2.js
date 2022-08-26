import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setField } from "../../features/auth/registerSlice";
import axios from "axios";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function FormPropsTextFields() {
  const dispatch = useDispatch();
  const {education} = useSelector(state => state.register)
  const {token} = useSelector(state => state.auth)
	const [list, setList] = useState(education ? education : [])
  const [input, setInput] = useState({
    'institute': '',
    'degree': '',
    'study_field': '',
    'start_date': '',
    'end_date': '',
  })
  const submit = () => {
    console.log(list)
    if(list!==[]) {
      dispatch(setField({field: 'education', value: [...list]}))
    } else {
      alert('Please add atleast one education')
    }
  }
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://vismayvora.pythonanywhere.com/account/education/',
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    axios(options).then(res => {console.log(res.data)}).catch(err => {console.log(err)})
  }, [])
  const add = async () => {
    if(input.institute && input.degree && input.study_field && input.start_date && input.end_date) {
      const curr = [...list];
      curr.push(input);
      setList(curr);
      const options = {
        method: 'POST',
        url: 'https://vismayvora.pythonanywhere.com/account/education/',
        data: {
          institute: input.institute,
          degree: input.degree,
          study_field: input.study_field,
          start_date: input.start_date,
          end_date: input.end_date,
        },
        header: { 
          'Authorization': `Token ${token}`,
        }
      }
      console.log(options)
      await axios(options)
              .then(res => {console.log(res.data)})
              .catch(err => {console.log(err)})
    } else {
      alert('Please fill all the fields');
    }
    console.log(list)
  }
  const remove = (index) => {
    const curr = [...list];
    curr.splice(index, 1);
    setList(curr);
  }
	return (
		<div
			class="bg-purple-gray-100 px-6 py-8 rounded shadow-md text-black w-full"
			// class="bg-purple-gray-100"
			component="form"
			sx={{
				"& .MuiTextField-root": { m: 1, width: "25ch" },
				display: "",
			}}
			noValidate
			autoComplete="off"
		>
			<Box className="education">
				<h2 className='text-2xl font-bold mb-4'>
					Education :
				</h2>
        <div className="flex flex-col gap-2 mb-3">
          {list?.map((currentItem, index) => (
            <div key={index} className='flex w-full justify-between items-center bg-gray-200 px-3 py-2'>
              <h1>{currentItem.degree}</h1>
              <MdDelete className="text-red-500 cursor-pointer" onClick={() => remove(index)} />
            </div>
          ))}
        </div>
				<div className='flex flex-col gap-6'>
          <div className='flex gap-6'> 
            <h1 className='text-lg'>Institution Name</h1>
            <TextField
              required
              id="standard-required"
              label=""
              variant="standard"
              value={input.institute}
              onChange={(e) => setInput(prevState => ({...prevState, institute: e.target.value}))}
            />  
          </div>
          <div className='flex gap-6'> 
            <h1 className='text-lg'>Degree</h1>
            <TextField
              required
              id="standard-required"
              label=""
              variant="standard"
              value={input.degree}
              onChange={(e) => setInput(prevState => ({...prevState, degree: e.target.value}))}
            />  
          </div>
          <div className='flex gap-6'> 
            <h1 className='text-lg'>Study Field</h1>
            <TextField
              required
              id="standard-required"
              label=""
              variant="standard"
              value={input.study_field}
              onChange={(e) => setInput(prevState => ({...prevState, study_field: e.target.value}))}
            />  
          </div>
          <div className='flex gap-6'> 
            <h1 className='text-lg'>Start year</h1>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={input.start_date}
                onChange={(newValue) => {
                  setInput(prevState => ({...prevState, start_date: newValue}))
                }}
                renderInput={(params) => <TextField {...params} variant="standard" />}
              />
            </LocalizationProvider>
          </div>
          <div className='flex gap-6'> 
            <h1 className='text-lg'>End year</h1>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={input.end_date}
                onChange={(newValue) => {
                  setInput(prevState => ({...prevState, end_date: newValue}))
                }}
                renderInput={(params) => <TextField {...params} variant="standard" />}
              />
            </LocalizationProvider>
          </div>
				</div>
        <button className='w-full mt-4 bg-purple-gray-700 py-2 text-gray-100' onClick={() => add()}>Add</button>
        <button className='w-full mt-4 bg-purple-gray-700 py-2 text-gray-100' onClick={() => submit()}>{'Save'}</button>
			</Box>
		</div>
		//   </div>
	);
}
