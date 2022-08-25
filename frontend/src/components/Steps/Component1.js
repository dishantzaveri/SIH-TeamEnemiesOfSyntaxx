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
      
  </div>
  </div>
    //   </div>
  );
}

