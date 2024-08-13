package com.courseproject.travelagencyrestapiawtentication.service;


import com.courseproject.travelagencyrestapiawtentication.models.dto.request.CreateReservationDTO;
import com.courseproject.travelagencyrestapiawtentication.models.dto.request.UpdateReservationDTO;
import com.courseproject.travelagencyrestapiawtentication.models.dto.response.ResponseReservationDTO;

import java.util.List;

public interface ReservationService {
    ResponseReservationDTO createReservation(CreateReservationDTO createReservationDTO);
    List<ResponseReservationDTO> getAllReservations();
    ResponseReservationDTO getReservationById(Long reservationId);
    ResponseReservationDTO updateReservation(UpdateReservationDTO update);
    Boolean deleteReservation(Long reservationId);

}
