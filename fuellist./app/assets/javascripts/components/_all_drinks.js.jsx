const AllDrinks = (props) => {

  var drinks = props.drinks.map((drink) => {
    return (
      <div className="drink-container">
        <div key={drink.id}>
          <Drink drink={drink} handleDelete={props.handleDelete}
            handleUpdate={props.handleUpdate} />
        </div>
      </div>
    )
  })

  return (
    <div>
      {drinks}
    </div>
  )
}