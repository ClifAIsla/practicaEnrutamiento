function Caracter(props){

    console.log(props)
    const atrapaCaracter = props.match.params.caracter
    const atraparColorTexto = props.match.params.colorTexto
    const atraparColorFondo = props.match.params.colorFondo
    // console.log("El letra es "+atraparColor)
    return(
        <div>
            {
                ( isNaN(atrapaCaracter) ) ? 
                <h1 style={ { backgroundColor : atraparColorFondo, color : atraparColorTexto } } >El letra enviado es {atrapaCaracter}</h1> : <h1 style={ { backgroundColor : atraparColorFondo, color : atraparColorTexto } } >El numero enviado es {atrapaCaracter}</h1>
            }
            
        </div>
    )

}
export default Caracter;