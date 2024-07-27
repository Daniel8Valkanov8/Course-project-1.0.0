package com.sergio.jwt.backend.services;


import com.sergio.jwt.backend.dtos.request.CreateReservationDTO;
import com.sergio.jwt.backend.dtos.request.UpdateReservationDTO;
import com.sergio.jwt.backend.dtos.response.ResponseReservationDTO;

import java.util.List;

public interface ReservationService {
    ResponseReservationDTO createReservation(CreateReservationDTO createReservationDTO);
    List<ResponseReservationDTO>  getAllReservations();
    ResponseReservationDTO getReservationById(Long reservationId);
    ResponseReservationDTO updateReservation(UpdateReservationDTO update);
    Boolean deleteReservation(Long reservationId);

}
