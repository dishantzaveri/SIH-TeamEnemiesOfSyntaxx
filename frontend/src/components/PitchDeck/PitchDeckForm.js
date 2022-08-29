import  React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import { MdDeleteForever } from 'react-icons/md';
import {useSelector, useDispatch} from 'react-redux';
import { removeTile, updatePitch } from '../../app/pitchdeckSlice';
import { formSections, fields } from '../../app/pitchdeckFields';
import { Link } from 'react-router-dom';
import { PitchDeck } from './PitchDeck';

const selectField = (field) => {
  switch (field) {
    case 4:
      return 'problems';
    case 8: 
      return 'solution';
    case 10:
      return 'marketValidation';
    case 13:
      return 'marketSize';
    case 17:
      return 'product';
    case 20:
      return 'businessModel';
    case 23:
      return 'competition';
    case 26:
      return 'competitiveAdvantage';
    default:
      break;
  }
}

const MultipleFields = ({field, key}) => {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.pitchdeck);
  const [error, setError] = useState(false)
  console.log(selectField(field[0]), formData[selectField(field[0])])
  const add = () => {
    let object = {}
    let count = 0;
    console.log(field)
    field.forEach(x => {
      if(formData[fields[x]['id']] === '') {
        count++
        setError(true)
      }
      object[fields[x]['id']] = formData[fields[x]['id']]
    })
    console.log(selectField(field[0]), object)
    if (count === 0) {
      setError(false)
      dispatch(updatePitch([selectField(field[0]), object]))
    } 
  }
  return (
    <div key={key}>
      {formData[selectField(field[0])].map((x, i) => (
        <div className='flex w-full justify-between px-2 py-2 bg-purple-gray-500 my-2 rounded-xl'>
          <h1>{i+1}.</h1>
          {Object.values(x).map(data => <h1>{data}</h1>)}
          <button className='bg-red-400 px-1 py-1 text-xl rounded' onClick={() => {dispatch(removeTile([selectField(field[0]), i]))}}><MdDeleteForever /></button>
        </div>
      ))}
      {field.map(x => (
        <div key={x} class="flex items-end gap-2">
          <h1 className='text-lg'>{fields[x]['title']} :</h1>
          <TextField
            required
            value={formData[fields[x]['id']]}
            onChange={(e) => dispatch(updatePitch([fields[x]['id'], e.target.value]))}
            label=""
            variant="standard"
          />
        </div>
      ))}
      {error && <h1 className='text-red-500'>Please fill all fields</h1>}
      <button className="mt-2 w-full bg-purple-gray-500 hover:bg-purple-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => add()}>Add</button>
    </div>
  )
}

export default function PitchDeckForm() {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.pitchdeck);
  return (
    <div className="bg-purple-gray-500 ">
      <div className="container max-w-[50%] mx-auto flex-1 flex flex-col items-center justify-center px-1 "> 
      <h1 style={{fontSize:30, margin:"10%", fontWeight:"bolder" , color:"#F1F2F7"}}>Pitch Deck Details </h1>
      <div 
        className="bg-purple-gray-100 px-6 py-8 rounded shadow-md text-black w-full mb-10"
        component="form"
        sx={{
          '& .MuiTextField-root': { m:1, width: '25ch' }, display:""
          ,
        }}
        noValidate
        autoComplete="off"
      >
        {
          Object.entries(formSections).map(([key, value]) => (
            <div className='my-4'>
              <h1 className='text-2xl font-semibold'>{key} :</h1>
              {
                value.map((field, index) => (
                  Array.isArray(field) ? <MultipleFields key={index} field={field} /> : (
                    <div class="flex items-end gap-2">
                      <h1 className='text-lg'>{fields[field]['title']} :</h1>
                      <TextField
                        required
                        value={formData[fields[field]['id']]}
                        onChange={(e) => dispatch(updatePitch([fields[field]['id'], e.target.value]))}
                        id="standard-required"
                        label=""
                        variant="standard"
                      />
                    </div>
                  )
                ))
              }
            </div>
          ))
        }
        <PitchDeck />
      </div>
    </div>
  </div>
  );
}