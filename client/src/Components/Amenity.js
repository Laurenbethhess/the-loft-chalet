import { useState, useEffect } from "react";
import AmenityCard from "./AmenityCard";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Amenity( {} ) {
    const [amenities, setAmenities] = useState([])
    const [filterBy, setFilterBy] = useState('')
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('/amenities')
        .then(r => r.json())
        .then(amenities => setAmenities(amenities))
    }, [])

    const filteredAmenities = amenities.filter(amenity => amenity.name === filterBy) 
    const renderFilteredAmenities = filteredAmenities.map(amenity => <AmenityCard amenity={amenity} key={amenity.id} />)
    const searchedAmenities = amenities.filter(amenity => amenity.name.toLowerCase().includes(search.toLowerCase()) || amenity.description.toLowerCase().includes(search.toLowerCase()))
    const renderSearchedAmenities = searchedAmenities.map(amenity => <AmenityCard amenity={amenity} key={amenity.id} />)

    const onFilterChange = (e) => {
        setFilterBy(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(search);
      }
    
    const resetInputField = () => {
    setSearch("");
    };

    return (
        <div align='center' className="amenities">
            <Typography style={{fontSize: 30, fontFamily: "Courier"}} align='center' variant="p" gutterBottom component="div">
                Amenities
            </Typography>

            <Card sx={{ minWidth: 275, bgcolor: '#cfe8fc' }} style={{backgroundColor: "#B1DFB0"}}>
                <CardContent>
                <FormControl sx={{ minWidth: 275, bgcolor: '#cfe8fc' }}>
                        <InputLabel>Filter</InputLabel>
                            <Select
                                value={filterBy}
                                label="Filter"
                                onChange={onFilterChange}
                            >
                                <MenuItem value="">No Filter</MenuItem>
                                <MenuItem value="Bathrooms">Bathrooms</MenuItem>
                                <MenuItem value="Bedroom">Bedroom</MenuItem>
                                <MenuItem value="Dining">Dining</MenuItem>
                                <MenuItem value="Essentials">Essentials</MenuItem>
                                <MenuItem value="Extras">Extras</MenuItem>
                                <MenuItem value="Guests">Guests</MenuItem>
                                <MenuItem value="Kitchen">Kitchen</MenuItem>
                                <MenuItem value="Laundry">Laundry</MenuItem>
                                <MenuItem value="Living Area">Living Area</MenuItem>
                                <MenuItem value="Outside">Outside</MenuItem>
                            </Select>
                    </FormControl>
                    <br/><br/>
                    <Typography >
                      <form onSubmit={handleSubmit}>
                        <TextField
                            type="text"
                            id="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}                  
                            sx={{bgcolor: '#cfe8fc' }}
                            variant="filled"
                            name="search"
                            autoComplete="off"
                            label="Search"
                        />
                        <br/><br/>
                        <Button variant="outlined" onClick={resetInputField}>Reset Search</Button>
                      </form>
                    </Typography>
                </CardContent>
            </Card>
            {renderFilteredAmenities}
            {renderSearchedAmenities}
        </div>
    )
}

export default Amenity