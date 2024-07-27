package com.sergio.jwt.backend.services;


import com.sergio.jwt.backend.dtos.request.CreateLocationDTO;
import com.sergio.jwt.backend.dtos.request.UpdateLocationDTO;
import com.sergio.jwt.backend.dtos.response.ResponseLocationDTO;

import java.util.List;

public interface LocationService {
    ResponseLocationDTO createLocation(CreateLocationDTO createLocationDTO);
    List<ResponseLocationDTO> getAllLocations();
    ResponseLocationDTO getLocationById(Long locationId);

    ResponseLocationDTO updateLocation(UpdateLocationDTO updateLocationDTO);
    Boolean deleteLocation(Long locationId);
}
