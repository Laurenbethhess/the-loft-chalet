import { useState, useEffect } from "react";
import AmenityCard from "./AmenityCard";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
        // fetch('http://localhost:3000/amenities')
        fetch('https://the-loft-chalet.herokuapp.com/amenities')
        .then(r => r.json())
        .then(amenities => setAmenities(amenities))
    }, [])

    const renderAmenities = amenities.map(amenity => <AmenityCard amenity={amenity} key={amenity.id} />)
    const filteredAmenities = amenities.filter(amenity => amenity.name === filterBy) 
    const renderFilteredAmenities = filteredAmenities.map(amenity => <AmenityCard amenity={amenity} key={amenity.id} />)
    const searchedAmenities = amenities.filter(amenity => amenity.name.toLowerCase().includes(search.toLowerCase()))
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
                                <MenuItem value="Kitchen">Kitchen</MenuItem>
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
                        <br/>
                        <Button type="submit">Search</Button>
                        <Button onClick={resetInputField}>Reset</Button>
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