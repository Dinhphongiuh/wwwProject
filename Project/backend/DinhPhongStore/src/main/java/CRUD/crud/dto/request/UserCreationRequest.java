package CRUD.crud.dto.request;

import jakarta.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.Set;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserCreationRequest {
    private String id;
//    @Size(min = 3, message = "User Name must be greater than 3 characters")
    @Size(min = 3, message = "USERNAME_INVALID")
    String userName;

    @Size(min = 8, message = "INVALID_PASSWORD")
    String password;
    String fullName;
    LocalDate dob;
    String address;
    String phoneNumber;

}
