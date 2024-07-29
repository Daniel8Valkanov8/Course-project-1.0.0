package com.courseproject.travelagencyrestapiawtentication.service;


import com.courseproject.travelagencyrestapiawtentication.models.dto.request.CreateLocationDTO;
import com.courseproject.travelagencyrestapiawtentication.models.dto.request.UpdateLocationDTO;
import com.courseproject.travelagencyrestapiawtentication.models.dto.response.ResponseLocationDTO;

import java.util.List;

public interface LocationService {
    ResponseLocationDTO createLocation(CreateLocationDTO createLocationDTO);
    List<ResponseLocationDTO> getAllLocations();
    ResponseLocationDTO getLocationById(Long locationId);

    ResponseLocationDTO updateLocation(UpdateLocationDTO updateLocationDTO);
    Boolean deleteLocation(Long locationId);
}
