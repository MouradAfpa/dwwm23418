import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";


function Favories(){

const favoris = useSelector(state => state.Reducer.favo)

return(
    <div>
        {favoris.map((fav) =>{
            return(
                <div className="pt-5" key={fav.id}>
                <Card className=" border-4 rounded-5 bg-dark" style={{borderColor: 'chartreuse'}} >
                  <Card.Header className="text-center bg-danger rounded-top-5">
                    <div className="text-light">
                      <h1>{fav.name}</h1>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <img src={fav.image} alt="" />
                  </Card.Body>
                  </Card>
                  </div>
            )
        })}
    </div>
)
}

export default Favories;