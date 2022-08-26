import  {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MdAddCircleOutline, MdKeyboardArrowDown } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import ReactImageUploading from 'react-images-uploading';
import { inputClasses } from '@mui/material/node/Input';

const DropDown = ({data, inputs, setInputs}) => {
  console.log(data)
  return (
      <div className='flex flex-col pt-2'>
          <div class="relative w-full">
              <select 
              value={inputs.startup} 
              onChange={e => setInputs(prevState => ({...prevState, startup: e.target.value}))} 
              class="appearance-none w-full border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none bg-blue-100 focus:border-gray-400">
              {data.map(option => <option>{option}</option>)}
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <MdKeyboardArrowDown />
              </div>
          </div>
      </div>
  )
}

const Photo = ({inputs, setInputs}) => {
  const onChange = (imageList, addUpdateIndex) => {
      setInputs(prevState => ({...prevState, images: imageList[0]}));
  };
  return(
      <ReactImageUploading
          value={inputs.images}
          onChange={onChange}
          dataURLKey="data_url"
        >
          {({
            onImageUpload,
            onImageRemove,
          }) => (
            <div className="upload__image-wrapper">
              {inputs.images ? (
                <div className="h-28 w-28 rounded-full bg-white relative">
                  <div className="w-full h-full flex justify-center items-center" onClick={onImageUpload}>
                    <img src={inputs.images['data_url']} alt="" 
                      className="h-28 w-28" 
                      onClick={() => {
                        setInputs(prevState => ({...prevState, images: null}));
                        onImageRemove(0)
                      }} 
                    />
                  </div>
                  <div className="absolute top-[-10px] right-[-10px] p-1 bg-purple-200 rounded-full">
                    <AiOutlineClose
                      className="text-red-500 text-sm"
                      onClick={() => {
                        setInputs(prevState => ({...prevState, images: null}));  
                        onImageRemove(0)
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="h-28 w-28 bg-white flex justify-center items-center" onClick={onImageUpload}>
                  <MdAddCircleOutline className="w-12 h-12 text-gray-600" />
                </div>
              )}

            </div>
          )}
        </ReactImageUploading>
  )
}

export default function CreateCampaigns({data}) {
  console.log(data)
  const {token} = useSelector(state => state.auth)
  const [inputs, setInputs] = useState({
      name: '',
      description: '',
      images: null,
      targetAmount: '',
      startup: '',
  })

  const create = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token " + token);
    var formdata = new FormData();
    formdata.append("name", inputs.name);
    formdata.append("description", inputs.description);
    formdata.append("images", inputs.images.file, inputs.images.file.name);
    formdata.append("targetAmount", inputs.targetAmount);
    const startup = data.filter(startup => startup.legalNameOfBusiness === inputs.startup)[0].id
    console.log(startup)
    formdata.append("startup", +startup);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    fetch("https://vismayvora.pythonanywhere.com/news/funding/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  
  return (
    <div> 
      <h2 style={{fontSize:"22px", textAlign:"center",}}>Create your Campaign</h2>
      <div class="bg-purple-gray-100 px-6 py-8 rounded shadow-md text-black w-full"
        component="form"
        sx={{
          '& .MuiTextField-root': { m:1, width: '25ch' }, display:""
          ,
        }}
        noValidate
        autoComplete="off"
      >

        <Box className='event'>
          <div>
            <div className='flex flex-col gap-4' >
              <div className='flex gap-6'> 
                <h1 className='text-xl'>Campaign Name</h1>
                <TextField
                  required
                  id="standard-required"
                  label=""
                  variant="standard"
                  value={inputs.name}
                  onChange={(e) => setInputs(prevState => ({...prevState, name: e.target.value}))}
                />  
              </div>
              <div className='flex gap-6'> 
                <h1 className='text-xl'>Description</h1>
                <TextField
                  required
                  id="standard-required"
                  label=""
                  variant="standard"
                  value={inputs.description}
                  onChange={(e) => setInputs(prevState => ({...prevState, description: e.target.value}))}
                />  
              </div>
              <div className='flex gap-6'> 
                <h1 className='text-xl'>Target Amount</h1>
                <TextField
                  required
                  id="standard-required"
                  label=""
                  variant="standard"
                  value={inputs.targetAmount}
                  onChange={(e) => setInputs(prevState => ({...prevState, targetAmount: e.target.value}))}
                />  
              </div>
              <div className="flex gap-4 items-center">
                <h1 className='text-xl'>Upload Pic</h1>
                <Photo inputs={inputs} setInputs={setInputs} />
              </div>
              <div className="flex gap-4 items-center">
                <h1 className='text-xl'>Startup</h1>
                <DropDown data={data.map(element => element.legalNameOfBusiness)} inputs={inputs} setInputs={setInputs} />
              </div>
            </div>
          </div>
        </Box>
      <button className="w-full bg-purple-gray-500 hover:bg-purple-gray-600 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => create()} >Submit</button>
      </div>
    </div>
  );
}
