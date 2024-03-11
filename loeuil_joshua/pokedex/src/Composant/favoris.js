import { useDispatch, useSelector } from "react-redux";
import { Card} from "react-bootstrap";
import { remove_Favo, add_Favoris } from "../redux/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";



function Favories(){

const favoris = useSelector(state => state.Reducer.favo);

const dispatch = useDispatch();
useEffect(() =>{
  const favoLocal = JSON.parse(localStorage.getItem("favor") || "[]");
  dispatch(add_Favoris(favoLocal));
}, [dispatch]);


const handleRemove = (id) => {
    dispatch(remove_Favo(id));

    const storageUpdate = favoris.filter((fav) => fav.id !== id);
    localStorage.setItem("favor", JSON.stringify(storageUpdate))
};
console.log(favoris);



return(
    <div className="d-flex flex-wrap gap-5 justify-content-around p-5 pb-5" >
        {favoris.map((fav) =>{
            return(
                
                <Card className="border-2" style={{borderColor: 'chartreuse'}} key={fav.id} >
                  <Card.Header className="text-center bg-danger">
                    <div className="text-light">
                      <h1>{fav.name}</h1>
                    </div>
                  </Card.Header>
                  <Card.Body >
                    <img src={fav.image} alt="" />
                  </Card.Body>
                  <Card.Footer className=" d-flex justify-content-center bg-dark-subtle ">
        <button className=" bg-danger rounded-circle p-2 shadow" onClick={()=> handleRemove(fav.id)}>
        <FontAwesomeIcon icon={faHeartBroken} size="2x" beatFade style={{color: "#000000",}} />
            </button>
        </Card.Footer>
                  </Card>
                  
            )
        })}
    </div>
)
}

export default Favories;