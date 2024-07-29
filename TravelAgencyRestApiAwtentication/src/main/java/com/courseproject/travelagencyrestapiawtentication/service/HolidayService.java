package com.courseproject.travelagencyrestapiawtentication.service;



import com.courseproject.travelagencyrestapiawtentication.models.dto.request.CreateHolidayDTO;
import com.courseproject.travelagencyrestapiawtentication.models.dto.request.UpdateHolidayDTO;
import com.courseproject.travelagencyrestapiawtentication.models.dto.response.ResponseHolidayDTO;

import java.util.List;

public interface HolidayService {
    ResponseHolidayDTO createHoliday(CreateHolidayDTO createHolidayDTO);
    List<ResponseHolidayDTO> getAllHolidays();
    ResponseHolidayDTO getHolidayById(Long holidayId);
    ResponseHolidayDTO updateHoliday(UpdateHolidayDTO update);
    Boolean deleteHoliday(Long holidayId);

}
