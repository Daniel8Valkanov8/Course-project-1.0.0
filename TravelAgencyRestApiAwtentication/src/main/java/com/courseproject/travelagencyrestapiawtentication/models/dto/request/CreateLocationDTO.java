package com.courseproject.travelagencyrestapiawtentication.models.dto.request;


import lombok.Data;

@Data
public class CreateLocationDTO{
    private String number;
    private String country;
    private String city;
    private String street;


    public CreateLocationDTO(String number, String country, String city, String street) {
        this.number = number;
        this.country = country;
        this.city = city;
        this.street = street;

    }

    public CreateLocationDTO() {
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }
}
