const NewDrink = (props) => {
  let formFields = {}
 
  return(
    <form onSubmit={ (e) => { props.handleFormSubmit(formFields.name.value, formFields.caffeine.value); e.target.reset();}
  }>
     <input ref={input => formFields.name = input} placeholder='name of drink'/>
     <input ref={input => formFields.caffeine = input} placeholder='caffeine amount' />
     <button>Submit</button>
    </form>
  )
}