package CRUD.crud.mapper;

import CRUD.crud.dto.request.UserCreationRequest;
import CRUD.crud.dto.request.UserUpdateRequest;
import CRUD.crud.dto.response.UserResponse;
import CRUD.crud.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(UserCreationRequest request);

//    @Mapping(source = "firstName", target = "lastName")
    UserResponse toUserResponse(User user);
    void updateUser(@MappingTarget User user, UserUpdateRequest request);
}
