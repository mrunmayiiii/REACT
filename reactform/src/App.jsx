
import './App.css'
import {useForm} from "react-hook-form"

function App() {
  const{
    register,
    handleSubmit,
    watch,
    formState:{errors,isSubmitting},

  }=useForm();
   async function onSubmit(data) {
    await new Promise((resolve)=>setTimeout(resolve,5000));
    console.log("submitting the form",data); 
  }
  return (
    
  <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label>First Name: </label>
      <input className={errors.firstName ? 'input-error':""} {...register('firstName',
        {required:true, minLength:{value:3,message:'MIN LEN atleast 3'}}
        )}/>
        {errors.firstName && <p className='error-msg'> {errors.firstName.message}</p>}
    </div>
    {/* <p>current length: {watch("firstName").length}</p> */}
    <br />
    <div>
      <label>Middle Name: </label>
      <input {...register('middleName')}/>
    </div>
    <br />
    <div>
      <label>Last Name: </label>
      <input {...register('lastName',{pattern:{value:/^[A-Za-z]+$/i,
      message: "last name not correct"
      }})}/>
     {errors.lastName && <p className='error-msg'> {errors.lastName.message}</p>}

    </div>
    <br />
    <input type="submit" disabled={isSubmitting}
  value={isSubmitting ? "submitting" : "submit coorect"}/>
  </form>
  )
}

export default App
