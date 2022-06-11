function Circle(props){
  return(
    <div className={`${ props.style } circle`}>
      { props.children }
    </div>
  )
}

export default Circle