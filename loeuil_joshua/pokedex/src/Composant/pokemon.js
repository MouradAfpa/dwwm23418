

function Pokemon({po}){



    return(
        <div key={po.id}>
            <div>
            <h1>{po.name}</h1>
            <img src={po.img}/>
            </div>
            <div>
                <h2>Stats</h2>
                <table>
                    <thead>
                        <td>HP</td>
                        <td>Attack</td>
                        <td>Defense</td>
                        <td>Special attack</td>
                        <td>Special defense</td>
                        <td>Speed</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{po.stats.HP}</td>
                            <td>{po.stats.attack}</td>
                            <td>{po.stats.defense}</td>
                            <td>{po.stats.special_attack}</td>
                            <td>{po.stats.special_defense}</td>
                            <td>{po.stats.speed}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

            
        </div>
    )
}
export default Pokemon;