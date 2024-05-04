using System;
using KorvonBazar.Domain.Users;

namespace KorvonBazar.Infrastructure.Repositories;

public class UserRepository : Repository<User>, IUserRepository
{
    public UserRepository(DbFactory dbFactory) : base(dbFactory)
    {
    }

    public User NewUser(string userName, string email)
    {
        //var user = new User(userName, email);
        //if (user.ValidOnAdd())
        //{
        //    this.Add(user);
        //    return user;
        //}
        //else
            throw new Exception("User invalid");
    }
}

