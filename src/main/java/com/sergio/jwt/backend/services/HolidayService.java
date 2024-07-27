package com.sergio.jwt.backend.services;


import com.sergio.jwt.backend.dtos.request.CreateHolidayDTO;
import com.sergio.jwt.backend.dtos.request.UpdateHolidayDTO;
import com.sergio.jwt.backend.dtos.response.ResponseHolidayDTO;

import java.util.List;

public interface HolidayService {
    ResponseHolidayDTO createHoliday(CreateHolidayDTO createHolidayDTO);
    List<ResponseHolidayDTO> getAllHolidays();
    ResponseHolidayDTO getHolidayById(Long holidayId);
    ResponseHolidayDTO updateHoliday(UpdateHolidayDTO update);
    Boolean deleteHoliday(Long holidayId);

}
