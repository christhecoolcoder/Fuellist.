const BASE_URL = 'https://tranquil-shelf-71891.herokuapp.com'

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewDrink = this.addNewDrink.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteDrink = this.deleteDrink.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateDrink = this.updateDrink.bind(this)
  }
  handleUpdate(drink){
    fetch(`http://localhost:3000/api/v1/drinks/${drink.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify({drink: drink}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.updateDrink(drink)
      })
  }
  updateDrink(drink){
    let newDrinks = this.state.drinks.filter((d) => d.id !== drinks.id)
    newDrinks.push(drink)
    this.setState({
      drinks: newDrinks
    })
  }
  handleDelete(id){
    fetch(`http://localhost:3000/api/v1/drinks/${id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        console.log('Item was deleted!')
        this.deleteDrink(id)
      })
  }

  deleteDrink(id){
    newDrinks = this.state.drinks.filter((drink) => drink.id !== id)
    this.setState({
      drinks: newDrinks
    })
  }

  handleFormSubmit(name, caffeine){
    let body = JSON.stringify({drink: {name: name, caffeine:  caffeine } })
  fetch('http://localhost:3000/api/v1/drinks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((drink)=>{
      this.addNewDrink(drink)
    })
    
  }
  addNewDrink(drink){
    this.setState({
      drinks: this.state.drinks.concat(drink)
    })
  }
  componentDidMount(){
      fetch('/api/v1/drinks.json')
        .then((response) => {return response.json()})
        .then((data) => {this.setState({ drinks: data }) });
    }

  render(){
      return(
        <div className='grid-container'>
          <NewDrink handleFormSubmit={this.handleFormSubmit}/>
          <AllDrinks drinks={this.state.drinks} handleDelete={this.handleDelete} 
          handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate}/>
        </div>
      )
    }
  }