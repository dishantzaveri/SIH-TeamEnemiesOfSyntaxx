import  React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setField } from '../../features/auth/registerSlice';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { AutoCompletePlaces } from "./AutoCompletePlaces";

export default function FormPropsTextFields() {
  const dispatch = useDispatch();
  const {work} = useSelector(state => state.register)
  const {token} = useSelector(state => state.auth)
	const [list, setList] = useState(work ? [...work] : [])
  const [input, setInput] = useState({
    'job_title': '',
    'company_name': '',
    'location': '',
    'industry': '',
    'start_year': '',
    'end_year': '',
  })
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://vismayvora.pythonanywhere.com/account/experience/',
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    axios(options).then(res => {console.log(res.data)}).catch(err => {console.log(err)})
  }, [])
  
  const submit = () => {
    console.log(list)
    if(list!==[]) {
      dispatch(setField({field: 'work', value: [...list]}))
    } else {
      alert('Please add atleast one work experience')
    }
  }
  const add = () => {
    if(input.job_title && input.company_name && input.location && input.industry && input.start_year && input.end_year) {
      const curr = [...list];
      curr.push(input);
      setList(curr);
      var dd = String(input.start_year.getDate()).padStart(2, '0');
      var mm = String(input.start_year.getMonth() + 1).padStart(2, '0');
      var yyyy = input.start_year.getFullYear();
      let start = mm + '-' + dd + '-' + yyyy;
      var dd = String(input.end_year.getDate()).padStart(2, '0');
      var mm = String(input.end_year.getMonth() + 1).padStart(2, '0');
      var yyyy = input.end_year.getFullYear();
      let end = mm + '-' + dd + '-' + yyyy;
      // const options = {
      //   method: 'POST',
      //   url: '/account/experience/',
      //   data: {
      //     job_title: input.job_title,
      //     company_name: input.company_name,
      //     location: input.location,
      //     industry: input.industry,
      //     start_year: start,
      //     end_year: end,
      //   },
      //   headers: {
      //     'Authorization': `Token ${token}`,
      //   }
      // }
      // console.log(options)
      // axios(options)
      //   .then(res => {
      //     console.log(res)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
      // var FormData = require('form-data');
      // var data = new FormData();
      

      // var config = {
      //   method: 'POST',
      //   url: 'https://vismayvora.pythonanywhere.com/account/experience/',
      //   headers: { 
      //     'Authorization': 'Token ' + token, 
      //     'Cookie': 'csrftoken=ONSFu7hzHlkazVZWCUFueznNNNq0ZUfY',
      //   },
      //   data : data
      // };

      // axios(config)
      // .then(function (response) {
      //   console.log(JSON.stringify(response.data));
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
      // var data = new FormData();
      // data.append('job_title', input.job_title);
      // data.append('company_name', input.company_name);
      // data.append('location', input.location);
      // data.append('industry', input.industry);
      // data.append('start_date', start);
      // data.append('end_date', end);
      const data = {
        job_title: input.job_title,
        company_name: input.company_name,
        location: input.location,
        industry: input.industry,
        start_date: String(start),
        end_date: String(end),
      }
      var config = {
        method: 'post',
        url: 'https://vismayvora.pythonanywhere.com/account/experience/',
        headers: { 
          'Authorization': 'Token '+token,
        },
        data : data
      };
      console.log(config)
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
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
					Work Experience :
				</h2>
        <div className="flex flex-col gap-2 mb-3">
          {list?.map((currentItem, index) => (
            <div key={index} className='flex w-full justify-between items-center bg-gray-200 px-3 py-2'>
              <h1>{currentItem.company_name}</h1>
              <MdDelete className="text-red-500 cursor-pointer" onClick={() => remove(index)} />
            </div>
          ))}
        </div>
				<div className='flex flex-col gap-6'>
          <div className='flex gap-6'> 
            <h1 className='text-lg'>Job Title</h1>
            <TextField
              required
              id="standard-required"
              label=""
              variant="standard"
              value={input.job_title}
              onChange={(e) => setInput(prevState => ({...prevState, job_title: e.target.value}))}
            />  
          </div>
          <div className='flex gap-6'> 
            <h1 className='text-lg'>Company Name</h1>
            <TextField
              required
              id="standard-required"
              label=""
              variant="standard"
              value={input.company_name}
              onChange={(e) => setInput(prevState => ({...prevState, company_name: e.target.value}))}
            />  
          </div>
          <div className='flex gap-6'> 
            <h1 className='text-lg'>Location</h1>
            <TextField
              required
              id="standard-required"
              label=""
              variant="standard"
              value={input.location}
              onChange={(e) => setInput(prevState => ({...prevState, location: e.target.value}))}
            />  
          </div>
          <div className='flex gap-6'> 
            <h1 className='text-lg'>Industry</h1>
            <TextField
              required
              id="standard-required"
              label=""
              variant="standard"
              value={input.industry}
              onChange={(e) => setInput(prevState => ({...prevState, industry: e.target.value}))}
            />  
          </div>
          <div className='flex gap-6'> 
            <h1 className='text-lg'>Start year</h1>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={input.start_year}
                onChange={(newValue) => {
                  setInput(prevState => ({...prevState, start_year: newValue}))
                }}
                renderInput={(params) => <TextField {...params} variant="standard" />}
              />
            </LocalizationProvider>
          </div>
          <div className='flex gap-6'> 
            <h1 className='text-lg'>End year</h1>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={input.end_year}
                onChange={(newValue) => {
                  setInput(prevState => ({...prevState, end_year: newValue}))
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
	);
}

