import  React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { MdAlignHorizontalCenter, MdFormatAlignJustify } from 'react-icons/md';

export default function PitchDeckForm() {
  // work 
//   const [item, setItem] = useState(['div'])
//   function addNewDiv() {
//     const current = [...item];
//     current.push('newDiv');
//     setItem(current);
//   }
//   function removeDiv() {
//     const current = [...item];
//     current.pop();
//     setItem(current);
//   }

  // education 
//   const [data, setData] = useState(['div'])
//   function addNewEducation() {
//     const curr = [...data];
//     curr.push('newDiv');
//     setData(curr);
//   }
//   function removeEducation() {
//     const curr = [...data];
//     curr.pop();
//     setData(curr);
//   }

  return (
<div class="bg-purple-gray-500 ">
     <div class="container max-w-[50%] mx-auto flex-1 flex flex-col items-center justify-center px-1 "> 
     <h1 style={{fontSize:30, margin:"10%", fontWeight:"bolder" , color:"#F1F2F7"}}>Pitch Deck Details </h1>

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
      <div><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Name of the Company : </h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Email'
        //   sx={{display:"inline-block"}}
        />
      </div>
      <div sx={{display:"inline-block"}}> <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}> Tag Line / Description about the Company: </h1>
 <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>

{/* page 2  */}

      <Box className='problems'>
        <h2 style={{fontSize:20, margin:10, paddingRight:"20px"}}><b>Reasons you want the funding : </b></h2>
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Problem 1 :</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Desciption about Problem 1 :</h1>
      <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>  
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Problem 2 :</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Desciption about Problem 2 :</h1>
      <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div> 
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Problem 3 :</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Desciption about Problem 3 :</h1>
      <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>       
  </Box>

  {/* page 3  */}
  <Box className='solution'>
        <h2 style={{fontSize:20, margin:10, paddingRight:"20px"}}><b>Once you get the funding, solutions that you offer : </b></h2>
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Desciption about your solution :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Solution 1:</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>  
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Solution 2 :</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Solution 3 :</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>     
  </Box>

{/* page 4 */}
<Box className='market validation'>
        <h2 style={{fontSize:20, margin:10, paddingRight:"20px"}}><b>Market Validation : </b></h2>
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Previous year's turnover:</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>  
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Desciption about the turnover :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Existing number of products in market :</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Desciption about the existing products :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>    
  </Box>

{/* page 5  */}

<Box className='market size'>
        <h2 style={{fontSize:20, margin:10, paddingRight:"20px"}}><b>Market Size : </b></h2>
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Total available Market:</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>  
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Desciption about TAM :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Servicable Available Market :</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Desciption about SAM :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>   
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Your Market Share :</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Desciption about your market share :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>    
  </Box>

  {/* page 6 */}
  <Box className='product'>
        <h2 style={{fontSize:20, margin:10, paddingRight:"20px"}}><b>Details about your product : </b></h2>
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Desciption about the product for a layman :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>
      <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Attach 3 photos about your product </h1>
      <div sx={{display:"inline-block"}}>
      <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>1 :</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>  
      <div sx={{display:"inline-block"}}>
      <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>2 :</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>  
      <div sx={{display:"inline-block"}}>
      <h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>3 :</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>  
  </Box>

  {/* page 7 */}
  <Box className='business model'>
        <h2 style={{fontSize:20, margin:10, paddingRight:"20px"}}><b>Business Model : </b></h2>
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Desciption about the business model :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Share of the Market :</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Average Fee :</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div> 
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Expected Revenue :</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>  
  </Box>
  {/* page 8 */}
  <Box className='market adoption'>
        <h2 style={{fontSize:20, margin:10, paddingRight:"20px"}}><b>Market Adoption : </b></h2> 
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Desciption about the Events so far :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Desciption about the Partnerships so far :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Craigslist Image :</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>  
  </Box>
  {/* page 9 */}
  <Box className='competition'>
        <h2 style={{fontSize:20, margin:10, paddingRight:"20px"}}><b>Competition in the Market : </b></h2>
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Image of your competitor:</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>  
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Reason :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Image of your competitor:</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>  
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Reason :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Image of your competitor:</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>  
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Reason :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Image of your competitor:</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>  
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Reason :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div> 
  </Box>
  {/* page 10 */}
  <Box className='Competitive Advantages'>
        <h2 style={{fontSize:20, margin:10, paddingRight:"20px"}}><b>Competitive Advantages : </b></h2>
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Advantage 1 of your product:</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>  
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Desciption about this advantage :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Advantage 2 of your product:</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>  
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Desciption about this advantage :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>    
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Advantage 3 of your product:</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>  
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Desciption about this advantage :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>    
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Advantage 4 of your product:</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>  
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Desciption about this advantage :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>    
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Advantage 5 of your product:</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>  
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Desciption about this advantage :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>    
      <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Advantage 6 of your product:</h1>
      <TextField
          required
          id="standard-required"
          label=""
          variant="standard"
        //   placeholder='Name'
        />
      </div>  
        <div sx={{display:"inline-block"}}><h1 style={{display:"inline-block",fontSize:20, margin:10, paddingRight:"20px"}}>Desciption about this advantage :</h1>
        <TextField
     id="standard-textarea"
     label=""
     multiline
     variant="standard"
     width="100%"
   />
      </div>    
  </Box>





{/*  
  <Box className='education'>
        <h2 style={{fontSize:20, margin:10, paddingRight:"20px"}}><b>Education : </b></h2>  
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
      </div>   */}
      {/* <button onClick={() => addNewEducation()}  class="w-[40%] bg-purple-gray-500 hover:bg-purple-gray-600 text-white font-bold py-2 px-4 rounded m-5 "> Add Education</button>
 <button onClick={() => removeEducation()}  class="w-[40%] bg-purple-gray-500 hover:bg-purple-gray-600 text-white font-bold py-2 px-4 rounded m-5"> Remove Education</button>
 </div>
   })}  */}
{/* </div> */}
  {/* </Box> */}
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
