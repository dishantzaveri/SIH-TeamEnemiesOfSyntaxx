import  React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { MdAlignHorizontalCenter, MdFormatAlignJustify } from 'react-icons/md';
import MenuItem from '@mui/material/MenuItem';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function CreateEvents() {
    const [value, setValue] = React.useState(new Date());
  // work 
  const [item, setItem] = useState(['div'])
  function addNewDiv() {
    const current = [...item];
    current.push('newDiv');
    setItem(current);
  }
  function removeDiv() {
    const current = [...item];
    current.pop();
    setItem(current);
  }

  // education 
  const [data, setData] = useState(['div'])
  function addNewEducation() {
    const curr = [...data];
    curr.push('newDiv');
    setData(curr);
  }
  function removeEducation() {
    const curr = [...data];
    curr.pop();
    setData(curr);
  }

  const modes = [
    {
      value: 'online',
      label: 'online',
    },
    {
      value: 'offline',
      label: 'offline',
    },
  ];
  const [mode, setMode] = React.useState('online');

  const handleChange = (event) => {
    setMode(event.target.value);
  };
  return (
<div 
class="bg-purple-gray-500 "
// class=" bg-purple-gray-500"
 >
     <div class="container max-w-[50%] mx-auto flex-1 flex flex-col items-center justify-center px-1 "> <h1 style={{fontSize:30, margin:"10%", fontWeight:"bolder" , color:"#F1F2F7"}}>Event Details</h1>

     <div class="bg-purple-gray-100 px-6 py-8 rounded shadow-md text-black w-full mb-10"
    // class="bg-purple-gray-100"
      component="form"
      sx={{
        '& .MuiTextField-root': { m:1, width: '25ch' }, display:""
        ,
      }}
      noValidate
      autoComplete="off"
    >
      <div><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Email</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Email'
        //   sx={{display:"inline-block"}}
        />
      </div>
      <div><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Name</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>

  <Box className='event'>
        <h2 style={{fontSize:20, margin:10, paddingRight:"20px"}}><b>Work Experience : </b></h2>
<div>
  {/* {item?.map((currentItem, index) => { */}
   {/* return */}
    <div >
 <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Organiser  </h1>
 <TextField
     required
     id="standard-required"
     label=""
     variant="standard"
   //   placeholder='Name'
   />
 </div>
 <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Name of the Event  </h1>
 <TextField
     required
     id="standard-required"
     label=""
     variant="standard"
   //   placeholder='Name'
   />
 </div>
 <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> Mode of the Event</h1>
 <TextField
          id="outlined-select-mode"
          select
          label="Select"
          value={mode}
          onChange={handleChange}
          helperText="Please select your mode"
        >
          {modes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
 </div>
 <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> Start Date </h1>
 <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
      <DatePicker
          disableFuture
          label="Responsive"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
 </div>
 <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Start Time  </h1>
 <TextField
     required
     id="standard-required"
     label=""
     variant="standard"
   //   placeholder='Name'
   />
 </div>
 <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> End Date</h1>
 <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
      <DatePicker
          disableFuture
          label="Responsive"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
 </div>
 <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>End Time  </h1>
 <TextField
     required
     id="standard-required"
     label=""
     variant="standard"
   //   placeholder='Name'
   />
 </div>
 <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> Description </h1>
 <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
   />
 </div>
 {/* <button onClick={() => addNewDiv()}  class="w-[40%] items-center justify-center bg-purple-gray-500 hover:bg-purple-gray-600 text-white font-bold py-2 px-4 rounded m-5 "> Add Work Experience</button>
 <button onClick={() => removeDiv()}  class="w-[40%] items-center justify-center bg-purple-gray-500 hover:bg-purple-gray-600 text-white font-bold py-2 px-4 rounded m-5"> Remove Work Experience</button> */}
 </div>
   {/* })}  */}
</div>
     
  </Box>

  <button class="w-full bg-purple-gray-500 hover:bg-purple-gray-600 text-white font-bold py-2 px-4 rounded">Submit</button>
  </div>
  </div>


  

      {/* <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Name"
        //   defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          variant="standard"
        />
      </div> */}
    </div>
  );
}
