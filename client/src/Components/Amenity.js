import { useState, useEffect } from "react";
import AmenityCard from "./AmenityCard";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



function Amenity( {} ) {
    const [amenities, setAmenities] = useState([])
    const [filterBy, setFilterBy] = useState('')

    useEffect(() => {
        // fetch('http://localhost:3000/amenities')
        fetch('https://the-loft-chalet.herokuapp.com/amenities')
        .then(r => r.json())
        .then(amenities => setAmenities(amenities))
    }, [])

    const renderAmenities = amenities.map(amenity => <AmenityCard amenity={amenity} key={amenity.id} />)

    const filteredAmenities = amenities.filter(amenity => amenity.name === filterBy) 
    const renderFilteredAmenities = filteredAmenities.map(amenity => <AmenityCard amenity={amenity} key={amenity.id} />)
    
    const onFilterChange = (e) => {
        setFilterBy(e.target.value)
      }


    return (
        <div className="amenities">
            <select className='select' onChange={onFilterChange} value={filterBy}>
                <option value="">Select Category</option>
                <option value="Bedroom 1">Bedroom 1</option>                
                <option value="Bedroom 1">Bedroom 1</option>
                <option value="Kitchen">Kitchen</option>
                <option value="exercise">Exercise</option>
                <option value="misc">Misc</option>
                <option value="groceries">Groceries</option>
                <option value="school">School</option>
            </select>
            {renderFilteredAmenities}

            <div align='center'>
                <Box sx={{ width: '100%', maxWidth: 1200 }}>
                    <Typography style={{fontSize: 30, fontFamily: "Courier"}} align='center' variant="p" gutterBottom component="div">
                        All Amenities
                        {renderAmenities}
                    </Typography>
                </Box>
            </div>
        </div>
    )
}

export default Amenity