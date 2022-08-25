import  React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { MdAlignHorizontalCenter, MdFormatAlignJustify } from 'react-icons/md';
import Button from '@mui/material/node/Button';
import Component3 from './Component3';
// import { AutoCompletePlaces } from "./AutoCompletePlaces";

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
    // <div 
    // class="bg-purple-gray-500 "
    // // class=" bg-purple-gray-500"
    //  >
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
      
  </div>
   </div>
    //   </div>
  );
}

