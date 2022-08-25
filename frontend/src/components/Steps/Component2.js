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
    
         <div class="bg-purple-gray-100 px-6 py-8 rounded shadow-md text-black w-full"
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
      
  </div>
    //   </div>
  );
}

