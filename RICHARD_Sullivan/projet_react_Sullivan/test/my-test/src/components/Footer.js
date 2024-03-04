import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faFilm, faTv, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const tab = [
        {
            icon:faFire,
            name:'Trending',
        },
        {
            icon:faFilm,
            name:'Movies',
        },
        {
            icon:faTv,
            name:'TvSeries',
        },
        {
            icon:faMagnifyingGlass,
            name:'Search',
        }
    ];

    return (
        <div className='container-fluid fixed-bottom'>
            <div className='row'>
                <div className='col-12 text-center bg-dark footer'>
                    {tab.map((elm) => {
                        return (
                            <button key={elm.name} className='col-sm-2 col-md-2 btn btn-dark'>
                                <FontAwesomeIcon icon={elm.icon} size='3x' />
                                <br />
                                <h5 className='pt-1 fs-6'>{elm.name}</h5>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer;