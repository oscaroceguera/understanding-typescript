import React, {Component, MouseEvent, SyntheticEvent} from 'react'

class Button extends Component {
  /*
    Here we restric all handleClickd to be exclusively on HTMLButton Elements
  */
  handleClick(event: MouseEvent<HTMLButtonElement>){
    event.preventDefault()
    alert(event.currentTarget.tagName)
  }

  /*
    Generics support union types. This event handleer works on
    HTMLButtonElement and HTMLAnchorElement (Links)
  */
  handleAnotherClick(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>){
    event.preventDefault()
    alert('Yeah!')
  }

  handleInput(event: SyntheticEvent){
    event.preventDefault()
    console.log('Button -> handleInput -> event', event.target)
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>{this.props.children}</button>
        <input type='text' onInput={this.handleInput} />
      </>
      
    )
  }
}

export default Button