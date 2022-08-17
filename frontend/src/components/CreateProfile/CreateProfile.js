import  React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { MdAlignHorizontalCenter, MdFormatAlignJustify } from 'react-icons/md';

export default function FormPropsTextFields() {
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

  return (
<div 
class="bg-purple-gray-500 "
// class=" bg-purple-gray-500"
 >
     <div class="container max-w-[50%] mx-auto flex-1 flex flex-col items-center justify-center px-1 "> <h1 style={{fontSize:30, margin:"10%", fontWeight:"bolder" , color:"#F1F2F7"}}>Profile Details </h1>

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

{/* gst  */}

      <Box className='startup'>
        <h2 style={{fontSize:20, margin:10, paddingRight:"20px"}}><b>Startup Details : </b></h2>
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Legal Name</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Trade Name</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> GSTIN/UIN Number</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> GSTIN / UIN Status</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> Registration Date</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> Constitution of Business</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> Taxpayer Type</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> Date of Cancellation</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> Nature of Business Activities</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> Office / Sale</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> Recipient of Goods or Services</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Warehouse / Depot</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>State Jurisdiction</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>State Code</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Centre Jurisdiction</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Centre Code</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Branch No.</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Branch Name</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Location</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Street</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>District</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>State</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Pincode</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
  </Box>


  <Box className='work'>
        <h2 style={{fontSize:20, margin:10, paddingRight:"20px"}}><b>Work Experience : </b></h2>
<div>
  {item?.map((currentItem, index) => {
   return <div key={currentItem} id={`expense-${index}`}>
 <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Job Title</h1>
 <TextField
     required
     id="standard-required"
     label=""
     variant="standard"
   //   placeholder='Name'
   />
 </div>
 <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> Company Name </h1>
 <TextField
     required
     id="standard-required"
     label=""
     variant="standard"
   //   placeholder='Name'
   />
 </div>
 <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> Location</h1>
 <TextField
     required
     id="standard-required"
     label=""
     variant="standard"
   //   placeholder='Name'
   />
 </div>
 <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> Industry</h1>
 <TextField
     required
     id="standard-required"
     label=""
     variant="standard"
   //   placeholder='Name'
   />
 </div>
 <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> Start Date </h1>
 <TextField
     required
     id="standard-required"
     label=""
     variant="standard"
   //   placeholder='Name'
   />
 </div>
 <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> End Date</h1>
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
 <button onClick={() => addNewDiv()}  class="w-[40%] items-center justify-center bg-purple-gray-500 hover:bg-purple-gray-600 text-white font-bold py-2 px-4 rounded m-5 "> Add Work Experience</button>
 <button onClick={() => removeDiv()}  class="w-[40%] items-center justify-center bg-purple-gray-500 hover:bg-purple-gray-600 text-white font-bold py-2 px-4 rounded m-5"> Remove Work Experience</button>
 </div>
   })} 
</div>
     
  </Box>

  <Box className='education'>
        <h2 style={{fontSize:20, margin:10, paddingRight:"20px"}}><b>Education : </b></h2>
        <div>
  {data?.map((currentData, ind) => {
   return <div key={currentData} id={`expense-${ind}`}>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Institute</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> Degree </h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> Study Field</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> Start Date</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> End Date</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> Grade</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Extracurriculars</h1>
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
      <button onClick={() => addNewEducation()}  class="w-[40%] bg-purple-gray-500 hover:bg-purple-gray-600 text-white font-bold py-2 px-4 rounded m-5 "> Add Education</button>
 <button onClick={() => removeEducation()}  class="w-[40%] bg-purple-gray-500 hover:bg-purple-gray-600 text-white font-bold py-2 px-4 rounded m-5"> Remove Education</button>
 </div>
   })} 
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
