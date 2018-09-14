class Drink extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }
 handleEdit(){
  if(this.state.editable){
    let name = this.name.value
    let caffeine = this.caffeine.value
    let id = this.props.drink.id
    let drink = {id: id, name: name, caffeine: caffeine}
    this.props.handleUpdate(drink)
  }
    this.setState({
      editable: !this.state.editable
    })
  }
  
  render(){
    let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.drink.name}/>:<h3>{this.props.drink.name}</h3>
    let caffeine = this.state.editable ? <input type='text' ref={input => this.caffeine = input} defaultValue={this.props.drink.caffeine}/>:<p>  caffeine mgs: {this.props.drink.caffeine}</p>
    return(
      <div>
        {name}
        {caffeine} 
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.drink.id)}>Delete</button>
      </div>
    )      
  }
}