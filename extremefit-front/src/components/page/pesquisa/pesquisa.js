import React from 'react'
import { getDicas } from '../../../api/dica.js'


const Pesquisa = props => {
    
    //     return list.map(search => (
    //         <tr>
    //             <td>{search.descricao}</td>
    //         </tr>
    //     ))
    // }

    const renderRows = () => {
        const list = [getDicas()]

        return (
            console.log('teste'+list)
        )
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

export default Pesquisa