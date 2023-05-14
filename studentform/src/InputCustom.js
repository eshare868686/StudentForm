const InputCustom = ({type,name,placeholder, color})=>{
    return(<input
    type = {type}
    name = {name}
    placeholder = {placeholder}
    style={{width:"100%", height:40}}
    />)
}

export default InputCustom // default export