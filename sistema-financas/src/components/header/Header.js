import React from 'react'
import * as C from "./style"

/* Muito interessante como foi utlizado o styled component nessa importação, pois ele carregou 
todos os estilo em C. E ao denominar os componentes, fez cada um separadamente   */

const Header = () => {
  return (
   <C.Container>
    <C.Header>
        <C.Title>Controle Financeiro</C.Title>
    </C.Header>
   </C.Container>
  )
}

export default Header