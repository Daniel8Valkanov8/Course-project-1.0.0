package com.courseproject.travelagencyrestapiawtentication.service.Impl;

import com.courseproject.travelagencyrestapiawtentication.models.Location;
import com.courseproject.travelagencyrestapiawtentication.models.dto.request.CreateLocationDTO;
import com.courseproject.travelagencyrestapiawtentication.models.dto.request.UpdateLocationDTO;
import com.courseproject.travelagencyrestapiawtentication.models.dto.response.ResponseLocationDTO;
import com.courseproject.travelagencyrestapiawtentication.repository.LocationRepository;
import com.courseproject.travelagencyrestapiawtentication.service.LocationService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class LocationServiceImpl implements LocationService {

    private final LocationRepository locationRepository;

    @Autowired
    public LocationServiceImpl(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    @Override
    public ResponseLocationDTO createLocation(CreateLocationDTO createLocationDTO) {
        Location location = new Location();
        BeanUtils.copyProperties(createLocationDTO, location);

        Location savedLocation = locationRepository.save(location);

        ResponseLocationDTO responseLocationDTO = new ResponseLocationDTO();
        BeanUtils.copyProperties(savedLocation, responseLocationDTO);

        return responseLocationDTO;
    }
    public Boolean deleteLocation(Long locationId) {
        if (locationRepository.existsById(locationId)) {
            locationRepository.deleteById(locationId);
            return true;
        }
        return false;
    }
    public List<ResponseLocationDTO> getAllLocations() {
        List<Location> locations = locationRepository.findAll();
        return locations.stream()
                .map(this::convertToResponseDTO)
                .collect(Collectors.toList());
    }

    private ResponseLocationDTO convertToResponseDTO(Location location) {
        ResponseLocationDTO responseLocationDTO = new ResponseLocationDTO();
        BeanUtils.copyProperties(location, responseLocationDTO);
        return responseLocationDTO;
    }
    public ResponseLocationDTO getLocationById(Long locationId) {
        Optional<Location> locationOptional = locationRepository.findById(locationId);
        return locationOptional.map(this::convertToResponseDTO).orElse(null);
    }
    public ResponseLocationDTO updateLocation(UpdateLocationDTO updateLocationDTO) {
        Optional<Location> locationOptional = locationRepository.findById(updateLocationDTO.getId());
        if (locationOptional.isPresent()) {
            Location location = locationOptional.get();
            BeanUtils.copyProperties(updateLocationDTO, location);
            Location updatedLocation = locationRepository.save(location);
            return convertToResponseDTO(updatedLocation);
        }
        return null; // или хвърлете изключение, ако е необходимо
    }

}
