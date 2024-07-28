package CRUD.crud.mapper;

import CRUD.crud.dto.request.UserCreationRequest;
import CRUD.crud.dto.request.UserUpdateRequest;
import CRUD.crud.dto.response.UserResponse;
import CRUD.crud.entity.User;
import java.util.LinkedHashSet;
import java.util.Set;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User toUser(UserCreationRequest request) {
        if ( request == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.id( request.getId() );
        user.userName( request.getUserName() );
        user.password( request.getPassword() );
        user.fullName( request.getFullName() );
        user.dob( request.getDob() );
        user.address( request.getAddress() );
        user.phoneNumber( request.getPhoneNumber() );

        return user.build();
    }

    @Override
    public UserResponse toUserResponse(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponse.UserResponseBuilder userResponse = UserResponse.builder();

        userResponse.id( user.getId() );
        userResponse.userName( user.getUserName() );
        userResponse.password( user.getPassword() );
        userResponse.fullName( user.getFullName() );
        userResponse.dob( user.getDob() );
        userResponse.address( user.getAddress() );
        userResponse.phoneNumber( user.getPhoneNumber() );
        Set<String> set = user.getRoles();
        if ( set != null ) {
            userResponse.roles( new LinkedHashSet<String>( set ) );
        }

        return userResponse.build();
    }

    @Override
    public void updateUser(User user, UserUpdateRequest request) {
        if ( request == null ) {
            return;
        }

        user.setPassword( request.getPassword() );
        user.setDob( request.getDob() );
    }
}
